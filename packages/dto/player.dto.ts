import { z } from 'zod';
import { EventDTO } from './event.dto';

export interface PlayerDTO {
  id?: number;
  username: string;
  email?: string;
  events?: EventDTO[];
}

export const playerDTOSchema = z.object({
  id: z.number().optional(),
  username: z.string(),
  email: z.string().optional(),
  // events: z.array(eventDTOSchema),
});
