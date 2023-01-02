<template>
  <div class="create-event sp-container-full sp-container-full--centered">
    <FormCard class="create-event__card" title="createNewEventFormTitle" @submit="onSubmit">
      <ErrorContainer v-if="createEventSubmitError">
        {{ t('createEventSubmitError') }}
      </ErrorContainer>
      <EventCreateForm v-model="form"></EventCreateForm>
      <template v-slot:actions>
        <Button theme="neutral" @click="cancel" class="create-event__cancel-button">{{
          t('cancelBtn')
        }}</Button>
        <Button :disabled="!isValid" type="submit">{{ t('createNewEventSubmitBtn') }}</Button>
      </template>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import EventCreateForm from '@/components/event/EventCreateForm.vue';
import FormCard from '@/components/FormCard.vue';
import { useEventCreateForm } from '@/composables/event/form/useEventCreateForm';
import { useFormCancel } from '@/composables/useFormCancel';
import type { EventCreateForm as EventCreateFormModel } from '@/models/event/form/EventCreateForm';
import Button from 'ui/Button.vue';
import ErrorContainer from 'ui/ErrorContainer.vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();

const { query } = useRoute();

const initialFormValues: Partial<EventCreateFormModel> = {};
if (typeof query.dateBegin === 'string') {
  initialFormValues.dateBegin = new Date(Number(query.dateBegin));
}
const { form, onSubmit, createEventSubmitError, isValid } = useEventCreateForm(initialFormValues);

const cancel = useFormCancel();
</script>

<style scoped lang="scss">
@use 'src/assets/styles/mixins' as m;
.create-event {
  &__cancel-button {
    order: 2;
  }
}

@include m.sd-down {
  .create-event {
    align-items: stretch;
    &__card {
      width: 100%;
    }
  }
}
</style>
