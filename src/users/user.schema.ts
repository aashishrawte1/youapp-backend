/* eslint-disable prettier/prettier */
// // user.schema.ts

// import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//     email: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
// });

// export default mongoose.model('User', UserSchema);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
