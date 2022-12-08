import { GroupDTO } from './group.dto';

export class EventDTO {
  id!: number;

  name: string;

  group!: GroupDTO;
}
