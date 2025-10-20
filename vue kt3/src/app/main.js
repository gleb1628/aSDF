import { createApp } from 'vue'
import AppShell from './AppShell.vue'
import { pinia } from './store'
import '../assets/main.css'

const app = createApp(AppShell)

app.use(pinia)
app.mount('#app')