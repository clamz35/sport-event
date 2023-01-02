<template>
  <div class="create-group sp-container-full sp-container-full--centered">
    <FormCard
      class="create-group__card"
      title="createNewGroupFormTitle"
      submitBtnI18nLabel="createNewGroupSubmitBtn"
      :submitIsDisabled="!form.name"
      @submit="handleSubmit()"
      @cancel="cancel"
    >
      <ErrorContainer v-if="createGroupSubmitError">
        {{ t('createGroupSubmitError') }}
      </ErrorContainer>

      <GroupNameField v-model="form.name"></GroupNameField>
      <FloatLabel id="email" label="Votre email (Optionnel) :">
        <Input v-model="form.creatorEmail" id="email" name="email"></Input>
      </FloatLabel>
    </FormCard>
  </div>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import GroupNameField from '@/components/group/GroupNameField.vue';
import { useGroupCreateForm } from '@/composables/group/form/useGroupCreateForm';
import { useFormCancel } from '@/composables/useFormCancel';
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

@include m.sd-down {
  .create-group {
    align-items: stretch;

    &__card {
      width: 100%;
    }
  }
}
</style>
