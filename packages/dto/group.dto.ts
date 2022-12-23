import { EventDTO, eventDTOSchema } from './event.dto';
import { z } from 'zod';

export interface GroupDTO {
  id?: number;

  name: string;

  creatorEmail?: string;

  events?: EventDTO[];
}

export const groupDTOSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  creatorEmail: z.string().optional(),
  events: z.array(eventDTOSchema).optional(),
});
