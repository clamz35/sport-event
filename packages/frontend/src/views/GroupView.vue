<template>
  <div class="sp-container">
    <Loading v-if="isLoading"></Loading>
    <div v-else-if="group">
      <h1>{{ group?.name }}</h1>

      <div v-if="hasEvents"></div>
      <div v-else>
        <div>Il n'y a aucun évènement. Vous pouvez créer un nouvel évènement.</div>
        <Button>Créer un un nouvel évènement</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetGroup } from '@/composables/group/useGetGroup';
import { useRoute } from 'vue-router';
import Loading from 'ui/Loading.vue';
import { computed } from 'vue';
import Button from 'ui/Button.vue';
const route = useRoute();
const { data: group, isLoading } = useGetGroup(Number(route.params.id));

const hasEvents = computed(
  () => group.value && group.value.events && group.value.events.length > 0,
);
</script>
