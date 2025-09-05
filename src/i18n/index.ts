import {createI18n} from 'vue-i18n'
import en from '@/i18n/en.json'
import zh from '@/i18n/zh.json'


type MessageSchema = typeof en

const messages = {
  en,
  zh,
}

const i18n = createI18n<[MessageSchema], string>({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
