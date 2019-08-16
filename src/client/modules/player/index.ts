import { hideHudElements } from 'utils/hud';

/**
 * Event called after the player has loaded all client scripts
 */
mp.events.add('playerConnect', (): void => {
  hideHudElements([1, 3]);
  mp.nametags.enabled = false;
  mp.discord.update('RAGE', 'Boilerplate');
  mp.game.vehicle.defaultEngineBehaviour = false;
});
