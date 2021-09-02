import { RageEvent } from '../types/events.interface';
import logger from '../utils/logger.util';
import modules from '../modules';

/**
 * Load all exported modules
 */
export default async function (): Promise<void> {
  try {
    for (const mod of modules) {
      const instance = new mod();
      for (const method of Reflect.ownKeys(Object.getPrototypeOf(instance))) {
        if (
          typeof method === 'string' &&
          typeof instance[method as never] == 'function'
        ) {
          if (Object.values(RageEvent).includes(method as RageEvent)) {
            mp.events.add(method, instance[method as never]);
          }
        }
      }
    }

    logger('loaders', 'Loaded modules successfully!', 'info');
  } catch (err) {
    logger('loader', `Error while loading a module (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
  }
}
