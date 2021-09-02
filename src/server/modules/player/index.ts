import { RageModule } from '../../interfaces/module.interface';

export class PlayerModule implements RageModule {
  public playerJoin(player: PlayerMp): void {
    player.call('changeLanguage', [{ lang: process.env.LANGUAGE }]);
  }
}
