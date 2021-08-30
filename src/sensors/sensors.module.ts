import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorsController } from './sensors.controller';
import { SensorsService } from './sensors.service';
import { Sensors, SensorsSchema } from './schemas/sensors.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sensors.name, schema: SensorsSchema }])],
  controllers: [SensorsController],
  providers: [SensorsService],
})
export class SensorsModule {}
