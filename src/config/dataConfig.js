const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.littera.co.kr'
  : 'http://localhost:8000';

const dataConfig = {
  baseUrl,
  fontUrl: [
    'https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700&amp;subset=korean',
    'https://fonts.googleapis.com/css?family=Gothic+A1',
  ],
  siteUrl: 'https://www.littera.co.kr',
  daumPostApiUrl:
    'https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false',
  siteTitle: 'LITTERA',
  aboutText:
    '“그 달콤한 고독을 누가 마다할까! 우리에게 필요한 것은 고독이 아닌 고립이다. 더 철저하게 혼자가 될 것, '
    + '그것만이 우리 자신이 되는 유일한 길이라는 것을 우리는 이미 알고 있다. '
    + '미래에서 만나자 친구여, 우리가 앞날에 두고 온 그 날에.”',
  placeholderText: "You're gonna say...",
  resignSurveyText: '"Please tell us why are you leaving."',
  surveyDeniedText: 'You have already completed the survey.',
  emptyOrderText: 'You have no order yet.',
  sendEmailText: '"Here I am all ears, please speak."',
  copyright: 'Copyright © 2019 by LITTERA. All rights Reserved.',
  copyrightSmall: '© LITTERA',
  alertMessage: {
    intro: 'Scripta Manent Verba Volant',
    payment: ['Welcome aboard', "we'll please to bring the book for you soon."],
    signOut: 'Farewell,',
    signUp: 'Please check your email to activate your login account.',
    resetPassword: 'Please check your email account.',
    resign: 'So Long, and Thanks for All the Fish!',
  },
  qnaMessage: {
    meaning: {
      id: 'meaning',
      question: '리테라는 무슨 뜻인가요?',
      answer:
        "'리테라(LITTERA)'는 자음과 모음을 뜻하는 라틴어 낱말로서, 영어의 '알파벳(alphabet)'에 해당합니다. "
        + "하지만 알파벳이 단순히 그리스어의 첫 자모인 '알파(alpha)'와 '베타(beta)'의 합성어인 반면, "
        + '리테라는 기록된 것, 새겨진 것으로서의 문자라는 의미를 어원으로 갖습니다. '
        + "이러한 낱말의 의미는 문자나 문서를 뜻하는 'letter', 문학이나 문헌을 의미하는 'literature', "
        + "문자를 읽고 쓰고 이해할 수 있는 능력인 문해력을 가리키는 'literacy' 등의 현대어로 고스란히 이어져 있습니다.",
    },
    what: {
      id: 'what',
      question: '리테라는 어떤 서비스인가요?',
      answer: `책을 고를 때면 가끔 막막한 순간이 있습니다.\n*\n
      '내가 찾는 내용이 이 책에 있을까?'\n
      '유명한 책이긴 한데 재미가 있을까?'\n
      '베스트셀러라고는 하지만 내 취향에는 맞지 않는 것 같은데...'\n*\n
      리테라는 매월 당신에게 꼭 맞는 한 권의 책을, 당신이 미처 몰랐지만 읽고 싶었고 읽어야 했을 바로 그 책을 당신에게 보내드립니다.`,
    },
    recommandation: {
      id: 'recomandation',
      question: '책 추천은 어떻게 이루어지나요?',
      answer:
        '회원 가입 후 회원정보 메뉴에 있는 아홉 개의 간단한 문항에 답해주세요. '
        + '리테라는 당신의 대답을 바탕으로 당신이 읽을 책을 찾습니다. 읽고 싶은 주제나 알고 싶은 분야, 필요한 내용이나 관심사가 있다면 언제든 알려주세요. '
        + '당신이 읽어야 할 책을 리테라가 찾겠습니다.',
    },
    delivery: {
      id: 'delivery',
      question: '책은 언제 받을 수 있나요?',
      answer: `리테라는 당신에게 매월 한 권의 책을 전달합니다. 리테라의 책은 구매 익월부터 매월 첫째 주에 당신을 찾아갑니다.\n
      우리는 기다림도 즐거움이 될 수 있다고 생각합니다. 때로 책의 시간은 분초를 다투는 일상의 시간과는 다르게 흘러갈 테니까요.`,
    },
  },
  businessInfo: {
    ko: [
      '(01365) 서울특별시 도봉구 삼양로162가길 42-19',
      '사업자등록번호: 255-88-01062',
      '통신판매업신고: 제2018-서울도봉-0707호',
      '대표전화: 02-963-7488',
      '전자우편: info@littera.co.kr',
      '대표이사: 김근복',
      '개인정보관리책임자: 김근복',
    ],
    en: [
      '(01365) 42-19, Samyang-ro 162ga-gil, Dobong-gu, Seoul, Republic of Korea',
      'Business Registration: 255-88-01062',
      'Mail Order Business: 2018-Seouldobong-0707',
      'Contact: +82+2+963+7488',
      'E-Mail: info@littera.co.kr',
      'Representative Director: Keunbok Kim',
      'PI Mananger: Keunbok Kim',
    ],
  },
  paymentMsg: [
    '국민은행 031601-04-212703 (예금주 주식회사 리테라)',
    '- 주문 후 3일 이내 미입금 시 자동으로 주문이 취소됩니다.',
    '- 입금자 이름은 회원명과 동일해야 합니다.',
  ],
  orderMsg: [
    '주문할 상품의 상품명, 가격, 배송 정보 등을 확인했으며,',
    '구매에 동의하십니까? (전자상거래법 제 8조 2항)',
  ],
};

module.exports = dataConfig;
