/* eslint-disable prettier/prettier */
// jwt-auth.guard.ts

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '../users/jwt.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];

        if (!token) {
            return false;
        }

        const user = this.jwtService.verifyToken(token);
        if (!user) {
            return false;
        }

        console.log('verifyToken', user);

        request.user = user.userId;
        return true;
    }
}
