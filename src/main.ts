import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

function bootstrap() {
    const app = createApp(App)

    //set up router
    setupRouter(app)

    //set up store
    setupStore(app)

    app.mount('#app')
}
bootstrap()
