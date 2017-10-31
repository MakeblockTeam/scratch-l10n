import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import locales from './supported-locales.js';

let localeData = locales;
localeData.en.localeData = en;
localeData.zh.localeData = zh;

export {
    localeData as default
};
