<template>
  <div class="cask-down-drawer-sub-main">


    <div class="cask-down-drawer-sub-content row justify-start">

      <div class="col-12 cask-down-drawer-element row justify-center items-center"
           v-for="(thisMenu, index) in props.data" :key="index">
        <h6>
          {{ thisMenu.name }}
        </h6>

      </div>

    </div>


  </div>


</template>

<script setup lang="ts">
import {useGlobalStateStore} from "@/utils/global-state.ts";
import type {MainMenu} from "@/types/menu.ts";

const globalState = useGlobalStateStore()

interface Props {
  data?: Array<MainMenu>
}

const props = withDefaults(defineProps<Props>(), {
  data: () => []
})


</script>

<style scoped lang="scss">

.cask-down-drawer-sub-main {
  position: relative;


  .cask-down-drawer-sub-content {
    position: fixed;
    background-color: transparent;
    transition: opacity 1s ease, transform 1s ease;
    width: 12rem;
    margin-left: 2.5rem;
  }

  .cask-down-drawer-sub-content-show {
    opacity: 1;
  }

  .cask-down-drawer-sub-content-hide {
    opacity: 0;
  }

}

</style>
