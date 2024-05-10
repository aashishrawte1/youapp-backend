/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// profile.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileDto } from './profile.dto';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

    async createProfile(userId: string, profileDto: ProfileDto) {
        const createdProfile = new this.profileModel({ ...profileDto, user: userId });
        return createdProfile.save();
    }

    async getProfile(userId: string) {
        return this.profileModel.findOne({ user: userId }).exec();
    }

    async updateProfile(userId: string, profileDto: ProfileDto) {
        return this.profileModel.findOneAndUpdate({ user: userId }, profileDto, { new: true }).exec();
    }
}
