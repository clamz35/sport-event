import { useMutation, useQueryClient, type UseMutationReturnType } from '@tanstack/vue-query';

import type { GroupDTO } from 'dto/group.dto';
import { usePost } from '../fetch/usePost';

export const useCreateGroup = (): UseMutationReturnType<GroupDTO, unknown, GroupDTO, unknown> => {
  const queryClient = useQueryClient();

  return useMutation(
    async (group: GroupDTO): Promise<GroupDTO> => {
      return usePost('/api/groups', JSON.stringify(group)).then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      });
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['groups']);
      },
    },
  );
};
