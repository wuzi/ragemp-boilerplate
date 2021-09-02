import dotenv from 'dotenv';
import databaseLoader from './loaders/database.loader';
import languageLoader from './loaders/lang.loader';
import bootstrapLoader from './loaders/bootstrap.loader';
import moduleLoader from './loaders/module.loader';
dotenv.config();

async function bootstrap(): Promise<void> {
  await databaseLoader();

  await Promise.all([
    languageLoader(),
    bootstrapLoader(),
    moduleLoader(),
  ]);
}

bootstrap();
