<template>
  <div class="floating-labeled-field">
    <label class="floating-labeled-field__label" :for="id">{{ t(label) }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
defineProps<{
  label: string;
  id: string;
}>();

const { t } = useI18n();
</script>

<style scoped lang="scss">
.floating-labeled-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &__label {
    line-height: 1;
  }
}
</style>
