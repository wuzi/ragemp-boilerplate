import Vehicle from '../models/vehicle.model';
import logger from '../utils/logger.util';

/**
 * Spawn entities into world
 */
const bootstrapLoader = async (): Promise<void> => {
  try {
    /**
     * Spawn all entities asynchronously
     */
    await (async (): Promise<void> => {
      /**
       * Load all vehicles and spawn them
       */
      Vehicle.find().then((vehicles): void => {
        for (const vehicle of vehicles) {
          vehicle.spawn();
        }
      });
    })();

    logger('loaders', 'Game successfully bootstrapped!', 'info');
  } catch (err) {
    logger('loaders', `Error while bootstrapping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

export default bootstrapLoader;
