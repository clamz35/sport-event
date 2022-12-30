import { EntityManager } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { PlayerDTO } from 'dto/player.dto';
import { EventEntity } from 'src/entities/event.entity';
import { PlayerEntity } from 'src/entities/player.entity';

@Injectable()
export class EventService {
  constructor(private readonly em: EntityManager) {}

  async getAllEvents(populate: boolean | string[] = []): Promise<EventEntity[] | null> {
    const populateList = this.handlePopulate(populate);
    return this.em.getRepository(EventEntity).find({}, { populate: populateList as never[] });
  }

  async getEventById(
    eventId: number,
    populate: boolean | string[] = [],
  ): Promise<EventEntity | null> {
    return this.em
      .getRepository(EventEntity)
      .findOne(eventId, { populate: this.handlePopulate(populate) as never[] });
  }

  async addPlayer(eventId: number, player: PlayerDTO): Promise<void> {
    const playerEntity = new PlayerEntity({
      id: player.id,
      username: player.username,
      email: player.email,
    });
    const event = await this.getEventById(eventId, ['players']);

    event.players.add(playerEntity);
    await this.em.flush();
  }

  private handlePopulate(populate: boolean | string[] = []): string[] {
    return typeof populate === 'boolean' ? ['players'] : populate;
  }
}
