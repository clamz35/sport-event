import { EventDTO } from 'dto/event.dto';
import { EventEntity } from 'src/entities/event.entity';
import { Mapper } from './mapper.interface';

export class EventMapper implements Mapper<EventEntity, EventDTO> {
  toDto(
    { id, name, dateBegin, dateEnd, description, address }: EventEntity,
    populate = true,
  ): EventDTO {
    const event: EventDTO = {
      id,
      name,
      dateBegin: dateBegin.toISOString(),
      dateEnd: dateEnd.toISOString(),
      description,
      address,
    };

    if (populate) {
      // if (group) {
      //   const groupPopulate = false;
      //   event.group = groupMapper.toDto(group, groupPopulate);
      // }
    }
    return event;
  }
  toEntity({ id, name, dateBegin, dateEnd, address }: EventDTO): EventEntity {
    return { id, name, dateBegin: new Date(dateBegin), dateEnd: new Date(dateEnd), address };
  }
}

export const eventMapper = new EventMapper();
