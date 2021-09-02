import { RageModule } from 'interfaces/module.interface';
import { hideHudElements } from 'utils/hud';

export class PlayerModule implements RageModule {
  public clientLaunched(): void {
    hideHudElements([1, 3]);
    mp.nametags.enabled = false;
    mp.discord.update('RAGE', 'Boilerplate');
    mp.game.vehicle.defaultEngineBehaviour = false;
  }
}
