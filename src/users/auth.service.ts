/* eslint-disable prettier/prettier */
// auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service'; // Import JwtService
import { UserService } from './users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService // Inject JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        console.log('dto=>', username, password);
        const user = await this.userService.findByUsername(username);
        if (user && user.password === password) {
            return user;
        }
        return null;
    }

    generateAccessToken(userId: string): string {
        return this.jwtService.generateToken({ userId });
    }
}
