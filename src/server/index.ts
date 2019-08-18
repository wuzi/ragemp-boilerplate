import dotenv from 'dotenv';
import databaseLoader from './database';
import languageLoader from './loaders/lang.loader';
import moduleLoader from './loaders/module.loader';
dotenv.config();

/**
 * Connect to database before anything else
 */
(async (): Promise<void> => {
  await databaseLoader();
  languageLoader();
  moduleLoader();
})();
