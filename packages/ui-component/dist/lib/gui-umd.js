(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vue-remix-icons'), require('dayjs'), require('lodash/chunk')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-remix-icons', 'dayjs', 'lodash/chunk'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Gui = {}, global.Vue, global.vueRemixIcons, global.dayjs, global.chunk));
})(this, (function (exports, vue, vueRemixIcons, dayjs, chunk) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
  var chunk__default = /*#__PURE__*/_interopDefaultLegacy(chunk);

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
  var script$4 = /* @__PURE__ */ vue.defineComponent({
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
      const attrs = vue.useAttrs();
      console.log(attrs);
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
      const { isShowIcon, passwordVisible, wordCount } = vue.toRefs(state);
      return (_ctx, _cache) => {
        return __props.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock("section", {
          key: 0,
          class: vue.normalizeClass([vue.unref(classes), "gui-input-wrap"]),
          onMouseenter: onMouseEnter,
          onMouseleave: onMouseLeave
        }, [
          _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
            vue.renderSlot(_ctx.$slots, "prepend")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("span", _hoisted_2$4, [
            vue.renderSlot(_ctx.$slots, "prefix"),
            __props.prefixIcon ? (vue.openBlock(), vue.createBlock(script$5, { key: 0 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.prefixIcon)))
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createCommentVNode(' :value="modelValue" '),
          vue.createElementVNode("input", vue.mergeProps({
            type: __props.showPassword ? vue.unref(passwordVisible) ? "text" : "password" : __props.type,
            disabled: __props.disabled
          }, vue.unref(attrs), { onInput: handleInput }), null, 16, _hoisted_3$2),
          vue.createCommentVNode(" clearable "),
          vue.withDirectives(vue.createVNode(vue.unref(vueRemixIcons.RiCloseCircleLine), {
            onClick: handleClear,
            class: "gui-input-clear"
          }, null, 512), [
            [vue.vShow, __props.clearable && vue.unref(isShowIcon)]
          ]),
          vue.createCommentVNode(" \u9650\u5236\u5B57\u7B26\u957F\u5EA6 "),
          vue.unref(isWordLimitVisible) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$2, vue.toDisplayString(vue.unref(wordCount)) + "/" + vue.toDisplayString(_ctx.$attrs.maxlength || 0), 1)) : vue.createCommentVNode("v-if", true),
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
          vue.createElementVNode("span", _hoisted_5$1, [
            vue.renderSlot(_ctx.$slots, "suffix"),
            __props.suffixIcon ? (vue.openBlock(), vue.createBlock(script$5, { key: 0 }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.suffixIcon)))
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ]),
          _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6$1, [
            vue.renderSlot(_ctx.$slots, "append")
          ])) : vue.createCommentVNode("v-if", true)
        ], 34)) : (vue.openBlock(), vue.createElementBlock("section", _hoisted_7$1, [
          vue.createElementVNode("textarea", {
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
  var script$3 = /* @__PURE__ */ vue.defineComponent({
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
        emit("select", val, "month");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("table", _hoisted_1$3, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(rows), (row, index) => {
            return vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (cell) => {
                return vue.openBlock(), vue.createElementBlock("td", {
                  key: cell.label
                }, [
                  vue.createElementVNode("span", {
                    onClick: ($event) => handleSelect(cell.value)
                  }, vue.toDisplayString(cell.label), 9, _hoisted_2$3)
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
  var script$2 = /* @__PURE__ */ vue.defineComponent({
    props: {
      modelData: {
        type: Object,
        default: {}
      }
    },
    emits: ["select"],
    setup(__props, { emit }) {
      const props = __props;
      const startYear = vue.computed(() => {
        return Math.floor(props.modelData.currentDate.year() / 10) * 10;
      });
      vue.useAttrs();
      vue.reactive({});
      const handleClass = (i, j) => {
        const classArray = [];
        const selectedYear = startYear.value + i * 4 + j;
        if (selectedYear === +dayjs__default["default"]().format("YYYY") || +props.modelData.modelValue === selectedYear) {
          classArray.push("green-actived");
        }
        if (selectedYear === +dayjs__default["default"]().format("YYYY")) {
          classArray.push("bold-actived");
        }
        return classArray;
      };
      const handleSelect = (val) => {
        emit("select", val, "year");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("table", _hoisted_1$2, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (_, i) => {
            return vue.createElementVNode("tr", { key: i }, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(4, (__, j) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                  key: i + "_" + j
                }, [
                  i * 4 + j < 10 ? (vue.openBlock(), vue.createElementBlock("td", _hoisted_2$2, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(handleClass(i, j)),
                      onClick: ($event) => handleSelect(vue.unref(startYear) + i * 4 + j)
                    }, vue.toDisplayString(vue.unref(startYear) + i * 4 + j), 11, _hoisted_3$1)
                  ])) : (vue.openBlock(), vue.createElementBlock("td", _hoisted_4$1))
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
  var script$1 = /* @__PURE__ */ vue.defineComponent({
    props: {
      modelData: {
        type: Object,
        default: {}
      }
    },
    emits: ["select"],
    setup(__props, { emit }) {
      const props = __props;
      vue.useAttrs();
      vue.reactive({});
      const rows = vue.computed(() => {
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
        return chunk__default["default"](addDays.concat(dateList), 7);
      });
      const handleSelect = (obj) => {
        emit("select", obj, "dates");
      };
      const handleClass = (item) => {
        let classArray = [];
        const { modelData: { modelValue, currentDate } } = props;
        if (item.value === dayjs__default["default"](modelValue).date() && currentDate.month() === dayjs__default["default"](modelValue).month()) {
          classArray = ["select-actived"];
        }
        if (currentDate.month() === dayjs__default["default"]().month() && dayjs__default["default"]().date() === item.value) {
          classArray.push("green-actived");
        }
        if (item.previousMonth) {
          classArray.push("grey-date");
        }
        return classArray;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("table", _hoisted_1$1, [
          vue.createElementVNode("tr", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(WEEKS), (item) => {
              return vue.openBlock(), vue.createElementBlock("td", {
                key: item.value
              }, vue.toDisplayString(item.label), 1);
            }), 128))
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(rows), (row, index) => {
            return vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(row, (item) => {
                return vue.openBlock(), vue.createElementBlock("td", {
                  key: `${item.value}_${index}`
                }, [
                  vue.createElementVNode("span", {
                    onClick: ($event) => handleSelect(item),
                    class: vue.normalizeClass(handleClass(item))
                  }, vue.toDisplayString(item.value), 11, _hoisted_2$1)
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
      const attrs = vue.useAttrs();
      console.log(attrs);
      const currentDate = vue.ref(dayjs__default["default"]());
      const yearLabel = vue.computed(() => {
        if (props.type === "year") {
          const startYear = Math.floor(currentDate.value.year() / 10) * 10;
          return `${startYear} - ${startYear + 9}`;
        }
        return `${currentDate.value.year()}`;
      });
      const monthLabel = vue.computed(() => MONTHS.find((item) => item.value === currentDate.value.month()).label);
      const state = vue.reactive({
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
            emit("update:modelValue", dayjs__default["default"]().year(val).format("YYYY"));
            break;
          case "month":
            emit("update:modelValue", dayjs__default["default"]().month(val).format("YYYY-MM"));
            break;
          default:
            const currentMonth = val.previousMonth ? currentDate.value.month() - 1 : currentDate.value.month();
            currentDate.value = currentDate.value.set("month", currentMonth);
            emit("update:modelValue", dayjs__default["default"]().month(currentMonth).date(val.value).format("YYYY-MM-DD"));
            break;
        }
        state.panelVisible = false;
      };
      const handleClosePanel = (e) => {
        state.panelVisible = false;
      };
      const { panelVisible } = vue.toRefs(state);
      return (_ctx, _cache) => {
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("section", _hoisted_1, [
          vue.createVNode(script$4, vue.mergeProps({ value: __props.modelValue }, _ctx.$attrs, { onFocus: openPanel }), null, 16, ["value"]),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("div", _hoisted_2, [
                vue.createElementVNode("div", _hoisted_3, [
                  vue.createElementVNode("div", null, [
                    vue.createElementVNode("span", {
                      onClick: _cache[0] || (_cache[0] = ($event) => moveLeftRight(false))
                    }, "<<"),
                    __props.type === "dates" ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      style: { "margin-left": "10px" },
                      onClick: _cache[1] || (_cache[1] = ($event) => moveMonth(false))
                    }, "<")) : vue.createCommentVNode("v-if", true)
                  ]),
                  __props.type === "year" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString(vue.unref(yearLabel)), 1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(yearLabel)) + " ", 1),
                    __props.type === "dates" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, vue.toDisplayString(vue.unref(monthLabel)), 1)) : vue.createCommentVNode("v-if", true)
                  ])),
                  vue.createElementVNode("div", null, [
                    __props.type === "dates" ? (vue.openBlock(), vue.createElementBlock("span", {
                      key: 0,
                      style: { "margin-right": "10px" },
                      onClick: _cache[2] || (_cache[2] = ($event) => moveMonth(true))
                    }, ">")) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("span", {
                      onClick: _cache[3] || (_cache[3] = ($event) => moveLeftRight(true))
                    }, ">>")
                  ])
                ]),
                __props.type === "year" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                  vue.createVNode(script$2, {
                    onSelect: handleSelect,
                    modelData: { currentDate: currentDate.value, modelValue: __props.modelValue }
                  }, null, 8, ["modelData"])
                ])) : vue.createCommentVNode("v-if", true),
                __props.type === "month" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                  vue.createVNode(script$3, { onSelect: handleSelect })
                ])) : vue.createCommentVNode("v-if", true),
                __props.type === "dates" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [
                  vue.createVNode(script$1, {
                    onSelect: handleSelect,
                    modelData: { currentDate: currentDate.value, modelValue: __props.modelValue }
                  }, null, 8, ["modelData"])
                ])) : vue.createCommentVNode("v-if", true)
              ], 512), [
                [vue.vShow, vue.unref(panelVisible)]
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

  exports.DatePicker = script;
  exports.Icon = script$5;
  exports.Input = script$4;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
