import mongoose, { Document, Schema } from 'mongoose';
import { hashPassword, comparePassword } from '@/lib/auth';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  emailVerified: boolean;
  refreshTokens: string[];
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    avatar: {
      type: String,
      default: null,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    refreshTokens: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.refreshTokens;
        return ret;
      },
    },
  }
);

userSchema.index({ email: 1 });
userSchema.index({ role: 1 });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await hashPassword(this.password);
    next();
  } catch (error) {
    next(error as Error);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return comparePassword(candidatePassword, this.password);
};

userSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email: email.toLowerCase() });
};

userSchema.statics.findByRefreshToken = function (refreshToken: string) {
  return this.findOne({ refreshTokens: refreshToken });
};

userSchema.methods.addRefreshToken = function (refreshToken: string) {
  this.refreshTokens.push(refreshToken);
  return this.save();
};

userSchema.methods.removeRefreshToken = function (refreshToken: string) {
  this.refreshTokens = this.refreshTokens.filter(
    token => token !== refreshToken
  );
  return this.save();
};

userSchema.methods.clearRefreshTokens = function () {
  this.refreshTokens = [];
  return this.save();
};

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);
