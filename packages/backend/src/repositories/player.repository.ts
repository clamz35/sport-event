import { EntityRepository } from '@mikro-orm/core';
import { PlayerEntity } from 'src/entities/player.entity';

export class PlayerRepository extends EntityRepository<PlayerEntity> {}
