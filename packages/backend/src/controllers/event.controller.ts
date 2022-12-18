import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';
import { EventDTO } from 'dto/event.dto';
import { EventEntity } from 'src/entities/event.entity';
import { eventMapper } from 'src/mapper/event.mapper';

@Controller('api/events')
export class EventController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  async findall(): Promise<EventDTO[]> {
    const events = await this.em.getRepository(EventEntity).find({}, { populate: ['group'] });

    return events.map((eventEntity) => eventMapper.toDto(eventEntity));
  }
}
