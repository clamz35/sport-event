<template>
  <div
    class="card"
    :class="{
      'card--xsmall': size === 'xs',
      'card--small': size === 's',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'xs' | 's' | 'm' | 'l';
  }>(),
  {
    size: 'm',
  },
);
</script>

<style scoped lang="scss">
.card {
  border-radius: var(--rounded-300);
  background-color: hsl(var(--primary-contrast));
  color: hsl(var(--primary));
  padding: 1.5rem 2rem;

  &--xsmall {
    padding: 0.5rem 1rem;
  }
  &--small {
    padding: 1rem 1.5rem;
  }
}
</style>
