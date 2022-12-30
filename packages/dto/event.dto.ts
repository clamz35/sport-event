import { z } from 'zod';
import { PlayerDTO, playerDTOSchema } from './player.dto';

export interface EventDTO {
  id?: number;

  name: string;
  dateBegin: string;
  dateEnd: string;
  description?: string;
  address?: string;
  players: PlayerDTO[];
  // group?: GroupDTO;
}

export const eventDTOSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  dateBegin: z.string().datetime(),
  dateEnd: z.string().datetime(),
  description: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  players: z.array(playerDTOSchema),
});
