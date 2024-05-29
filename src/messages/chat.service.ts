/* eslint-disable prettier/prettier */
// Chat Service (chat.service.ts)

import { Injectable } from '@nestjs/common';
import { RabbitMQConfig } from './rabbitmq.config';

@Injectable()
export class ChatService {
    private readonly exchange = 'chat_exchange';

    async sendMessage(sender: string, receiver: string, message: string): Promise<void> {
        const channel = await RabbitMQConfig.createConnection();
        channel.assertExchange(this.exchange, 'direct', { durable: false });
        channel.publish(this.exchange, receiver, Buffer.from(JSON.stringify({ sender, message })));
        console.log(`Message sent from ${sender} to ${receiver}: ${message}`);
    }
}
