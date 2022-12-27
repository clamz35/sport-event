import type { GroupCreateForm } from '@/models/group/form/GroupCreateForm';
import type { GroupDTO } from 'dto/group.dto';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGroupCreate } from '../api/useGroupCreate';

export const useGroupCreateForm = (): {
  form: Ref<GroupCreateForm>;
  handleSubmit: () => void;
  createGroupSubmitError: Ref<unknown>;
} => {
  const router = useRouter();
  const { mutate: createNewGroup } = useGroupCreate();

  const createGroupSubmitError: Ref<unknown> = ref(null);
  const form: Ref<GroupCreateForm> = ref({
    name: '',
    creatorEmail: '',
  });

  const handleSubmit = (): void => {
    createNewGroup(form.value, {
      onSuccess(groupCreated: GroupDTO): void {
        router.push({
          name: 'viewGroup',
          params: {
            id: groupCreated.id,
          },
        });
      },
      onError(error: unknown): void {
        createGroupSubmitError.value = error;
      },
    });
  };
  return { form, handleSubmit, createGroupSubmitError };
};
