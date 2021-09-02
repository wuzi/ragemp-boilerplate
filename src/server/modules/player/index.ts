import { RageModule } from '../../types/events.interface';

export class PlayerModule implements RageModule {
  public playerJoin(player: PlayerMp): void {
    player.call('playerConnect', [{ lang: process.env.LANGUAGE }]);
  }
}
