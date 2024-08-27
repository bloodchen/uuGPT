import { get, writable } from 'svelte/store';
import { Configuration, OpenAIApi } from "openai";
import type { ChatCompletionRequestMessage } from "openai";
import type { ChatCompletionRequestMessageRoleEnum } from "openai";
import { apiKey } from "../stores/stores";
import { selectedModel, selectedVoice, audioUrls, selectedSize, selectedQuality, defaultAssistantRole, isStreaming, streamContext } from '../stores/stores';
import { conversations, chosenConversationId, combinedTokens, userRequestedStreamClosure } from '../stores/stores';
import { setHistory, countTokens, estimateTokens, displayAudioMessage, cleanseMessage } from '../managers/conversationManager';
import { SSE } from 'sse.js'; // 假设这里使用了 SSE 库
import { countTicks } from '../utils/generalUtils';
import { saveAudioBlob, getAudioBlob } from '../idb';
import { onSendVisionMessageComplete } from '../managers/imageManager';

// 声明全局变量来保存流的源对象
let configuration: Configuration | null = null;
let openai: OpenAIApi | null = null;
let globalSource: EventSource | null = null;  

// 关闭流的函数
export const closeStream = async () => {  
  if (globalSource) {  // 检查是否有一个全局流源对象存在
      globalSource.close();  // 关闭流
      console.log("Stream closed by user.");  // 打印日志，表示流已被用户关闭
      isStreaming.set(false);  // 设置流状态为非流动状态

      // 获取当前流上下文，包括流文本和会话ID
      const { streamText, convId } = get(streamContext);  
      if (streamText && convId !== null) {  // 如果流文本存在且会话ID不为null
          const cleanText = streamText.replace(/█+$/, '');  // 清理流文本，去除不必要的字符
          const currentHistory = get(conversations)[convId].history;  // 获取当前会话的历史记录

          let lastEntry = currentHistory.length ? currentHistory[currentHistory.length - 1] : null;  // 获取最后一条历史记录

          // 检查最后一条记录是否是正在流动的记录
          if (lastEntry && lastEntry.content.endsWith("█")) {  
              // 如果是，将其更新为清理后的文本
              currentHistory[currentHistory.length - 1] = {  
                  ...lastEntry,  
                  content: cleanText  
              };  
          } else {  
              // 如果不是，添加一个新的历史记录条目
              currentHistory.push({  
                  role: "assistant",  
                  content: cleanText  
              });  
          }  

          // 更新整个历史记录
          await setHistory(currentHistory, convId);  

          // 清空流上下文
          streamContext.set({ streamText: '', convId: null });  
      }  

      userRequestedStreamClosure.set(true);  // 设置用户请求流关闭标志为true
      onSendVisionMessageComplete();  // 调用视觉消息完成后的回调函数

  }  
};  

// 定义错误消息内容，作为聊天完成请求失败时的默认消息
const errorMessage: ChatCompletionRequestMessage[] = [
  {
    role: "assistant",
    content:
      "出现了一个错误。可能是API密钥错误？或者服务器可能宕机了？",
  },
];

// 初始化OpenAI API的函数
export function initOpenAIApi(): void {
  const key = get(apiKey);  // 从存储中获取API密钥
  if (key) {
    configuration = new Configuration({ apiKey: key });  // 创建新的配置对象
    openai = new OpenAIApi(configuration);  // 使用配置对象初始化OpenAI API客户端
    console.log("OpenAI API initialized.");  // 打印日志，表示API已初始化
  } else {
    console.warn("API密钥未设置。请在初始化之前设置API密钥。");  // 如果没有密钥，打印警告信息
  }
}

// 获取OpenAIApi实例的函数
export function getOpenAIApi(): OpenAIApi {
  if (!openai) {
    throw new Error("OpenAI API未初始化。请先调用initOpenAIApi并提供API密钥。");  // 如果API未初始化，抛出错误
  }
  console.log("OpenAI API已获取。");  // 打印日志，表示API已获取
  return openai;
}

// 创建聊天完成请求的函数
export async function createChatCompletion(model: string, messages: ChatCompletionRequestMessage[]): Promise<any> {
  const openaiClient = getOpenAIApi();  // 获取OpenAI API客户端实例
  console.log("正在发送聊天完成请求...");  // 打印日志，表示请求正在发送
  try {
    const response = await openaiClient.createChatCompletion({
      model: model,
      messages: messages,
    });  // 发送请求并等待响应
    console.log("聊天完成响应已接收。");  // 打印日志，表示响应已接收
    return response;
  } catch (error) {
    console.error("createChatCompletion中发生错误：", error);  // 捕获并打印错误信息
    throw error;  // 重新抛出错误，以便在调用者中处理
  }
}

// 检查OpenAI API是否已配置的函数
export function isConfigured(): boolean {
  console.log("检查OpenAI API是否已配置。");  // 打印日志，表示正在检查配置
  return configuration !== null && get(apiKey) !== null;  // 返回配置是否已存在
}

// 重新加载配置的函数
export function reloadConfig(): void {
  initOpenAIApi();  // 重新初始化OpenAI API
  console.log("配置已重新加载。");  // 打印日志，表示配置已重新加载
}

// 发送请求的函数
export async function sendRequest(msg: ChatCompletionRequestMessage[], model: string = get(selectedModel)): Promise<any> {
  try {
    // 在消息数组的开头添加系统消息
    msg = [
      {
        role: "system",
        content: get(conversations)[get(chosenConversationId)].assistantRole,
      },
      ...msg,
    ];

    // 尝试发送请求
    const response = await openai.createChatCompletion({
      model: model,
      messages: msg,
    });

    // 如果请求成功，计算令牌数量并返回响应
    if (response) {
      countTokens(response.data.usage);
      return response;
    }
  } catch (error) {
    console.error("sendRequest中发生错误：", error);  // 捕获并打印错误信息

    // 如果发生错误，重置配置并更新历史记录
    configuration = null;
    await setHistory(errorMessage);
    throw error;  // 重新抛出错误，以便在调用者中处理
  }
}

// 解析JSON块的函数
function parseJSONChunks(rawData) {
  try {
    // 匹配并解析来自流数据的JSON对象
    const jsonRegex = /\{"id".*?\]\}/g;
    return (rawData.match(jsonRegex) || []).map(JSON.parse);
  } catch (error) {
    console.error("解析JSON块时发生错误：", error);  // 捕获并打印错误信息
    return null;  // 返回null表示解析失败
  }
}

// 发送文本到语音（TTS）消息的函数
export async function sendTTSMessage(text: string, model: string, voice: string, conversationId: number) {
  console.log("正在发送TTS消息。");  // 打印日志，表示TTS消息正在发送

  const payload = {
    model: model,
    voice: voice,
    input: text,
  };  // 创建请求载荷

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get(apiKey)}`,
      },
      body: JSON.stringify(payload),
    });  // 发送请求并等待响应

    if (!response.ok) throw new Error(`生成音频失败，响应状态：${response.status}`);  // 如果响应不正常，抛出错误
    
    const blob = await response.blob();  // 获取响应中的音频Blob
    const uniqueID = `audio-${Date.now()}-${Math.floor(Math.random() * 10000)}`;  // 生成唯一ID

    saveAudioBlob(uniqueID, blob).then(() => {
      console.log('音频Blob已保存到IndexedDB，ID：', uniqueID);  // 打印日志，表示音频已保存
    }).catch(console.error);  // 捕获并打印保存过程中发生的错误

    getAudioBlob(uniqueID).then(blob => {  
      console.log(uniqueID);  // 检查对象
      console.log(blob);  // 检查对象
      if (blob instanceof Blob) {  // 检查是否为Blob类型
        if (blob) {
          const audioUrl = URL.createObjectURL(blob);  // 创建URL以播放音频
          displayAudioMessage(audioUrl);  // 显示音频消息
        } else {
          console.error('Blob为null或未定义');
        }
      } else {
        console.error('检索到的对象不是Blob类型：', blob);
      }
    }).catch(error => console.error('检索音频Blob时发生错误：', error));

  } catch (error) {
    console.error("TTS请求错误：", error);  // 捕获并打印TTS请求中发生的错误
  }
}

// 发送视觉消息的函数
export async function sendVisionMessage(msg: ChatCompletionRequestMessage[], imagesBase64, convId) {
  console.log("正在发送视觉消息。");  // 打印日志，表示视觉消息正在发送
  userRequestedStreamClosure.set(false);  // 重置用户请求流关闭的标志为false
  let hasEncounteredError = false;  // 初始化错误标志为false

  let tickCounter = 0;
  let ticks = false;
  let currentHistory = get(conversations)[convId].history;

  // 将历史记录消息转换为预期格式
  let historyMessages = currentHistory.map(historyItem => ({
    role: historyItem.role,
    content: typeof historyItem.content === 'string' ? [{type: "text", text: historyItem.content}] : historyItem.content,
  }));

  let userTextMessage = [...msg].reverse().find(m => m.role === "user")?.content || "";

  let imageMessages = imagesBase64.map(imageBase64 => ({
    type: "image_url",
    image_url: {
        url: imageBase64, // 确保你的base64字符串包括正确的数据URI方案
    }
  }));

  // 构建当前消息的组合内容数组
  let combinedMessageContent = userTextMessage ? [
    {
        type: "text",
        text: userTextMessage,
    },
    ...imageMessages // 使用展开运算符包含所有图像消息
  ] : [...imageMessages]; // 如果没有文本消息，只包含图像消息

  // 创建包含文本和图像内容的单个'user'消息对象
  let currentMessage = {
    role: "user",
    content: combinedMessageContent,
  };

  // 将历史记录和当前消息合并为最终的请求消息数组
  const cleansedMessages = historyMessages.map(cleanseMessage);
  let finalMessages = [...cleansedMessages, currentMessage];

  let done = false;
  let streamText = "";

  currentHistory = [...currentHistory];
  isStreaming.set(true);  // 设置流状态为流动状态

  let source = new SSE("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${get(apiKey)}`,
    },
    method: "POST",
    payload: JSON.stringify({
      model: get(selectedModel),
      messages: finalMessages, // 更新为包含完整的对话历史记录
      stream: true,
    }),
  });

  console.log("payload", JSON.stringify({
    model: get(selectedModel),
    messages: finalMessages, // 更新为包含完整的对话历史记录
    stream: true,
  }));

  source.addEventListener("message", async (e) => {
    let payload;
    if (e.data !== "[DONE]") {
      try {  
        if (!hasEncounteredError) {  
          let parsedChunks = parseJSONChunks(e.data);
          parsedChunks.forEach((payload) => {
            let text = payload.choices[0]?.delta?.content;
            if (text) {
              let msgTicks = countTicks(text);
              tickCounter += msgTicks;
              if (msgTicks === 0) tickCounter = 0;
              if (tickCounter === 3) {
                ticks = !ticks;
                tickCounter = 0;
              }
              streamText += text;
              streamContext.set({ streamText, convId }); // 更新存储  

              setHistory([...currentHistory, {
                role: "assistant",
                content: streamText + "█" + (ticks ? "\n```" : ""),
              }], convId);
            }
          });
        }
      } catch (error) {
        console.error("解析JSON时发生错误：", error);  
        hasEncounteredError = true; 
        source.close();  
        onSendVisionMessageComplete(); // 视觉消息发送完成后的回调函数

        console.log("由于解析错误，流已关闭。");  
        isStreaming.set(false);  

        return;
      }  
    } else {
      done = true;  
      if (get(userRequestedStreamClosure)) {  
        streamText = streamText.replace(/█+$/, '');  
        userRequestedStreamClosure.set(false);  
      }  

      await setHistory([...currentHistory, {  
        role: "assistant",  
        content: streamText,  
      }], convId);  

      estimateTokens(msg, convId); // 估算令牌数量
      streamText = "";
      done = true;
      console.log("流已关闭");
      source.close();
      onSendVisionMessageComplete(); // 视觉消息发送完成后的回调函数

      isStreaming.set(false);  
    }
  });

  source.addEventListener("error", (e) => {  
    try {  
      if (done) return;  
      console.error("流错误：", e);  
    } finally {  
      source.close(); 
      onSendVisionMessageComplete(); // 视觉消息发送完成后的回调函数
      isStreaming.set(false);  
    }  
  });  
  
  source.stream();  
  globalSource = source;  
}

// 发送普通消息的函数
export async function sendRegularMessage(msg: ChatCompletionRequestMessage[], convId) {
  userRequestedStreamClosure.set(false);  
  let hasEncounteredError = false;  

  let tickCounter = 0;
  let ticks = false;
  let currentHistory = get(conversations)[convId].history;
  
  let roleMsg: ChatCompletionRequestMessage = {
    role: get(defaultAssistantRole).type as ChatCompletionRequestMessageRoleEnum,
    content: get(conversations)[convId].assistantRole,
  };
  
  msg = [roleMsg, ...msg];

  const cleansedMessages = msg.map(cleanseMessage);

  let done = false;
  let streamText = "";
  
  currentHistory = [...currentHistory];
  isStreaming.set(true);

  let source = new SSE("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${get(apiKey)}`,
    },
    method: "POST",
    payload: JSON.stringify({
      model: get(selectedModel),
      messages: cleansedMessages,
      stream: true,
    }),
  });

  console.log("payload", JSON.stringify({
    model: get(selectedModel),
    messages: cleansedMessages,
    stream: true,
  }));

  source.addEventListener("message", async (e) => { 
    let payload;
    if (e.data !== "[DONE]") {
      try {  
        if (!hasEncounteredError) {  
          let parsedChunks = parseJSONChunks(e.data);
          parsedChunks.forEach((payload) => {
            let text = payload.choices[0]?.delta?.content;
            if (text) {
              let msgTicks = countTicks(text);
              tickCounter += msgTicks;
              if (msgTicks === 0) tickCounter = 0;
              if (tickCounter === 3) {
                ticks = !ticks;
                tickCounter = 0;
              }
              streamText += text;
              streamContext.set({ streamText, convId }); // 更新存储  

              setHistory([...currentHistory, {
                role: "assistant",
                content: streamText + "█" + (ticks ? "\n```" : ""),
              }], convId);
            }
          });
        }
      } catch (error) {
        console.error("解析JSON时发生错误：", error);  
        hasEncounteredError = true; 
        source.close();  
        console.log("由于解析错误，流已关闭。");  
        isStreaming.set(false);  

        return;
      }  
    } else {
      done = true;  
      if (get(userRequestedStreamClosure)) {  
        streamText = streamText.replace(/█+$/, '');  
        userRequestedStreamClosure.set(false);  
      }  

      await setHistory([...currentHistory, {  
        role: "assistant",  
        content: streamText,  
      }], convId);  

      estimateTokens(msg, convId); 
      streamText = "";
      done = true;
      console.log("流已关闭");
      source.close();
      isStreaming.set(false);  
    }
  });

  source.addEventListener("error", (e) => {  
    try {  
      if (done) return;  
      console.error("流错误：", e);  
    } finally {  
      source.close();  
      isStreaming.set(false);  
    }  
  });  
  
  source.stream();  
  globalSource = source;  
}

// 发送PDF消息的函数
export async function sendPDFMessage(msg: ChatCompletionRequestMessage[], convId, pdfOutput) {
  userRequestedStreamClosure.set(false);  
  let hasEncounteredError = false;  

  let tickCounter = 0;
  let ticks = false;
  let currentHistory = get(conversations)[convId].history;
  
  let roleMsg: ChatCompletionRequestMessage = {
    role: get(defaultAssistantRole).type as ChatCompletionRequestMessageRoleEnum,
    content: get(conversations)[convId].assistantRole,
  };
  
  let systemMessage: ChatCompletionRequestMessage = {  
    role: 'system', 
    content: pdfOutput,  
  };  

  currentHistory.push(systemMessage);  

  msg = [roleMsg, systemMessage, ...msg];  
  console.log(msg);
  const cleansedMessages = msg.map(cleanseMessage);

  let done = false;
  let streamText = "";
  
  currentHistory = [...currentHistory];
  isStreaming.set(true);

  let source = new SSE("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${get(apiKey)}`,
    },
    method: "POST",
    payload: JSON.stringify({
      model: get(selectedModel),
      messages: cleansedMessages,
      stream: true,
    }),
  });

  console.log("payload", JSON.stringify({
    model: get(selectedModel),
    messages: cleansedMessages,
    stream: true,
  }));

  source.addEventListener("message", async (e) => { 
    let payload;
    if (e.data !== "[DONE]") {
      try {  
        if (!hasEncounteredError) {  
          let parsedChunks = parseJSONChunks(e.data);
          parsedChunks.forEach((payload) => {
            let text = payload.choices[0]?.delta?.content;
            if (text) {
              let msgTicks = countTicks(text);
              tickCounter += msgTicks;
              if (msgTicks === 0) tickCounter = 0;
              if (tickCounter === 3) {
                ticks = !ticks;
                tickCounter = 0;
              }
              streamText += text;
              streamContext.set({ streamText, convId }); 

              setHistory([...currentHistory, {
                role: "assistant",
                content: streamText + "█" + (ticks ? "\n```" : ""),
              }], convId);
            }
          });
        }
      } catch (error) {
        console.error("解析JSON时发生错误：", error);  
        hasEncounteredError = true; 
        source.close();  
        console.log("由于解析错误，流已关闭。");  
        isStreaming.set(false);  

        return;
      }  
    } else {
      done = true;  
      if (get(userRequestedStreamClosure)) {  
        streamText = streamText.replace(/█+$/, '');  
        userRequestedStreamClosure.set(false);  
      }  

      await setHistory([...currentHistory, {  
        role: "assistant",  
        content: streamText,  
      }], convId);  

      estimateTokens(msg, convId);
      streamText = "";
      done = true;
      console.log("流已关闭");
      source.close();
      isStreaming.set(false);  
    }
  });

  source.addEventListener("error", (e) => {  
    try {  
      if (done) return;  
      console.error("流错误：", e);  
    } finally {  
      source.close();  
      isStreaming.set(false);  
    }  
  });  
  
  source.stream();  
  globalSource = source;  
}

// 发送DALL·E消息的函数
export async function sendDalleMessage(msg: ChatCompletionRequestMessage[], convId) {
  isStreaming.set(true);
  let hasEncounteredError = false;
  let currentHistory = get(conversations)[convId].history;
  
  let roleMsg: ChatCompletionRequestMessage = {
    role: get(defaultAssistantRole).type as ChatCompletionRequestMessageRoleEnum,
    content: get(conversations)[convId].assistantRole,
  };
  
  msg = [roleMsg, ...msg];
  
  const cleansedMessages = msg.map(cleanseMessage);
  
  const prompt = cleansedMessages[cleansedMessages.length - 1].content;
  
  try {
    let response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get(apiKey)}`,
      },
      body: JSON.stringify({
        model: get(selectedModel),
        prompt: prompt,
        size: get(selectedSize),
        quality: get(selectedQuality),
        n: 1
      }),
    });
  
    if (!response.ok) throw new Error('HTTP错误，状态 = ' + response.status);
  
    let data = await response.json();
    let imageUrl = data.data[0].url;
  
    // 更新会话历史记录，添加生成的图像URL
    setHistory([...currentHistory, {
      role: "assistant",
      content: imageUrl,
      type: "image" 
    }], convId);
  
  } catch (error) {
    console.error("生成图像时发生错误：", error);
    hasEncounteredError = true;
  } finally {
    isStreaming.set(false);  // 通知图像生成已完成
  }
}
