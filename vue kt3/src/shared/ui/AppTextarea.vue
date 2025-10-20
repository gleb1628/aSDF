<template>
  <textarea
    class="styled-textarea"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.styled-textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
  min-height: 80px;
}

.styled-textarea:focus {
  outline: none;
  border-color: #325CFF;
  box-shadow: 0 0 0 2px rgba(50, 92, 255, 0.2);
}
</style>