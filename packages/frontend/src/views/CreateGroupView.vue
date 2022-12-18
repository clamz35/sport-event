<template>
  <div class="sp-container-full-centered">
    <Card>
      <h1 class="create-group__title h2">Création d'un nouveau groupe</h1>
      <div class="create-group__form">
        <FloatingLabeledField label="Nom du groupe :">
          <div>
            <Input
              v-model="form.name"
              :error="nameRequiredValidation.isError()"
              @keyup="nameRequiredValidation.initialized()"
            ></Input>

            <FieldHint
              :message="nameRequiredValidation.message"
              :isError="nameRequiredValidation.isError()"
              :isValid="nameRequiredValidation.isValid()"
            ></FieldHint>
          </div>
        </FloatingLabeledField>
        <FloatingLabeledField label="Votre email (Optionnel) :">
          <Input v-model="form.creatorEmail"></Input>
        </FloatingLabeledField>
      </div>

      <div class="create-group__actions">
        <Button theme="secondary">Annuler</Button>
        <Button :disabled="!form.name" @click="handleSubmit()">Créer le nouveau groupe</Button>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useCreateGroup } from '@/composables/group/useCreateGroup';
import type { GroupDTO } from 'dto/group.dto';
import Button from 'ui/Button.vue';
import Card from 'ui/Card.vue';
import FieldHint from 'ui/form/FieldHint.vue';
import FloatingLabeledField from 'ui/FloatingLabeledField.vue';
import Input from 'ui/Input.vue';
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { mutate: createNewGroup } = useCreateGroup();

const initialized = ref(false);

const form = reactive<GroupDTO>({
  name: '',
  creatorEmail: '',
});

const nameRequiredValidation = computed(() => ({
  initialized: () => (initialized.value = true),
  isError: (): boolean => initialized.value && form.name === '',
  isValid: (): boolean => initialized.value && form.name !== '',
  message: 'Veuillez saisir un nom de groupe.',
}));

const handleSubmit = (): void => {
  createNewGroup(form, {
    onSuccess(groupCreated): void {
      router.push({
        name: 'viewGroup',
        params: {
          id: groupCreated.id,
        },
      });
    },
  });
};
</script>

<style lang="scss" scoped>
.create-group {
  &__title {
    padding-bottom: 2.625rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 3rem;
  }
}
</style>
