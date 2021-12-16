(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vue-remix-icons')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-remix-icons'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Gui = {}, global.Vue, global.vueRemixIcons));
})(this, (function (exports, vue, vueRemixIcons) { 'use strict';

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
  var script$2 = /* @__PURE__ */ vue.defineComponent({
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
      const attrs = vue.useAttrs();
      const { size } = props;
      const classes = vue.computed(() => {
        return {
          [`gui-size-${size}`]: size,
          [`gui-icon-${size}`]: size
        };
      });
      const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!attrs.maxlength && !props.showPassword);
      const state = vue.reactive({
        isShowIcon: false,
        passwordVisible: true,
        wordCount: 0
      });
      vue.watch(() => props.modelValue, (val) => {
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
      const { isShowIcon, passwordVisible, wordCount } = vue.toRefs(state);
      return (_ctx, _cache) => {
        return __props.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock("section", {
          key: 0,
          class: vue.normalizeClass([vue.unref(classes), "gui-input-wrap"]),
          onMouseenter: onMouseEnter,
          onMouseleave: onMouseLeave
        }, [
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
            vue.renderSlot(_ctx.$slots, "prepend")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("span", _hoisted_2$1, [
            vue.renderSlot(_ctx.$slots, "prefix"),
            __props.prefixIcon ? (vue.openBlock(), vue.createBlock(script$3, { key: 0 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.prefixIcon)))
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("input", vue.mergeProps({
            value: __props.modelValue,
            type: __props.showPassword ? vue.unref(passwordVisible) ? "text" : "password" : __props.type,
            disabled: __props.disabled
          }, _ctx.$attrs, { onInput: handleInput }), null, 16, _hoisted_3$1),
          vue.createCommentVNode(" clearable "),
          vue.withDirectives(vue.createVNode(vue.unref(vueRemixIcons.RiCloseCircleLine), {
            onClick: handleClear,
            class: "gui-input-clear"
          }, null, 512), [
            [vue.vShow, __props.clearable && vue.unref(isShowIcon)]
          ]),
          vue.createCommentVNode(" \u9650\u5236\u5B57\u7B26\u957F\u5EA6 "),
          vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$1, vue.toDisplayString(vue.unref(wordCount)) + "/" + vue.toDisplayString(_ctx.$attrs.maxlength || 0), 1)) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u663E\u793A\u5BC6\u7801 "),
          __props.showPassword ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 2,
            onClick: _cache[0] || (_cache[0] = ($event) => passwordVisible.value = !vue.unref(passwordVisible))
          }, [
            vue.withDirectives(vue.createVNode(vue.unref(vueRemixIcons.RiEyeLine), { width: "20" }, null, 512), [
              [vue.vShow, vue.unref(passwordVisible)]
            ]),
            vue.withDirectives(vue.createVNode(vue.unref(vueRemixIcons.RiEyeOffLine), { width: "20" }, null, 512), [
              [vue.vShow, !vue.unref(passwordVisible)]
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("span", _hoisted_5, [
            vue.renderSlot(_ctx.$slots, "suffix"),
            __props.suffixIcon ? (vue.openBlock(), vue.createBlock(script$3, { key: 0 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.suffixIcon)))
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
            vue.renderSlot(_ctx.$slots, "append")
          ])) : vue.createCommentVNode("v-if", true)
        ], 34)) : (vue.openBlock(), vue.createElementBlock("section", _hoisted_7, [
          vue.createElementVNode("textarea", {
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
  var script$1 = /* @__PURE__ */ vue.defineComponent({
    emits: ["select"],
    setup(__props, { emit }) {
      vue.useAttrs();
      vue.reactive({});
      const rows = vue.computed(() => {
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
        return vue.openBlock(), vue.createElementBlock("table", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(rows), (row, index) => {
            return vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (cell) => {
                return vue.openBlock(), vue.createElementBlock("td", {
                  key: cell.label
                }, [
                  vue.createElementVNode("span", {
                    onClick: ($event) => handleSelect(cell.value)
                  }, vue.toDisplayString(cell.label), 9, _hoisted_1$1)
                ]);
              }), 128))
            ]);
          }), 128))
        ]);
      };
    }
  });

  script$1.__file = "components/date-picker/comp/month-panel.vue";

  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "date-top-bar" }, [
    /* @__PURE__ */ vue.createElementVNode("span")
  ], -1);
  const _hoisted_2 = { key: 0 };
  const _hoisted_3 = { key: 1 };
  const _hoisted_4 = { key: 2 };
  var script = /* @__PURE__ */ vue.defineComponent({
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
      vue.useAttrs();
      const state = vue.reactive({
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
      const { panelVisible } = vue.toRefs(state);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("section", { onClick: handleClosePanel }, [
          vue.createVNode(script$2, vue.mergeProps({ value: __props.modelValue }, _ctx.$attrs, { onFocus: openPanel }), null, 16, ["value"]),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", null, [
                _hoisted_1,
                __props.type === "year" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2)) : vue.createCommentVNode("v-if", true),
                __props.type === "month" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.createVNode(script$1, { onSelect: handleSelect })
                ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_4))
              ], 512), [
                [vue.vShow, vue.unref(panelVisible)]
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  });

  script.__file = "components/date-picker/index.vue";

  exports.DatePicker = script;
  exports.Icon = script$3;
  exports.Input = script$2;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
