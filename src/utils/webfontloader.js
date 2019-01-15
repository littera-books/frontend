import Webfont from 'webfontloader';
import dataConfig from '../config/dataConfig';

Webfont.load({
  custom: {
    families: ['Nanum Myeongjo'],
    urls: dataConfig.fontUrl,
  },
});
