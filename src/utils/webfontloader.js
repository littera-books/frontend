import Webfont from 'webfontloader';
import dataConfig from '../dataConfig';

Webfont.load({
  custom: {
    families: ['Nanum Myeongjo'],
    urls: [dataConfig.fontUrl],
  },
});
