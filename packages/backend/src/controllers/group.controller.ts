import { EntityManager } from '@mikro-orm/postgresql';
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(
    @Body() { id, name, creatorEmail }: GroupDTO,
  ): Promise<GroupDTO> {
    const newGroup = new GroupEntity({ id, name, creatorEmail });
    const repo = this.em.getRepository(GroupEntity);
    const recipe = repo.create(newGroup);

    await this.em.flush();
    return {
      id: recipe.id,
      name: recipe.name,
      creatorEmail: recipe.creatorEmail,
    };
  }
}
