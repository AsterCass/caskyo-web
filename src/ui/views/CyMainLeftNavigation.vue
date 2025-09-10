<template>
  <div class="cask-down-drawer-main">


    <div class="cask-down-drawer-content row justify-start"
         :class="navigationVisible ?
         'cask-down-drawer-content-show' :
         'cask-down-drawer-content-hide'">

      <cy-main-left-navigation-sub :data="currentOpenChild"/>

      <div class="col-12" v-for="(thisMenu, index) in globalState.mainMenu" :key="index">
        <div class="cask-down-drawer-element row justify-center items-center"
             @click="selectChild(thisMenu)">
          <h6>
            {{ thisMenu.name }}
          </h6>
        </div>
      </div>

    </div>


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
const currentOpenChild = ref<MainMenu[]>([])

function toggleNavigationVisible() {
  navigationVisible.value = !navigationVisible.value
}

function selectChild(data: MainMenu) {
  currentOpenChild.value = data.children;
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
  position: relative;


  .cask-down-drawer-content {
    position: fixed;
    background-color: transparent;
    transition: gap 1s ease, opacity 1s ease, height 1s ease, transform 1s ease;
    width: 12rem;
    margin-left: 2.5rem;


    .cask-down-drawer-element {
      height: 3rem;
      border-radius: 6px;
      opacity: .95;
      background-color: var(--cy-primary-container);
      color: var(--cy-primary);
      box-shadow: inset 0 0 2px 1px var(--cy-surface-container-lowest);
      cursor: pointer;
      user-select: none;
      transition: background-color 0.5s ease, color 0.5s ease;

      &:hover {
        background-color: var(--cy-primary);
        color: var(--cy-on-primary);
      }
    }


  }

  .cask-down-drawer-content-show {
    transform: translateY(-1rem);
    max-height: 85%;
    gap: 2.5rem;
    opacity: 1;
  }

  .cask-down-drawer-content-hide {
    transform: translateY(-10rem);
    max-height: 0;
    gap: 0;
    opacity: 0;
  }

}

</style>
