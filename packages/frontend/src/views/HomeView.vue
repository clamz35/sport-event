<template>
  <div class="wrapper sp-container-full">
    <div class="home-view">
      <div>
        <HomeHeroDescription></HomeHeroDescription>
      </div>

      <div class="home-view__calendar">
        <HomeHeroCalendar></HomeHeroCalendar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeroDescription from '@/components/home/HomeHeroDescription.vue';
import HomeHeroCalendar from '@/components/home/HomeHeroCalendar.vue';
</script>

<style scoped lang="scss">
@use '/src/assets/styles/mixins' as m;
.wrapper {
  position: relative;
  isolation: isolate;

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
  gap: 2rem;
  justify-content: space-evenly;
  align-items: center;
  padding-inline: 2rem;

  color: hsl(var(--primary-contrast));

  &__calendar {
    flex: 1;
    max-width: 600px;
  }
}

@include m.md-up {
  .wrapper {
    align-items: center;
  }
}

@include m.md-down {
  .home-view {
    flex-direction: column;
    padding-bottom: 4rem;
    justify-content: flex-end;

    &__calendar {
      display: none;
    }
  }
}
</style>
