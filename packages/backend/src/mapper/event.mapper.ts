import { EventDTO } from 'dto/event.dto';
import { EventEntity } from 'src/entities/event.entity';
import { groupMapper } from './group.mapper';
import { Mapper } from './mapper.interface';

export class EventMapper implements Mapper<EventEntity, EventDTO> {
  toDto({ group, id, name }, populate = true): EventDTO {
    const event = {
      group,
      id,
      name,
    };

    if (populate) {
      const groupPopulate = false;
      event.group = groupMapper.toDto(group, groupPopulate);
    }
    return;
  }
  toEntity({ id, name }: EventDTO): EventEntity {
    return { id, name, group: null };
  }
}

export const eventMapper = new EventMapper();
