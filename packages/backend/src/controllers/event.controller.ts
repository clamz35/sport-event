import { EntityManager } from '@mikro-orm/postgresql';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventDTO } from 'dto/event.dto';
import { PlayerDTO } from 'dto/player.dto';
import { EventEntity } from 'src/entities/event.entity';
import { eventMapper } from 'src/mapper/event.mapper';
import { EventService } from 'src/services/event/event.service';

@Controller('api/events')
export class EventController {
  constructor(private readonly em: EntityManager, private readonly eventService: EventService) {}

  @Get()
  async findall(): Promise<EventDTO[]> {
    const events = await this.eventService.getAllEvents();

    return events.map((eventEntity) => eventMapper.toDto(eventEntity));
  }

  @Get('/:id')
  async find(@Param() id: number): Promise<EventDTO> {
    const eventEntity = await this.eventService.getEventById(id, ['players']);

    if (!eventEntity) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }

    return eventMapper.toDto(eventEntity);
  }

  @Post()
  async create(@Body() event: EventDTO): Promise<EventDTO> {
    const newEvent = new EventEntity(eventMapper.toEntity(event));
    const repo = this.em.getRepository(EventEntity);
    const newEventEntity = repo.create(newEvent);

    await this.em.flush();
    return eventMapper.toDto(newEventEntity);
  }

  @Post('/:id/players')
  async addPlayer(@Param() eventId, @Body() player: PlayerDTO): Promise<EventDTO> {
    await this.eventService.addPlayer(eventId, player);

    return this.find(eventId);
  }
}
