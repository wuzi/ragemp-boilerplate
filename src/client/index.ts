import { LangLoader, ModuleLoader } from 'loaders';
import 'utils/spot';

async function bootstrap(): Promise<void> {
  await Promise.all([
    ModuleLoader.load(),
    LangLoader.load(),
  ]);

  mp.events.call('clientLaunched');
}

bootstrap();
