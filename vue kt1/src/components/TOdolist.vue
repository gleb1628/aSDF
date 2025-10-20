<template>
  <section>
    <div
      v-for="entry in entries"
      :key="entry.id"
      class="list-item-container"
    >
      <TodoItem
        :identifier="entry.id"
        :title="entry.text"
        :is-finished="entry.done"
        @delete-request="emit('delete-request', $event)"
        @toggle-complete="emit('toggle-complete', $event)"
      />
    </div>
  </section>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

defineProps({
  entries: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['delete-request', 'toggle-complete']);
</script>

<style scoped>
.list-item-container {
  margin-bottom: 10px;
}
</style>