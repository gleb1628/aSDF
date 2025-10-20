<template>
  <form @submit.prevent="publishRemark" class="remark-input-form">
    <AppTextarea
      v-model="newRemarkText"
      placeholder="Написать комментарий..."
      rows="2"
      class="remark-textarea"
    />
    <AppButton type="submit" variant="primary" class="remark-submit-btn">
      Отправить
    </AppButton>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useEntryStore } from '../../entries/store/useEntryStore';
import AppButton from '../../shared/ui/AppButton.vue';
import AppTextarea from '../../shared/ui/AppTextarea.vue';

const props = defineProps({
  entryId: Number,
});

const store = useEntryStore();
const newRemarkText = ref('');

const publishRemark = () => {
  store.addRemark(props.entryId, newRemarkText.value);
  newRemarkText.value = '';
};
</script>

<style scoped>
.remark-input-form {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}
.remark-textarea {
  flex-grow: 1;
  min-height: 50px;
}
.remark-submit-btn {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 10px;
}
</style>