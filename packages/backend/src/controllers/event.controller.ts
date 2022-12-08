import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';
import { EventEntity } from 'src/entities/event.entity';

@Controller('api/events')
export class EventController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  async findall(): Promise<EventEntity[]> {
    const events = await this.em
      .getRepository(EventEntity)
      .find({}, { populate: ['group'] });
    return events;
  }
}
