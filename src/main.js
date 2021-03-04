import { createApp } from 'vue'
import App from './App.vue'
import TodoListJS from './composables/TodoList'

const app = createApp(App)

app.provide('TodoListJS',TodoListJS)

app.mount('#app')