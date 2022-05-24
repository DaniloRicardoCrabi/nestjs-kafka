import { Controller, Param, Post } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service';

@Controller('kafka-producer')
export class KafkaProducerController {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  @Post(':id')
  async create(@Param('id') id: string): Promise<void> {
    await this.kafkaProducerService.create(id);
  }
}
