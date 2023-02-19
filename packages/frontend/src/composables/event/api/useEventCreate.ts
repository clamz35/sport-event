import { useMutation, useQueryClient, type UseMutationReturnType } from '@tanstack/vue-query';
import type { z } from 'zod';
import { eventDTOSchema, type EventDTO } from 'dto/event.dto';
import { usePost } from '@/composables/fetch/usePost';
import type { EventModel } from '@/models/event/Event';
import type { Player } from '@/models/player/Player';

export const useEventCreate = (): UseMutationReturnType<EventModel, unknown, EventDTO, unknown> => {
  const queryClient = useQueryClient();

  return useMutation(
    async (event: EventDTO): Promise<EventModel> => {
      return usePost<z.infer<typeof eventDTOSchema>>(
        '/api/events',
        JSON.stringify(event),
        eventDTOSchema,
      ).then(
        ({
          id,
          name,
          dateBegin,
          dateEnd,
          description,
          address,
          players,
        }: z.infer<typeof eventDTOSchema>): EventModel => {
          return {
            id,
            name,
            dateBegin: new Date(dateBegin),
            dateEnd: new Date(dateEnd),
            description,
            address,
            players: players as Player[],
          };
        },
      );
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['events']);
      },
    },
  );
};
