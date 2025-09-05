<template>
  <q-layout view="hhh lpr fff" class="cy-full-screen cy-home-bg column">
    <cy-base-header/>

    <div class="col">
      <div style="height: 20rem; width: 20rem; background-color: red">

      </div>

      <cask-down-drawer/>

      <div style="height: 10rem; width: 30rem; background-color: green">

      </div>


    </div>

    <cy-base-footer/>

  </q-layout>
</template>

<script setup lang="ts">
import CyBaseHeader from "@/ui/views/CyBaseHeader.vue";
import CyBaseFooter from "@/ui/views/CyBaseFooter.vue";
import CaskDownDrawer from "@/ui/components/CaskDownDrawer.vue";



</script>

<style scoped lang="scss">


.cy-home-bg {
  background-image: url('/img/bg-leaf.png');
}


</style>
