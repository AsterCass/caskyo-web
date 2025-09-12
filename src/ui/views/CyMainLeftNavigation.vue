<template>

  <div id="cyMainLeftNaviMain" class="cask-down-drawer-main">
    <q-scroll-area class="cask-down-drawer-content"
                   :style="navigationVisible ?
                   'height: var(--cy-main-navigation-height);' : 'height: 0'"
                   :thumb-style="globalState.curThemeName.includes('dark') ?
                         { background: 'white', width: '6px' } :
                          { background: 'black', width: '6px' }">

      <div v-for="(thisMenu, index) in globalState.mainMenu" :key="index">

        <Teleport v-if="thisMenu.children.length > 0" defer to="#cyMainLeftNaviMain">
          <cy-main-left-navigation-sub :index="index"
                                       :data="thisMenu"
                                       :level="thisMenu.level + 1"
                                       :pointId="currentOpenId"
          />
        </Teleport>


        <div class="cask-down-drawer-element row justify-center items-center"
             :class="navigationVisible?
             'cask-down-drawer-element-show' : 'cask-down-drawer-element-hide'"
             :style="index === globalState.mainMenu.length - 1
             ? 'margin-bottom: 0 !important;' : ''"
             @click="selectChild(thisMenu)">
          <h6>
            {{ thisMenu.name }}
          </h6>
        </div>
      </div>

    </q-scroll-area>
  </div>


</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import {emitter} from "@/utils/bus.ts";
import {useGlobalStateStore} from "@/utils/global-state.ts";
import CyMainLeftNavigationSub from "@/ui/views/CyMainLeftNavigationSub.vue";
import type {MainMenu} from "@/types/menu.ts";

const globalState = useGlobalStateStore()
const navigationVisible = ref(false)
const currentOpenId = ref<string>("")

function toggleNavigationVisible() {
  emitter.emit("closeNavigationChildrenEvent",
    {saveLevel: 0, exceptParentId: ""});
  currentOpenId.value = ""
  navigationVisible.value = !navigationVisible.value
}

function selectChild(data: MainMenu) {
  if (currentOpenId.value == data.id) {
    emitter.emit("closeNavigationChildrenEvent",
      {saveLevel: 0, exceptParentId: ""});
    currentOpenId.value = ""
    return
  }
  emitter.emit("closeNavigationChildrenEvent",
    {saveLevel: 0, exceptParentId: data.id});
  if (data.children.length !== 0) {
    currentOpenId.value = data.id
  } else {
    currentOpenId.value = ""
  }
}


onMounted(() => {
  emitter.on("toggleNavigationVisibleEvent", toggleNavigationVisible)
})

onBeforeUnmount(() => {
  emitter.off("toggleNavigationVisibleEvent", toggleNavigationVisible)
})

</script>

<style scoped lang="scss">

.cask-down-drawer-main {
  position: fixed;
  pointer-events: none;
  height: 100%;
  width: 100%;

  .cask-down-drawer-content {
    pointer-events: auto;
    position: absolute;
    background-color: transparent;
    transition: height 1s ease;
    width: var(--cy-main-navigation-element-width);
    margin-left: var(--cy-main-navigation-gap-horizontal);

    .cask-down-drawer-element {
      border-radius: 6px;
      opacity: .95;
      background-color: var(--cy-primary-container);
      color: var(--cy-primary);
      box-shadow: inset 0 0 2px 1px var(--cy-surface-container-lowest);
      cursor: pointer;
      user-select: none;
      transition: background-color 0.5s ease, color 0.5s ease,
      height 1s ease, opacity 1s ease, transform 1s ease, margin-bottom 1s ease;

      &:hover {
        background-color: var(--cy-primary);
        color: var(--cy-on-primary);
      }
    }

    .cask-down-drawer-element-show {
      transform: translateY(0);
      height: var(--cy-main-navigation-element-height);
      opacity: 1;
      margin-bottom: var(--cy-main-navigation-gap);
    }

    .cask-down-drawer-element-hide {
      transform: translateY(-10rem);
      height: 0;
      opacity: 0;
      margin-bottom: 0;
    }

  }
}

</style>
