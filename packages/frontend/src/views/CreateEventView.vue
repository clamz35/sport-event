<template>
  <div class="sp-container-full-centered">
    <FormCard title="createNewEventFormTitle" @submit="onSubmit">
      <ErrorContainer v-if="createEventSubmitError">
        {{ t('createEventSubmitError') }}
      </ErrorContainer>
      <EventCreateForm v-model="form"> </EventCreateForm>
      <template v-slot:actions>
        <Button theme="secondary">Annuler</Button>
        <Button :disabled="!isValid" type="submit">{{ t('createNewEventSubmitBtn') }}</Button>
      </template>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useEventCreateForm } from '@/composables/event/form/useEventCreateForm';

import EventCreateForm from '@/components/event/EventCreateForm.vue';
import FormCard from '@/components/FormCard.vue';
import Button from 'ui/Button.vue';
import ErrorContainer from 'ui/ErrorContainer.vue';

const { t } = useI18n();

const { form, onSubmit, createEventSubmitError, isValid } = useEventCreateForm();
</script>
