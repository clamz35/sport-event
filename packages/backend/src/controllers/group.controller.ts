import { EntityManager } from '@mikro-orm/postgresql';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GroupDTO } from 'dto/group.dto';
import { GroupEntity } from 'src/entities/group.entity';
import { groupMapper } from 'src/mapper/group.mapper';

@Controller('api/groups')
export class GroupController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  async findall(): Promise<GroupDTO[]> {
    const groupsEntities = await this.em
      .getRepository(GroupEntity)
      .find({}, { populate: ['events.id'] });

    return groupsEntities.map((groupEntity): GroupDTO => groupMapper.toDto(groupEntity));
  }

  @Get('/:id')
  async find(@Param() groupId): Promise<GroupDTO> {
    const groupEntity = await this.em
      .getRepository(GroupEntity)
      .findOne(groupId, { populate: ['events.id'] });

    return groupMapper.toDto(groupEntity);
  }

  @Post()
  async create(@Body() { id, name, creatorEmail }: GroupDTO): Promise<GroupDTO> {
    const newGroup = new GroupEntity({ id, name, creatorEmail });
    const repo = this.em.getRepository(GroupEntity);
    const newGroupEntity = repo.create(newGroup);

    await this.em.flush();
    return groupMapper.toDto(newGroupEntity);
  }
}
