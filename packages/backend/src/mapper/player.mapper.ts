import type { PlayerDTO } from 'dto/player.dto';
import type { PlayerEntity } from 'src/entities/player.entity';
import { eventMapper } from './event.mapper';
import { Mapper } from './mapper.interface';

export class PlayerMapper implements Mapper<PlayerEntity, PlayerDTO> {
  toDto({ id, username, email, events }: PlayerEntity, populate = true): PlayerDTO {
    const playerDTO: PlayerDTO = {
      id,
      username,
      email,
    };

    if (populate) {
      if (events) {
        const eventPopulate = false;
        playerDTO.events = events
          .getItems()
          .map((event) => eventMapper.toDto(event, eventPopulate));
      }
    }
    return playerDTO;
  }

  toEntity({ id, username, email, events }: PlayerDTO): PlayerEntity {
    // TODO
    return null;
  }
}

export const playerMapper = new PlayerMapper();
