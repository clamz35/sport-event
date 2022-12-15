<template>
  <input
    type="text"
    :value="value"
    class="rounded-md border border-sp-neutral-300 border-solid px-2 py-1"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>
