import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query';
import type { z } from 'zod';
import { eventDTOSchema } from 'dto/event.dto';
import { useGet } from '@/composables/fetch/useGet';
import type { EventModel } from '@/models/event/Event';
import { EVENT_GET_KEY } from './eventsApiKeys.constants';

export const useEventGet = (
  eventId: number,
): UseQueryReturnType<EventModel, { statusCode: number; message: string }> => {
  return useQuery({
    queryKey: EVENT_GET_KEY(eventId),
    queryFn: async () => {
      const eventDTO = await useGet<z.infer<typeof eventDTOSchema>>(
        `/api/events/${eventId}`,
        eventDTOSchema,
      );

      return {
        ...eventDTO,
        dateBegin: new Date(eventDTO.dateBegin),
        dateEnd: new Date(eventDTO.dateEnd),
        players: eventDTO.players?.map(({ id, username, email }) => ({
          id,
          username,
          email,
        })),
      } as EventModel;
    },
  });
};
