<template>
  <div class="player-list">
    <List>
      <ListItem>
        <Input
          v-model="newPlayer"
          placeholder="Nom du joueur"
          autocomplete="false"
          @keyup.enter="createPlayer()"
        >
          <Button
            theme="transparent"
            size="sm"
            :disabled="addPlayerIsDisabled"
            @click="createPlayer()"
          >
            <PlusIcon size="18" />
          </Button>
        </Input>
      </ListItem>
      <ListItem v-for="player of playerSorted" :key="player.id">
        <Card size="xs">{{ player.username }}</Card>
      </ListItem>
    </List>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { PlusIcon } from 'vue-tabler-icons';
import type { Player } from '@/models/player/Player';
import Button from 'ui/Button.vue';
import Input from 'ui/Input.vue';
import List from 'ui/List.vue';
import ListItem from 'ui/ListItem.vue';
import { useEventAddPlayer } from '@/composables/event/api/useEventAddPlayer';
import { useRoute } from 'vue-router';
import Card from 'ui/Card.vue';

const props = defineProps<{
  players: Player[];
}>();

const route = useRoute();
const eventId = route.params.id;

const { mutate: addPlayer } = useEventAddPlayer(Number(eventId as string));

const newPlayer = ref('');

const playerSorted = computed(() => [...props.players].reverse());

const createPlayer = (): void => {
  addPlayer({ username: newPlayer.value });
  newPlayer.value = '';
};

const addPlayerIsDisabled = computed(() => newPlayer.value === '');
</script>

<style scoped lang="scss">
.player-list {
  max-width: 31.25rem;
}
</style>
