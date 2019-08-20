import Vehicle from '../models/vehicle.model';
import logger from '../utils/logger.util';

/**
 * Spawn entities into world
 */
const bootstrapLoader = async (): Promise<void> => {
  try {
    /**
     * Load all vehicles and spawn them
     */
    const vehicles = await Vehicle.find();
    for (const vehicle of vehicles) {
      vehicle.spawn();
    }

    logger('loaders', 'Game successfully bootstrapped!', 'info');
  } catch (err) {
    logger('loaders', `Error while bootstrapping game (Error: ${err.message} / ${err.stack})!`, 'error');
  }
};

export default bootstrapLoader;
