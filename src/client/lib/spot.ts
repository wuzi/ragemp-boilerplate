const spots: SpotMp[] = [];

class SpotMp {
  public position: Vector3Mp;

  constructor(private blip: BlipMp, private marker: MarkerMp, private colshape: ColshapeMp) {
    this.position = marker.position;
  }

  public getColshape(): ColshapeMp {
    return this.colshape;
  }

  public destroy(): void {
    if (mp.blips.exists(this.blip)) this.blip.destroy();
    if (mp.markers.exists(this.marker)) this.marker.destroy();
    if (mp.colshapes.exists(this.colshape)) this.colshape.destroy();

    const i = spots.findIndex((spot) => { return this == spot; });
    if (i != -1) spots.splice(i, 1);
  }
}

class SpotMpPool {
  public static new(type: number, position: Vector3Mp, scale: number, options?: {
    marker?: {
      bobUpAndDown?: boolean;
      color?: RGBA;
      dimension?: number;
      direction?: Vector3Mp;
      rotation?: Vector3Mp;
      visible?: boolean;
    };
    blip?: {
      alpha?: number;
      color?: number;
      dimension?: number;
      drawDistance?: number;
      name?: string;
      rotation?: number;
      scale?: number;
      shortRange?: boolean;
    };
  }): SpotMp {
    const blip = mp.blips.new(1, position, options ? options.blip : undefined);
    const marker = mp.markers.new(type, position, scale, options ? options.marker : undefined);
    const colshape = mp.colshapes.newSphere(position.x, position.y, position.z, scale / 2);
    const spot = new SpotMp(blip, marker, colshape);

    spots.push(spot);
    return spot;
  }
}

mp.events.add('playerEnterColshape', (colshape: ColshapeMp) => {
  for (const spot of spots) {
    if (spot.getColshape() == colshape) {
      mp.events.call('playerEnterSpot', spot);
    }
  }
});

mp.events.add('playerExitColshape', (colshape: ColshapeMp) => {
  for (const spot of spots) {
    if (spot.getColshape() == colshape) {
      mp.events.call('playerExitSpot', spot);
    }
  }
});

mp.spots = SpotMpPool;
