<template>
  <div class="floating-labeled-field">
    <label class="floating-labeled-field__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
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
