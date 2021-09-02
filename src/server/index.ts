import dotenv from 'dotenv';
import { DatabaseLoader } from './loaders/database.loader';
import { LangLoader } from './loaders/lang.loader';
import { BootstrapLoader } from './loaders/bootstrap.loader';
import { ModuleLoader } from './loaders/module.loader';

async function bootstrap(): Promise<void> {
  dotenv.config();

  await DatabaseLoader.load();

  await Promise.all([
    LangLoader.load(),
    BootstrapLoader.load(),
    ModuleLoader.load(),
  ]);
}

bootstrap();
