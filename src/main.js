import { createApp } from 'vue'
import App from './components/App.vue'
import 'mosha-vue-toastify/dist/style.css'
import components from "@/components/UI"

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')