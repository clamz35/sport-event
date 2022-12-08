import { EntityRepository } from '@mikro-orm/core';
import { GroupEntity } from 'src/entities/group.entity';

export class GroupRepository extends EntityRepository<GroupEntity> {}
