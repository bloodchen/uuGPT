/**
 * AI模型配置工具函数
 * 用于判断不同AI和模型应该显示哪个图标组件和显示名称
 * 
 * 使用方法:
 * 在Vue组件中通过 import { getModelConfig } from '@/public/js/aiModelConfig.js' 导入
 * const config = getModelConfig('openai', 'gpt-4o-mini')
 * // 返回: { aiName: 'GPT', modelName: '4o-mini', iconName: 'IconGpt' }
 */

// AI模型配置映射表
const AI_MODEL_CONFIG = {
  openai: {
    aiName: 'GPT',
    models: {
      'gpt-4o-mini': '4o-mini',
      'gpt-4.1-mini': '4.1-mini',
      'gpt-4.1-nano': '4.1 nano',
      'gpt-4o': '4o',
      'gpt-4.1': '4.1',
      'o1': 'o1',
      'o1-mini': 'o1-mini',
      'o3-mini': 'o3-mini',
      'o3': 'o3'
    }
  },
  anthropic: {
    aiName: 'Claude',
    models: {
      'claude-3.5-haiku': '3.5 haiku',
      'claude-3.5-sonnet': '3.5 sonnet',
      'claude-4-sonnet': '4 sonnet',
      'claude-3.7-sonnet': '3.7 sonnet',
      'claude-opus-4': '4 opus',
      'claude-3.7-sonnet:thinking': '3.7 thinking'
    }
  },
  google: {
    aiName: 'Gemini',
    models: {
      'gemini-2.0-flash-lite-001': '2.0 flash lite',
      'gemini-flash-1.5': '1.5 flash',
      'gemini-2.0-flash-001': '2.0 flash',
      'gemini-pro-1.5': '1.5 pro'
    }
  },
  deepseek: {
    aiName: 'Deepseek',
    models: {
      'deepseek-chat:free': 'V3',
      'deepseek-r1:free': 'R1'
    }
  },
  qwen: {
    aiName: 'Qwen',
    models: {
      'qwen-plus': 'Plus'
    }
  }
};

// 图标组件名称映射
const ICON_MAP = {
  openai: 'IconGpt',
  anthropic: 'IconClaude',
  google: 'IconGemini',
  deepseek: 'IconDeepseek',
  qwen: 'IconQwen'
};

/**
 * 根据AI和模型获取配置信息
 * @param {string} ai - AI提供商 (openai, anthropic, google, deepseek, qwen)
 * @param {string} model - 模型标识 (如 'gpt-4o-mini')
 * @returns {object} 返回配置对象 { aiName, modelName, iconName }
 */
function getModelConfig(ai, model) {
  if (!ai || !model) {
    return {
      aiName: 'Default',
      modelName: 'Model',
      iconName: 'IconFavicon'
    };
  }

  const aiConfig = AI_MODEL_CONFIG[ai.toLowerCase()];
  
  if (!aiConfig) {
    return {
      aiName: ai,
      modelName: model,
      iconName: 'IconFavicon'
    };
  }

  const modelName = aiConfig.models[model] || model;
  const iconName = ICON_MAP[ai.toLowerCase()] || 'IconFavicon';

  return {
    aiName: aiConfig.aiName,
    modelName: modelName,
    iconName: iconName
  };
}

/**
 * 获取AI提供商信息
 * @param {string} ai - AI提供商
 * @returns {string} AI名称
 */
function getAiName(ai) {
  if (!ai) return 'Unknown';
  
  const aiConfig = AI_MODEL_CONFIG[ai.toLowerCase()];
  return aiConfig ? aiConfig.aiName : ai;
}

/**
 * 获取模型显示名称
 * @param {string} ai - AI提供商
 * @param {string} model - 模型标识
 * @returns {string} 模型显示名称
 */
function getModelName(ai, model) {
  if (!ai || !model) return 'Unknown';
  
  const aiConfig = AI_MODEL_CONFIG[ai.toLowerCase()];
  if (!aiConfig) return model;
  
  return aiConfig.models[model] || model;
}

/**
 * 获取图标组件名称
 * @param {string} ai - AI提供商
 * @returns {string} 图标组件名称
 */
function getIconName(ai) {
  if (!ai) return 'IconFavicon';
  
  return ICON_MAP[ai.toLowerCase()] || 'IconFavicon';
}

/**
 * 获取所有支持的AI提供商列表
 * @returns {Array} AI提供商数组
 */
function getAllAiProviders() {
  return Object.keys(AI_MODEL_CONFIG).map(ai => ({
    ai: ai,
    aiName: AI_MODEL_CONFIG[ai].aiName,
    iconName: ICON_MAP[ai]
  }));
}

/**
 * 获取指定AI的所有模型列表
 * @param {string} ai - AI提供商
 * @returns {Array} 模型数组
 */
function getModelsByAi(ai) {
  if (!ai) return [];
  
  const aiConfig = AI_MODEL_CONFIG[ai.toLowerCase()];
  if (!aiConfig) return [];
  
  return Object.entries(aiConfig.models).map(([model, name]) => ({
    model: model,
    name: name
  }));
}

// 导出函数 (适用于CommonJS和ES6模块)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getModelConfig,
    getAiName,
    getModelName,
    getIconName,
    getAllAiProviders,
    getModelsByAi,
    AI_MODEL_CONFIG,
    ICON_MAP
  };
}

// 如果是在浏览器环境中，挂载到window对象
if (typeof window !== 'undefined') {
  window.AIModelConfig = {
    getModelConfig,
    getAiName,
    getModelName,
    getIconName,
    getAllAiProviders,
    getModelsByAi,
    AI_MODEL_CONFIG,
    ICON_MAP
  };
}
