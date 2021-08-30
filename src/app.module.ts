import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { SensorsModule } from './sensors/sensors.module';



@Module({
  imports: [
    MongooseModule.forRoot(process.env.HOST),
    CatsModule,
    SensorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
