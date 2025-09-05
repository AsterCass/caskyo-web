import {useGlobalStateStore} from '@/utils/global-state';
import {Quasar} from 'quasar'
import zh from 'quasar/lang/zh-CN'
import en from 'quasar/lang/en-US'
import {useI18n} from "vue-i18n";
import type {WritableComputedRef} from "vue";
import type {Store} from "pinia";

export function initGlobalState() {
  const globalState = useGlobalStateStore();
  const {locale} = useI18n({useScope: 'global'})
  //theme
  document.documentElement.setAttribute('data-theme', globalState.curThemeName);
  //language
  const lang = globalState.language
  locale.value = lang
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


export function updateTheme(code: string) {
  const globalState = useGlobalStateStore();
  document.documentElement.setAttribute('data-theme', code);
  globalState.updateTheme(code);
}


export function updateLanguage(code: string,
                               locale: WritableComputedRef<string, string>,
                               globalState: Store<string, any, {}, any>) {
  if (code === 'en') {
    Quasar.lang.set(en)
  } else if (code === 'zh') {
    Quasar.lang.set(zh)
  }
  locale.value = code
  globalState.updateLanguage(code);
}
