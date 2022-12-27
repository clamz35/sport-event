import { useGet } from '@/composables/fetch/useGet';
import type { EventModel } from '@/models/event/Event';
import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query';
import { eventDTOSchema } from 'dto/event.dto';
import type { z } from 'zod';

export const useEventGet = (eventId: number): UseQueryReturnType<EventModel, unknown> => {
  return useQuery({
    queryKey: ['events', eventId],
    queryFn: async () => {
      const eventDTO = await useGet<z.infer<typeof eventDTOSchema>>(
        `/api/events/${eventId}`,
        eventDTOSchema,
      );

      return {
        id: eventDTO.id,
        name: eventDTO.name,
        dateBegin: new Date(eventDTO.dateBegin),
        dateEnd: new Date(eventDTO.dateEnd),
        description: eventDTO.description,
      } as EventModel;
    },
  });
};
