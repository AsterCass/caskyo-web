<template>
  <router-view/>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted} from "vue";
import {initGlobalState} from "@/utils/global-tools.ts";


onMounted(() => {
  initGlobalState()

})

onBeforeUnmount(() => {

  }
)

</script>

<style lang="scss">

</style>
