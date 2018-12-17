const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://api.littera.co.kr'
  : 'http://localhost:8000';

export default {
  baseUrl,
  fontUrl:
    'https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700&amp;subset=korean',
  daumPostApiUrl:
    'https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false',
  siteTitle: 'Littera',
  introText: 'Scripta Manent Verba Volant',
  aboutText:
    '“그 달콤한 고독을 누가 마다할까. 우리에게 필요한 것은 고독이 아닌 고립이다. 더 철저하게 혼자가 될 것. '
    + '그것만이 우리 자신이 되는 유일한 길이라는 것을 우리는 이미 알고 있다. '
    + '미래에서 만나자 친구여, 우리가 앞날에 두고 온 그 날에.”',
  resignSurveyText: 'Please tell us why are you leaving.',
  copyright: 'Copyright © 2018 by LITTERA. All rights Reserved.',
  popupMessage: {
    accepted: {
      header: 'Accepted',
      message: 'Welcome!',
    },
    denied: {
      header: 'Denied',
      message: 'Sorry, you are not invited!',
    },
    signUp: {
      header: 'Sign Up',
      message: 'Welcome Aboard! Please check your email to activate account.',
    },
    signIn: {
      header: 'Sign In',
      message: 'Welcome Aboard!',
    },
    signOut: {
      header: 'Sign Out',
      message: 'Fare Well.',
    },
    resetPassword: {
      header: 'Reset Password',
      message: 'Please check your email to get password',
    },
    resign: {
      header: 'Resign',
      message: 'Are you sure want to quit?',
    },
    resignButtons: {
      confirm: "Of course I'm sure.",
      cancel: 'Oops, butt call!',
    },
    resignSurvey: {
      header: 'Resign',
      message: 'So Long, and thanks for all the fish!',
    },
    subscription: {
      header: 'Promotion',
      message: 'Please check your promotion code.',
    },
    subscriptionButtons: {
      confirm: 'confirm',
      cancel: 'cancel',
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
};
