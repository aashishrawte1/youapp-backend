/* eslint-disable prettier/prettier */
// Chat Controller (chat.controller.ts)

import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './websocket.gateway';

@Controller('api/chat')
export class ChatController {
    constructor(private readonly chatService: ChatService, private readonly chatGateway: ChatGateway) {}

    @Post('send')
    async sendMessage(@Body() data: { sender: string, receiver: string, message: string }) {
        await this.chatService.sendMessage(data.sender, data.receiver, data.message);
        this.chatGateway.sendMessageToClient(data.receiver, `New message from ${data.sender}: ${data.message}`);
        return { success: true };
    }
}
