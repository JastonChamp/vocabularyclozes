import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      learnMode: 'Learn Mode',
      reviewMode: 'Review Mode',
      askTutor: 'Ask Tutor'
    }
  },
  zh: {
    translation: {
      home: '主页',
      learnMode: '学习模式',
      reviewMode: '复习模式',
      askTutor: '问导师'
    }
  }
};

void i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
