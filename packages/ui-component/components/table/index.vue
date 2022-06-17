<template>
  <div class="table-outer">
    <div class="table-inner">
      <div class="table-header-wrapper" ref="headWrapper" v-mousewheel="handleHeaderFooterMousewheel">
        <table
          :class="['table-wrapper', border ? 'table-border' : '']"
          cellspacing="0"
          cellpadding="0"
          style="width: 1350px"
        >
          <thead>
            <tr>
              <th
                v-for="(item, index) in columns"
                :key="item.key"
                :style="handleStyle(item, index)"
                :width="item.width"
              >
                {{ item.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-scroll" :style="{ height: formatHeight(height) }">
        <div
          class="table-scroll-wrapper"
          ref="bodyWrapper"
          v-mousewheel="() => table.refs.headWrapper.scrollLeft = table.refs.bodyWrapper.scrollLeft"
        >
          <table
            :class="['table-wrapper', border ? 'table-border' : '']"
            cellspacing="0"
            cellpadding="0"
            style="width: 1350px"
          >
            <tbody>
              <template v-if="data.length === 0">
                暂无数据
              </template>
              <template v-else>
                <tr
                  v-for="(item, index) in data"
                  :key="`table-tbody-tr-${index}`"
                  :class="[stripe && index % 2 === 1 ? 'table-stripe' : '']"
                >
                  <td v-for="(col, i) in columns" :key="i" :width="col.width" :style="handleStyle(col, i)">
                    <custom-cell-render
                      v-if="typeof col.render === 'function'"
                      :render="col.render"
                      :column="col"
                      :row="{...item, index}"
                    />
                    <div v-else>{{ item[col.key] }}</div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup="props, context">
import { ref, computed, reactive, toRefs, watch, useAttrs, defineEmits, getCurrentInstance } from 'vue';
import CustomCellRender from './comp/custom-cell-render';
import normalizeWheel from 'normalize-wheel-es';

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },

  columns: {
    type: Array,
    default: [],
  },

  stripe: {
    type: Boolean,
    default: false,
  },

  border: {
    type: Boolean,
    default: false,
  },

  height: {
    type: [Number, String],
    default: '100%',
  },
});
const defaultAttrs = useAttrs();

const vMousewheel = {
  beforeMount(el, binding) {
    if (el && el.addEventListener) {
      const fn = function (this, event) {
        const normalized = normalizeWheel(event)
        binding.value && Reflect.apply(binding.value, this, [event, normalized])
      }
      el.addEventListener('wheel', fn, { passive: true })
    }
  },
}

const table = getCurrentInstance();
console.log(table);


const formatHeight = (val) => {
  if (typeof val === "number") return `${val}px`;
  if (typeof val === "string" && !isNaN(+val)) return `${val}px`;
  return val;
};

const handleStyle = (item, index) => {
  let styles = {};
  if (item.fixed || item.fixed === 'left') {
    styles = { 'left': '0' };
  }
  if (item.fixed && (item.fixed === 'right' || index === props.columns.length - 1)) {
    styles = { 'right': '0' };
  }  
  console.log(index === props.columns.length - 1, item.fixed);
  return {
    ...styles,
    'position': (['left', 'right'].includes(item.fixed) || item.fixed) ? 'sticky' : 'unset',
  }
};

const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX
      table.refs.headWrapper.scrollLeft = table.refs.bodyWrapper.scrollLeft;
    }
  }

// const state = reactive({
//   panelVisible: false,
// })


// // const { panelVisible } = toRefs(state)

</script>

<style lang="scss">
@import "./table.scss";
</style>
