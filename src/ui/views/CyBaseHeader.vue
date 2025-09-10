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
import {defineProps, onMounted, ref} from "vue";
import {useGlobalStateStore} from "@/utils/global-state";
import {useRouter} from "vue-router";
import CyBaseSetting from "@/ui/views/CyBaseSetting.vue";
import {emitter} from "@/utils/bus.ts";
import {updateMainMenu, updateUserData} from "@/utils/global-tools.ts";

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


function updateUserProfile() {
  // todo check is login and user token
  // todo get user data from api

  const mockGeneralUser = {
    userId: "123",
    nickname: "zhangsan",
    avatar: "",
    bio: "21342"
  }

  const mockMainMenu = [
    {
      id: "111",
      code: "111",
      level: 0,
      name: "条目1",
      desc: "",
      path: "/111",
      icon: "fa-user",
    },
    {
      id: "222",
      code: "222",
      level: 0,
      name: "条目2",
      desc: "",
      path: "/222",
      icon: "fa-user",
    },
    {
      id: "333",
      code: "333",
      level: 0,
      name: "条目3",
      desc: "",
      path: "/333",
      icon: "fa-user",
      children: [
        {
          id: "444",
          code: "444",
          level: 1,
          name: "条目4",
          desc: "",
          path: "/444",
          icon: "fa-user",
        },
        {
          id: "555",
          code: "555",
          level: 1,
          name: "条目5",
          desc: "",
          path: "/555",
          icon: "fa-user",
        },
        {
          id: "888",
          code: "888",
          level: 1,
          name: "条目8",
          desc: "",
          path: "/888",
          icon: "fa-user",
        },
      ]
    },
    {
      id: "666",
      code: "666",
      level: 0,
      name: "条目6",
      desc: "",
      path: "/666",
      icon: "fa-user",
    },
    {
      id: "777",
      code: "777",
      level: 0,
      name: "条目7",
      desc: "",
      path: "/777",
      icon: "fa-user",
    },
  ]

  updateUserData(mockGeneralUser)
  updateMainMenu(mockMainMenu)
}

onMounted(() => {
  updateUserProfile()
})


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
