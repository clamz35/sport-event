import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { GroupRepository } from 'src/repositories/group.repository';
import { EventEntity } from './event.entity';

@Entity({ customRepository: () => GroupRepository })
export class GroupEntity {
  [EntityRepositoryType]?: GroupRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  creatorEmail?: string;

  @OneToMany(() => EventEntity, (eventEntity) => eventEntity.group)
  events = new Collection<EventEntity>(this);
}
