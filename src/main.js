import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TestComponent from './components/TestComponent.vue'
import Router from './router/index.js'

const app = createApp(App)
app.component('TestComponent', TestComponent)

app.use(Router)

app.mount('#app')
