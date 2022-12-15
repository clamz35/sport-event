import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';

import fr from './locales/fr';
import en from './locales/en';

import './assets/styles/tailwind.scss';
import './assets/styles/styles.scss';
import { VueQueryPlugin } from '@tanstack/vue-query';

type MessageSchema = typeof en;
type AppLocales = 'fr' | 'en';

const i18n = createI18n<[MessageSchema], AppLocales>({
  legacy: false,
  locale: navigator.language, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    fr,
    en,
  }, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

const app = createApp(App);

app.use(router).use(i18n).use(VueQueryPlugin);

app.mount('#app');
