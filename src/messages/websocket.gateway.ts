/* eslint-disable prettier/prettier */
// WebSocket Gateway (websocket.gateway.ts)

import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    afterInit() {
        console.log('WebSocket Gateway initialized');
    }

    handleConnection() {
        console.log('Client connected');
    }

    handleDisconnect() {
        console.log('Client disconnected');
    }

    sendMessageToClient(clientId: string, message: string) {
        this.server.clients.forEach(client => {
            if (client.id === clientId && client.readyState === 1) {
                client.send(message);
            }
        });
    }
}
