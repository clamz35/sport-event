<template>
  <div class="wrapper sp-container-full">
    <div class="home-view">
      <div>
        <HomeHeroDescription></HomeHeroDescription>
      </div>

      <div>
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
}

@include m.md-down {
  .home-view {
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;
    padding-bottom: 4rem;
  }
}
</style>
