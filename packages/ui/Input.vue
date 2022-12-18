<template>
  <input
    type="text"
    v-model="value"
    class="input rounded-md border border-sp-neutral-300 border-solid px-2 py-1"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style scoped lang="scss">
.input {
  border-radius: var(--rounded-300);
  border: 1px solid hsl(var(--neutral-300));
  padding: 0.25rem 8px;
}
</style>
