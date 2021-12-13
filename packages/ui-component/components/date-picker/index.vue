<template>
  <section @click="handleClosePanel">
    <Input v-bind="$attrs" @focus="openPanel" />
    <transition>
      <div v-show="panelVisible">
        <div class="date-top-bar">
          <span></span>
        </div>
        <div v-if="type === 'year'">
        </div>

        <div v-if="type === 'month'">
          <MonthPanel @select="handleSelect" />
        </div>

        <div v-else>

        </div>
      </div>
    </transition>
  </section>
</template>

<script lang="ts" setup="props, context">
import { computed, reactive, toRefs, watch, useAttrs, defineEmits } from 'vue';
import Input from '../input/index.vue';
import MonthPanel from './comp/month-panel.vue';

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  type: {
    type: String,
    default: 'dates',
  },
});
const attrs = useAttrs();
const emit = defineEmits(['update:modelValue']);

const state = reactive({
  panelVisible: false,
})

const openPanel = () => {
  state.panelVisible = true;
};

const handleSelect = (val) => {
  console.log(val);

  emit('update:modelValue', val)
}

const { panelVisible } = toRefs(state)

</script>

<style lang="scss">

</style>
