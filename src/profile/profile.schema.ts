/* eslint-disable prettier/prettier */
// profile.schema.ts

import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    displayName: { type: String },
    gender: { type: String },
    dob: { type: Date },
    height: { type: Number },
    weight: { type: Number },
    interests: [{ type: String }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User schema
});
