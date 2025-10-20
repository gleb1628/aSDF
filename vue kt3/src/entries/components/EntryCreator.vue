<template>
  <form @submit.prevent="handleSubmit" class="creator-card">
    <AppTextarea
      v-model="newEntryText"
      placeholder="Что у вас нового?"
      rows="4"
    />
    <div class="creator-actions">
      <AppButton type="submit" variant="primary">Опубликовать</AppButton>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useEntryStore } from '../store/useEntryStore';
import AppButton from '../../shared/ui/AppButton.vue';
import AppTextarea from '../../shared/ui/AppTextarea.vue';

const newEntryText = ref('');
const store = useEntryStore();

const handleSubmit = () => {
  store.addEntry(newEntryText.value);
  newEntryText.value = '';
};
</script>

<style scoped>
.creator-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.creator-actions {
  display: flex;
  justify-content: flex-end;
}
</style>