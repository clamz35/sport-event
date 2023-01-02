<template>
  <Card>
    <h1 class="form-card__title h2">{{ t(title) }}</h1>
    <form @submit.prevent="$emit('submit', $event)">
      <div class="form-card__form">
        <slot></slot>
      </div>
      <div class="form-card__actions">
        <slot name="actions">
          <Button theme="neutral" @click="$emit('cancel')" class="form-card__cancel-button">
            {{ t('cancelBtn') }}
          </Button>
          <Button :disabled="submitIsDisabled" type="submit">{{ t(submitBtnI18nLabel) }}</Button>
        </slot>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import Button from 'ui/Button.vue';
import Card from 'ui/Card.vue';
import { useI18n } from 'vue-i18n';

withDefaults(
  defineProps<{
    title: string;
    submitIsDisabled?: boolean;
    submitBtnI18nLabel?: string;
  }>(),
  {
    submitIsDisabled: false,
    submitBtnI18nLabel: 'formCardSubmitBtn',
  },
);

defineEmits<{
  (e: 'submit', event: Event): void;
  (e: 'cancel'): void;
}>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/mixins' as m;
.form-card {
  &__title {
    padding-bottom: 2.625rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 3rem;
  }
}

@include m.sd-down {
  .form-card {
    &__actions {
      flex-direction: column;
    }
    &__cancel-button {
      order: 2;
    }
  }
}
</style>
