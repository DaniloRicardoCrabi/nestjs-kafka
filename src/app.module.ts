import { Module } from '@nestjs/common';
import { KafkaConsumerModule } from './modules/kafka-consumer/kafka-consumer.module';
import { KafkaConsumerController } from './modules/kafka-consumer/kafka-consumer.controller';

@Module({
  imports: [KafkaConsumerModule],
  controllers: [KafkaConsumerController],
  providers: [],
})
export class AppModule {}
