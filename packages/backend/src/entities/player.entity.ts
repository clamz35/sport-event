import {
  Collection,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { PlayerRepository } from '../repositories/player.repository';
import { EventEntity } from './event.entity';

@Entity({ customRepository: () => PlayerRepository })
export class PlayerEntity {
  [EntityRepositoryType]?: PlayerRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  username: string;

  @Property()
  email?: string;

  @ManyToMany(() => EventEntity)
  events: Collection<EventEntity> = new Collection<EventEntity>(this);

  constructor({ id, username, email }: Partial<PlayerEntity>) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
