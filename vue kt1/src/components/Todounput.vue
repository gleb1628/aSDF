<template>
  <section class="input-form-wrapper">
    <input
      type="text"
      @keydown.enter="submitNewItem"
      v-model="newItemTitle"
      placeholder="Что нужно сделать?"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';

const newItemTitle = ref('');
const emit = defineEmits(['new-item']);

const submitNewItem = () => {
  emit('new-item', newItemTitle.value);
  newItemTitle.value = '';
};
</script>

<style scoped>
.input-form-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.input-form-wrapper > input {
  width: 100%;
  padding: 10px;
  box-shadow: 5px 5px 5px black;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}
</style>