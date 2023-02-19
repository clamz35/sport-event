import { z } from 'zod';
import type { EventDTO } from './event.dto';

export interface PlayerDTO {
  id?: number;
  username: string;
  email?: string;
  events?: EventDTO[];
}

export const playerDTOSchema = z.object({
  id: z.number().optional().nullable(),
  username: z.string(),
  email: z.string().optional().nullable(),
  // events: z.array(eventDTOSchema),
});
