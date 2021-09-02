export enum RageEvent {
  BROWSER_CREATED = 'browserCreated',
  BROWSER_DOM_READY = 'browserDomReady',
  BROWSER_LOADING_FAILED = 'browserLoadingFailed',
  ENTITY_CREATED = 'entityCreated',
  ENTITY_STREAM_IN = 'entityStreamIn',
  ENTITY_STREAM_OUT = 'entityStreamOut',
  GUI_READY = 'guiReady',
  CLICK = 'click',
  PLAYER_CHAT = 'playerChat',
  PLAYER_CREATE_WAYPOINT = 'playerCreateWaypoint',
  PLAYER_COMMAND = 'playerCommand',
  PLAYER_DEATH = 'playerDeath',
  PLAYER_ENTER_CHECKPOINT = 'playerEnterCheckpoint',
  PLAYER_ENTER_COLSHAPE = 'playerEnterColshape',
  PLAYER_EXIT_CHECKPOINT = 'playerExitCheckpoint',
  PLAYER_EXIT_COLSHAPE = 'playerExitColshape',
  PLAYER_JOIN = 'playerJoin',
  PLAYER_QUIT = 'playerQuit',
  PLAYER_REACH_WAYPOINT = 'playerReachWaypoint',
  PLAYER_READY = 'playerReady',
  PLAYER_RESURRECT = 'playerResurrect',
  PLAYER_RULE_TRIGGERED = 'playerRuleTriggered',
  PLAYER_SPAWN = 'playerSpawn',
  PLAYER_START_TALKING = 'playerStartTalking',
  PLAYER_STOP_TALKING = 'playerStopTalking',
  PLAYER_WEAPON_SHOT = 'playerWeaponShot',
  RENDER = 'render',
  VEHICLE_DEATH = 'vehicleDeath',
  CLIENT_LAUNCHED = 'clientLaunched',
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

  /**
   * Event called after the player has loaded all client scripts
   */
  clientLaunched?(): void;
}
