import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createPersistedStatePlugin} from "@/utils/global-state";

import App from './App.vue'
import router from './router'
import i18n from '@/i18n';
import {Quasar} from 'quasar'
import quasarUserOptions from '@/config/quasar-user-options'
import clickOutside from "@/utils/click-outside"

import '@/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedStatePlugin())

app.use(i18n)
app.use(pinia)
app.use(router)
app.use(Quasar, {
  plugins: quasarUserOptions,
})

app.directive('click-outside', clickOutside);

app.mount('#app')
