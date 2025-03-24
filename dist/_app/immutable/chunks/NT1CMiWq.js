const e={NO_MORE_CALLS:'โควต้าการสนทนาของโมเดลปัจจุบันหมดแล้ว โปรดเปลี่ยนไปใช้โมเดลอื่นหรือ<a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">อัปเกรดแผนของคุณ</a>',API_TIMEOUT:"คำขอบริการ API หมดเวลา โปรดลองอีกครั้งในภายหลัง",NO_UID:"ไม่พบผู้ใช้ นี่อาจเป็นปัญหาฝั่งเซิร์ฟเวอร์ โปรดออกจากระบบแล้วลองอีกครั้ง หากปัญหายังคงอยู่ โปรดติดต่อผู้ดูแลระบบ",VIP_ONLY:'โมเดลนี้ต้องใช้แผนระดับสูงกว่า โปรดเปลี่ยนไปใช้โมเดลอื่นหรือ<a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">อัปเกรดแผนของคุณ</a>',NO_MORE_TOKEN:'โควต้าการสนทนาของโมเดลปัจจุบันหมดแล้ว โปรดเปลี่ยนไปใช้โมเดลอื่นหรือ<a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">อัปเกรดแผนของคุณ</a>',NO_MORE_DEVICE:'เกินขีดจำกัดอุปกรณ์แล้ว ขีดจำกัดอุปกรณ์ปัจจุบันของคุณคือ {deviceLimit} หากต้องการเพิ่มจำนวนอุปกรณ์ โปรด<a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">อัปเกรดแผนของคุณ</a> โปรดทราบว่าเบราว์เซอร์ที่แตกต่างกันจะถูกนับเป็นอุปกรณ์แยกกัน',UNKNOWN_MODEL:"โมเดลที่ไม่รู้จัก",UNKNOW_NETWORKERROR:"ข้อผิดพลาดเซิร์ฟเวอร์ภายใน",CONNECTION_FAILED:"ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ โปรดลองอีกครั้งในภายหลัง",INVALID_EMAIL:"ที่อยู่อีเมลไม่ถูกต้อง โปรดตรวจสอบอีเมลของคุณแล้วลองอีกครั้ง",UNKNOWN:"เกิดข้อผิดพลาด: {messageErrorType} โปรดลองอีกครั้ง!"},r={nav:{logo:"UUGPT",chat:"แชท",features:"คุณสมบัติ",pricing:"ราคา",reviews:"รีวิว",profile:"โปรไฟล์",login:"เข้าสู่ระบบ",register:"ลงทะเบียน"},hero:{title:"UUGPT ทำให้การสนทนา AI หลายรูปแบบมีประสิทธิภาพมากขึ้น",subtitleLine1:"รวม GPT, Gemini, Claude และโมเดลอื่นๆ",subtitleLine2:"รองรับ 21 ภาษา การซิงโครไนซ์บนคลาวด์ที่ปลอดภัย",subtitleLine3:"การเข้าถึงแบบรวมบนมือถือและพีซี ไม่จำเป็นต้องใช้ VPN การเชื่อมต่อโดยตรงในจีนแผ่นดินใหญ่",startChatBtn:"เริ่มแชท",activeUsers:"ผู้ใช้งาน",supportLangs:"ภาษาที่รองรับ",lowestPrice:"เริ่มต้นที่"},features:{title:"ทำไมต้องเลือก UUGPT",multiModel:{title:"การสนทนา AI หลายรูปแบบ",desc:"สลับระหว่าง GPT, Gemini, Claude และโมเดลอื่นๆ ได้อย่างง่ายดาย ครอบคลุมการเขียนเชิงวิชาการ การช่วยเหลือด้านการเขียนโปรแกรม และการสร้างสรรค์ผลงาน ทั้งหมดในแพลตฟอร์มเดียวเพื่อตอบสนองความต้องการที่หลากหลายของคุณ"},security:{title:"ความปลอดภัยและความเป็นส่วนตัว",desc:"ใช้การเข้ารหัส HTTPS บันทึกการสนทนาที่จัดเก็บไว้ในระบบคลาวด์พร้อมตัวเลือกในการลบ ผู้ใช้ที่ไม่ระบุชื่อจะไม่ทิ้งร่องรอยหลังจากล้างคุกกี้ ทำให้มั่นใจได้ถึงความเป็นส่วนตัวและความปลอดภัยของข้อมูลของคุณ"},flexiblePricing:{title:"ราคาที่ยืดหยุ่น + ส่วนลดเดือนแรก",desc:"มีแผนแบบฟรี ขั้นพื้นฐาน และพรีเมียม ผู้ใช้ใหม่จ่ายเพียง $1 สำหรับเดือนแรก ช่วยให้คุณได้สัมผัสกับคุณสมบัติอันทรงพลังของ UUGPT ในราคาที่ต่ำมาก"},cloudStorage:{title:"พื้นที่เก็บข้อมูลบนคลาวด์",desc:"บันทึกการสนทนาจะถูกจัดเก็บไว้ในระบบคลาวด์ เข้าถึงได้จากอุปกรณ์ต่างๆ ป้องกันการสูญหายของข้อมูล และช่วยให้คุณดูและจัดการได้ทุกที่ทุกเวลา"},multiModal:{title:"คุณสมบัติหลายรูปแบบ",desc:"รองรับการส่งรูปภาพ, PDF, txt, Word และรูปแบบอื่นๆ ตอบสนองความต้องการในสถานการณ์ต่างๆ ได้มากขึ้น และเพิ่มประสิทธิภาพในการสื่อสาร"},intelligentSearch:{title:"การค้นหาอัจฉริยะ",desc:"สามารถรวม UUGPT เข้ากับเครื่องมือค้นหาของบุคคลที่สามสำหรับการค้นหาที่ขับเคลื่อนด้วย AI ช่วยให้คุณระบุข้อมูลสำคัญได้อย่างรวดเร็ว"}},reviews:{title:"สิ่งที่ผู้ใช้พูด",reviewer1:{name:"Jondier Junior",type:"ผู้ใช้ที่ยืนยันแล้ว",comment:"“การสลับหลายรูปแบบใน UUGPT นั้นสะดวกมาก และส่วนลดเดือนแรกก็เป็นข้อเสนอที่ดีมาก ฉันแนะนำให้เพื่อนของฉัน และพวกเขาทุกคนชอบมัน!”"},reviewer2:{name:"Paul Edison",type:"ผู้ใช้ที่ยืนยันแล้ว",comment:"“ตัวเลือกตั้งแต่ไม่ระบุชื่อไปจนถึงพรีเมียมมีความยืดหยุ่นมาก การจัดเก็บข้อมูลบนคลาวด์และวิธีการเข้ารหัสทำให้ฉันรู้สึกปลอดภัย แนะนำอย่างแน่นอน”"},reviewer3:{name:"Erik Bass",type:"ผู้ใช้ที่ยืนยันแล้ว",comment:"“อินเทอร์เฟซสะอาดตา และความเร็วในการตอบสนองรวดเร็ว โดยเฉพาะอย่างยิ่งในจีนแผ่นดินใหญ่ที่ไม่มีอาการแลค มันมีประโยชน์มากสำหรับฉัน เพราะฉันต้องการสื่อสารข้ามภาษา”"}},cta:{title:"สัมผัส UUGPT ทันที",subtitle:"เข้าร่วมกับผู้ใช้หลายพันคนและสัมผัสกับการจัดการการสนทนา AI ที่มีประสิทธิภาพและสะดวกยิ่งขึ้น จัดการกับสถานการณ์การเรียนรู้ การทำงาน และการสร้างสรรค์ได้อย่างง่ายดาย!",buttonText:"เริ่มต้นใช้งาน"},footer:{changelog:"บันทึกการเปลี่ยนแปลง",faq:"คำถามที่พบบ่อย",terms:"ข้อกำหนดในการให้บริการ",privacy:"นโยบายความเป็นส่วนตัว",seoText:"การสนทนา AI หลายรูปแบบ, GPT, Gemini, Claude, รองรับ 21 ภาษา, ที่เก็บข้อมูลบนคลาวด์, ความปลอดภัยที่เข้ารหัส, ราคาที่ยืดหยุ่น, การเชื่อมต่อโดยตรงในจีนแผ่นดินใหญ่, การเขียนด้วย AI, การสร้างสรรค์, ความช่วยเหลือในการเขียนโปรแกรม, AIGC",logo:"UUGPT",copyright:"© 2025 UUGPT สงวนลิขสิทธิ์"}},t={title:"เข้าสู่ระบบ uuGPT",welcome:"ยินดีต้อนรับสู่ uuGPT",welcomeBack:"ยินดีต้อนรับกลับมา,",close:"ปิด",email:"อีเมล",emailPlaceholder:"เข้าสู่ระบบหรือลงทะเบียนด้วยอีเมลของคุณ",emailFormatError:"โปรดป้อนที่อยู่อีเมลที่ถูกต้อง",emailError:"โปรดป้อนที่อยู่อีเมลที่ถูกต้อง",password:"รหัสผ่าน",passwordPlaceholder:"โปรดป้อนรหัสผ่านของคุณ",passwordRepeat:"ยืนยันรหัสผ่าน",passwordRepeatPlaceholder:"โปรดป้อนรหัสผ่านของคุณอีกครั้ง",passwordRepeatError:"รหัสผ่านไม่ตรงกัน",passwordLogin:"เข้าสู่ระบบด้วยรหัสผ่าน",passwordError:"โปรดป้อนรหัสผ่านของคุณ",invalidPasswordCharacterError:"มีอักขระที่ไม่ถูกต้อง อนุญาตเฉพาะตัวอักษรและตัวเลขเท่านั้น",passwordLengthError:"ความยาวต้องอยู่ระหว่าง 6 ถึง 24 ตัวอักษร",agreeTerms:"ฉันยอมรับ ",serviceTermsLink:"ข้อกำหนดในการให้บริการ",agreeTermsError:"โปรดยอมรับข้อตกลงก่อน",nextStep:"ขั้นตอนถัดไป",or:"หรือ",loginWithGoogle:"ดำเนินการต่อด้วย Google",loginWithMaxthon:"ดำเนินการต่อด้วย Maxthon",remember:"จดจำฉัน",loginTitle:"ป้อนรหัสผ่าน",login:"เข้าสู่ระบบ",loginSuccess:"เข้าสู่ระบบสำเร็จ",loginError:"เข้าสู่ระบบล้มเหลว",register:"ลงทะเบียน",registerError:"การลงทะเบียนล้มเหลว",forgotPassword:"ลืมรหัสผ่าน?",forgot:"ลืมรหัสผ่าน?",changePassword:"เปลี่ยนรหัสผ่าน",forgotPasswordError:"ฟังก์ชันลืมรหัสผ่านไม่สามารถใช้งานได้ในขณะนี้ โปรดลองอีกครั้งในภายหลัง",forgotError:"การรีเซ็ตรหัสผ่านล้มเหลว",forgotSuccess:"อีเมลรีเซ็ตรหัสผ่านถูกส่งแล้ว โปรดตรวจสอบอีเมลของคุณสำหรับคำแนะนำในการรีเซ็ตรหัสผ่าน",forgotSuccessTitle:"การรีเซ็ตรหัสผ่านสำเร็จ!",back:"ย้อนกลับ",enterVerificationTitle:"การยืนยันบัญชี",enterVerificationCode:"โปรดป้อนรหัสยืนยัน 6 หลักที่ส่งไปยัง {email} รหัสนี้มีอายุ 5 นาที",verificationCodePlaceholder:"โปรดป้อนรหัสยืนยัน",sendVerificationCode:"ส่งรหัสยืนยัน",resendVerificationCode:"ส่งอีกครั้งใน {timeLeft} วินาที",verifySuccess:"การยืนยันสำเร็จ",verificationCodeSentSuccess:"รหัสยืนยันถูกส่งแล้ว โปรดตรวจสอบอีเมลของคุณ",verificationCodeError:"รหัสยืนยันไม่ถูกต้อง",invalidVerificationCodeError:"โปรดป้อนรหัสยืนยันที่ถูกต้อง",enterVerificationCodeError:"โปรดป้อนรหัสยืนยัน",setPasswordTitle:"ตั้งรหัสผ่าน",setPasswordText:"โปรดตั้งรหัสผ่านสำหรับเข้าสู่ระบบของคุณ ใช้ 6-24 ตัวอักษร",setPasswordPlaceholder:"โปรดป้อนรหัสผ่านใหม่",confirmPasswordPlaceholder:"โปรดป้อนรหัสผ่านอีกครั้ง",confirmAndLogin:"ยืนยันและเข้าสู่ระบบ",resetPasswordTitle:"รีเซ็ตรหัสผ่าน",resetPasswordSuccess:"เปลี่ยนรหัสผ่านสำเร็จ",resetPasswordText:"โปรดตั้งรหัสผ่านสำหรับเข้าสู่ระบบใหม่ ใช้ 6-24 ตัวอักษร",resetPasswordPlaceholder:"โปรดป้อนรหัสผ่านใหม่",logout:"ออกจากระบบ"},o={title:"การตั้งค่า",language:"ภาษา",whenask:{title:"เมื่อใดที่จะถาม AI",afterQmark:"ถามเฉพาะหลังจากป้อน '?'",askMannually:"ถามด้วยตนเอง",askAnytime:"ถามเสมอ"},mode:"โมเดลคำตอบ AI",sendKey:"ปุ่มส่งแชท",customKey:"กำหนดเอง",lineBreakKey:"ปุ่มขึ้นบรรทัดใหม่",switchMode:"สลับโมเดล",newChat:"แชทใหม่",currentV:"เวอร์ชันปัจจุบัน",termsText:"ข้อกำหนดและนโยบายความเป็นส่วนตัว",termsLink:"https://maxthon.com/docs/aisearchterms",userSupport:"การสนับสนุนผู้ใช้",userSupportEmail:"https://forms.gle/KJ58Ggm3Reytv3Cm8",save:"บันทึก",help:"ช่วยเหลือ"},a={title:"uuGPT",newChat:"แชทใหม่",setting:"การตั้งค่า",clearConversation:"ล้าง"},i={title:"uuGPT",assistantname:"uuGPT",username:"คุณ",cancel:"ยกเลิก",submit:"ส่ง",imageSaveHint:"รูปภาพนี้จะหมดอายุใน 60 นาที คลิกขวาและบันทึกเป็น!",copy:"คัดลอก",retry:"ลองใหม่",delete:"ลบ",deleteSuccess:"ลบแล้ว",deleteFailure:"ลบไม่สำเร็จ",edit:"แก้ไข",like:"มีประโยชน์",dislike:"ไม่ถูกต้อง",noConversation:"เริ่มการสนทนาใหม่",textareaPlaceholder:"ป้อนคำถามของคุณที่นี่",linkError:"ข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์ โปรดลองอีกครั้ง",feedback:"ข้อเสนอแนะ",options:"ตัวเลือก",rename:"เปลี่ยนชื่อ",historyChats:"ประวัติการแชท",closeSidebar:"ปิดแถบด้านข้าง",showSidebar:"แสดงแถบด้านข้าง",openPersonalMenu:"เปิดเมนูส่วนตัว",newChat:"แชทใหม่",search:"ค้นหาแชท",loading:"กำลังโหลด...",loadingError:"การโหลดล้มเหลว โปรดลองอีกครั้ง",noSearchResult:"ไม่พบแชทที่ตรงกัน",noMoreContent:"ไม่มีเนื้อหาเพิ่มเติม",myPlan:"แผนของฉัน",tokensLeft:"โทเค็นที่เหลือ",noMoreTokens:"คุณไม่มีโทเค็นเพียงพอ",recommended:"แนะนำเพื่อน",promotion:"แผนรายปีไม่จำกัดในราคาเพียง ${yearPrice} ต่อปี ประหยัด ${yearDiscount}!",upgradeNow:"อัปเกรดทันที",translate:"แปล",all:"ทั้งหมด",free:"ฟรี",new:"ใหม่",startNewChat:"ถามอะไรก็ได้",attachments:"ไฟล์แนบ",image:"รูปภาพ",imageGen:"การสร้างภาพ",pdf:"PDF",voice:"ส่งเสียง",scrollToBottom:"เลื่อนลง",batch:"แบตช์",quit:"ออก",confirm:"ยืนยัน",save:"บันทึก",saveAs:"บันทึกเป็น",latestChats:"แชทล่าสุด",youSaid:"คุณพูดว่า:",deleteThisMessage:"ลบข้อความนี้",deleteToTheEnd:"ลบข้อความนี้และข้อความต่อๆไป",date:{today:"วันนี้",yesterday:"เมื่อวานนี้",threeDaysAgo:"สามวันก่อน",oneWeekAgo:"หนึ่งสัปดาห์ก่อน",oneMonthAgo:"หนึ่งเดือนก่อน",halfYearAgo:"ครึ่งปีก่อน",oneYearAgo:"หนึ่งปีก่อน"},renameSuccess:"เปลี่ยนชื่อสำเร็จ",renameFailure:"เปลี่ยนชื่อไม่สำเร็จ",gotouugpt:"✨ ต้องการบันทึกประวัติการแชทอย่างถาวรหรือเข้าถึงโมเดล AI ขั้นสูงเพิ่มเติมหรือไม่",gotouugptlink:"คลิกเพื่อเยี่ยมชม uuGPT",renaming:"กำลังเปลี่ยนชื่อ..."},s={copy:"คัดลอกโค้ด",copied:"คัดลอกแล้ว"},n={notice:"ประกาศ",confirm:"ยืนยัน",cancel:"ยกเลิก",close:"ปิด"},l="ตอบเป็นภาษาไทย คำตอบต้องใช้รูปแบบ Markdown เฉพาะเมื่อคำตอบมีความซับซ้อนหรือต้องการข้อมูลอ้างอิง ให้ใส่ลิงก์อ้างอิงที่เชื่อถือได้ 1-3 ลิงก์ในตอนท้าย ซึ่งมีความเกี่ยวข้องโดยตรงและเป็นแหล่งข้อมูลที่ได้รับการยืนยัน ลิงก์ต้องเป็นของแท้และเกี่ยวข้องกับหัวข้ออย่างมาก คำตอบง่ายๆ ควรงดการอ้างอิงโดยสิ้นเชิง",c="คุณคือผู้ช่วยที่มีประโยชน์",d={planEndTime:"วันสิ้นสุด",upgradePlan:"อัปเกรดแผน",choosePlanTitle:"เลือกแผนที่เหมาะสม",choosePlanDescription:"เลือกได้อย่างยืดหยุ่นตามความต้องการของคุณและเพลิดเพลินกับบริการ AI อันทรงพลัง",planTiltle:"การสมัครของคุณ",planDescription:"การสมัครของคุณจะกำหนดบริการและคุณสมบัติ AI ที่คุณสามารถเข้าถึงได้",monthly:"รายเดือน",yearly:"รายปี",freePlanName:"แผนฟรี",freePlanDesc:"สำหรับสถานการณ์พื้นฐานและการใช้งานส่วนตัว",freePlanFeatures:["สลับระหว่างโมเดลขนาดใหญ่ได้อย่างอิสระในการสนทนาเดียวกัน","การเขียน การแปล และการสรุปที่ขับเคลื่อนด้วย AI โดยใช้โมเดลพื้นฐาน","การปกป้องความเป็นส่วนตัว การใช้งานแบบไม่ระบุชื่อโดยไม่ต้องเข้าสู่ระบบ","ที่เก็บข้อมูลบนคลาวด์สำหรับประวัติข้อความ","อุปกรณ์เข้าสู่ระบบ 2 เครื่อง (เบราว์เซอร์ที่แตกต่างกันจะถูกนับเป็นอุปกรณ์ที่แตกต่างกัน)","การใช้งานโมเดลพื้นฐานรายเดือนแบบจำกัด (GPT-4o mini, gemini 2.0 flash lite, DeepSeek V3)"],basicPlanName:"แผนพื้นฐาน",basicPlanDesc:"เหมาะสำหรับกรณีการใช้งานประจำวันส่วนใหญ่",basicPlanFeatures:["รวมคุณสมบัติทั้งหมดของแผนฟรี","อุปกรณ์เข้าสู่ระบบ 5 เครื่อง (เบราว์เซอร์ที่แตกต่างกันจะถูกนับเป็นอุปกรณ์ที่แตกต่างกัน)","4 ล้านโทเค็นต่อเดือน","มีโมเดลให้เลือกมากขึ้น (gemini 2.0 flash, DeepSeek R1)","เร็วๆ นี้: การอัปโหลดไฟล์และการป้อนข้อมูลด้วยเสียง"],basicAnnualSaveText:"ประหยัด 48%",proPlanName:"แผนโปร",proPlanDesc:"ตอบสนองความต้องการการใช้งานเชิงลึกด้วยลำดับความสำคัญสูงสุด",proPlanFeatures:["รวมคุณสมบัติทั้งหมดของแผนฟรีและแผนพื้นฐาน","อุปกรณ์เข้าสู่ระบบ 10 เครื่อง (เบราว์เซอร์ที่แตกต่างกันจะถูกนับเป็นอุปกรณ์ที่แตกต่างกัน)","ปลดล็อกโมเดลทั้งหมด","โทเค็นเพิ่มเติม 4 ล้านโทเค็นต่อเดือนสำหรับโมเดลขั้นสูง (GPT o3-mini, Gemini 1.5 pro, Claude 3.5 haiku ฯลฯ)","40,000 โทเค็นต่อเดือนสำหรับการเข้าถึงแบบทดลองใช้โมเดลที่ล้ำสมัย (GPT o1, Claude 3.7 sonnet)","การเข้าถึงลำดับความสำคัญในช่วงเวลาเร่งด่วน","เร็วๆ นี้: สิทธิ์พิเศษในการเข้าถึงคุณสมบัติเพิ่มเติม"],proAnnualSaveText:"ประหยัด 45%",firstMonth:"เดือนแรก",after:"หลังจาก",perMonth:"/เดือน",perYear:"/ปี",yearlyPay:"การชำระเงินรายปี",recommended:"แนะนำ",current:"ปัจจุบัน",selectPlan:"สมัครสมาชิก",currentPlan:"ยกเลิกการสมัคร",priceTotal:"ทั้งหมด",priceComparisonTitle:"การเปรียบเทียบราคาบริการ AI",priceComparisonDesc:"เมื่อเทียบกับการสมัครสมาชิก GPT, Claude และ Gemini แยกกัน บริการแบบรวมของเราสามารถช่วยคุณประหยัดได้มากขึ้น!",priceComparisonService:"บริการ",priceComparisonMonthly:"รายเดือน",priceComparisonAnnual:"รายปี",priceComparisonGPT:"GPT",priceComparisonClaude:"Claude",priceComparisonGemini:"Gemini",priceComparisonOurPlan:"แผนของเรา: GPT + Claude + Gemini",priceComparisonConclusion:"การชำระเงินครั้งเดียว เพลิดเพลินกับบริการ AI หลายรายการ ไม่จำเป็นต้องสมัครสมาชิกซ้ำๆ ช่วยให้คุณประหยัดเวลาและเงินได้อย่างง่ายดาย!",limitedOffer:"ข้อเสนอมีเวลาจำกัด",limitedTime:"เวลาจำกัด",save:"ประหยัด",specialPrice:"ราคาพิเศษ",faqTitle:"คำถามที่พบบ่อย",faqQ1:"ฉันสามารถยกเลิกการสมัครสมาชิกได้ตลอดเวลาหรือไม่",faqA1:"ได้ คุณสามารถยกเลิกหรือปรับแผนการสมัครสมาชิกของคุณได้ในการตั้งค่าบัญชีของคุณได้ตลอดเวลา การยกเลิกจะมีผลในรอบการเรียกเก็บเงินถัดไป",faqQ2:"คุณออกใบแจ้งหนี้/ใบเสร็จรับเงินหรือไม่",faqA2:"เราจะให้ใบเสร็จรับเงินอิเล็กทรอนิกส์หลังจากการชำระเงินแต่ละครั้งสำเร็จ หากจำเป็น โปรดตรวจสอบศูนย์บัญชีของคุณหรือติดต่อฝ่ายบริการลูกค้า",paymentProcessing:"กำลังดำเนินการชำระเงิน",paymentProcessingMessage:"โปรดรอสักครู่ กำลังดำเนินการชำระเงินของคุณ...",paymentSuccess:"การชำระเงินสำเร็จ",paymentSuccessMessage:"ขอบคุณสำหรับการซื้อของคุณ!",paymentFailure:"การชำระเงินล้มเหลว",paymentFailureMessage:"การชำระเงินล้มเหลว โปรดตรวจสอบข้อมูลการชำระเงินของคุณแล้วลองอีกครั้ง",paymentLinkError:"ไม่สามารถรับลิงก์การชำระเงินได้ โปรดลองอีกครั้งในภายหลัง",close:"ปิด",saveMore:"ประหยัด 20%",mostPopular:"เป็นที่นิยมมากที่สุด",then:"จากนั้น",save20:"ประหยัด 20%",allInOne:"โซลูชั่นแบบครบวงจร",priceNote:"สมัครสมาชิกครั้งเดียวสำหรับ GPT-4, Claude และ Gemini Pro",trialPeriod:"ทดลองใช้ฟรี 14 วัน",afterTrial:"เรียกเก็บเงินรายปีหลังหมดช่วงทดลองใช้",trialDescription:"ยกเลิกได้ตลอดเวลาระหว่างการทดลองใช้โดยไม่มีค่าใช้จ่าย"},m=["📝 ฉันควรใส่ใจอะไรบ้างเมื่อเขียนจดหมายสมัครงานอย่างเป็นทางการ","⏰ วิธีการจัดการเวลาที่เป็นประโยชน์มีอะไรบ้าง","🍳 แนะนำสูตรอาหารเช้าที่ง่ายและดีต่อสุขภาพหน่อยได้ไหม","💡 ทำอย่างไรถึงจะมีความจำดีขึ้น","📚 วิธีการเรียนรู้ที่มีประสิทธิภาพมีอะไรบ้าง","💡 ทำอย่างไรถึงจะเรียนรู้ทักษะใหม่ๆ ได้อย่างรวดเร็ว","📖 แนะนำหนังสือดีๆ คลาสสิกหน่อยได้ไหม","💼 ฉันควรใส่ใจอะไรบ้างระหว่างการสัมภาษณ์","🌍 วิธีที่ดีที่สุดในการเรียนรู้ภาษาใหม่คืออะไร","💻 เครื่องมืออะไรบ้างที่จะช่วยเพิ่มประสิทธิภาพในการทำงาน","📅 จะจัดตารางเรียนรายสัปดาห์อย่างไร","💰 มีคำแนะนำเกี่ยวกับการจัดการทางการเงินสำหรับผู้เริ่มต้นบ้างไหม","🎨 จะฝึกฝนความคิดสร้างสรรค์ได้อย่างไร","📷 ฉันควรใส่ใจอะไรบ้างเมื่อถ่ายภาพคุณภาพสูง","🚀 จะเพิ่มประสิทธิภาพในชีวิตประจำวันได้อย่างไร","✈️ จะวางแผนการเดินทางให้มีประสิทธิภาพได้อย่างไร","💪 วิธีการออกกำลังกายง่ายๆ ในชีวิตประจำวันมีอะไรบ้าง","😌 วิธีคลายเครียดอย่างรวดเร็วมีอะไรบ้าง","🍴 แนะนำสูตรอาหารที่เหมาะสำหรับมื้อเย็นของครอบครัวหน่อยได้ไหม","🌙 มีวิธีไหนบ้างที่จะช่วยให้หลับเร็ว","🌌 จุดกำเนิดของจักรวาลคืออะไร","🔬 ยีนของมนุษย์ส่งผลต่อสุขภาพอย่างไร","🚀 การสำรวจดาวอังคารมีความสำคัญอย่างไร","🌍 วิธีแก้ปัญหาภาวะโลกร้อนมีอะไรบ้าง","🔬 การพัฒนาเทคโนโลยีโคลนนิ่งในอนาคตจะเป็นอย่างไร","⚡ คอมพิวเตอร์ควอนตัมทำงานอย่างไร","💊 ยีนบำบัดรักษโรคได้อย่างไร","🌊 การสำรวจทะเลลึกสามารถนำไปสู่การค้นพบอะไรได้บ้าง","☄️ มีโอกาสมากน้อยแค่ไหนที่ดาวเคราะห์น้อยจะชนโลก","🌟 หลุมดำกลืนกินสสารทั้งหมดหรือไม่","🎨 อะไรคือแก่นแท้ของศิลปะนามธรรม","🎭 การแสดงละครมีผลต่อผู้ชมอย่างไร","📷 การถ่ายภาพจับอารมณ์ได้อย่างไร","🎵 ดนตรีคลาสสิกมีผลต่อสมองอย่างไร","🎨 การสร้างสรรค์งานศิลปะแสดงออกถึงอารมณ์ได้อย่างไร","🎥 ผู้กำกับภาพยนตร์เล่าเรื่องราวที่ดีได้อย่างไร","🎨 การจับคู่สีมีผลต่อการสร้างสรรค์งานศิลปะอย่างไร","📚 วรรณกรรมหล่อหลอมวัฒนธรรมอย่างไร","🎻 ทำไมดนตรีถึงถูกเรียกว่าเป็นภาษาสากล","📜 อารยธรรมอียิปต์โบราณพัฒนาขึ้นมาได้อย่างไร","🏰 เหตุการณ์สำคัญในยุโรปยุคกลางมีอะไรบ้าง","⚔️ สาเหตุหลักของสงครามโลกครั้งที่สองคืออะไร","💡 ยุคแห่งการสำรวจนำมาซึ่งผลกระทบอะไรบ้าง","💡 สงครามประกาศอิสรภาพของอเมริกามีความสำคัญอย่างไร","🌍 โลกาภิวัตน์เปลี่ยนแปลงสังคมอย่างไร","💡 จะบรรลุความยุติธรรมทางสังคมได้อย่างไร","💡 ความเป็นเมืองนำมาซึ่งปัญหาอะไรบ้าง","📢 โซเชียลมีเดียมีผลต่อพฤติกรรมทางสังคมอย่างไร","👨‍👩‍👧‍👦 การเปลี่ยนแปลงโครงสร้างครอบครัวมีผลกระทบอย่างไร","📈 เงินเฟ้อคืออะไร","💹 พื้นฐานของตลาดหุ้นคืออะไร","🏦 ธนาคารกลางมีอิทธิพลต่อเศรษฐกิจอย่างไร","💼 ความท้าทายที่ใหญ่ที่สุดของการเป็นผู้ประกอบการคืออะไร","🌐 เศรษฐกิจดิจิทัลเปลี่ยนแปลงตลาดโลกอย่างไร","⚽ ทำไมฟุตบอลถึงถูกเรียกว่าเป็นกีฬาอันดับหนึ่งของโลก","🏀 กฎพื้นฐานของบาสเกตบอลคืออะไร","💪 ความสำคัญทางประวัติศาสตร์ของกีฬาโอลิมปิกคืออะไร","🎾 กีฬาช่วยส่งเสริมสุขภาพอย่างไร","🎾 กลยุทธ์พื้นฐานของเทนนิสคืออะไร","📖 องค์ประกอบหลักของนวนิยายคืออะไร","📖 วรรณกรรมสะท้อนสังคมอย่างไร","📚 วรรณกรรมคลาสสิกของโลกมีอะไรบ้าง","🎭 โศกนาฏกรรมและสุขนาฏกรรมแตกต่างกันอย่างไร","📖 จะเขียนบทกวีได้อย่างไร"],p={ERR:e,home:r,login:t,settings:o,topbar:a,app:i,code:s,window:n,aisystem:l,aisystem2:c,pricing:d,promptRefer:m};export{e as ERR,l as aisystem,c as aisystem2,i as app,s as code,p as default,r as home,t as login,d as pricing,m as promptRefer,o as settings,a as topbar,n as window};
