<template>
  <div class="welcome-screen">
    <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" class="brand-logo" />
    <h2>Welcome to the Application</h2>
    <p>A new experience awaits. Sign in to continue.</p>
    <router-link :to="{ name: 'signin' }" class="cta-button">
      Get Started
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.25rem;
  padding-top: 40px;
}
.brand-logo {
  width: 120px;
  height: 120px;
}
h2 {
  font-size: 2.2rem;
}
p {
  font-size: 1.1rem;
  color: #666;
}
.cta-button {
  padding: 12px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.cta-button:hover {
  background-color: #0056b3;
}
</style>