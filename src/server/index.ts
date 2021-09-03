import dotenv from 'dotenv';
import { DatabaseLoader, LangLoader, BootstrapLoader, ModuleLoader } from './loaders';

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
