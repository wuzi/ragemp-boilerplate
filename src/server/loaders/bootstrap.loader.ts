import Vehicle from '../models/vehicle.model';
import logger from '../utils/logger.util';

/**
 * Spawn entities into world
 */
const bootstrapLoader = async (): Promise<void> => {
  try {
    /**
     * Load all entities asynchronously
     */
    const [vehicles] = await Promise.all([Vehicle.find()]);

    for (const vehicle of vehicles) {
      vehicle.spawn();
    }

    logger('loaders', 'Game successfully bootstrapped!', 'info');
  } catch (err) {
    logger('loaders', `Error while bootstrapping game (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
  }
};

export default bootstrapLoader;
