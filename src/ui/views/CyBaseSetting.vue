<template>
  <div>
    <q-dialog :model-value="showUserSpaceSetting" @hide="closeUserSpaceSetting"
              transition-show="fade" transition-hide="fade" allow-focus-outside>
      <q-card class="" style="width: 300px; height: 300px; background-color: firebrick">
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">

import {useGlobalStateStore} from "@/utils/global-state";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";
import {defineEmits, defineProps, ref, watch} from "vue";


const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  },
})
const showUserSpaceSetting = ref(props.modelValue);

watch(() => props.modelValue, () => {
  showUserSpaceSetting.value = props.modelValue
})

const {t} = useI18n()
const globalState = useGlobalStateStore();
const thisRouter = useRouter()

const inSaveData = ref(false)


function saveFinish() {
  closeUserSpaceSetting()
}

function closeUserSpaceSetting() {
  showUserSpaceSetting.value = false
  emit('update:modelValue', false)
}


</script>

<style scoped lang="scss">


</style>
