import { createApp } from 'vue'
import route from './route.ts'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(route)
  .mount('#app')
