export enum RageEvent {
  ENTITY_CREATED = 'entityCreated',
  ENTITY_DESTROYED = 'entityDestroyed',
  ENTITY_MODEL_CHANGE = 'entityModelChange',
  PLAYER_CHAT = 'playerChat',
  PLAYER_COMMAND = 'playerCommand',
  PLAYER_DAMAGE = 'playerDamage',
  PLAYER_DEATH = 'playerDeath',
  PLAYER_ENTER_CHECKPOINT = 'playerEnterCheckpoint',
  PLAYER_ENTER_COLSHAPE = 'playerEnterColshape',
  PLAYER_ENTER_VEHICLE = 'playerEnterVehicle',
  PLAYER_EXIT_CHECKPOINT = 'playerExitCheckpoint',
  PLAYER_EXIT_COLSHAPE = 'playerExitColshape',
  PLAYER_EXIT_VEHICLE = 'playerExitVehicle',
  PLAYER_JOIN = 'playerJoin',
  PLAYER_MARK_WAYPOINT = 'playerMarkWaypoint',
  PLAYER_QUIT = 'playerQuit',
  PLAYER_REACH_WAYPOINT = 'playerReachWaypoint',
  PLAYER_READY = 'playerReady',
  PLAYER_SPAWN = 'playerSpawn',
  PLAYER_START_ENTER_VEHICLE = 'playerStartEnterVehicle',
  PLAYER_START_EXIT_VEHICLE = 'playerStartExitVehicle',
  PLAYER_STREAM_IN = 'playerStreamIn',
  PLAYER_STREAM_OUT = 'playerStreamOut',
  PLAYER_WEAPON_CHANGE = 'playerWeaponChange',
  TRAILER_ATTACHED = 'trailerAttached',
  VEHICLE_DAMAGE = 'vehicleDamage',
  VEHICLE_HORN_TOGGLE = 'vehicleHornToggle',
  VEHICLE_SIREN_TOGGLE = 'vehicleSirenToggle',
  VEHICLE_STREAM_IN = 'vehicleStreamIn',
  VEHICLE_STREAM_OUT = 'vehicleStreamOut'
}

export interface RageModule {
  /**
   * This event is triggered when a player send a message in the chat.
   * 
   * @param player - Player who sent the message
   * @param message - The text that was sent
   */
  playerChat?(player: PlayerMp, message: string): void;

  /**
   * This event is triggered when a player joins the server.
   * 
   * @param player - Player who joined
   */
  playerJoin?(player: PlayerMp): void;
}
