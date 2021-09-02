import glob from 'glob';
import * as path from 'path';
import { RageEvent } from '../types/events.interface';
import logger from '../utils/logger.util';

/**
 * Loads everything inside modules folder
 */
export default async function (): Promise<void> {
  try {
    const modulesPath = __dirname + '/../modules/';
    const files = glob.sync(modulesPath + '/**/*.js');
    const modules = await Promise.all(files.map(file => (
      import(path.resolve(modulesPath, file))))
    );

    for (const classes of modules) {
      for (const c in classes) {
        if (typeof classes[c] == 'function') {
          const instance = new classes[c]();
          for (const method of Reflect.ownKeys(Object.getPrototypeOf(instance))) {
            if (typeof method === 'string' && typeof instance[method] == 'function') {
              if (Object.values(RageEvent).includes(method as RageEvent)) {
                mp.events.add(method, instance[method]);
              }
            }
          }
        }
      }
    }

    logger('loaders', 'Loaded modules successfully!', 'info');
  } catch (err) {
    logger('loader', `Error while loading a module (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
  }
}
