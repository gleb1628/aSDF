<template>
  <section class="feed-container">
    <EntryCard
      v-for="item in store.entries"
      :key="item.id"
      :entry-data="item"
    />
  </section>
</template>

<script setup>
import { useEntryStore } from '../store/useEntryStore';
import EntryCard from './EntryCard.vue';

const store = useEntryStore();
</script>

<style scoped>
.feed-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>