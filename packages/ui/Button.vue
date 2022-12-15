<template>
  <button
    type="button"
    class="rounded-xl px-8 py-4 leading-none font-medium border-[3px] border-solid border-transparent transition-all duration-500"
    :class="{
      'bg-sp-accent text-sp-primary hover:border-sp-accent hover:bg-inherit':
        theme === 'primary',
      'bg-sp-primary text-sp-primary-contrast hover:border-sp-primary hover:text-sp-primary hover:bg-inherit':
        theme === 'secondary',
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
  }
);
</script>
