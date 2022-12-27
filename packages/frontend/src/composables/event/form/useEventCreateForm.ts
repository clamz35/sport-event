import type { EventCreateForm } from '@/models/event/form/EventCreateForm';
import type { EventDTO } from 'dto/event.dto';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventCreate } from '../api/useEventCreate';

type EventCreateFormRef = Ref<EventCreateForm>;

export const useEventCreateForm = (): {
  form: EventCreateFormRef;
  handleSubmit: () => void;
} => {
  const { mutate: createNewEvent } = useEventCreate();
  const router = useRouter();

  const form: EventCreateFormRef = ref({
    name: '',
    dateBegin: null,
    dateEnd: null,
    description: '',
  });

  const handleSubmit = (): void => {
    createNewEvent(form.value, {
      onSuccess(groupCreated: EventDTO): void {
        router.push({
          name: 'viewGroup',
          params: {
            id: groupCreated.id,
          },
        });
      },
      onError(_error: unknown): void {
        // createGroupSubmitError.value = error;
      },
    });
  };

  return { form, handleSubmit };
};
