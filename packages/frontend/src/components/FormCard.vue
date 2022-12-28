<template>
  <Card>
    <h1 class="form-card__title h2">{{ t(title) }}</h1>
    <form @submit.prevent="$emit('submit', $event)">
      <div class="form-card__form">
        <slot></slot>
      </div>
      <div class="form-card__actions">
        <slot name="actions"></slot>
      </div>
    </form>
  </Card>
</template>

<script setup lang="ts">
import Card from 'ui/Card.vue';
import { useI18n } from 'vue-i18n';

defineProps<{
  title: string;
}>();

defineEmits<{
  (e: 'submit', event: Event): void;
}>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
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
</style>
