<template>
  <header class="app-header">
    <Header></Header>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './layout/Header.vue';
</script>

<style scoped lang="scss">
.app-header {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-contrast));
}
</style>
