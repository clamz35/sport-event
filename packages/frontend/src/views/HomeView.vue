<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="sp-container-full-centered">
    <div class="flex flex-col gap-36 items-center">
      <h1>Créez vos évènements sportifs</h1>
      <div class="flex gap-4">
        <RouterLink :to="{ name: 'createGroup' }">
          <Button>{{ t('createNewGroupBtnLabel') }}</Button>
        </RouterLink>
        <Button theme="secondary">Créer un évènement</Button>
      </div>
    </div>
  </div>
</template>
