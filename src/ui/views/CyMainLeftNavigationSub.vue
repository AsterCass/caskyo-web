<template>
  <q-scroll-area class="cask-down-drawer-sub-content"
                 :class="pointId && pointId === props.data.id ?
                 'cask-down-drawer-sub-content-show' : 'cask-down-drawer-sub-content-hide'"
                 :style="{'--cy-main-navigation-level': props.level}"
                 :thumb-style="globalState.curThemeName.includes('dark') ?
                         { background: 'white', width: '6px' } :
                          { background: 'black', width: '6px' }">

    <div v-for="(thisMenu, index) in props.data.children" :key="index">

      <Teleport v-if="thisMenu.children.length > 0" defer to="#cyMainLeftNaviMain">
        <cy-main-left-navigation-sub :index="index"
                                     :data="thisMenu"
                                     :level="thisMenu.level + 1"
                                     :pointId="currentOpenId"
        />
      </Teleport>

      <div class="cask-down-drawer-sub-element row justify-center items-center"
           :style="index === props.data.children.length - 1
             ? 'margin-bottom: 0 !important;' : ''"
           @click="selectChild(thisMenu)">
        <h6>
          {{ thisMenu.name }}
        </h6>
      </div>

    </div>


  </q-scroll-area>


</template>

<script setup lang="ts">
import {useGlobalStateStore} from "@/utils/global-state.ts";
import type {MainMenu} from "@/types/menu.ts";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {type CloseNavigationChildrenPayload, emitter} from "@/utils/bus.ts";

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

function closeNavigationChildren({saveLevel, exceptParentId}: CloseNavigationChildrenPayload) {
  if (props.data.id === exceptParentId || props.level <= saveLevel) {
    return
  }
  currentOpenId.value = ""
}


function selectChild(data: MainMenu) {
  if (currentOpenId.value == data.id) {
    emitter.emit("closeNavigationChildrenEvent",
      {saveLevel: props.level, exceptParentId: ""});
    currentOpenId.value = ""
    return
  }
  emitter.emit("closeNavigationChildrenEvent",
    {saveLevel: props.level, exceptParentId: data.id});
  if (data.children.length !== 0) {
    currentOpenId.value = data.id
  } else {
    currentOpenId.value = ""
  }
}


onMounted(() => {
  emitter.on("closeNavigationChildrenEvent", closeNavigationChildren)
})

onBeforeUnmount(() => {
  emitter.off("closeNavigationChildrenEvent", closeNavigationChildren)
})


</script>

<style scoped lang="scss">

.cask-down-drawer-sub-content {
  position: absolute;
  background-color: transparent;
  transition: opacity 0.75s ease, transform 0.75s ease;
  width: var(--cy-main-navigation-element-width);
  height: calc(var(--cy-main-navigation-height) -
  var(--cy-main-navigation-level) * var(--cy-main-navigation-step));
  margin-left: calc(
    var(--cy-main-navigation-level)
    * (var(--cy-main-navigation-element-width) + var(--cy-main-navigation-gap-horizontal))
    + var(--cy-main-navigation-gap-horizontal)
  );
  margin-top: calc(var(--cy-main-navigation-level) * var(--cy-main-navigation-step));

  .cask-down-drawer-sub-element {
    height: var(--cy-main-navigation-element-height);
    margin-bottom: var(--cy-main-navigation-gap);
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
  pointer-events: auto;
  transform: translateX(0);
  opacity: 1;
}

.cask-down-drawer-sub-content-hide {
  pointer-events: none;
  transform: translateX(-5rem);
  opacity: 0;
}

</style>
