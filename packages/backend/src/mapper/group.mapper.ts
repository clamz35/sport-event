import { EventDTO } from 'dto/event.dto';
import { GroupDTO } from 'dto/group.dto';
import { GroupEntity } from 'src/entities/group.entity';
import { eventMapper } from './event.mapper';
import { Mapper } from './mapper.interface';

export class GroupMapper implements Mapper<GroupEntity, GroupDTO> {
  toDto({ id, name, creatorEmail, events }: GroupEntity, populate = true): GroupDTO {
    const groupDTO: GroupDTO = {
      id,
      name: name,
      creatorEmail,
    };

    if (populate) {
      const eventPopulate = false;
      groupDTO.events = events
        ?.getItems()
        .map((eventEntity): EventDTO => eventMapper.toDto(eventEntity, eventPopulate));
    }
    return groupDTO;
  }

  toEntity({ id, name, creatorEmail }: GroupDTO): GroupEntity {
    return { id, name, creatorEmail, events: null };
  }
}

export const groupMapper = new GroupMapper();
