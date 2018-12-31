import React from 'react';
import Loadable from 'react-loadable';
import StyledBase from './styled_base/Wrapper';

const Loading = () => (
  <StyledBase.FlexWrapper>
    <h1>Loading...</h1>
  </StyledBase.FlexWrapper>
);

const Alert = Loadable({
  loader: () => import('./components/structure/alert/Alert'),
  loading: Loading,
});

const Header = Loadable({
  loader: () => import('./components/structure/header/Header'),
  loading: () => null,
});

const Footer = Loadable({
  loader: () => import('./components/structure/footer/Footer'),
  loading: () => null,
});

const CloseButton = Loadable({
  loader: () => import('./components/structure/close_button/CloseButton'),
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

const TermsOfService = Loadable({
  loader: () => import('./components/view/terms_of_service/TermsOfService'),
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

const ForgotPassword = Loadable({
  loader: () => import('./components/auth/forgot_password/ForgotPassword'),
  loading: Loading,
});

const Survey = Loadable({
  loader: () => import('./components/view/join/Survey'),
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
  loader: () => import('./components/view/resign_servey/ResignSurvey'),
  loading: Loading,
});

const Order = Loadable({
  loader: () => import('./components/view/order/Order'),
  loading: Loading,
});

const BonVoyage = Loadable({
  loader: () => import('./components/view/bon_voyage/BonVoyage'),
  loading: Loading,
});

const ProductDetail = Loadable({
  loader: () => import('./components/view/bon_voyage/ProductDetail'),
  loading: Loading,
});

const Payment = Loadable({
  loader: () => import('./components/view/bon_voyage/Payment'),
  loading: Loading,
});

const AllEars = Loadable({
  loader: () => import('./components/view/all_ears/AllEars'),
  loading: Loading,
});

export default {
  Alert,
  Header,
  Footer,
  CloseButton,
  BusinessInfo,
  PrivacyPolicy,
  TermsOfService,
  Main,
  About,
  SignIn,
  ForgotPassword,
  Survey,
  AddInfo,
  Log,
  MyInfo,
  ManageMyInfo,
  PatchPassword,
  Resign,
  ResignSurvey,
  Order,
  BonVoyage,
  ProductDetail,
  Payment,
  AllEars,
};
