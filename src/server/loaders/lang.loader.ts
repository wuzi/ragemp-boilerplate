import i18next from 'i18next';
import logger from '../utils/logger.util';

// languages
import en from '../lang/en';

const languageLoader = (): void => {
  try {
    i18next.init({
      lng: process.env.LANGUAGE,
      resources: {
        en,
      }
    });
    logger('loaders', 'Loaded languages successfully!', 'info');
  } catch (err) {
    logger('loader', `Error while loading languages (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

export default languageLoader;
