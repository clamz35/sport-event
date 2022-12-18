<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--primary': theme === 'primary',
      'button--secondary': theme === 'secondary',
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    theme?: 'primary' | 'secondary' | 'error' | 'warning';
  }>(),
  {
    theme: 'primary',
  },
);
</script>

<style scoped lang="scss">
.button {
  border-radius: var(--rounded-700);
  padding: 1rem 32px;
  line-height: 1;
  font-weight: 500;
  border: 3px solid transparent;
  transition: all 250ms ease-in;

  &--primary {
    background-color: hsl(var(--accent));
    color: hsl(var(--primary));

    &:hover {
      border-color: hsl(var(--accent));
      background-color: inherit;
    }
  }

  &--secondary {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-contrast));

    &:hover {
      color: hsl(var(--primary));
      border-color: hsl(var(--primary));
      background-color: inherit;
    }
  }
}
</style>
