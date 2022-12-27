import { EntityManager } from '@mikro-orm/postgresql';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventDTO } from 'dto/event.dto';
import { EventEntity } from 'src/entities/event.entity';
import { eventMapper } from 'src/mapper/event.mapper';

@Controller('api/events')
export class EventController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  async findall(): Promise<EventDTO[]> {
    const events = await this.em.getRepository(EventEntity).find({}, { populate: [] });

    return events.map((eventEntity) => eventMapper.toDto(eventEntity));
  }

  @Post()
  async create(@Body() { name, dateBegin, dateEnd }: EventDTO): Promise<EventDTO> {
    const newEvent = new EventEntity({ name, dateBegin, dateEnd });
    const repo = this.em.getRepository(EventEntity);
    const newEventEntity = repo.create(newEvent);

    await this.em.flush();
    return eventMapper.toDto(newEventEntity);
  }
}
