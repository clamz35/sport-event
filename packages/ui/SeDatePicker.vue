<template>
  <Datepicker
    v-model="value"
    format="dd/MM/yyyy HH:mm"
    :placeholder="placeholder"
    :flow="flow"
    :inline="inline"
    :enable-time-picker="enableTimePicker"
    :menu-class-name="menuClassName"
    :class="{
      'datepicker--error': error,
    }"
  ></Datepicker>
</template>

<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed, type Ref, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: Date | null;
    placeholder?: string;
    inline?: boolean;
    enableTimePicker?: boolean;
    menuClassName?: string;
    error?: boolean;
  }>(),
  {
    modelValue: null,
    inline: false,
    enableTimePicker: true,
    menuClassName: '',
    placeholder: '',
    error: false,
  },
);
const flow: Ref<('calendar' | 'time')[]> = ref(['calendar', 'time']) as Ref<
  ('calendar' | 'time')[]
>;

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date | null): void;
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
