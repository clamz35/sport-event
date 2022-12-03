<template>
  <div class="flex flex-col gap-3">
    <label class="leading-none">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
