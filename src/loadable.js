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

export default {
  Intro,
};
