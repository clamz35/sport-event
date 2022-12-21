import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query';

import type { GroupDTO } from 'dto/group.dto';
import { useFetch } from '../fetch/useFetch';

export const useGetGroup = (groupId: number): UseQueryReturnType<GroupDTO, unknown> => {
  return useQuery({
    queryKey: ['group', groupId],
    queryFn: async () => {
      const response = await useFetch(`/api/groups/${groupId}`);
      return response.json();
    },
  });
};
