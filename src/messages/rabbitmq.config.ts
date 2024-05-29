/* eslint-disable prettier/prettier */
// RabbitMQ Configuration (rabbitmq.config.ts)

import * as amqp from 'amqplib/callback_api';

export class RabbitMQConfig {
    private static readonly URL = 'amqp://localhost';

    static async createConnection(): Promise<amqp.Channel> {
        return new Promise((resolve, reject) => {
            amqp.connect(this.URL, (error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    connection.createChannel((channelError, channel) => {
                        if (channelError) {
                            reject(channelError);
                        } else {
                            resolve(channel);
                        }
                    });
                }
            });
        });
    }
}
