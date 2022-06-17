<template>
  <section v-click-outside="handleClosePanel" class="outer">
    <Input
      v-bind="$attrs"
      :model-value="userInputDate"
      @input="(val) => userInputDate = val"
      @focus="openPanel"
    />
    <transition>
      <div v-show="panelVisible" class="panel-wrap">
        <div class="date-top-bar">
          <div>
            <span @click="moveLeftRight(false)">&lt;&lt;</span>
            <span v-if="type === 'dates'" style="margin-left: 10px" @click="moveMonth(false)">&lt;</span>
          </div>

          <span v-if="type === 'year'">{{ yearLabel }}</span>
          <span v-else>
            {{ yearLabel }}
            <span v-if="type === 'dates'">{{ monthLabel }}</span>
          </span>

          <div>
            <span v-if="type === 'dates'" style="margin-right: 10px" @click="moveMonth(true)">&gt;</span>
            <span @click="moveLeftRight(true)">&gt;&gt;</span>
          </div>
        </div>
        <div v-if="type === 'year'" class="panel-content">
          <YearPanel @select="handleSelect" :modelData="{ currentDate, userInputDate }" />
        </div>

        <div v-if="type === 'month'" class="panel-content">
          <MonthPanel @select="handleSelect" />
        </div>

        <div v-if="type === 'dates'" class="panel-content">
          <DatePanel @select="handleSelect" :modelData="{ currentDate, userInputDate }" />
        </div>
      </div>
    </transition>
  </section>
</template>

<script lang="ts" setup="props, context">
import { ref, computed, reactive, toRefs, watch, useAttrs, defineEmits } from 'vue';
import dayjs from "dayjs";
import { MONTHS } from './meta'
import Input from '../input/index.vue';
import MonthPanel from './comp/month-panel.vue';
import YearPanel from './comp/year-panel.vue';
import DatePanel from './comp/date-panel.vue';

const vClickOutside = {
  mounted(el, binding) {
    function eventHandler(e) {
        if (el.contains(e.target)) return;
        if (binding.value && typeof binding.value === 'function') {
          binding.value(e);
        }
    }
    el.__click_outside__ = eventHandler;
    document.addEventListener('click', eventHandler);
  },
  beforeUnmount(el) {
    document.removeEventListener('click', el.__click_outside__);
    delete el.__click_outside__;
  }
}

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps({
  type: {
    type: String,
    default: 'dates',
  },
});
const defaultAttrs = useAttrs();
const attrs = computed(() => ({
  clearable: true,
  ...defaultAttrs,
}))

const currentDate = ref(dayjs());
const userInputDate = ref(null);


const yearLabel = computed(() => {
  if (props.type === 'year') {
    const startYear = Math.floor(currentDate.value.year() / 10) * 10
    return `${startYear} - ${startYear + 9}`
  }
  return `${currentDate.value.year()}`
});

const monthLabel = computed(() => MONTHS.find((item) => item.value === currentDate.value.month()).label);


const state = reactive({
  panelVisible: false,
})

const openPanel = () => {
  state.panelVisible = true;
};

const moveLeftRight = (forward) => {
  const action = forward ? 'add' : 'subtract';

  currentDate.value = props.type === 'year'
      ? currentDate.value[action](10, 'year')
      : currentDate.value[action](1, 'year');
};

const moveMonth = (forward) => {
  const action = forward ? 'add' : 'subtract';
  currentDate.value = currentDate.value[action](1, 'month');;
};


const handleSelect = (val, type) => {
  switch (type) {
    case "year":
      userInputDate.value = dayjs().year(val).format("YYYY");
      break;
    case "month":
      userInputDate.value = dayjs().month(val).format("YYYY-MM");
      break;
  
    default:
      const currentMonth = val.previousMonth ? currentDate.value.month() - 1 : currentDate.value.month();
      currentDate.value = currentDate.value.set('month', currentMonth);
      userInputDate.value = dayjs().month(currentMonth).date(val.value).format("YYYY-MM-DD");
      break;
  }
  
  state.panelVisible = false;
};

const handleClosePanel = (e) => {
  state.panelVisible = false;
}

const { panelVisible } = toRefs(state)

</script>

<style lang="scss">

</style>
