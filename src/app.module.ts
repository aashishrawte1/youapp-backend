/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.MONGO_URI), ProfileModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
