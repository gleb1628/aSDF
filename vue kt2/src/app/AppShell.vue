<template>
  <div id="app-container">
    <header class="app-header">
      <nav class="main-nav">
        <router-link :to="{ name: 'welcome' }">Home</router-link>
        <router-link :to="{ name: 'community' }">Users</router-link>
        <router-link :to="{ name: 'account' }">My Profile</router-link>
      </nav>
    </header>
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-header {
  background-color: #ffffff;
  padding: 1.2rem 2.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
.main-nav {
  display: flex;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}
.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.05rem;
}
.main-nav a.router-link-exact-active {
  color: #007bff;
  font-weight: 700;
}
.page-content {
  flex-grow: 1;
  padding: 2.5rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
</style>