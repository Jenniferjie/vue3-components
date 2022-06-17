<template>
  <table class="table-year-month">
    <tr v-for="(_, i) in 3" :key="i">
      <template v-for="(__, j) in 4" :key="i + '_' + j">
        <td v-if="i * 4 + j < 10">
          <span
            :class="handleClass(i, j)"
            @click="handleSelect(startYear + i * 4 + j)"
          >{{ startYear + i * 4 + j }}</span>
        </td>
        <td v-else />
      </template>
    </tr>
  </table>
</template>

<script lang="ts" setup="props, context">
import { computed, useAttrs, reactive, defineEmits, defineProps } from 'vue';
import dayjs from "dayjs";

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps({
  modelData: {
    type: Object,
    default: {},
  },
});

const startYear = computed(() => {
  return Math.floor(props.modelData.currentDate.year() / 10) * 10;
});

const attrs = useAttrs();
const emit = defineEmits(['select']);


const state = reactive({

});

const handleClass = (i, j) => {
  const classArray = [];
  const selectedYear = startYear.value + i * 4 + j;
  
  if (selectedYear === +dayjs().format('YYYY') || +props.modelData.userInputDate === selectedYear) {
    classArray.push("green-actived");
  }

  if (selectedYear === +dayjs().format('YYYY')) {
    classArray.push("bold-actived");
  }

  return classArray;
};

const handleSelect = (val) => {
  emit('select', val, 'year');
};

</script>

<style lang="scss">
  @import "../index.scss";
</style>
