<template>
  <div
    class="input"
    :class="{
      'input--error': error,
    }"
  >
    <input
      v-model="value"
      class="input__field"
      autocomplete="off"
      :class="{
        'input__field--error': error,
      }"
      :type="type"
      :placeholder="placeholder"
    />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | Date | number | null;
    type?: 'text' | 'date' | 'number' | 'datetime-local';
    error?: boolean;
    placeholder?: string;
  }>(),
  {
    modelValue: '',
    type: 'text',
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
.input {
  display: flex;
  background-color: hsl(var(--primary-contrast));
  border-radius: var(--rounded-300);
  border: 1px solid hsl(var(--neutral-300));
  width: 100%;
  &:focus,
  &:focus-within,
  &:focus-visible {
    border-color: hsl(var(--neutral-500));
  }

  &--error {
    border-color: hsl(var(--error), 0.4);

    &:focus,
    &:focus-within,
    &:focus-visible {
      border-color: hsl(var(--error));
    }
  }

  &__field {
    flex: 1;
    border: none;
    padding: 0.5rem 8px;
    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: hsl(var(--neutral-500));
    }

    &--error {
      background-color: hsl(var(--error), 0.2);
    }
  }
}
</style>
