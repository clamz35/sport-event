<template>
  <header class="bg-sp-primary text-sp-primary-contrast">
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

<style scoped></style>
