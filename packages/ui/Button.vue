<template>
  <button
    type="button"
    class="button"
    :class="{
      'button--primary': theme === 'primary',
      'button--secondary': theme === 'secondary',
      'button--transparent': theme === 'transparent',
      'button--error': theme === 'error',
      'button--fluid': fluid,
      'button--small': size === 'sm',
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    theme?: 'primary' | 'secondary' | 'error' | 'warning' | 'neutral' | 'transparent';
    fluid?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'm' | 'l';
  }>(),
  {
    theme: 'primary',
    fluid: false,
    disabled: false,
    size: 'm',
  },
);
</script>

<style scoped lang="scss">
.button {
  border-radius: var(--rounded-300);
  padding: 1rem 32px;
  line-height: 1;
  font-weight: 500;
  border: 3px solid transparent;
  transition: all 250ms ease-in;

  &[disabled] {
    cursor: default;
  }

  &--fluid {
    width: 100%;
  }

  &--small {
    padding: 0.5rem 16px;
  }

  &--primary {
    background-color: hsl(var(--accent));
    color: hsl(var(--primary));

    &[disabled] {
      background-color: hsl(var(--accent) / 0.6);
      color: hsl(var(--primary) / 0.6);
    }
    &:not([disabled]):hover {
      border-color: hsl(var(--accent));
      background-color: hsl(var(--accent) / 0.5);
    }
  }

  &--transparent {
    color: hsl(var(--primary));
    background-color: transparent;

    &[disabled] {
      color: hsl(var(--neutral-500));
    }
    &:not([disabled]):hover {
      background-color: hsl(var(--neutral-100));
    }
  }

  &--secondary {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-contrast));

    &:not([disabled]):hover {
      color: hsl(var(--primary-contrast));
      border-color: hsl(var(--primary));
      background-color: hsl(var(--primary) / 0.5);
    }
  }

  &--error {
    background-color: hsl(var(--error));
    color: hsl(var(--error-contrast));

    &:not([disabled]):hover {
      color: hsl(var(--error-contrast));
      border-color: hsl(var(--error));
      background-color: hsl(var(--error) / 0.5);
    }
  }
}
</style>
