import { z } from 'zod';
import type { GroupDTO } from './group.dto';

export interface EventDTO {
  id?: number;

  name: string;
  dateBegin: Date | null;
  dateEnd: Date | null;
  description?: string;

  // group?: GroupDTO;
}

export const eventDTOSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  dateBegin: z.string().datetime(),
  dateEnd: z.string().datetime(),
  description: z.string().optional(),
});
