<template>
  <div class="wrapper sp-container-full">
    <div class="home-view">
      <div>
        <h1 class="home-view__title">Créez vos évènements sportifs</h1>
        <div class="home-view__description">
          Organisez vos évènements sportifs facilement avec vos amis. Pas besoin d'inscription !
        </div>
        <div class="home-view__actions">
          <RouterLink :to="{ name: 'eventCreate' }">
            <Button>{{ t('createNewEventBtnLabel') }}</Button>
          </RouterLink>
          <RouterLink :to="{ name: 'groupCreate' }">
            <Button theme="secondary">{{ t('createNewGroupBtnLabel') }}</Button>
          </RouterLink>
        </div>
      </div>

      <div>
        <SeDatePicker
          :inline="true"
          menuClassName="home-view__datepicker"
          @update:modelValue="handleDate"
        ></SeDatePicker>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from 'ui/Button.vue';
import SeDatePicker from 'ui/SeDatePicker.vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

const handleDate = (date: Date | null): void => {
  router.push({
    name: 'eventCreate',
    query: {
      dateBegin: date?.getTime(),
    },
  });
};
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  isolation: isolate;
  padding-top: 14rem;
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  &::before {
    background-image: url('/img/hero-background.webp');
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
  justify-content: space-evenly;

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

<style lang="scss">
.home-view {
  &__datepicker {
    border-radius: 8px;
    width: 600px;
    padding-block: 2rem;
    .dp__month_year_row {
      margin-bottom: 1rem;
    }
    .dp__action_row,
    .dp__month_year_row {
      padding-inline: 1.5rem;
    }

    .dp__calendar,
    .dp__calendar_header,
    .dp__calendar_row {
      width: 100%;
    }

    .dp__calendar_item {
      display: flex;
      justify-content: center;
      height: 60px;
    }
    .dp__cell_inner {
      $cellSize: 3.125rem;
      width: $cellSize;
      height: $cellSize;
    }
  }
}
</style>
