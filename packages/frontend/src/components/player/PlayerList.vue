<template>
  <div>
    <ul>
      <li v-for="player of players" :key="player.id">{{ player.username }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { Player } from '@/models/player/Player';

defineProps<{
  players: Player[];
}>();
</script>
