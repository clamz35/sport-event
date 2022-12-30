<template>
  <div class="sp-container-full sp-container-full--centered">
    <FormCard title="createNewEventFormTitle" @submit="onSubmit">
      <ErrorContainer v-if="createEventSubmitError">
        {{ t('createEventSubmitError') }}
      </ErrorContainer>
      <EventCreateForm v-model="form"></EventCreateForm>
      <template v-slot:actions>
        <Button theme="neutral">{{ t('cancelBtn') }}</Button>
        <Button :disabled="!isValid" type="submit">{{ t('createNewEventSubmitBtn') }}</Button>
      </template>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import type { EventCreateForm as EventCreateFormModel } from '@/models/event/form/EventCreateForm';
import { useEventCreateForm } from '@/composables/event/form/useEventCreateForm';
import EventCreateForm from '@/components/event/EventCreateForm.vue';
import FormCard from '@/components/FormCard.vue';
import Button from 'ui/Button.vue';
import ErrorContainer from 'ui/ErrorContainer.vue';

const { t } = useI18n();

const { query } = useRoute();

const initialFormValues: Partial<EventCreateFormModel> = {};
if (typeof query.dateBegin === 'string') {
  initialFormValues.dateBegin = new Date(Number(query.dateBegin));
}
const { form, onSubmit, createEventSubmitError, isValid } = useEventCreateForm(initialFormValues);
</script>
