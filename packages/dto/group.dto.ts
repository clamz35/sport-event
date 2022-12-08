import { EventDTO } from './event.dto';

export class GroupDTO {
  id!: number;

  name: string;

  creatorEmail?: string;

  events?: EventDTO;
}
