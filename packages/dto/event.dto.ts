import { z } from 'zod';
import type { GroupDTO } from './group.dto';

export interface EventDTO {
  id?: number;

  name: string;

  group: GroupDTO;
}

export const eventDTOSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});
