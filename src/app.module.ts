import { Module } from '@nestjs/common';
import { KafkaConsumerModule } from './modules/kafka-consumer/kafka-consumer.module';
import { KafkaProducerModule } from './modules/kafka-producer/kafka-producer.module';

@Module({
  imports: [KafkaConsumerModule, KafkaProducerModule],
})
export class AppModule {}
