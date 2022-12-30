<template>
  <FloatLabel id="eventName" label="eventNameInputLabel">
    <Input id="eventName" name="eventName" v-model="form.name"></Input>
    <span v-if="form.nameError">{{ t(form.nameError) }}</span>
  </FloatLabel>
  <FloatLabel id="eventAddress" label="eventAddressInputLabel">
    <Input id="eventAddress" name="eventAddress" v-model="form.address"></Input>
  </FloatLabel>
  <FloatLabel id="eventDate" label="eventDateInputLabel">
    <SeDatePicker
      v-model="form.dateBegin"
      :placeholder="t('eventDateBeginPlaceholder')"
    ></SeDatePicker>
    <SeDatePicker v-model="form.dateEnd" :placeholder="t('eventDateEndPlaceholder')"></SeDatePicker>
  </FloatLabel>
  <FloatLabel id="eventDescription" label="eventDescriptionTextareaLabel">
    <Textarea v-model="form.description" id="eventDescription" name="eventDescription"></Textarea>
  </FloatLabel>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import FloatLabel from 'ui/FloatLabel.vue';
import SeDatePicker from 'ui/SeDatePicker.vue';
import Textarea from 'ui/Textarea.vue';
import Input from 'ui/Input.vue';
import type { EventCreateForm } from '@/models/event/form/EventCreateForm';
import { useI18n } from 'vue-i18n';

const props = withDefaults(
  defineProps<{
    modelValue: EventCreateForm;
    error?: boolean;
  }>(),
  {
    error: false,
  },
);

const { t } = useI18n();

const emit = defineEmits(['update:modelValue']);

const form = computed({
  get() {
    return props.modelValue;
  },
  set(form) {
    emit('update:modelValue', form);
  },
});
</script>
