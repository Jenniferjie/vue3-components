import { defineComponent, useAttrs, computed, reactive, watch, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, mergeProps, withDirectives, createVNode, vShow, toDisplayString, Fragment, renderList, ref, Transition, createTextVNode } from 'vue';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'vue-remix-icons';
import dayjs from 'dayjs';
import chunk from 'lodash/chunk';

const script$5 = {};




script$5.__file = "components/icon/index.vue";

const _hoisted_1$4 = {
  key: 0,
  class: "gui-input-group_prepend"
};
const _hoisted_2$4 = { class: "gui-input_prefix" };
const _hoisted_3$2 = ["type", "disabled"];
const _hoisted_4$2 = {
  key: 1,
  class: "gui-input_limit"
};
const _hoisted_5$1 = { class: "gui-input_suffix" };
const _hoisted_6$1 = {
  key: 3,
  class: "gui-input-group_append"
};
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = ["value"];
var script$4 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: Object,
      default: null
    },
    prefixIcon: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const attrs = useAttrs();
    console.log(attrs);
    const { size } = props;
    const classes = computed(() => {
      return {
        [`gui-size-${size}`]: size,
        [`gui-icon-${size}`]: size
      };
    });
    const isWordLimitVisible = computed(() => props.showWordLimit && !!attrs.maxlength && !props.showPassword);
    const state = reactive({
      isShowIcon: false,
      passwordVisible: true,
      wordCount: 0
    });
    watch(() => props.modelValue, (val) => {
      state.isShowIcon = !!val;
      state.wordCount = val.length;
    });
    const handleInput = (e) => {
      const { value } = e.target;
      emit("update:modelValue", value);
    };
    const onMouseEnter = () => {
      if (attrs.value) {
        state.isShowIcon = true;
      }
    };
    const onMouseLeave = () => {
      state.isShowIcon = false;
    };
    const handleClear = () => {
      emit("update:modelValue", "");
    };
    const { isShowIcon, passwordVisible, wordCount } = toRefs(state);
    return (_ctx, _cache) => {
      return __props.type !== "textarea" ? (openBlock(), createElementBlock("section", {
        key: 0,
        class: normalizeClass([unref(classes), "gui-input-wrap"]),
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave
      }, [
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("v-if", true),
        createElementVNode("span", _hoisted_2$4, [
          renderSlot(_ctx.$slots, "prefix"),
          __props.prefixIcon ? (openBlock(), createBlock(script$5, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.prefixIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ]),
        createCommentVNode(' :value="modelValue" '),
        createElementVNode("input", mergeProps({
          type: __props.showPassword ? unref(passwordVisible) ? "text" : "password" : __props.type,
          disabled: __props.disabled
        }, unref(attrs), { onInput: handleInput }), null, 16, _hoisted_3$2),
        createCommentVNode(" clearable "),
        withDirectives(createVNode(unref(RiCloseCircleLine), {
          onClick: handleClear,
          class: "gui-input-clear"
        }, null, 512), [
          [vShow, __props.clearable && unref(isShowIcon)]
        ]),
        createCommentVNode(" \u9650\u5236\u5B57\u7B26\u957F\u5EA6 "),
        unref(isWordLimitVisible) ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(unref(wordCount)) + "/" + toDisplayString(_ctx.$attrs.maxlength || 0), 1)) : createCommentVNode("v-if", true),
        createCommentVNode(" \u663E\u793A\u5BC6\u7801 "),
        __props.showPassword ? (openBlock(), createElementBlock("div", {
          key: 2,
          onClick: _cache[0] || (_cache[0] = ($event) => passwordVisible.value = !unref(passwordVisible))
        }, [
          withDirectives(createVNode(unref(RiEyeLine), { width: "20" }, null, 512), [
            [vShow, unref(passwordVisible)]
          ]),
          withDirectives(createVNode(unref(RiEyeOffLine), { width: "20" }, null, 512), [
            [vShow, !unref(passwordVisible)]
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("span", _hoisted_5$1, [
          renderSlot(_ctx.$slots, "suffix"),
          __props.suffixIcon ? (openBlock(), createBlock(script$5, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.suffixIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ]),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("v-if", true)
      ], 34)) : (openBlock(), createElementBlock("section", _hoisted_7$1, [
        createElementVNode("textarea", {
          value: __props.modelValue,
          name: "",
          id: "",
          cols: "30",
          rows: "10"
        }, null, 8, _hoisted_8$1)
      ]));
    };
  }
});

script$4.__file = "components/input/index.vue";

const WEEKS = [
  { label: "Sun", value: 0 },
  { label: "Mon", value: 1 },
  { label: "Tue", value: 2 },
  { label: "Wed", value: 3 },
  { label: "Thu", value: 4 },
  { label: "Fri", value: 5 },
  { label: "Sat", value: 6 }
];
const MONTHS = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 1 },
  { label: "Mar", value: 2 },
  { label: "Apr", value: 3 },
  { label: "May", value: 4 },
  { label: "Jun", value: 5 },
  { label: "Jul", value: 6 },
  { label: "Aug", value: 7 },
  { label: "Sept", value: 8 },
  { label: "Oct", value: 9 },
  { label: "Nov", value: 10 },
  { label: "Dec", value: 11 }
];

const _hoisted_1$3 = { class: "table-year-month" };
const _hoisted_2$3 = ["onClick"];
var script$3 = /* @__PURE__ */ defineComponent({
  emits: ["select"],
  setup(__props, { emit }) {
    useAttrs();
    reactive({});
    const rows = computed(() => {
      const tableRows = [[], [], []];
      for (let i = 0; i < 3; i += 1) {
        const row = tableRows[i];
        for (let j = 0; j < 4; j += 1) {
          row.push(MONTHS[i * 4 + j]);
        }
      }
      return tableRows;
    });
    const handleSelect = (val) => {
      emit("select", val, "month");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell) => {
              return openBlock(), createElementBlock("td", {
                key: cell.label
              }, [
                createElementVNode("span", {
                  onClick: ($event) => handleSelect(cell.value)
                }, toDisplayString(cell.label), 9, _hoisted_2$3)
              ]);
            }), 128))
          ]);
        }), 128))
      ]);
    };
  }
});

script$3.__file = "components/date-picker/comp/month-panel.vue";

const _hoisted_1$2 = { class: "table-year-month" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = { key: 1 };
var script$2 = /* @__PURE__ */ defineComponent({
  props: {
    modelData: {
      type: Object,
      default: {}
    }
  },
  emits: ["select"],
  setup(__props, { emit }) {
    const props = __props;
    const startYear = computed(() => {
      return Math.floor(props.modelData.currentDate.year() / 10) * 10;
    });
    useAttrs();
    reactive({});
    const handleClass = (i, j) => {
      const classArray = [];
      const selectedYear = startYear.value + i * 4 + j;
      if (selectedYear === +dayjs().format("YYYY") || +props.modelData.modelValue === selectedYear) {
        classArray.push("green-actived");
      }
      if (selectedYear === +dayjs().format("YYYY")) {
        classArray.push("bold-actived");
      }
      return classArray;
    };
    const handleSelect = (val) => {
      emit("select", val, "year");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$2, [
        (openBlock(), createElementBlock(Fragment, null, renderList(3, (_, i) => {
          return createElementVNode("tr", { key: i }, [
            (openBlock(), createElementBlock(Fragment, null, renderList(4, (__, j) => {
              return openBlock(), createElementBlock(Fragment, {
                key: i + "_" + j
              }, [
                i * 4 + j < 10 ? (openBlock(), createElementBlock("td", _hoisted_2$2, [
                  createElementVNode("span", {
                    class: normalizeClass(handleClass(i, j)),
                    onClick: ($event) => handleSelect(unref(startYear) + i * 4 + j)
                  }, toDisplayString(unref(startYear) + i * 4 + j), 11, _hoisted_3$1)
                ])) : (openBlock(), createElementBlock("td", _hoisted_4$1))
              ], 64);
            }), 64))
          ]);
        }), 64))
      ]);
    };
  }
});

script$2.__file = "components/date-picker/comp/year-panel.vue";

const _hoisted_1$1 = { class: "table-dates" };
const _hoisted_2$1 = ["onClick"];
var script$1 = /* @__PURE__ */ defineComponent({
  props: {
    modelData: {
      type: Object,
      default: {}
    }
  },
  emits: ["select"],
  setup(__props, { emit }) {
    const props = __props;
    useAttrs();
    reactive({});
    const rows = computed(() => {
      const { modelData: { currentDate } } = props;
      const currentStartDay = currentDate.startOf("month").day();
      const currentDayLength = currentDate.daysInMonth();
      const perviousDayLength = currentDate.month(currentDate.month() - 1).daysInMonth();
      const addDays = [];
      let dateList = Array.from({ length: currentDayLength }, (val, index) => ({
        currentMonth: true,
        value: index + 1
      }));
      for (let i = 0, len = currentStartDay; i < len; i++) {
        addDays.unshift({ previousMonth: true, value: perviousDayLength - i });
      }
      return chunk(addDays.concat(dateList), 7);
    });
    const handleSelect = (obj) => {
      emit("select", obj, "dates");
    };
    const handleClass = (item) => {
      let classArray = [];
      const { modelData: { modelValue, currentDate } } = props;
      if (item.value === dayjs(modelValue).date() && currentDate.month() === dayjs(modelValue).month()) {
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$1, [
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (item) => {
            return openBlock(), createElementBlock("td", {
              key: item.value
            }, toDisplayString(item.label), 1);
          }), 128))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (item) => {
              return openBlock(), createElementBlock("td", {
                key: `${item.value}_${index}`
              }, [
                createElementVNode("span", {
                  onClick: ($event) => handleSelect(item),
                  class: normalizeClass(handleClass(item))
                }, toDisplayString(item.value), 11, _hoisted_2$1)
              ]);
            }), 128))
          ]);
        }), 128))
      ]);
    };
  }
});

script$1.__file = "components/date-picker/comp/date-panel.vue";

const _hoisted_1 = { class: "outer" };
const _hoisted_2 = { class: "panel-wrap" };
const _hoisted_3 = { class: "date-top-bar" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = {
  key: 0,
  class: "panel-content"
};
const _hoisted_8 = {
  key: 1,
  class: "panel-content"
};
const _hoisted_9 = {
  key: 2,
  class: "panel-content"
};
var script = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "dates"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const vClickOutside = {
      mounted(el, binding) {
        function eventHandler(e) {
          if (el.contains(e.target))
            return;
          if (binding.value && typeof binding.value === "function") {
            binding.value(e);
          }
        }
        el.__click_outside__ = eventHandler;
        document.addEventListener("click", eventHandler);
      },
      beforeUnmount(el) {
        document.removeEventListener("click", el.__click_outside__);
        delete el.__click_outside__;
      }
    };
    const attrs = useAttrs();
    console.log(attrs);
    const currentDate = ref(dayjs());
    const yearLabel = computed(() => {
      if (props.type === "year") {
        const startYear = Math.floor(currentDate.value.year() / 10) * 10;
        return `${startYear} - ${startYear + 9}`;
      }
      return `${currentDate.value.year()}`;
    });
    const monthLabel = computed(() => MONTHS.find((item) => item.value === currentDate.value.month()).label);
    const state = reactive({
      panelVisible: false
    });
    const openPanel = () => {
      state.panelVisible = true;
    };
    const moveLeftRight = (forward) => {
      const action = forward ? "add" : "subtract";
      currentDate.value = props.type === "year" ? currentDate.value[action](10, "year") : currentDate.value[action](1, "year");
    };
    const moveMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      currentDate.value = currentDate.value[action](1, "month");
    };
    const handleSelect = (val, type) => {
      switch (type) {
        case "year":
          emit("update:modelValue", dayjs().year(val).format("YYYY"));
          break;
        case "month":
          emit("update:modelValue", dayjs().month(val).format("YYYY-MM"));
          break;
        default:
          const currentMonth = val.previousMonth ? currentDate.value.month() - 1 : currentDate.value.month();
          currentDate.value = currentDate.value.set("month", currentMonth);
          emit("update:modelValue", dayjs().month(currentMonth).date(val.value).format("YYYY-MM-DD"));
          break;
      }
      state.panelVisible = false;
    };
    const handleClosePanel = (e) => {
      state.panelVisible = false;
    };
    const { panelVisible } = toRefs(state);
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(script$4, mergeProps({ value: __props.modelValue }, _ctx.$attrs, { onFocus: openPanel }), null, 16, ["value"]),
        createVNode(Transition, null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                createElementVNode("div", null, [
                  createElementVNode("span", {
                    onClick: _cache[0] || (_cache[0] = ($event) => moveLeftRight(false))
                  }, "<<"),
                  __props.type === "dates" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    style: { "margin-left": "10px" },
                    onClick: _cache[1] || (_cache[1] = ($event) => moveMonth(false))
                  }, "<")) : createCommentVNode("v-if", true)
                ]),
                __props.type === "year" ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(yearLabel)), 1)) : (openBlock(), createElementBlock("span", _hoisted_5, [
                  createTextVNode(toDisplayString(unref(yearLabel)) + " ", 1),
                  __props.type === "dates" ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(monthLabel)), 1)) : createCommentVNode("v-if", true)
                ])),
                createElementVNode("div", null, [
                  __props.type === "dates" ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    style: { "margin-right": "10px" },
                    onClick: _cache[2] || (_cache[2] = ($event) => moveMonth(true))
                  }, ">")) : createCommentVNode("v-if", true),
                  createElementVNode("span", {
                    onClick: _cache[3] || (_cache[3] = ($event) => moveLeftRight(true))
                  }, ">>")
                ])
              ]),
              __props.type === "year" ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(script$2, {
                  onSelect: handleSelect,
                  modelData: { currentDate: currentDate.value, modelValue: __props.modelValue }
                }, null, 8, ["modelData"])
              ])) : createCommentVNode("v-if", true),
              __props.type === "month" ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(script$3, { onSelect: handleSelect })
              ])) : createCommentVNode("v-if", true),
              __props.type === "dates" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createVNode(script$1, {
                  onSelect: handleSelect,
                  modelData: { currentDate: currentDate.value, modelValue: __props.modelValue }
                }, null, 8, ["modelData"])
              ])) : createCommentVNode("v-if", true)
            ], 512), [
              [vShow, unref(panelVisible)]
            ])
          ]),
          _: 1
        })
      ], 512)), [
        [vClickOutside, handleClosePanel]
      ]);
    };
  }
});

script.__file = "components/date-picker/index.vue";

export { script as DatePicker, script$5 as Icon, script$4 as Input };
