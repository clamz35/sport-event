import type { EventCreateForm } from '@/models/event/form/EventCreateForm';
import type { EventDTO } from 'dto/event.dto';
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEventCreate } from '../api/useEventCreate';

type EventCreateFormRef = Ref<EventCreateForm>;

export const useEventCreateForm = (): {
  form: EventCreateFormRef;
  handleSubmit: () => void;
  createEventSubmitError: Ref<unknown>;
} => {
  const { mutate: createNewEvent } = useEventCreate();
  const router = useRouter();
  const createEventSubmitError: Ref<unknown> = ref(null);
  const form: EventCreateFormRef = ref({
    name: '',
    dateBegin: null,
    dateEnd: null,
    description: '',
  });

  const handleSubmit = (): void => {
    createNewEvent(form.value, {
      onSuccess(eventCreated: EventDTO): void {
        router.push({
          name: 'eventView',
          params: {
            id: eventCreated.id,
          },
        });
      },
      onError(error: unknown): void {
        createEventSubmitError.value = error;
      },
    });
  };

  return { form, handleSubmit, createEventSubmitError };
};
