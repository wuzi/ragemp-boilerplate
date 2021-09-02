import glob from 'glob';
import logger from '../utils/logger.util';

/**
 * Loads everything inside modules folder
 */
export default async function (): Promise<void> {
  try {
    glob.sync(__dirname + '/../modules/' + '/**/*.js').forEach((file: string) => {
      require(file);
    });
    logger('loaders', 'Loaded modules successfully!', 'info');
  } catch (err) {
    logger('loader', `Error while loading a module (Error: ${err instanceof Error ? err.message : ''})!`, 'error');
  }
}
