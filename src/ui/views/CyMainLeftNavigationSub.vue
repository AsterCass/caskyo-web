<template>
  <div class="cask-down-drawer-sub-main"
       :style="{ '--cy-main-navigation-index': props.index,
       '--cy-main-navigation-level': props.level}">

    <div class="cask-down-drawer-sub-content row" :class="pointId && pointId === props.data.id ?
          'cask-down-drawer-sub-content-show' :
          'cask-down-drawer-sub-content-hide'"
    >

      <div class="col-12" v-for="(thisMenu, index) in props.data.children" :key="index">

        <cy-main-left-navigation-sub :index="index"
                                     :data="thisMenu"
                                     :level="thisMenu.level + 1"
                                     :pointId="currentOpenId"
        />

        <div class="cask-down-drawer-sub-element row justify-center items-center"
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
import {useGlobalStateStore} from "@/utils/global-state.ts";
import type {MainMenu} from "@/types/menu.ts";
import {ref} from "vue";

const globalState = useGlobalStateStore()

interface Props {
  data: MainMenu
  index?: number
  level?: number
  pointId?: string
}

const props = withDefaults(defineProps<Props>(), {
  index: () => 0,
  level: () => 0,
  pointId: () => "",
})
const currentOpenId = ref<string>("")


function selectChild(data: MainMenu) {
  if (currentOpenId.value == data.id) {
    currentOpenId.value = ""
    return
  }
  currentOpenId.value = data.id
}


</script>

<style scoped lang="scss">

.cask-down-drawer-sub-main {
  position: relative;


  .cask-down-drawer-sub-content {
    position: absolute;
    background-color: transparent;
    transition: opacity 0.75s ease, transform 0.75s ease;
    width: var(--cy-main-navigation-element-width);
    gap: var(--cy-main-navigation-gap);
    margin-left: calc(
      var(--cy-main-navigation-element-width)
      + var(--cy-main-navigation-gap-horizontal)
    );
    margin-top: calc(-1 * var(--cy-main-navigation-index)
    * (var(--cy-main-navigation-gap) + var(--cy-main-navigation-element-height))
    + var(--cy-main-navigation-level) * var(--cy-main-navigation-step)
    );

    .cask-down-drawer-sub-element {
      height: var(--cy-main-navigation-element-height);
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

  .cask-down-drawer-sub-content-show {
    transform: translateX(0);
    opacity: 1;
  }

  .cask-down-drawer-sub-content-hide {
    transform: translateX(-5rem);
    opacity: 0;
  }

}

</style>
