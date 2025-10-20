<template>
  <article
    class="todo-card"
    :class="cardStatusClass"
    @click="requestDelete"
    @dblclick="requestToggle"
  >
    <h2>{{ title }}</h2>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  isFinished: Boolean,
  identifier: [String, Number]
});

const emit = defineEmits(['toggle-complete', 'delete-request']);

const cardStatusClass = computed(() => {
  return props.isFinished ? 'todo-card--complete' : 'todo-card--incomplete';
});

const requestToggle = () => {
  emit('toggle-complete', props.identifier);
};

const requestDelete = () => {
  emit('delete-request', props.identifier);
};
</script>

<style scoped>
.todo-card {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px;
  outline: 2px solid black;
  box-shadow: 5px 5px 5px black;
  width: 100%;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.todo-card:hover {
   transform: scale(1.01);
}

.todo-card--incomplete {
  background-color: red;
}
.todo-card--complete {
  background-color: green;
}
</style>