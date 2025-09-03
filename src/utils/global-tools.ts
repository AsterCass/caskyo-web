import {useGlobalStateStore} from '@/utils/global-state';
import i18n from '@/i18n';
import {Quasar} from 'quasar'
import zh from 'quasar/lang/zh-CN'
import en from 'quasar/lang/en-US'

export function initGlobalState() {
  const globalState = useGlobalStateStore();
  //theme
  document.documentElement.setAttribute('data-theme', globalState.curThemeName);
  //language
  const lang = globalState.language
  i18n.global.locale = lang
  if (lang === 'en') {
    Quasar.lang.set(en)
  } else if (lang === 'zh') {
    Quasar.lang.set(zh)
  }
  //login data check token expire
  if (globalState.isLogin) {
    // todo
  }
  //more
}
