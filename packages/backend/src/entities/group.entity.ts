import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { GroupRepository } from '../repositories/group.repository';
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

  constructor(group: Partial<GroupEntity>) {
    this.id = group.id;
    this.name = group.name;
    this.creatorEmail = group.creatorEmail;
  }
}
