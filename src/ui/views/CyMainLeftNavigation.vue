<template>
  <div class="cask-down-drawer-main">


    <div class="cask-down-drawer-content row"
         :class="navigationVisible ?
         'cask-down-drawer-content-show' :
         'cask-down-drawer-content-hide'">

      <div class="col-12">
        1234 4567
      </div>

      <div class="col-12">
        1234 4567
      </div>

      <div class="col-12">
        1234 4567
      </div>

      <div class="col-12">
        1234 4567
      </div>

      <div class="col-12">
        1234 4567
      </div>

      <div class="col-12">
        1234 4567
      </div>

    </div>


  </div>


</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import {emitter} from "@/utils/bus.ts";


const navigationVisible = ref(false)


function toggleNavigationVisible() {
  navigationVisible.value = !navigationVisible.value
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
    width: 20rem;
    opacity: 0;
    gap: 0;
  }

  .cask-down-drawer-content-show {
    transform: translateY(0);
    height: 85%;
    gap: 3rem;
    opacity: 1;
  }

  .cask-down-drawer-content-hide {
    transform: translateY(-10rem);
    height: 0;
    gap: 0;
    opacity: 0;
  }

}

</style>
