mp.events.add('playerJoin', (player: PlayerMp) => {
  player.call('playerConnect', [{ lang: process.env.LANGUAGE }]);
});
