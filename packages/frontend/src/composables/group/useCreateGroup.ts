import { useMutation, useQueryClient, type UseMutationReturnType } from '@tanstack/vue-query';

import type { z } from 'zod';
import { type GroupDTO, groupDTOSchema } from 'dto/group.dto';
import { usePost } from '../fetch/usePost';

export const useCreateGroup = (): UseMutationReturnType<GroupDTO, unknown, GroupDTO, unknown> => {
  const queryClient = useQueryClient();

  return useMutation(
    async (group: GroupDTO): Promise<GroupDTO> => {
      return usePost<z.infer<typeof groupDTOSchema>>(
        '/api/groups',
        JSON.stringify(group),
        groupDTOSchema,
      );
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['groups']);
      },
    },
  );
};
