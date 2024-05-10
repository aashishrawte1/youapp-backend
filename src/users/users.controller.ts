/* eslint-disable prettier/prettier */
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../dtos/login.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from './user.dto';
import { UserService } from './users.service';

@ApiTags('User')
@Controller('api')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const userData =  this.userService.create(createUserDto);
        console.log((await userData)._id)
        const accessToken = this.authService.generateAccessToken((await userData)._id);

        return { userData, accessToken };
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);

        if (!user) {
            throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
        }

        const accessToken = this.authService.generateAccessToken(user.id);
        return { accessToken };
    }
}