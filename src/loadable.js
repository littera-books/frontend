import React from 'react';
import Loadable from 'react-loadable';
import Wrapper from './styled_base/Wrapper';

const Loading = () => (
  <Wrapper.FlexWrapper>
    <h1>Loading...</h1>
  </Wrapper.FlexWrapper>
);

const Alert = Loadable({
  loader: () => import('./components/structure/alert'),
  loading: Loading,
});

const Header = Loadable({
  loader: () => import('./components/structure/header'),
  loading: () => null,
});

const Footer = Loadable({
  loader: () => import('./components/structure/footer'),
  loading: () => null,
});

const CloseButton = Loadable({
  loader: () => import('./components/structure/close_button'),
  loading: () => null,
});

const BusinessInfo = Loadable({
  loader: () => import('./components/view/business_info'),
  loading: Loading,
});

const PrivacyPolicy = Loadable({
  loader: () => import('./components/view/privacy_policy'),
  loading: Loading,
});

const TermsOfService = Loadable({
  loader: () => import('./components/view/terms_of_service'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import('./components/view/main'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./components/view/about'),
  loading: Loading,
});

const SignIn = Loadable({
  loader: () => import('./components/auth/signin'),
  loading: Loading,
});

const ForgotPassword = Loadable({
  loader: () => import('./components/auth/forgot_password'),
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
  loader: () => import('./components/view/log'),
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
  loader: () => import('./components/view/resign_servey'),
  loading: Loading,
});

const Order = Loadable({
  loader: () => import('./components/view/order'),
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
  loader: () => import('./components/view/all_ears'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./components/view/all_ears/Contact'),
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
  Contact,
};
