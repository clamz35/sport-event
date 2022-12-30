<template>
  <header>
    <h1>{{ event.name }}</h1>
    <div class="event-view-header__period">{{ eventDateBegin }} - {{ eventDateEnd }}</div>
    <div v-if="event.address" class="event-view-header__address">{{ event.address }}</div>
    <div class="event-view-header__description">{{ event.description }}</div>
  </header>
</template>

<script setup lang="ts">
import { useDateFormat } from '@/composables/useDateFormat';
import type { EventModel } from '@/models/event/Event';
import { computed } from 'vue';

const props = defineProps<{
  event: EventModel;
}>();

const eventDateBegin = computed(() =>
  props.event.dateBegin ? useDateFormat(props.event.dateBegin) : null,
);
const eventDateEnd = computed(() =>
  props.event.dateEnd ? useDateFormat(props.event.dateEnd) : null,
);
</script>

<style scoped lang="scss">
.event-view-header {
  &__period {
    color: hsl(var(--neutral-500));
    font-size: var(--fs-400);
  }

  &__description {
    margin-top: 1rem;
  }
}
</style>
