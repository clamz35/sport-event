import { EventDTO } from 'dto/event.dto';
import { EventEntity } from 'src/entities/event.entity';
import { Mapper } from './mapper.interface';
import { playerMapper } from './player.mapper';

export class EventMapper implements Mapper<EventEntity, EventDTO> {
  toDto(
    { id, name, dateBegin, dateEnd, description, address, players }: EventEntity,
    populate = true,
  ): EventDTO {
    const event: EventDTO = {
      id,
      name,
      dateBegin: dateBegin.toISOString(),
      dateEnd: dateEnd.toISOString(),
      description,
      address,
      players: players.getItems().map((player) => playerMapper.toDto(player, false)),
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
    return {
      id,
      name,
      dateBegin: new Date(dateBegin),
      dateEnd: new Date(dateEnd),
      address,
    };
  }
}

export const eventMapper = new EventMapper();
