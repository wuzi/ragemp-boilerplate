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
