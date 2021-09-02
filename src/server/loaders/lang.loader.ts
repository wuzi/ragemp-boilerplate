import i18next from 'i18next';
import logger from '../utils/logger.util';
import en from '../lang/en';

export class LangLoader {
  /**
   * Loads the gamemode languages
   */
  public static async load(): Promise<void> {
    try {
      i18next.init({
        lng: process.env.LANGUAGE,
        resources: {
          en,
        }
      });
      logger('loaders', 'Loaded languages successfully!', 'info');
    } catch (err) {
      logger('loader', `Error while loading languages (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
    }
  }
}
