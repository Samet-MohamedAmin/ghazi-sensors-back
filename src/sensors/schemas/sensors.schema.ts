import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SensorsDocument = Sensors & Document;

@Schema()
export class Sensors {
  @Prop()
  temp: string;

  @Prop()
  hum: string;

  @Prop()
  date: Date
}

export const SensorsSchema = SchemaFactory.createForClass(Sensors);
