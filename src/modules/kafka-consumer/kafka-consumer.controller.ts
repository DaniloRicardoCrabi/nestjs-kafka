import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';

@Controller('kafka-consumer')
export class KafkaConsumerController {
  @MessagePattern('order')
  consumer(@Payload() message: KafkaMessage): void {
    console.log(message.value);
  }
}
