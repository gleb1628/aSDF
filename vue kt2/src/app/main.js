import { createApp } from 'vue'
import AppShell from './AppShell.vue'
import router from './routing.js'
import '../styles/index.css'

const app = createApp(AppShell)
app.use(router)
app.mount('#app')