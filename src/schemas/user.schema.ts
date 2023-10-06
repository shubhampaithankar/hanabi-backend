import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User { 
  @Prop({ required: true })
  username: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  dateOfBirth: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
