const e={NO_MORE_CALLS:'현재 모델의 대화 한도가 초과되었습니다. 다른 모델로 전환하거나 <a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">플랜 업그레이드</a> 해주세요.',API_TIMEOUT:"API 요청 시간 초과. 잠시 후 다시 시도해주세요.",NO_UID:"사용자를 찾을 수 없습니다. 서버 문제일 수 있으니 로그아웃 후 다시 시도해주세요. 문제가 지속되면 관리자에게 문의하세요.",VIP_ONLY:'고급 플랜이 필요한 모델입니다. 다른 모델로 전환하거나 <a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">플랜 업그레이드</a> 해주세요.',NO_MORE_TOKEN:'현재 모델의 토큰 한도가 초과되었습니다. 다른 모델로 전환하거나 <a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">플랜 업그레이드</a> 해주세요.',NO_MORE_DEVICE:'최대 디바이스 수를 초과했습니다(현재 {deviceLimit}개). 더 많은 디바이스를 사용하려면 <a href="./pricing" target="_blank" class="font-bold underline text-red-700 px-2">플랜 업그레이드</a> 해주세요. 다른 브라우저는 별도 디바이스로 계산됩니다.',UNKNOWN_MODEL:"알 수 없는 모델",UNKNOW_NETWORKERROR:"서버 내부 오류",CONNECTION_FAILED:"서버 연결 실패. 잠시 후 다시 시도해주세요.",INVALID_EMAIL:"유효하지 않은 이메일 주소",UNKNOWN:"오류 발생: {messageErrorType}. 다시 시도해주세요!"},r={nav:{logo:"UUGPT",chat:"채팅",features:"기능",pricing:"가격",reviews:"후기",profile:"프로필",login:"로그인",register:"회원가입"},hero:{title:"다중 AI 모델 통합 챗 서비스",subtitleLine1:"GPT, Gemini, Claude 등 주요 모델 통합",subtitleLine2:"21개 언어 지원, 안전한 클라우드 동기화",subtitleLine3:"모바일/PC 통합 접근, VPN 없이 중국 본토 직접 연결",startChatBtn:"채팅 시작",activeUsers:"활성 사용자",supportLangs:"지원 언어",lowestPrice:"월"},features:{title:"UUGPT 장점",multiModel:{title:"다중 AI 모델 전환",desc:"학술 작성부터 창의적 콘텐츠 생성까지 GPT/Gemini/Claude 모델 간 자유로운 전환"},security:{title:"보안 & 개인정보",desc:"HTTPS 암호화 및 클라우드 저장, 쿠키 삭제 시 완전 삭제 보장"},flexiblePricing:{title:"유연한 요금제",desc:"무료/베이직/프리미엄 플랜, 신규 사용자 첫 달 $1 특별 혜택"},cloudStorage:{title:"클라우드 저장",desc:"모든 기기에서 접근 가능한 안전한 대화 기록 저장"},multiModal:{title:"멀티모달 기능",desc:"이미지/PDF/Word 파일 전송 지원"},intelligentSearch:{title:"AI 통합 검색",desc:"타사 검색엔진에 통합 가능한 AI 검색 기능"}},reviews:{title:"사용자 평가",reviewer1:{name:"Jondier Junior",type:"인증 사용자",comment:"모델 전환 편리성과 가성비 최고!"},reviewer2:{name:"Paul Edison",type:"인증 사용자",comment:"클라우드 저장과 보안 시스템이 믿음직스러워요"},reviewer3:{name:"Erik Bass",type:"인증 사용자",comment:"중국 본토에서도 빠른 반응 속도가 장점"}},cta:{title:"지금 경험해보세요",subtitle:"수천 명의 사용자와 함께 효율적인 AI 대화 관리 시작",buttonText:"시작하기"},footer:{changelog:"업데이트",faq:"FAQ",terms:"이용약관",privacy:"개인정보처리방침",seoText:"다중 AI 모델, GPT, Gemini, Claude, 21개 언어 지원, 클라우드 저장, 암호화 보안, 유연한 요금제",logo:"UUGPT",copyright:"© 2025 UUGPT. All rights reserved."}},o={title:"UUGPT 로그인",welcome:"UUGPT 시작하기",welcomeBack:"다시 오신 것을 환영합니다,",close:"닫기",email:"이메일",emailPlaceholder:"이메일로 로그인/회원가입",emailFormatError:"유효한 이메일 주소 입력",emailError:"이메일 주소 확인 필요",password:"비밀번호",passwordPlaceholder:"비밀번호 입력",passwordRepeat:"비밀번호 확인",passwordRepeatPlaceholder:"비밀번호 재입력",passwordRepeatError:"비밀번호 불일치",passwordLogin:"비밀번호 로그인",passwordError:"비밀번호 입력 필요",invalidPasswordCharacterError:"영문/숫자만 사용 가능",passwordLengthError:"6-24자 이내",agreeTerms:"UUGPT ",serviceTermsLink:"이용약관",agreeTermsError:"약관 동의 필요",nextStep:"다음 단계",or:"또는",loginWithGoogle:"Google 계정으로 계속",loginWithMaxthon:"Maxthon 계정으로 계속",remember:"로그인 유지",loginTitle:"비밀번호 입력",login:"로그인",loginSuccess:"로그인 성공",loginError:"로그인 실패",register:"회원가입",registerError:"가입 실패",forgotPassword:"비밀번호 찾기",forgot:"비밀번호 찾기",changePassword:"비밀번호 변경",forgotPasswordError:"비밀번호 찾기 기능 일시 중단",forgotError:"재설정 실패",forgotSuccess:"비밀번호 재설정 메일 발송",forgotSuccessTitle:"재설정 완료!",back:"뒤로",enterVerificationTitle:"계정 인증",enterVerificationCode:"{email}로 발송된 6자리 인증코드 입력 (5분 유효)",verificationCodePlaceholder:"인증코드 입력",sendVerificationCode:"인증코드 발송",resendVerificationCode:"{timeLeft}초 후 재발송",verifySuccess:"인증 성공",verificationCodeSentSuccess:"인증코드 발송 완료",verificationCodeError:"잘못된 인증코드",invalidVerificationCodeError:"유효한 코드 입력 필요",enterVerificationCodeError:"인증코드 입력 필요",setPasswordTitle:"비밀번호 설정",setPasswordText:"6-24자 비밀번호 설정",setPasswordPlaceholder:"새 비밀번호",confirmPasswordPlaceholder:"비밀번호 확인",confirmAndLogin:"확인 및 로그인",resetPasswordTitle:"비밀번호 재설정",resetPasswordSuccess:"변경 완료",resetPasswordText:"새 비밀번호 설정(6-24자)",resetPasswordPlaceholder:"새 비밀번호",logout:"로그아웃"},t={title:"설정",language:"언어",whenask:{title:"AI 질문 조건",afterQmark:"'?' 입력 후 질문",askMannually:"수동 전송",askAnytime:"항상 질문"},mode:"AI 모델",sendKey:"전송 키",customKey:"커스텀",lineBreakKey:"줄바꿈 키",switchMode:"모델 전환",newChat:"새 채팅",currentV:"현재 버전",termsText:"약관 및 정책",termsLink:"https://maxthon.com/ko/docs/aisearchterms",userSupport:"고객지원",userSupportEmail:"https://forms.gle/KJ58Ggm3Reytv3Cm8",save:"저장",help:"도움말"},a={title:"UUGPT",newChat:"새 채팅",setting:"설정",clearConversation:"전체 삭제"},i={title:"UUGPT",assistantname:"UUGPT",username:"사용자",cancel:"취소",submit:"제출",imageSaveHint:"60분 후 만료되는 이미지입니다. 우클릭으로 저장하세요!",copy:"복사",retry:"재시도",delete:"삭제",deleteSuccess:"삭제 완료",deleteFailure:"삭제 실패",edit:"편집",like:"도움됨",dislike:"오류",noConversation:"새 대화 시작",textareaPlaceholder:"질문 입력",linkError:"서버 연결 오류",feedback:"피드백",options:"옵션",rename:"이름 변경",historyChats:"대화 기록",closeSidebar:"사이드바 닫기",showSidebar:"사이드바 열기",openPersonalMenu:"개인 메뉴",newChat:"새 채팅",search:"채팅 검색",loading:"로딩 중...",loadingError:"로딩 실패",noSearchResult:"검색 결과 없음",noMoreContent:"더 이상 내용 없음",myPlan:"내 플랜",tokensLeft:"남은 토큰",noMoreTokens:"토큰 부족",recommended:"친구 추천",promotion:"연간 무제한 플랜 {yearPrice}원/년 ({yearDiscount}원 절약)",upgradeNow:"업그레이드",translate:"번역",all:"전체",free:"무료",new:"신규",startNewChat:"질문 시작",attachments:"첨부파일",image:"이미지",imageGen:"이미지 생성",pdf:"PDF",voice:"음성 전송",scrollToBottom:"맨 아래로",batch:"일괄 처리",quit:"종료",confirm:"확인",save:"저장",saveAs:"다른 이름으로 저장",latestChats:"최근 대화",youSaid:"질문:",deleteThisMessage:"이 메시지 삭제",deleteToTheEnd:"이후 모든 메시지 삭제",date:{today:"오늘",yesterday:"어제",threeDaysAgo:"3일 전",oneWeekAgo:"1주 전",oneMonthAgo:"1개월 전",halfYearAgo:"6개월 전",oneYearAgo:"1년 전"},renameSuccess:"이름 변경 성공",renameFailure:"변경 실패",gotouugpt:"✨ 채팅 기록 저장/고급 모델 사용을 원하시나요?",gotouugptlink:"UUGPT 바로가기",renaming:"변경 중..."},s={copy:"코드 복사",copied:"복사 완료"},n={notice:"알림",confirm:"확인",cancel:"취소",close:"닫기"},l="Markdown 형식으로 답변. 복잡한 내용일 경우 1-3개 관련 출처 링크 추가",c="유용한 어시스턴트",d={planEndTime:"까지",upgradePlan:"플랜 업그레이드",choosePlanTitle:"플랜 선택",choosePlanDescription:"필요에 맞는 요금제 선택",planTiltle:"구독 정보",planDescription:"구독 플랜에 따라 AI 서비스 접근 권한이 결정됩니다",monthly:"월간",yearly:"연간",freePlanName:"무료 플랜",freePlanDesc:"기본 기능 체험",freePlanFeatures:["기본 모델 전환(GPT-4o mini 등)","익명 사용 가능","2대 디바이스 접속","월간 토큰 제한"],basicPlanName:"베이직 플랜",basicPlanDesc:"일상 사용 추천",basicPlanFeatures:["5대 디바이스 접속","월 400만 토큰","확장 모델 사용","파일/음성 기능(예정)"],basicAnnualSaveText:"48% 절약",proPlanName:"프리미엄 플랜",proPlanDesc:"고급 사용자용",proPlanFeatures:["10대 디바이스 접속","모든 모델 잠금 해제","월 추가 400만 토큰","우선 접속 권한"],proAnnualSaveText:"45% 절약",firstMonth:"첫 달",after:"이후",perMonth:"/월",perYear:"/년",yearlyPay:"연간 결제",recommended:"추천",current:"현재",selectPlan:"구독",currentPlan:"해지",priceTotal:"총액",priceComparisonTitle:"AI 서비스 가격 비교",priceComparisonDesc:"개별 구독 대비 최대 60% 절약",priceComparisonService:"서비스",priceComparisonMonthly:"월간",priceComparisonAnnual:"연간",priceComparisonGPT:"GPT",priceComparisonClaude:"Claude",priceComparisonGemini:"Gemini",priceComparisonOurPlan:"통합 플랜",priceComparisonConclusion:"한 번의 결제로 다중 AI 서비스 이용",limitedOffer:"한정 특가",limitedTime:"한정 기간",save:"절약",specialPrice:"특별가",faqTitle:"자주 묻는 질문",faqQ1:"구독 해지 방법?",faqA1:"계정 설정에서 언제든 해지 가능",faqQ2:"영수증 발급?",faqA2:"결제 후 전자영수증 제공",paymentProcessing:"결제 처리 중...",paymentProcessingMessage:"잠시 기다려주세요",paymentSuccess:"결제 성공",paymentSuccessMessage:"결제가 완료되었습니다!",paymentFailure:"결제 실패",paymentFailureMessage:"결제 실패. 결제 정보 확인 후 재시도해주세요.",paymentLinkError:"결제 링크 획득 실패",close:"닫기",saveMore:"20% 추가 절약",mostPopular:"베스트셀러",then:"이후",save20:"20% 절약",allInOne:"통합 솔루션",priceNote:"GPT-4/Claude/Gemini Pro 통합 구독"},m=["📝 공식 커버레터 작성 시 주의사항?","⏰ 실용적인 시간 관리 방법?","🍳 간단한 아침 식사 추천?","💡 기억력 향상 방법?","📚 효과적인 학습법?","💡 신기술 빠르게 습득하는 방법?","📖 추천 클래식 도서?","💼 면접 시 주의사항?","🌍 새 언어 배우기 최적 방법?","💻 업무 효율성 도구?","📅 주간 학습 계획표 작성법?","💰 초보자를 위한 재테크 팁?","🎨 창의적 사고 훈련법?","📷 고품질 사진 촬영 요령?","🚀 일상 효율성 높이는 방법?","✈️ 효율적인 여행 계획법?","💪 일상 속 간단 운동법?","😌 스트레스 완화 방법?","🍴 가족 저녁 메뉴 추천?","🌙 빨리 잠드는 방법?","🌌 우주의 기원은?","🔬 유전자가 건강에 미치는 영향?","🚀 화성 탐사의 의미는?","🌍 지구온난화 해결책?","🔬 복제 기술의 미래?","⚡ 양자컴퓨터 작동 원리?","💊 유전자 치료 메커니즘?","🌊 심해 탐사가 가져올 발견?","☄️ 소행성 충돌 확률은?","🌟 블랙홀이 물질을 삼킬까?","🎨 추상예술의 핵심은?","🎭 연극이 관객에게 미치는 영향?","📷 사진으로 감정 표현법?","🎵 클래식 음악의 뇌 영향?","🎨 예술창작 감정 표현법?","🎥 영화 감독의 스토리텔링 기술?","🎨 색상 조합이 예술에 미치는 영향?","📚 문학이 문화를 형성하는 방식?","🎻 음악이 세계공통어인 이유?","📜 고대 이집트 문명 발전사?","🏰 중세 유럽 주요 사건?","⚔️ 2차 세계대전 원인?","💡 대항해시대의 영향?","💡 미국 독립전쟁의 의미?","🌍 글로벌화가 사회에 미친 변화?","💡 사회적 공정성 달성 방법?","💡 도시화가 초래한 문제점?","📢 SNS가 사회행동에 미친 영향?","👨‍👩‍👧‍👦 가족구조 변화의 영향?","📈 인플레이션이란?","💹 주식시장 기초지식?","🏦 중앙은행의 경제 영향력?","💼 창업의 가장 큰 도전과제?","🌐 디지털 경제가 세계시장에 미친 변화?","⚽ 축구가 세계 1위 스포츠인 이유?","🏀 농구 기본 규칙?","💪 올림픽의 역사적 의미?","🎾 스포츠가 건강에 미치는 영향?","🎾 테니스 기본 전략?","📖 소설의 핵심 요소?","📖 문학이 사회를 반영하는 방식?","📚 세계문학 명작 추천?","🎭 비극과 희극의 차이점?","📖 시 쓰는 방법?"],p={ERR:e,home:r,login:o,settings:t,topbar:a,app:i,code:s,window:n,aisystem:l,aisystem2:c,pricing:d,promptRefer:m};export{e as ERR,l as aisystem,c as aisystem2,i as app,s as code,p as default,r as home,o as login,d as pricing,m as promptRefer,t as settings,a as topbar,n as window};
