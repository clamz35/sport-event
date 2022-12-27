<template>
  <FloatLabel id="groupName" label="Nom du groupe :">
    <div>
      <Input
        id="groupName"
        name="groupName"
        v-model="value"
        :error="nameRequiredValidation.isError()"
        @keyup="nameRequiredValidation.initialized()"
      ></Input>

      <FieldHint
        :message="nameRequiredValidation.message"
        :isError="nameRequiredValidation.isError()"
        :isValid="nameRequiredValidation.isValid()"
      ></FieldHint>
    </div>
  </FloatLabel>
</template>

<script setup lang="ts">
import FloatLabel from 'ui/FloatLabel.vue';
import FieldHint from 'ui/form/FieldHint.vue';
import Input from 'ui/Input.vue';
import { computed, ref } from 'vue';

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

const initialized = ref(false);
const nameRequiredValidation = computed(() => ({
  initialized: (): void => {
    initialized.value = true;
  },
  isError: (): boolean => initialized.value && value.value === '',
  isValid: (): boolean => initialized.value && value.value !== '',
  message: 'Veuillez saisir un nom de groupe.',
}));
</script>
