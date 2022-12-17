import { useMutation, type UseMutationReturnType } from '@tanstack/vue-query';

import type { GroupDTO } from 'dto/group.dto';
import { usePost } from '../fetch/usePost';

export const useCreateGroup = (): UseMutationReturnType<
  GroupDTO,
  unknown,
  GroupDTO,
  unknown
> => {
  //   const queryClient = useQueryClient();

  return useMutation(
    async (group: GroupDTO): Promise<GroupDTO> => {
      const data = await usePost('/api/groups', JSON.stringify(group));

      return data.json();
    },
    {
      onSuccess() {
        // queryClient.invalidateQueries('groups');
      },
    }
  );
};
