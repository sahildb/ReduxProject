import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hn from './hn.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    hn: hn,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;

// import I18n, {getLanguages} from 'react-native-i18n';
// import {en} from './en';
// import {hn} from './hn';

// I18n.translations = {
//   en,
//   hn,
// };

// getLanguages()
//   .then(langauge => {
//     console.log('langauge', langauge);
//   })
//   .catch(e => {
//     console.log('e', e);
//   });
/////////////
// export default I18n;
// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import {en} from './en';
// import {hn} from './hn';

// const resource = {
//   en,
//   hn,
// };

// i18n.use(initReactI18next).init({
//   resource,
//   lng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
