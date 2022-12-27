<template>
  <Datepicker
    v-model="value"
    :placeholder="placeholder"
    format="dd/MM/yyyy HH:mm"
    :class="{
      'datepicker--error': error,
    }"
  ></Datepicker>
</template>

<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: Date | null;
    placeholder?: string;
    error?: boolean;
  }>(),
  {
    modelValue: null,
    error: false,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
