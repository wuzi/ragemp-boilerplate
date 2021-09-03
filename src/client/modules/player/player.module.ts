import { RageModule } from 'core';
import { hideHudElements } from 'utils';

export class PlayerModule implements RageModule {
  public clientLaunched(): void {
    hideHudElements([1, 3]);
    mp.nametags.enabled = false;
    mp.discord.update('RAGE', 'Boilerplate');
    mp.game.vehicle.defaultEngineBehaviour = false;
  }
}
