<template>
  <textarea
    v-model="value"
    class="textarea"
    :class="{
      'textarea--error': error,
    }"
  ></textarea>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    error?: boolean;
  }>(),
  {
    modelValue: '',
    error: false,
  },
);

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
.textarea {
  border-radius: var(--rounded-300);
  border: 1px solid hsl(var(--neutral-300));
  padding: 0.5rem 8px;
  width: 100%;
  min-height: 200px;
  resize: none;

  &--error {
    border-color: hsl(var(--error), 0.4);
    background-color: hsl(var(--error), 0.2);

    &:focus {
      outline-color: hsl(var(--error));
    }
  }
}
</style>
