<template>
  <button :class="['btn', variantClass]" :type="type">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
});

const variantClass = computed(() => `btn--${props.variant}`);
</script>

<style scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 10px 20px;
  font-size: 14px;
}

.btn--primary {
  background-color: #325CFF;
  color: white;
  padding: 20px 40px;
  border-radius: 15px;
  font-size: 16px;
}
.btn--primary:hover {
  background-color: #2a4ecc;
}

.btn--secondary {
  background-color: #EDF0FF;
  color: #325CFF;
}
.btn--secondary:hover {
  background-color: #dbe1ff;
}

.btn--danger {
  background-color: #ffeded;
  color: #e63946;
  padding: 5px 8px;
  font-weight: bold;
}
.btn--danger:hover {
  background-color: #ffdade;
}
</style>