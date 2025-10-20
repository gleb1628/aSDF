<template>
  <div>
    <h2>My Account</h2>
    <div v-if="isFetching" class="status-msg">Loading account...</div>
    <div v-if="fetchError" class="status-msg fail">{{ fetchError }}</div>
    <section v-if="accountData" class="account-details-card">
      <img :src="accountData.image" :alt="accountData.username" class="account-avatar" />
      <h3>{{ accountData.firstName }} {{ accountData.lastName }}</h3>
      <p class="username-tag">@{{ accountData.username }}</p>
      <div class="contact-info">
        <p><strong>Email:</strong> {{ accountData.email }}</p>
        <p><strong>Phone:</strong> {{ accountData.phone }}</p>
        <p><strong>Gender:</strong> {{ accountData.gender }}</p>
      </div>
      <button @click="handleSignOut" class="signout-btn">Sign Out</button>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../shared/api/index.js';
import { removeToken } from '../shared/lib/session.js';

const accountData = ref(null);
const isFetching = ref(true);
const fetchError = ref(null);
const router = useRouter();

const fetchAccount = async () => {
  isFetching.value = true;
  try {
    const data = await api.getSelfProfile();
    accountData.value = data;
  } catch (err) {
    fetchError.value = err.message;
    if (err.message.includes('token')) {
      handleSignOut();
    }
  } finally {
    isFetching.value = false;
  }
};

const handleSignOut = () => {
  removeToken();
  router.push({ name: 'signin' });
};

onMounted(fetchAccount);
</script>

<style scoped>
.status-msg {
  font-size: 1.1rem;
  text-align: center;
  margin-top: 25px;
}
.fail {
  color: #dc3545;
}
.account-details-card {
  max-width: 550px;
  margin: 25px auto;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.07);
  text-align: center;
  background: #fff;
}
.account-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #f0f2f5;
}
.account-details-card h3 {
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
}
.username-tag {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.contact-info p {
  font-size: 1.05rem;
  margin: 10px 0;
  color: #333;
}
.signout-btn {
  margin-top: 2rem;
  padding: 12px 25px;
  font-size: 1rem;
  color: #fff;
  background-color: #e63946;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.signout-btn:hover {
  background-color: #c9303d;
}
</style>