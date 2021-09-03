import { RageEvent } from '../core';
import modules from '../modules';
import logger from '../utils/logger.util';

export class ModuleLoader {
  /**
   * Load all exported modules
   */
  public static async load(): Promise<void> {
    try {
      for (const mod of modules) {
        const instance = new mod() as any;// eslint-disable-line @typescript-eslint/no-explicit-any
        for (const method of Reflect.ownKeys(Object.getPrototypeOf(instance))) {
          if (
            typeof method === 'string' &&
            typeof instance[method] == 'function'
          ) {
            if (Object.values(RageEvent).includes(method as RageEvent)) {
              mp.events.add(method, instance[method].bind(instance));
            }
          }
        }
      }
  
      logger('loaders', 'Loaded modules successfully!', 'info');
    } catch (err) {
      logger('loader', `Error while loading a module (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
    }
  }
}
