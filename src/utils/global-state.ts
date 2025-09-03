import {defineStore} from 'pinia'

interface GlobalState {
  curThemeName: string
  language: string
  isLogin: boolean
  userToken: string
  userData: null | {
    userId: string
    avatar: string
  }
  allowBrowserNotification: boolean
}

export function createPersistedStatePlugin() {
  return (context: { store: any }) => {
    const {store} = context

    // 从 Local Storage 加载初始状态
    const savedState = localStorage.getItem(store.$id)
    if (savedState) {
      store.$patch(JSON.parse(savedState))
    }

    // 监听 store 变化并保存到 Local Storage
    store.$subscribe((_mutation: unknown, state: GlobalState) => {
      localStorage.setItem(store.$id, JSON.stringify(state))
    })
  }
}


export const useGlobalStateStore = defineStore('globalState', {
  state: (): GlobalState => ({
    curThemeName: 'light',
    language: 'en',
    isLogin: false,
    userToken: '',
    userData: null,
    allowBrowserNotification: true,
  }),
  actions: {
    updateTheme(code: string) {
      this.curThemeName = code
    },
    updateLanguage(code: string) {
      this.language = code
    },
    updateToken(token: string) {
      if (token) {
        this.isLogin = true
        this.userToken = token
      } else {
        this.isLogin = false
        this.userToken = ''
        this.userData = null
      }
    },
    updateUserData(data: any) {
      this.userData = data
    },
    updateAllowBrowserNotification(isAllowBrowser: boolean) {
      this.allowBrowserNotification = isAllowBrowser
    },
  },
})
