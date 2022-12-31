<template>
  <SeDatePicker
    :inline="true"
    menuClassName="home-calendar"
    @update:modelValue="handleDate"
  ></SeDatePicker>
</template>

<script setup lang="ts">
import SeDatePicker from 'ui/SeDatePicker.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const handleDate = (date: Date | null): void => {
  router.push({
    name: 'eventCreate',
    query: {
      dateBegin: date?.getTime(),
    },
  });
};
</script>

<style lang="scss">
@use 'src/assets/styles/mixins' as m;
.home-calendar {
  border-radius: 8px;
  width: min(600px, 100%);
  padding-block: 2rem;
  .dp__month_year_row {
    margin-bottom: 1rem;
  }
  .dp__action_row,
  .dp__month_year_row {
    padding-inline: 1.5rem;
  }

  .dp__calendar,
  .dp__calendar_header,
  .dp__calendar_row {
    width: 100%;
  }

  .dp__calendar_item {
    display: flex;
    justify-content: center;
    height: 60px;
  }
  .dp__cell_inner {
    $defaultCellSize: 3.125rem;
    width: var(--cell-size, $defaultCellSize);
    height: var(--cell-size, $defaultCellSize);
  }
}

@include m.md-down {
  .home-calendar {
    --cell-size: 1.125rem;
  }
}
</style>
