<template>
  <input
    type="text"
    :value="value"
    class="input rounded-md border border-sp-neutral-300 border-solid px-2 py-1"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped lang="scss">
.input {
  border-radius: var(--rounded-300);
  border: 1px solid hsl(var(--neutral-300));
  padding: 0.25rem 8px;
}
</style>
