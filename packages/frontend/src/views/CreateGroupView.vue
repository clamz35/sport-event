<template>
  <div class="create-group sp-container-full sp-container-full--centered">
    <FormCard class="create-group__card" title="createNewGroupFormTitle" @submit="handleSubmit()">
      <ErrorContainer v-if="createGroupSubmitError">
        {{ t('createGroupSubmitError') }}
      </ErrorContainer>

      <GroupNameField v-model="form.name"></GroupNameField>
      <FloatLabel id="email" label="Votre email (Optionnel) :">
        <Input v-model="form.creatorEmail" id="email" name="email"></Input>
      </FloatLabel>

      <template v-slot:actions>
        <Button theme="neutral" @click="cancel" class="create-group__cancel-button">{{
          t('cancelBtn')
        }}</Button>
        <Button :disabled="!form.name" type="submit">{{ t('createNewGroupSubmitBtn') }}</Button>
      </template>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import GroupNameField from '@/components/group/GroupNameField.vue';
import { useGroupCreateForm } from '@/composables/group/form/useGroupCreateForm';
import { useFormCancel } from '@/composables/useFormCancel';
import Button from 'ui/Button.vue';
import ErrorContainer from 'ui/ErrorContainer.vue';
import FloatLabel from 'ui/FloatLabel.vue';
import Input from 'ui/Input.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const cancel = useFormCancel();

const { form, handleSubmit, createGroupSubmitError } = useGroupCreateForm();
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/mixins' as m;
.create-group {
  &__cancel-button {
    order: 2;
  }
}

@include m.sd-down {
  .create-group {
    align-items: stretch;

    &__card {
      width: 100%;
    }
  }
}
</style>
