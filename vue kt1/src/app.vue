<template>
  <main>
    <TodoInput @new-item="handleNewEntry" />
    <TodoList
      :entries="todoEntries"
      @delete-request="handleDeletion"
      @toggle-complete="handleStatusToggle"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

const todoEntries = ref([
  { id: 1, text: 'Позавтракать', done: true },
  { id: 2, text: 'Помыть огурцы', done: false },
  { id: 3, text: 'Погладить кота', done: true }
]);

const handleDeletion = (id) => {
  todoEntries.value = todoEntries.value.filter(task => task.id !== id);
};

const handleStatusToggle = (id) => {
  todoEntries.value = todoEntries.value.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
};

const handleNewEntry = (title) => {
  if (title.trim()) {
    todoEntries.value.push({
      id: Date.now(),
      text: title,
      done: false
    });
  }
};
</script>

<style scoped>
main {
  padding: 1rem;
}
</style>