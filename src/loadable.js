import React from 'react';
import Loadable from 'react-loadable';
import StyledBase from './styled/Base';

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

const Survey = Loadable({
  loader: () => import('./components/view/join/Survey'),
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

const Resign = Loadable({
  loader: () => import('./components/view/my_info/Resign'),
  loading: Loading,
});

const VonVoyage = Loadable({
  loader: () => import('./components/view/von_voyage/VonVoyage'),
  loading: Loading,
});

const AllEars = Loadable({
  loader: () => import('./components/view/all_ears/AllEars'),
  loading: Loading,
});

const SimplePopup = Loadable({
  loader: () => import('./components/structure/popup/SimplePopup'),
  loading: Loading,
});

const ConfirmPopup = Loadable({
  loader: () => import('./components/structure/popup/ConfirmPopup'),
  loading: Loading,
});

export default {
  Intro,
  Title,
  Main,
  About,
  SignIn,
  SignOut,
  Survey,
  Log,
  MyInfo,
  ManageMyInfo,
  Resign,
  VonVoyage,
  AllEars,
  SimplePopup,
  ConfirmPopup,
};
