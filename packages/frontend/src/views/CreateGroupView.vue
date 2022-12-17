<template>
  <div class="sp-container-full-centered">
    <Card>
      <h1 class="create-group__title h2">Création d'un nouveau groupe</h1>
      <div class="create-group__form">
        <FloatingLabeledField label="Nom du groupe :">
          <Input></Input>
        </FloatingLabeledField>
        <FloatingLabeledField label="Votre email (Optionnel) :">
          <Input></Input>
        </FloatingLabeledField>
      </div>
      <div class="create-group__actions">
        <Button theme="secondary">Annuler</Button>
        <Button @click="createNewGroup(newGroup)"
          >Créer le nouveau groupe</Button
        >
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useCreateGroup } from '@/composables/group/useCreateGroup';
import type { GroupDTO } from 'dto/group.dto';
import Button from 'ui/Button.vue';
import Card from 'ui/Card.vue';
import FloatingLabeledField from 'ui/FloatingLabeledField.vue';
import Input from 'ui/Input.vue';
import { ref, type Ref } from 'vue';

const newGroup: Ref<GroupDTO> = ref({
  name: 'Domloup city',
});

const { mutate: createNewGroup } = useCreateGroup();
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
