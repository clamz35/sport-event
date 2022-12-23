<template>
  <div class="error-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.error-container {
  border: 1px solid hsl(var(--error));
  background-color: hsl(var(--error), 0.3);
  padding: 0.75rem 8px;
}
</style>
