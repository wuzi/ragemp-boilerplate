import { LangLoader } from 'loaders/lang.loader';
import { ModuleLoader } from 'loaders/module.loader';
import 'utils/spot';

async function bootstrap(): Promise<void> {
  await Promise.all([
    ModuleLoader.load(),
    LangLoader.load(),
  ]);

  mp.events.call('clientLaunched');
}

bootstrap();
