<template>
  <q-layout view="hhh lpr fff" class="cy-full-screen cy-home-bg column">
    <cy-base-header/>

    <div class="col row" style="padding-top: 5rem">


      <div class="cy-home-main-left column justify-between q-pa-md">

        <div class="column items-center">
          <q-avatar size="100px">
            <q-img src="https://picsum.photos/200/200"/>
          </q-avatar>
        </div>


        <div>
          标记常用菜单区域
        </div>
      </div>

      <div class="col">

      </div>


      <cy-main-left-navigation/>
    </div>

    <cy-base-footer/>

  </q-layout>
</template>

<script setup lang="ts">
import CyBaseHeader from "@/ui/views/CyBaseHeader.vue";
import CyBaseFooter from "@/ui/views/CyBaseFooter.vue";
import CyMainLeftNavigation from "@/ui/views/CyMainLeftNavigation.vue";
</script>

<style scoped lang="scss">


.cy-home-bg {
  background-image: url('/img/bg-leaf.png');
}

.cy-home-main-left {
  width: 15%;
}


</style>
