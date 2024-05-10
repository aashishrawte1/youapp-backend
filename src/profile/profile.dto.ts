/* eslint-disable prettier/prettier */
// profile.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class ProfileDto {
    @ApiProperty({ required: false })
    displayName?: string;

    @ApiProperty({ required: false })
    gender?: string;

    @ApiProperty({ required: false })
    dob?: Date;

    @ApiProperty({ required: false })
    height?: number;

    @ApiProperty({ required: false })
    weight?: number;

    @ApiProperty({ required: false })
    interests?: string[];
}
