import dotenv from 'dotenv';
import databaseLoader from './loaders/database.loader';
import languageLoader from './loaders/lang.loader';
import bootstrapLoader from './loaders/bootstrap.loader';
import moduleLoader from './loaders/module.loader';
dotenv.config();

/**
 * Connect to database before anything else
 */
(async (): Promise<void> => {
  await databaseLoader();
  languageLoader();
  bootstrapLoader();
  moduleLoader();
})();
