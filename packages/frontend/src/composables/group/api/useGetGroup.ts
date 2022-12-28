import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query';
import type { z } from 'zod';
import { groupDTOSchema, type GroupDTO } from 'dto/group.dto';
import { useGet } from '@/composables/fetch/useGet';

export const useGetGroup = (groupId: number): UseQueryReturnType<GroupDTO, unknown> => {
  return useQuery({
    queryKey: ['group', groupId],
    queryFn: async () => {
      const response = await useGet<z.infer<typeof groupDTOSchema>>(
        `/api/groups/${groupId}`,
        groupDTOSchema,
      );

      return response;
    },
  });
};
