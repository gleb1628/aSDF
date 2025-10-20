<template>
  <article class="entry-card">
    <p class="entry-content">{{ entryData.title }}</p>
    <div class="entry-controls">
      <AppButton variant="secondary" @click="isEditorOpen = true">
        Изменить
      </AppButton>
      <AppButton variant="secondary" @click="store.removeEntry(entryData.id)">
        Удалить
      </AppButton>
      <AppButton variant="secondary" @click="areRemarksVisible = !areRemarksVisible">
        {{ remarkToggleText }}
      </AppButton>
    </div>

    <RemarkSection
      v-if="areRemarksVisible"
      :entry-id="entryData.id"
      :remarks="entryData.comments"
    />

    <EntryEditor
      v-model="isEditorOpen"
      :entry="entryData"
    />
  </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useEntryStore } from '../store/useEntryStore';
import AppButton from '../../shared/ui/AppButton.vue';
import RemarkSection from '../../remarks/components/RemarkSection.vue';
import EntryEditor from './EntryEditor.vue';

const props = defineProps({
  entryData: {
    type: Object,
    required: true,
  },
});

const store = useEntryStore();

const isEditorOpen = ref(false);
const areRemarksVisible = ref(false);

const remarkToggleText = computed(() => {
  return areRemarksVisible.value ? 'Скрыть комментарии' : 'Показать комментарии';
});
</script>

<style scoped>
.entry-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
}
.entry-content {
  font-size: 16px;
  color: #333;
  line-height: 1.7;
}
.entry-controls {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}
</style>