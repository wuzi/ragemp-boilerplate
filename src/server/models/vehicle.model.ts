import mongoose from 'mongoose';

export interface Vehicle extends mongoose.Document {
  alpha: number;
  color: [[number, number, number], [number, number, number]];
  dimension: number;
  engine: boolean;
  entity: VehicleMp;
  heading: number;
  locked: boolean;
  modelId: string;
  numberPlate: string;
  position: { x: number; y: number; z: number };
  spawn(): void;
}

export const VehicleSchema = new mongoose.Schema<Vehicle>({
  alpha: { type: Number },
  color: { type: [[Number, Number, Number], [Number, Number, Number]] },
  dimension: { type: Number },
  engine: { type: Boolean },
  entity: { type: Object, virtual: true },
  heading: { type: Number },
  locked: { type: Boolean },
  modelId: { type: String, required: true },
  numberPlate: { type: String },
  position: {
    x: Number,
    y: Number,
    z: Number,
  },
}, {
  timestamps: true,
});

VehicleSchema.methods.spawn = function spawn(): void {
  this.entity = mp.vehicles.new(this.modelId, new mp.Vector3(this.position.x, this.position.y, this.position.z), {
    alpha: this.alpha,
    color: this.color,
    dimension: this.dimension,
    engine: this.engine,
    heading: this.heading,
    locked: this.locked,
    numberPlate: this.numberPlate,
  });
};

VehicleSchema.pre('save', function (this: Vehicle): void {
  if (this.isNew) {
    this.spawn();
  }
});

VehicleSchema.pre('remove', function (this: Vehicle): void {
  if (mp.vehicles.exists(this.entity)) this.entity.destroy();
});

const Vehicle = mongoose.model<Vehicle>('Vehicle', VehicleSchema);
export default Vehicle;
