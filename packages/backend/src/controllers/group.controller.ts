import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';
import { GroupDTO } from 'dto/group.dto';
import { GroupEntity } from 'src/entities/group.entity';

@Controller('api/groups')
export class GroupController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  async findall(): Promise<GroupDTO[]> {
    const groups = await this.em
      .getRepository(GroupEntity)
      .find({}, { populate: ['events.id'] });

    return groups.map((group): GroupDTO => {
      return {
        id: group.id,
        name: group.name,
        creatorEmail: group.creatorEmail,
      };
    });
  }
}
