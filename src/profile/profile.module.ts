/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './profile.controller';
// import { ProfileModel } from './profile.model';
import { JwtAuthGuard } from 'src/profile/jwt-auth.guard';
import { JwtService } from 'src/users/jwt.service';
import { ProfileSchema } from './profile.schema';
import { ProfileService } from './profile.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }])],
  controllers: [ProfileController],
  providers: [ProfileService, JwtAuthGuard, JwtService],
})
export class ProfileModule {}
