import { useField, useForm } from 'vee-validate';
import { toFormValidator } from '@vee-validate/zod';
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { z } from 'zod';
import type { EventModel } from '@/models/event/Event';
import type { EventCreateForm } from '@/models/event/form/EventCreateForm';
import { useEventCreate } from '../api/useEventCreate';

type EventCreateFormRef = Ref<EventCreateForm>;

export const useEventCreateForm = (
  initialFormValue?: Partial<EventCreateForm>,
): {
  form: EventCreateFormRef;
  onSubmit: (onSubmit: Event) => void;
  createEventSubmitError: Ref<unknown>;
  errors: ComputedRef<Partial<Record<keyof EventCreateForm, string | undefined>>>;
  isValid: ComputedRef<boolean>;
} => {
  const { mutate: createNewEvent } = useEventCreate();
  const router = useRouter();
  const createEventSubmitError: Ref<unknown> = ref(null);

  const { errors, meta } = useForm<EventCreateForm>({
    initialValues: {
      name: '',
      dateBegin: new Date(),
      dateEnd: new Date(),
      description: '',
      address: '',
      ...initialFormValue,
    },
    validationSchema: toFormValidator(
      z.object({
        name: z.string().min(5, 'minCharError'),
        dateBegin: z.date(),
        dateEnd: z.date(),
        description: z.string(),
        address: z.string(),
      }),
    ),
  });

  const isValid = computed(() => meta.value.valid);

  const { value: name, errorMessage: nameError } = useField<string>('name');
  const { value: dateBegin } = useField<Date>('dateBegin');
  const { value: dateEnd } = useField<Date>('dateEnd');
  const { value: description } = useField<string>('description');
  const { value: address } = useField<string>('address');

  const form: EventCreateFormRef = ref({
    name,
    nameError,
    dateBegin,
    dateEnd,
    description,
    address,
  });

  const onSubmit = (): void => {
    if (!form.value.dateBegin || !form.value.dateEnd || !isValid.value) {
      if (errors.value) {
        throw errors.value;
      }
      throw new Error('Form is not complete');
    }
    createNewEvent(
      {
        ...form.value,
        dateBegin: form.value.dateBegin.toISOString(),
        dateEnd: form.value.dateEnd.toISOString(),
        players: [],
      },
      {
        onSuccess(eventCreated: EventModel): void {
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
      },
    );
  };

  return { form, onSubmit, createEventSubmitError, errors, isValid };
};
