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


        <q-scroll-area
          class="relative-position q-mt-md"
          :class="pinnedNavigation.size === 0 ?
                 'cy-home-pinned-nav' : 'cy-home-pinned-nav-pinned' "
          :thumb-style="globalState.curThemeName.includes('dark') ?
                         { background: 'white', width: '6px' } :
                          { background: 'black', width: '6px' }">
          <h5 v-if="pinnedNavigation.size === 0" class="absolute-center"
              style="opacity: .5; ">
            {{ $t('main_chat_chat_pinned') }}
          </h5>
          <!--          <div v-else class="row" style="margin: 10px">-->
          <!--            <div class="q-mb-sm col-12 row items-center cask-chatroom-pinned-chat-pinned-cell"-->
          <!--                 v-for="([key, value]) in pinChatIdMapArr" :key="key">-->
          <!--              <q-btn v-if="key && value" no-caps unelevated class="col component-none-btn-grow"-->
          <!--                     @click="socketChatState.chattingDataWebSelected = key">-->
          <!--                <div class="col-12 row justify-between q-pa-xs">-->
          <!--                  <div class="col row items-center">-->
          <!--                    <q-icon name="fa-solid fa-thumbtack" size=".9rem"/>-->
          <!--                    <div class="col text-left q-mx-sm component-max-line-text">-->
          <!--                      {{ value.name }}-->
          <!--                    </div>-->
          <!--                  </div>-->
          <!--                  <div v-if="!value.read" style="font-size: .78rem; color: rgb(var(&#45;&#45;negative))">-->
          <!--                    {{ $t('main_chat_new_message') }}-->
          <!--                  </div>-->
          <!--                </div>-->
          <!--              </q-btn>-->

          <!--              <div style="color: rgb(var(&#45;&#45;pointer));" class="cask-jump-link-in-text-origin q-ml-md"-->
          <!--                   @click="globalState.deletePinChat(key)">-->
          <!--                {{ $t('main_chat_chat_pin_cancel') }}-->
          <!--              </div>-->

          <!--            </div>-->

          <!--          </div>-->
        </q-scroll-area>

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
import {ref} from "vue";
import type {MainMenu} from "@/types/menu.ts";
import {useGlobalStateStore} from "@/utils/global-state.ts";

const globalState = useGlobalStateStore();


const pinnedNavigation = ref<Map<string, MainMenu>>(new Map());


</script>

<style scoped lang="scss">


.cy-home-bg {
  background-image: url('/img/bg-leaf.png');
}

.cy-home-main-left {
  width: 15%;
}

.cy-home-pinned-nav {
  height: 8rem;
  border: dashed 2px rgba(var(--cy-primary-number), 0.8);
  border-radius: 8px;
  background: repeating-linear-gradient(
      45deg,
      rgba(var(--cy-primary-number), 0.1),
      rgba(var(--cy-primary-number), 0.1) 30px,
      transparent 20px,
      transparent 50px
  );
}

.cy-home-pinned-nav-pinned {
  height: 8rem;

  .cy-home-pinned-nav-pinned-cell {
    border: solid 2px rgba(var(--cy-primary-number), 0.8);
    padding-right: 8px;
    border-radius: 4px
  }
}


</style>
