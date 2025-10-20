<template>
  <form class="auth-form-container" @submit.prevent="attemptLogin">
    <h2>Sign In</h2>
    <div class="form-field">
      <label for="login-id">Account ID</label>
      <input type="text" id="login-id" v-model="loginId" required />
    </div>
    <div class="form-field">
      <label for="secret-key">Password</label>
      <input type="password" id="secret-key" v-model="secretKey" required />
    </div>
    <p v-if="errorMessage" class="feedback-error">{{ errorMessage }}</p>
    <button type="submit" :disabled="isProcessing">
      {{ isProcessing ? 'Verifying...' : 'Submit' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../shared/api/index.js';
import { saveToken } from '../shared/lib/session.js';

const loginId = ref('');
const secretKey = ref('');
const errorMessage = ref(null);
const isProcessing = ref(false);
const router = useRouter();

const attemptLogin = async () => {
  isProcessing.value = true;
  errorMessage.value = null;
  try {
    const data = await api.login(loginId.value, secretKey.value);
    saveToken(data.token);
    router.push({ name: 'account' });
  } catch (err) {
    errorMessage.value = err.message;
  } finally {
    isProcessing.value = false;
  }
};
</script>

<style scoped>
.auth-form-container {
  max-width: 380px;
  margin: 40px auto;
  padding: 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.auth-form-container h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
}
.form-field {
  display: flex;
  flex-direction: column;
}
.form-field label {
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 0.9rem;
}
.form-field input {
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
}
button {
  padding: 14px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:disabled {
  background-color: #a9a9a9;
}
.feedback-error {
  color: #dc3545;
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
}
</style>