<template>
  <AppModal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="editor-wrapper">
      <h3>Редактировать запись</h3>
      <AppTextarea v-model="draftText" rows="6" />
      <div class="editor-controls">
        <AppButton variant="secondary" @click="cancelEdit">
          Отмена
        </AppButton>
        <AppButton variant="primary" @click="saveEdit">
          Сохранить
        </AppButton>
      </div>
    </div>
  </AppModal>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useEntryStore } from '../store/useEntryStore';
import AppModal from '../../shared/ui/AppModal.vue';
import AppButton from '../../shared/ui/AppButton.vue';
import AppTextarea from '../../shared/ui/AppTextarea.vue';

const props = defineProps({
  modelValue: Boolean,
  entry: Object,
});

const emit = defineEmits(['update:modelValue']);
const store = useEntryStore();
const draftText = ref(props.entry.title);

watch(
  () => props.modelValue,
  (isOpening) => {
    if (isOpening) {
      draftText.value = props.entry.title;
    }
  }
);

const saveEdit = () => {
  store.updateEntry(props.entry.id, draftText.value);
  emit('update:modelValue', false);
};

const cancelEdit = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.editor-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.editor-wrapper h3 {
  font-weight: 500;
  font-size: 20px;
}
.editor-controls {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>