import { RageModule } from 'core';
import { toggleInteractModeCEF } from 'utils';

export class AuthModule implements RageModule {
  public readonly coordinates = {
    camera: {
      start: {
        position: new mp.Vector3(-734.4893, 4441.397, 15.45909),
        rotation: new mp.Vector3(0, 0, 0),
        pointAt: new mp.Vector3(-625.5039, 4449.758, 18.23818),
        fov: 60.0,
      },
      end: {
        position: new mp.Vector3(-625.5039, 4447.758, 18.23818),
        rotation: new mp.Vector3(0, 0, 0),
        pointAt: new mp.Vector3(-528.4624, 4419.629, 30.04474),
        fov: 60.0,
      },
    },
    player: new mp.Vector3(-498.3053, 4348.135, 66.42624),
  };

  public showAuthScene(): void {
    toggleInteractModeCEF(true);

    mp.players.local.position = this.coordinates.player;

    const startCamera = mp.cameras.new(
      'authSceneStartCam',
      this.coordinates.camera.start.position,
      this.coordinates.camera.start.rotation,
      this.coordinates.camera.start.fov,
    );

    startCamera.pointAtCoord(
      this.coordinates.camera.start.pointAt.x,
      this.coordinates.camera.start.pointAt.y,
      this.coordinates.camera.start.pointAt.z,
    );

    const endCamera = mp.cameras.new(
      'authSceneEndCam',
      this.coordinates.camera.end.position,
      this.coordinates.camera.end.rotation,
      this.coordinates.camera.end.fov,
    );

    endCamera.pointAtCoord(
      this.coordinates.camera.end.pointAt.x,
      this.coordinates.camera.end.pointAt.y,
      this.coordinates.camera.end.pointAt.z,
    );

    startCamera.setActive(true);
    endCamera.setActiveWithInterp(startCamera.handle, 90000, 0, 0);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
  }

  public hideAuthScene(): void {
    toggleInteractModeCEF(false);

    mp.game.cam.renderScriptCams(false, false, 0, true, false);
  }

  public clientLaunched(): void {
    this.showAuthScene();
  }
}
