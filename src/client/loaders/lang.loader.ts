import 'lib/i18next';

// languages
import en from 'lang/en';

i18next.init({
  lng: 'en',
  resources: {
    en,
  },
});

// change language to the one set in .env
mp.events.add('playerConnect', (data: { lang: string }) => {
  i18next.changeLanguage(data.lang);
});
