import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import { router } from '@/router.js'
import vuetify from './plugins/vuetify'

loadFonts()

const app = createApp(App);

app.use(vuetify)

app.use(router)

app.mount('#app')
