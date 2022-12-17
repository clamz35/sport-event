import type { GroupDTO } from './group.dto';

export interface EventDTO {
  id?: number;

  name: string;

  group: GroupDTO;
}
