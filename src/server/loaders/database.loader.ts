import mongoose from 'mongoose';
import logger from '../utils/logger.util';

export class DatabaseLoader {
  /**
   * Connects to database
   */
  public static async load(): Promise<void> {
    if (!process.env.DATABASE) {
      throw new Error('Env variable "DATABASE" is not defined!');
    }
  
    try {
      await mongoose.connect(process.env.DATABASE);
      logger('database', 'Database connected successfully.', 'info');
    } catch (err) {
      logger('database', `Could not connnect to database (Error: ${err instanceof Error ? err.message : ''}).`, 'error');
    }
  }
}
