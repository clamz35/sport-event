import { EntityManager } from '@mikro-orm/postgresql';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  async find(@Param() id: number): Promise<EventDTO> {
    const eventEntity = await this.em.getRepository(EventEntity).findOne(id, { populate: [] });

    return eventMapper.toDto(eventEntity);
  }

  @Post()
  async create(@Body() { name, dateBegin, dateEnd, description }: EventDTO): Promise<EventDTO> {
    const newEvent = new EventEntity(
      eventMapper.toEntity({ name, dateBegin, dateEnd, description }),
    );
    const repo = this.em.getRepository(EventEntity);
    const newEventEntity = repo.create(newEvent);

    await this.em.flush();
    return eventMapper.toDto(newEventEntity);
  }
}
