/* eslint-disable prettier/prettier */
// user.model.ts

import mongoose, { Document } from 'mongoose';
import { UserSchema } from './user.schema';

export interface User extends Document {
    email: string;
    username: string;
    password: string;
}

export const UserModel = mongoose.model('User', UserSchema);
