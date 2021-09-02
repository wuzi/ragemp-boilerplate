import 'lib/i18next';
import en from 'lang/en';

export class LangLoader {
  /**
   * Load languages
   */
  public static async load(): Promise<void> {
    i18next.init({
      lng: 'en',
      resources: {
        en,
      },
    });
    
    mp.events.add('changeLanguage', (data: { lang: string }) => {
      i18next.changeLanguage(data.lang);
    });
  }
}
