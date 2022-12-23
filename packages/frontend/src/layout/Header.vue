<template>
  <div class="header">
    <RouterLink class="header__title" :to="{ name: 'home' }">Sport Event</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 1.5rem 3rem;

  &__title {
    color: hsl(var(--primary-contrast));
    font-size: var(--fs-750);
    font-weight: 500;
    line-height: 1;
  }
}
</style>
