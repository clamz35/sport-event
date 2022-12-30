import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EventRepository } from '../repositories/event.repository';
import { PlayerEntity } from './player.entity';

@Entity({ customRepository: () => EventRepository })
export class EventEntity {
  [EntityRepositoryType]?: EventRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  dateBegin: Date;

  @Property()
  dateEnd: Date;

  @Property()
  description?: string;

  @Property()
  address?: string;

  @ManyToMany(() => PlayerEntity)
  players?: Collection<PlayerEntity> = new Collection<PlayerEntity>(this);

  // @ManyToOne(() => GroupEntity)
  // group?: GroupEntity;

  constructor(event: Partial<EventEntity>) {
    this.id = event.id;
    this.name = event.name;
    this.dateBegin = event.dateBegin;
    this.dateEnd = event.dateEnd;
    this.description = event.description;
    this.address = event.address;
  }
}
