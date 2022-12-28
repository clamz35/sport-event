<template>
  <span
    class="field-hint"
    :class="{
      'field-hint--error': isError,
      'field-hint--valid': isValid,
    }"
  >
    {{ message }}
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    message: string;
    isError?: boolean;
    isValid?: boolean;
  }>(),
  {
    isError: false,
    isValid: false,
  },
);
</script>

<style lang="scss" scoped>
.field-hint {
  font-size: var(--fs-400);
  color: hsl(var(--neutral-400));
  &--valid {
    color: hsl(var(--accent));
  }
  &--error {
    color: hsl(var(--error));
  }
}
</style>
