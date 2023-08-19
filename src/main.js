import { createApp } from 'vue'
import App from '@/App.vue'

// style (tailwind)
import '@/style.css'

// vue final modal
import { createVfm } from 'vue-final-modal';
const vfm = createVfm()

createApp(App)
    .use(vfm)
    .mount('#app')
