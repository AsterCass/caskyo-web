<template>

  <div class="cy-base-footer-main row items-center justify-evenly">

    <div style="opacity: .85">
      <div>
        &copy; 2020-{{ curYear }} astercasc.com {{ $t('main-nav-ipc-pre') }}
        <a target="_blank" href="https://beian.miit.gov.cn/">{{ $t('main-nav-ipc-center') }}</a>
      </div>
    </div>

    <div class="row" style="opacity: .85">
      <div class="q-mr-md">
        {{ $t('main-nav-contact-me-long') }}
      </div>
      <div class="q-mx-sm">
        {{ $t('main-fa-mail') }}: astercass@qq.com
      </div>
      <div class="q-mx-sm">
        {{ $t('main-fa-qq') }}: 4040191617
      </div>
      <div class="q-mx-sm">
        {{ $t('main-fa-wechat') }}: AsterCasc
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {date} from "quasar";

const curYear = ref("2020")


onMounted(() => {
  const timeStamp = new Date()
  curYear.value = date.formatDate(timeStamp, 'YYYY')
})

</script>

<style scoped lang="scss">


.cy-base-footer-main {
  padding: 0.5rem 2rem 0.6rem 2rem;
  min-height: 3rem;

  a {
    color: var(--cy-on-primary-container);
  }
}

</style>
