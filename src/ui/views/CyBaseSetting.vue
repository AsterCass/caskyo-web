<template>
  <div>
    <q-dialog :model-value="showUserSpaceSetting" @hide="closeUserSpaceSetting"
              transition-show="fade" transition-hide="fade" allow-focus-outside>
      <q-card class="cy-dialog-std" style="max-width: 2000px !important">
        <div class="row justify-center q-mb-md">
          <h4>
            {{ $t('main_setting_title') }}
          </h4>
        </div>

        <h6 class="q-my-sm">
          {{ t('main_setting_theme') }}
        </h6>
        <div>
          <q-radio v-model="globalState.curThemeName" val="light"
                   :label="$t('main_setting_theme_light')"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateTheme(it)"/>
          <q-radio v-model="globalState.curThemeName" val="dark"
                   :label="$t('main_setting_theme_dark')"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateTheme(it)"/>
          <q-radio v-model="globalState.curThemeName" val="green"
                   :label="$t('main_setting_theme_green')"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateTheme(it)"/>
          <q-radio v-model="globalState.curThemeName" val="green-dark"
                   :label="$t('main_setting_theme_green_dark')"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateTheme(it)"/>
        </div>


        <h6 class="q-my-sm">
          {{ $t('main_setting_lang') }}
        </h6>
        <div>
          <q-radio v-model="globalState.language" val="zh" label="中文"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateLanguage(it)"/>
          <q-radio v-model="globalState.language" val="en" label="English"
                   class="cy-component-ratio"
                   checked-icon="task_alt" unchecked-icon="panorama_fish_eye"
                   @update:model-value="(it) => updateLanguage(it)"/>
        </div>


      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">

import {useGlobalStateStore} from "@/utils/global-state";
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";
import {defineEmits, defineProps, ref, watch} from "vue";
import {updateLanguage, updateTheme} from "@/utils/global-tools.ts";


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
