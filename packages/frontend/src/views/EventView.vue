<template>
  <div class="sp-container">
    <EventViewHeader v-if="event" :event="event"></EventViewHeader>
  </div>
</template>
<script setup lang="ts">
import EventViewHeader from '@/components/event/EventViewHeader.vue';
import { useEventGet } from '@/composables/event/api/useEventGet';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: event } = useEventGet(Number(route.params.id));
</script>
