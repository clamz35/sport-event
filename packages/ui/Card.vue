<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: var(--rounded-300);
  background-color: hsl(var(--primary-contrast));
  color: hsl(var(--primary));
  padding: 1.5rem 2rem;
}
</style>
