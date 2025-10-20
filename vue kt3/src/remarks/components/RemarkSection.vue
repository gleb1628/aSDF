<template>
  <div class="remark-section">
    <div class="remark-list">
      <RemarkItem
        v-for="remark in remarks"
        :key="remark.id"
        :remark-data="remark"
        :entry-id="entryId"
      />
    </div>
    <RemarkInput :entry-id="entryId" />
  </div>
</template>

<script setup>
import RemarkItem from './RemarkItem.vue';
import RemarkInput from './RemarkInput.vue';

defineProps({
  remarks: Array,
  entryId: Number,
});
</script>

<style scoped>
.remark-section {
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #E9EAEC;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.remark-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>