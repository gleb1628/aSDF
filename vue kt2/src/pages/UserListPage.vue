<template>
  <div>
    <h2>Community Members</h2>
    <div v-if="isLoading" class="status-indicator">Fetching data...</div>
    <div v-if="errorState" class="status-indicator error">{{ errorState }}</div>
    <div v-if="userList.length > 0" class="user-grid-layout">
      <article v-for="user in userList" :key="user.id" class="user-profile-item">
        <img :src="user.image" :alt="user.firstName" class="user-avatar" />
        <h4>{{ user.firstName }} {{ user.lastName }}</h4>
        <span>{{ user.email }}</span>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../shared/api/index.js';

const userList = ref([]);
const isLoading = ref(true);
const errorState = ref(null);

const loadUsers = async () => {
  isLoading.value = true;
  try {
    const data = await api.getUsers();
    userList.value = data.users;
  } catch (err) {
    errorState.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadUsers);
</script>

<style scoped>
.status-indicator {
  font-size: 1.1rem;
  text-align: center;
  margin-top: 25px;
}
.error {
  color: #dc3545;
}
.user-grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.75rem;
  margin-top: 25px;
}
.user-profile-item {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.04);
}
.user-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
}
.user-profile-item h4 {
  margin: 5px 0;
  font-weight: 600;
}
.user-profile-item span {
  font-size: 0.85rem;
  color: #777;
}
</style>