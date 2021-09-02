import { RageModule } from '../../interfaces/module.interface';

export class PlayerModule implements RageModule {
  public playerJoin(player: PlayerMp): void {
    player.call('playerConnect', [{ lang: process.env.LANGUAGE }]);
  }
}
