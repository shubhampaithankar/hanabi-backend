import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature(
    [
        {
            name: User.name, schema: UserSchema
        }
    ]
  )],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
