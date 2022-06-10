<template>
  <table class="table-year-month">
    <tr v-for="(row, index) in rows" :key="index">
      <td v-for="cell in row" :key="cell.label">
        <span @click="handleSelect(cell.value)">{{ cell.label }}</span>
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup="props, context">
import { computed, useAttrs, reactive, defineEmits } from 'vue';
import { MONTHS } from '../meta';

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const attrs = useAttrs();
const emit = defineEmits(['select'])

const state = reactive({

})

const rows = computed(() => {
  const tableRows = [[], [], []];
  for(let i = 0; i < 3; i+=1) {
    const row = tableRows[i];
    for(let j = 0; j < 4; j+=1) {
      row.push(MONTHS[i * 4 + j])
    }
  }

  return tableRows;
});

const handleSelect = (val) => {
  emit('select', val, 'month');
};

</script>

<style lang="scss">

</style>
