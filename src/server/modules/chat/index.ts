/**
 * This event is triggered when a player send a message in the chat.
 *
 * @param {PlayerMp} player - The player who sent the message
 * @param {string} message - The message sent
 */
mp.events.add('playerChat', (player: PlayerMp, message: string) => {
  mp.players.broadcast(`${player.name}: ${message}`);
});
