<template>
  <q-header class="cy-base-header-main">

    <div class="cy-base-header-main-content row justify-between items-center">


      <q-btn no-caps unelevated class="cy-component-btn-none-grow" size="12px"
             icon="fa-solid fa-bars" @click="emitter.emit('toggleNavigationVisibleEvent')"/>

      <h5 style="color: var(--cy-on-primary-container)">
        Caskyo
      </h5>

      <q-btn no-caps unelevated class="cy-component-btn-none-grow" size="12px"
             icon="fa-solid fa-gear" @click="showBaseSetting = true"/>


    </div>

    <cy-base-setting v-model="showBaseSetting"/>


  </q-header>


</template>

<script setup lang="ts">
import {defineProps, ref} from "vue";
import {useGlobalStateStore} from "@/utils/global-state";
import {useRouter} from "vue-router";
import CyBaseSetting from "@/ui/views/CyBaseSetting.vue";
import {emitter} from "@/utils/bus.ts";

defineProps({
  alwaysShow: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const globalState = useGlobalStateStore();
const thisRouter = useRouter()

const showBaseSetting = ref(false);


</script>

<style scoped lang="scss">

.cy-base-header-main {
  background-color: transparent;
  left: 0;
  right: 0;
  margin: 1rem 4rem;
  min-height: 5rem;
  position: fixed;


  .cy-base-header-main-content {
    min-height: 3rem;
    padding: 0 1rem;
    border-radius: 8px;
    color: var(--cy-on-surface);
    background-color: transparent;
    transition: background-color 1s ease, box-shadow 1s ease;
  }
}


</style>
