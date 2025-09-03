<template>
  <router-view/>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {initGlobalState} from "@/utils/global-tools.ts";

onMounted(() => {
  initGlobalState()
})

</script>

<style lang="scss">
@import '@/styles/main.scss';


</style>
