import { EntityRepository } from '@mikro-orm/core';
import { EventEntity } from 'src/entities/event.entity';

export class EventRepository extends EntityRepository<EventEntity> {}
