import { createApp } from 'vue'
import App from './App.vue'
import WrUi from "./../packages";

const app = createApp(App)
app.use(WrUi)
app.mount('#app')



