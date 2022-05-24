import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaProducerController } from './kafka-producer.controller';
import { KafkaProducerService } from './kafka-producer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCER_KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'my_group_producer',
          },
        },
      },
    ]),
  ],
  controllers: [KafkaProducerController],
  providers: [
    KafkaProducerService,
    {
      provide: 'KAFKA_PRODUCER',
      useFactory: async (kafkaService: ClientKafka): Promise<any> => {
        return kafkaService.connect();
      },
      inject: ['PRODUCER_KAFKA_SERVICE'],
    },
  ],
})
export class KafkaProducerModule {}
