import mongoose from 'mongoose';
import logger from '../utils/logger.util';

export default async function (): Promise<void> {
  if (!process.env.DATABASE) {
    logger('database', 'Env variable "DATABASE" is not defined!', 'error');
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE);
    logger('database', 'Database connected successfully.', 'info');
  } catch (err) {
    logger('database', `Could not connnect to database (Error: ${err instanceof Error ? err.message : ''}).`, 'error');
  }
}
