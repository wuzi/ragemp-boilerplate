import { config } from 'dotenv';
config({ path: '../../.env' });

import databaseLoader from './database';
databaseLoader();
