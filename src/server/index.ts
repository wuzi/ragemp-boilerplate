import dotenv from 'dotenv';
import databaseLoader from './database';
import moduleLoader from './loaders/module.loader';
dotenv.config();

/**
 * Connect to database before anything else
 */
(async () => {
  await databaseLoader();
  moduleLoader();
})();
