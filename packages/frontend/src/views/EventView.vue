<template>
  <div class="sp-container">
    <template v-if="event">
      <EventViewHeader :event="event"></EventViewHeader>
      <PlayerList :players="event.players"></PlayerList>
    </template>
    <div v-else-if="isLoading">Chargement...</div>
    <div v-else-if="isError">
      <HttpErrorContainer
        v-if="error"
        notFoundI18nKey="eventErrorNotFound"
        :error="error"
      ></HttpErrorContainer>
    </div>
  </div>
</template>
<script setup lang="ts">
import EventViewHeader from '@/components/event/EventViewHeader.vue';
import HttpErrorContainer from '@/components/HttpErrorContainer.vue';
import PlayerList from '@/components/player/PlayerList.vue';
import { useEventGet } from '@/composables/event/api/useEventGet';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: event, isError, error, isLoading } = useEventGet(Number(route.params.id));
</script>
