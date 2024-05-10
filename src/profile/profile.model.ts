/* eslint-disable prettier/prettier */
// profile.model.ts

import mongoose, { Document } from 'mongoose';
import { ProfileSchema } from './profile.schema';

export interface Profile extends Document {
    displayName?: string;
    gender?: string;
    dob?: Date;
    height?: number;
    weight?: number;
    interests?: string[];
    user: string; // Store user ID as reference
}

export const ProfileModel = mongoose.model<Profile>('Profile', ProfileSchema);
