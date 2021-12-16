import { defineComponent, useAttrs, computed, reactive, watch, toRefs, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, mergeProps, withDirectives, createVNode, vShow, toDisplayString, Fragment, renderList, Transition } from 'vue';
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'vue-remix-icons';

const script$3 = {};




script$3.__file = "components/icon/index.vue";

const _hoisted_1$2 = {
  key: 0,
  class: "gui-input-group_prepend"
};
const _hoisted_2$1 = { class: "gui-input_prefix" };
const _hoisted_3$1 = ["value", "type", "disabled"];
const _hoisted_4$1 = { key: 1 };
const _hoisted_5 = { class: "gui-input_suffix" };
const _hoisted_6 = {
  key: 3,
  class: "gui-input-group_append"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = ["value"];
var script$2 = /* @__PURE__ */ defineComponent({
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
    console.log(props);
    const attrs = useAttrs();
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
      if (props.modelValue) {
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
        _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
          renderSlot(_ctx.$slots, "prepend")
        ])) : createCommentVNode("v-if", true),
        createElementVNode("span", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "prefix"),
          __props.prefixIcon ? (openBlock(), createBlock(script$3, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.prefixIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ]),
        createElementVNode("input", mergeProps({
          value: __props.modelValue,
          type: __props.showPassword ? unref(passwordVisible) ? "text" : "password" : __props.type,
          disabled: __props.disabled
        }, _ctx.$attrs, { onInput: handleInput }), null, 16, _hoisted_3$1),
        createCommentVNode(" clearable "),
        withDirectives(createVNode(unref(RiCloseCircleLine), {
          onClick: handleClear,
          class: "gui-input-clear"
        }, null, 512), [
          [vShow, __props.clearable && unref(isShowIcon)]
        ]),
        createCommentVNode(" \u9650\u5236\u5B57\u7B26\u957F\u5EA6 "),
        unref(isWordLimitVisible) ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(unref(wordCount)) + "/" + toDisplayString(_ctx.$attrs.maxlength || 0), 1)) : createCommentVNode("v-if", true),
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
        createElementVNode("span", _hoisted_5, [
          renderSlot(_ctx.$slots, "suffix"),
          __props.suffixIcon ? (openBlock(), createBlock(script$3, { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.suffixIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true)
        ]),
        _ctx.$slots.append ? (openBlock(), createElementBlock("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "append")
        ])) : createCommentVNode("v-if", true)
      ], 34)) : (openBlock(), createElementBlock("section", _hoisted_7, [
        createElementVNode("textarea", {
          value: __props.modelValue,
          name: "",
          id: "",
          cols: "30",
          rows: "10"
        }, null, 8, _hoisted_8)
      ]));
    };
  }
});

script$2.__file = "components/input/index.vue";

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

const _hoisted_1$1 = ["onClick"];
var script$1 = /* @__PURE__ */ defineComponent({
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
      console.log(val);
      emit("select", val);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, index) => {
          return openBlock(), createElementBlock("tr", { key: index }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell) => {
              return openBlock(), createElementBlock("td", {
                key: cell.label
              }, [
                createElementVNode("span", {
                  onClick: ($event) => handleSelect(cell.value)
                }, toDisplayString(cell.label), 9, _hoisted_1$1)
              ]);
            }), 128))
          ]);
        }), 128))
      ]);
    };
  }
});

script$1.__file = "components/date-picker/comp/month-panel.vue";

const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "date-top-bar" }, [
  /* @__PURE__ */ createElementVNode("span")
], -1);
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { key: 2 };
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
    useAttrs();
    const state = reactive({
      panelVisible: false
    });
    const openPanel = () => {
      state.panelVisible = true;
    };
    const handleSelect = (val) => {
      emit("update:modelValue", val);
    };
    const handleClosePanel = () => {
      state.panelVisible = false;
    };
    const { panelVisible } = toRefs(state);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", { onClick: handleClosePanel }, [
        createVNode(script$2, mergeProps({ value: __props.modelValue }, _ctx.$attrs, { onFocus: openPanel }), null, 16, ["value"]),
        createVNode(Transition, null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", null, [
              _hoisted_1,
              __props.type === "year" ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("v-if", true),
              __props.type === "month" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(script$1, { onSelect: handleSelect })
              ])) : (openBlock(), createElementBlock("div", _hoisted_4))
            ], 512), [
              [vShow, unref(panelVisible)]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});

script.__file = "components/date-picker/index.vue";

export { script as DatePicker, script$3 as Icon, script$2 as Input };
