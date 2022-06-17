<template>
  <table class="table-dates">
    <tr>
      <td v-for="item in WEEKS" :key="item.value">{{ item.label }}</td>
    </tr>
    <tr v-for="(row, index) in rows" :key="index">
      <td v-for="item in row" :key="`${item.value}_${index}`">
        <span
          @click="handleSelect(item)"
          :class="handleClass(item)"
        >{{ item.value }}</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup="props, context">
import { computed, useAttrs, reactive, defineEmits } from 'vue';
import dayjs from 'dayjs';
import chunk from 'lodash/chunk';
import { WEEKS } from '../meta';

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps({
  modelData: {
    type: Object,
    default: {},
  },
});

const attrs = useAttrs();
const emit = defineEmits(['select'])

const state = reactive({

});

const rows = computed(() => {
  const { modelData: {currentDate} } = props;
  // 获取当月星期
  const currentStartDay = currentDate.startOf('month').day();
  
  // 获取当月天数
  const currentDayLength = currentDate.daysInMonth();
  // 获取上月天数
  const perviousDayLength = currentDate.month(currentDate.month() - 1).daysInMonth();
  const addDays = [];
  let dateList = Array.from(
    { length: currentDayLength },
    (val, index) => ({
      currentMonth: true,
      value: index + 1
    }),
  );

  for (let i = 0, len = currentStartDay; i < len; i++) {
    addDays.unshift({ previousMonth: true, value: perviousDayLength - i })
  };

  return chunk(addDays.concat(dateList), 7);
});

const handleSelect = (obj) => {
  emit('select', obj, 'dates');
};

const handleClass = (item) => {
  let classArray = [];
  const { modelData: { userInputDate, currentDate } } = props;
  if (item.value === dayjs(userInputDate).date() && currentDate.month() === dayjs(userInputDate).month()) {
    classArray = ["select-actived"];
  }

  if (currentDate.month() === dayjs().month() && dayjs().date() === item.value) {
    classArray.push("green-actived");
  }

  if (item.previousMonth) {
    classArray.push("grey-date");
  }

  return classArray;
};

</script>

<style lang="scss">
  @import "../index.scss";
</style>
