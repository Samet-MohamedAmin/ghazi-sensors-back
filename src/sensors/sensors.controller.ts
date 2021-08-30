import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { CreateSensorsDto } from './dto/create-sensors.dto';
import { Sensors } from './schemas/sensors.schema';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post()
  async create(@Body() createSensorsDto: CreateSensorsDto) {
    await this.sensorsService.create(createSensorsDto);
  }

  @Get()
  async findAll(): Promise<Sensors[]> {
    return this.sensorsService.findAll();
  }
}
