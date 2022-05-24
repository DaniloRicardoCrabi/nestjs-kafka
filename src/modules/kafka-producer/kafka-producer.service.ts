import { Inject, Injectable } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  async create(id: string): Promise<void> {
    const response = await this.kafkaProducer.send({
      topic: 'order',
      messages: [{ key: 'order', value: id }],
    });
    console.log(response);
  }
}
