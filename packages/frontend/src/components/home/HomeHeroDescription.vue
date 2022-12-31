<template>
  <h1 class="home-hero-description__title">{{ t('homeHeroTitle') }}</h1>
  <div class="home-hero-description__baseline">
    {{ t('homeHeroDescription') }}
  </div>
  <div class="home-hero-description__actions">
    <RouterLink :to="{ name: 'eventCreate' }">
      <Button :fluid="true">{{ t('createNewEventBtnLabel') }}</Button>
    </RouterLink>
    <RouterLink :to="{ name: 'groupCreate' }">
      <Button theme="secondary" :fluid="true">{{ t('createNewGroupBtnLabel') }}</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import Button from 'ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use 'src/assets/styles/mixins' as m;
.home-hero-description {
  &__title {
    line-height: 1.2;
  }
  &__baseline {
    font-size: var(--fs-550);
    margin-bottom: 3rem;
  }
  &__actions {
    display: flex;
    gap: 16px;
  }
}

@include m.md-down {
  .home-hero-description {
    &__actions {
      flex-direction: column;
      align-items: stretch;
    }
  }
}
</style>
