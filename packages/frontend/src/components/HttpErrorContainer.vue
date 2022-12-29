<template>
  <ErrorContainer>
    <template v-if="isNotFoundError">{{ t(notFoundI18nKey) }}</template>
    <template v-if="isServerError">
      {{ t(serverErrorI18nKey) }}
    </template>
  </ErrorContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import ErrorContainer from 'ui/ErrorContainer.vue';

const props = withDefaults(
  defineProps<{
    error: { statusCode: number; message: string };
    notFoundI18nKey?: string;
    serverErrorI18nKey?: string;
  }>(),
  {
    notFoundI18nKey: 'notFoundError',
    serverErrorI18nKey: 'serverError',
  },
);

const { t } = useI18n();

const isNotFoundError = computed(() => props.error.statusCode === 404);
const isServerError = computed(() => props.error.statusCode.toString().startsWith('5'));
</script>
