import { Entity, EntityRepositoryType, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { EventRepository } from '../repositories/event.repository';
import { GroupEntity } from './group.entity';

@Entity({ customRepository: () => EventRepository })
export class EventEntity {
  [EntityRepositoryType]?: EventRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @ManyToOne(() => GroupEntity)
  group!: GroupEntity;
}
