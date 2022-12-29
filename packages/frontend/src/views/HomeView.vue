<template>
  <div class="wrapper sp-container-full">
    <div class="home-view">
      <h1 class="home-view__title">Créez vos évènements sportifs</h1>
      <div class="home-view__description">
        Organisez vos évènements sportifs facilement avec vos amis. Pas besoin d'inscription !
      </div>
      <div class="home-view__actions">
        <RouterLink :to="{ name: 'groupCreate' }">
          <Button>{{ t('createNewGroupBtnLabel') }}</Button>
        </RouterLink>
        <RouterLink :to="{ name: 'eventCreate' }">
          <Button theme="secondary">{{ t('createNewEventBtnLabel') }}</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from 'ui/Button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  isolation: isolate;
  padding: 14rem 15rem;
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  &::before {
    background-image: url('/img/hero-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    z-index: -2;
  }
  &::after {
    background: linear-gradient(
      hsl(var(--primary)) 0%,
      hsl(var(--primary) / 0.8) 30%,
      hsl(var(--primary) / 0.6)
    );
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
}

.home-view {
  display: flex;
  flex-direction: column;

  color: hsl(var(--primary-contrast));

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
