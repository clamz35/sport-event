<template>
  <div class="sp-container-full-centered">
    <FormCard title="createNewGroupFormTitle" @submit="handleSubmit()">
      <ErrorContainer v-if="createGroupSubmitError">
        {{ t('createGroupSubmitError') }}
      </ErrorContainer>

      <GroupNameField v-model="form.name"></GroupNameField>
      <FloatLabel id="email" label="Votre email (Optionnel) :">
        <Input v-model="form.creatorEmail" id="email" name="email"></Input>
      </FloatLabel>

      <template v-slot:actions>
        <Button theme="secondary">Annuler</Button>
        <Button :disabled="!form.name" type="submit">Créer le nouveau groupe</Button>
      </template>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import GroupNameField from '@/components/group/GroupNameField.vue';
import { useGroupCreateForm } from '@/composables/group/form/useGroupCreateForm';
import Button from 'ui/Button.vue';
import ErrorContainer from 'ui/ErrorContainer.vue';
import FloatLabel from 'ui/FloatLabel.vue';
import Input from 'ui/Input.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const { form, handleSubmit, createGroupSubmitError } = useGroupCreateForm();
</script>

<style lang="scss" scoped></style>
