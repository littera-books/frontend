import React from 'react';
import Loadable from 'react-loadable';
import StyledBase from './styled_base/Wrapper';

const Loading = () => (
  <StyledBase.FlexWrapper>
    <h1>Loading...</h1>
  </StyledBase.FlexWrapper>
);

const Intro = Loadable({
  loader: () => import('./components/view/intro/Intro'),
  loading: Loading,
});

const Title = Loadable({
  loader: () => import('./components/structure/title/Title'),
  loading: Loading,
});

const Footer = Loadable({
  loader: () => import('./components/structure/footer/Footer'),
  loading: () => null,
});

const BusinessInfo = Loadable({
  loader: () => import('./components/view/business_info/BusinessInfo'),
  loading: Loading,
});

const PrivacyPolicy = Loadable({
  loader: () => import('./components/view/privacy_policy/PrivacyPolicy'),
  loading: Loading,
});

const TermsOfUse = Loadable({
  loader: () => import('./components/view/terms_of_use/TermsOfUse'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import('./components/view/main/Main'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./components/view/about/About'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./components/auth/signin/SignIn'),
  loading: Loading,
});

const SignOut = Loadable({
  loader: () => import('./components/auth/signout/SignOut'),
  loading: Loading,
});

const ForgotPassword = Loadable({
  loader: () => import('./components/auth/forgot_password/ForgotPassword'),
  loading: Loading,
});

const Survey = Loadable({
  loader: () => import('./components/view/join/Survey'),
  loading: Loading,
});

const Accept = Loadable({
  loader: () => import('./components/view/join/Accept'),
  loading: Loading,
});

const AddInfo = Loadable({
  loader: () => import('./components/view/join/AddInfo'),
  loading: Loading,
});

const Log = Loadable({
  loader: () => import('./components/view/log/Log'),
  loading: Loading,
});

const MyInfo = Loadable({
  loader: () => import('./components/view/my_info/MyInfo'),
  loading: Loading,
});

const ManageMyInfo = Loadable({
  loader: () => import('./components/view/my_info/ManageMyInfo'),
  loading: Loading,
});

const PatchPassword = Loadable({
  loader: () => import('./components/view/my_info/PatchPassword'),
  loading: Loading,
});

const Resign = Loadable({
  loader: () => import('./components/view/my_info/Resign'),
  loading: Loading,
});

const ResignSurvey = Loadable({
  loader: () => import('./components/send_letter/ResignSurvey'),
  loading: Loading,
});

const LetterBox = Loadable({
  loader: () => import('./components/view/letter_box/LetterBox'),
  loading: Loading,
});

const LetterBoxDetail = Loadable({
  loader: () => import('./components/view/letter_box/LetterBoxDetail'),
  loading: Loading,
});

const BonVoyage = Loadable({
  loader: () => import('./components/view/bon_voyage/BonVoyage'),
  loading: Loading,
});

const Payment = Loadable({
  loader: () => import('./components/view/bon_voyage/Payment'),
  loading: Loading,
});

const Product = Loadable({
  loader: () => import('./components/view/bon_voyage/Product'),
  loading: Loading,
});

const AllEars = Loadable({
  loader: () => import('./components/view/all_ears/AllEars'),
  loading: Loading,
});

const SendLetter = Loadable({
  loader: () => import('./components/send_letter/SendLetter'),
  loading: Loading,
});

const SimplePopup = Loadable({
  loader: () => import('./components/structure/popup/SimplePopup'),
  loading: () => null,
});

const ConfirmPopup = Loadable({
  loader: () => import('./components/structure/popup/ConfirmPopup'),
  loading: () => null,
});

const FormPopup = Loadable({
  loader: () => import('./components/structure/popup/FormPopup'),
  loading: () => null,
});

export default {
  Intro,
  Title,
  Footer,
  BusinessInfo,
  PrivacyPolicy,
  TermsOfUse,
  Main,
  About,
  SignIn,
  SignOut,
  ForgotPassword,
  Survey,
  Accept,
  AddInfo,
  Log,
  MyInfo,
  ManageMyInfo,
  PatchPassword,
  Resign,
  ResignSurvey,
  LetterBox,
  LetterBoxDetail,
  BonVoyage,
  Payment,
  Product,
  AllEars,
  SendLetter,
  SimplePopup,
  ConfirmPopup,
  FormPopup,
};
