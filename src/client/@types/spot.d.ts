interface SpotMp {
  position: Vector3Mp;
}

interface SpotMpPool {
  'new'(type: number, position: Vector3Mp, scale: number, options?: {
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
  }): SpotMp;
}
