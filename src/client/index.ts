/**
 * Loaders
 */
require('./loaders/lang.loader');

/**
 * Libraries
 */
require('./lib/spot');

/**
 * Modules
 */
require('./modules/player');

mp.events.call('clientLaunched');
