export class PlayerUtil {
  /**
   * Return the player(s) that match the id or name provided
   * @param {string} idOrName Id or (part of the) name of the player
   * @return {PlayerMp | PlayerMp[] | undefined} Returns a single PlayerMp if only one player is found,
   * an array of PlayerMp if multiple players are found or undefined if none is found
   */
  public static findPlayer(idOrName: string): PlayerMp | PlayerMp[] | undefined {
    if (!Number.isNaN(+idOrName))
      return mp.players.at(+idOrName);

    let found = 0;
    const players: Array<PlayerMp> = [];
    idOrName = idOrName.replace('_', ' ').toLowerCase();

    mp.players.forEach((player: PlayerMp) => {
      const name = player.name.toLowerCase();
      if (name.indexOf(idOrName.toString()) >= 0) {
        players.push(player);
        found++;
      }
    });

    if (found == 0) return undefined;
    else if (found > 1) return players;
    else return players[0];
  }
}
