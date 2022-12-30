<template>
  <h1 class="home-hero-description__title">{{ t('homeHeroTitle') }}</h1>
  <div class="home-hero-description__description">
    {{ t('homeHeroDescription') }}
  </div>
  <div class="home-hero-description__actions">
    <RouterLink :to="{ name: 'eventCreate' }">
      <Button>{{ t('createNewEventBtnLabel') }}</Button>
    </RouterLink>
    <RouterLink :to="{ name: 'groupCreate' }">
      <Button theme="secondary">{{ t('createNewGroupBtnLabel') }}</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import Button from 'ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.home-hero-description {
  &__description {
    font-size: var(--fs-550);
    margin-bottom: 3rem;
  }
  &__actions {
    display: flex;
    gap: 16px;
  }
}
</style>
