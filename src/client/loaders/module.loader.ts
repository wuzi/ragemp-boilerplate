import { RageEvent } from 'core';
import modules from 'modules';

export class ModuleLoader {
  /**
   * Load all exported modules
   */
  public static async load (): Promise<void> {
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
  
      mp.console.logInfo('Loaded modules successfully!');
    } catch (err) {
      mp.console.logError('Error while loading a module!');
    }
  }
}
