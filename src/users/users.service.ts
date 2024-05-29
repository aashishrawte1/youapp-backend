/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        createdUser.save();
        return createdUser;     
    }

    async findByUsername(username: string): Promise<User | null> {
        const userData = await this.userModel.findOne({ username }).exec();
        return userData;
    }

    async findByObjectId(userId: string): Promise<User> {
        try {
            const user = await this.userModel.findById(userId).exec();
            if(!user) {
                throw new NotFoundException('user with givne id not found');
            }

            return user;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    
}