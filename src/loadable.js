import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    <h1>Loading...</h1>
  </div>
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

const AllEars = Loadable({
  loader: () => import('./components/view/all_ears/AllEars'),
  loading: Loading,
});

export default {
  Intro,
  Title,
  Main,
  About,
  SignIn,
  AllEars,
};
