import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => (
  <div>
    <h1>Loading...</h1>
  </div>
);

const Intro = Loadable({
  loader: () => import('./components/intro/Intro'),
  loading: Loading,
});

const Title = Loadable({
  loader: () => import('./components/title/Title'),
  loading: Loading,
});

const Main = Loadable({
  loader: () => import('./components/main/Main'),
  loading: Loading,
});

export default {
  Intro,
  Title,
  Main,
};
