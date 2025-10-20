<template>
  <div class="remark-item">
    <p class="remark-text">{{ remarkData.text }}</p>
    <AppButton
      variant="danger"
      @click="store.removeRemark(entryId, remarkData.id)"
    >
      ×
    </AppButton>
  </div>
</template>

<script setup>
import { useEntryStore } from '../../entries/store/useEntryStore';
import AppButton from '../../shared/ui/AppButton.vue';

defineProps({
  remarkData: Object,
  entryId: Number,
});

const store = useEntryStore();
</script>

<style scoped>
.remark-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F9F9F9;
  padding: 15px;
  border-radius: 10px;
  gap: 15px;
}
.remark-text {
  font-size: 15px;
  line-height: 1.6;
  flex-grow: 1;
}
</style>