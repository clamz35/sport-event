<template>
  <div class="sp-container-full-centered">
    <Card>
      <h1 class="h2 pb-11">Création d'un nouveau groupe</h1>
      <div class="flex flex-col gap-6">
        <FloatingLabeledField label="Nom du groupe :">
          <Input></Input>
        </FloatingLabeledField>
        <FloatingLabeledField label="Votre email (Optionnel) :">
          <Input></Input>
        </FloatingLabeledField>
      </div>
      <div class="flex gap-2 justify-end mt-12">
        <Button theme="secondary">Annuler</Button>
        <Button theme="primary">Créer le nouveau groupe</Button>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Button from 'ui/Button.vue';
import Card from 'ui/Card.vue';
import FloatingLabeledField from 'ui/FloatingLabeledField.vue';
import Input from 'ui/Input.vue';
</script>
