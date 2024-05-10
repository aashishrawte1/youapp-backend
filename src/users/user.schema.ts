/* eslint-disable prettier/prettier */
// user.schema.ts

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.model('User', UserSchema);