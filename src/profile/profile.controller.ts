/* eslint-disable prettier/prettier */
// profile.controller.ts

import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ProfileDto } from './profile.dto';
import { ProfileService } from './profile.service';

@ApiTags('Profile')
@Controller('api')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @UseGuards(JwtAuthGuard)
    @Post('createProfile')
    createProfile(@CurrentUser('id') userId: string, @Body() profileDto: ProfileDto) {
        console.log('userid=>', userId);
        return this.profileService.createProfile(userId, profileDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('getProfile')
    getProfile(@CurrentUser('id') userId: string) {
        return this.profileService.getProfile(userId);
    }

    @UseGuards(JwtAuthGuard)
    @Put('updateProfile')
    updateProfile(@CurrentUser('id') userId: string, @Body() profileDto: ProfileDto) {
        return this.profileService.updateProfile(userId, profileDto);
    }
}
