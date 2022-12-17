import type { EventDTO } from './event.dto';

export interface GroupDTO {
  id?: number;

  name: string;

  creatorEmail?: string;

  events?: EventDTO;
}
