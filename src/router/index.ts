import {createRouter, createWebHistory, type LocationQueryRaw, type Router} from 'vue-router'
import CyHome from "@/ui/pages/CyHome.vue";
import CyNotFound from "@/ui/pages/CyNotFound.vue";
import CyNoLogin from "@/ui/pages/CyNoLogin.vue";
import CyNoAuth from "@/ui/pages/CyNoAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CyHome,
      meta: {
        title: 'Caskyo',
      },
    },
    {
      path: "/404",
      name: '404',
      component: CyNotFound
    },
    {
      path: "/401",
      name: '401',
      component: CyNoLogin
    },
    {
      path: "/403",
      name: '403',
      component: CyNoAuth
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: CyNotFound
    },
  ],
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

router.afterEach(() => {
  //make sure scroller site right for header style
  window.scrollTo(0, 0)
})

export function backToHome(thisRouter: Router) {
  thisRouter.push({
    name: "main"
  }).then()
}


export function toSpecifyPage(thisRouter: Router, pageName: string) {
  thisRouter.push({
    name: pageName
  }).then()
}

export function toSpecifyPageWithQuery(
  thisRouter: Router, pageName: string, queryMap: LocationQueryRaw) {
  thisRouter.push({
    name: pageName,
    query: queryMap,
  }).then()
}

export function toSpecifyPageWithQueryNewTab(
  thisRouter: Router, pageName: string, queryMap: LocationQueryRaw) {
  const {href} = thisRouter.resolve({name: pageName, query: queryMap});
  const absoluteUrl = `${window.location.origin}${href}`;
  window.open(absoluteUrl, '_blank');
}

export function toReplacePage(thisRouter: Router, queryMap: LocationQueryRaw) {
  const currentName = thisRouter.currentRoute.value.name
  if (typeof currentName === 'string') {
    thisRouter.replace({
      name: currentName,
      query: queryMap,
    }).then()
  }
}

export function toBack(thisRouter: Router) {
  thisRouter.go(-1)
}

export default router
