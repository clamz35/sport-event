import type { z } from 'zod';
import { useMutation, useQueryClient, type UseMutationReturnType } from '@tanstack/vue-query';
import { eventDTOSchema } from 'dto/event.dto';
import type { PlayerDTO } from 'dto/player.dto';
import type { EventModel } from '@/models/event/Event';
import { usePost } from '@/composables/fetch/usePost';
import { EVENT_GET_KEY } from './eventsApiKeys.constants';

export const useEventAddPlayer = (
  eventId: number,
): UseMutationReturnType<EventModel, unknown, PlayerDTO, unknown> => {
  const queryClient = useQueryClient();

  return useMutation(
    async (player: PlayerDTO): Promise<EventModel> => {
      return usePost<z.infer<typeof eventDTOSchema>>(
        `/api/events/${eventId}/players`,
        JSON.stringify(player),
        eventDTOSchema,
      ).then((eventDTO) => {
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
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(EVENT_GET_KEY(eventId));
      },
    },
  );
};
