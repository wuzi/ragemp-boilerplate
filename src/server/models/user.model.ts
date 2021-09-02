import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export interface User extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

UserSchema.pre('save', function (this: User): void {
  if (this.isNew) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
});

const User = mongoose.model<User>('User', UserSchema);
export default User;
