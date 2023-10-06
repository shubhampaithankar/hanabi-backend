import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiModule } from './modules/api/api.module';
@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://shubham:TMU61UIDbPhZVuGN@cluster0.kcon7qa.mongodb.net/hanabi-tech`), ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
