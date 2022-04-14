import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
  firstName?: string;
  secondName?: string;
  thirdName?: string;
  sessionID?: string;
  hash?: string;
  salt?: string;
  setPassword: () => void;
  validatePassword: () => Promise<boolean>;
  generateJWT: () => void;
  toAuthJSON: () => void;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  firstName: { type: String, required: false },
  secondName: { type: String, required: false },
  thirdName: { type: String, required: false },
  sessionID: { type: String, required: false },
  hash: { type: String, required: false },
  salt: { type: String, required: false },
});

userSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password: string) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      name: this.name,
      exp: parseInt(`${(expirationDate.getTime() / 1000, 10)}`),
    },
    'secret'
  );
};

userSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    name: this.name,
    token: this.generateJWT(),
  };
};
userSchema.statics.log = function () {
  console.log(this);
};
userSchema.statics.findAndCheck = function (email: string, password: string) {
  let user = this.find({ email });
  let status = user.validate(password);
  console.log('🚀 ~ file: Users.ts ~ line 67 ~ status', status);
};
// export const Users = model<IUser>('Users')
export default mongoose.models.Users || mongoose.model<IUser>('Users', userSchema);
