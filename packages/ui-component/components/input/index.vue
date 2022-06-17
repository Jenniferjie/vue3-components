<template>
  <section
    v-if="type !== 'textarea'"
    :class="classes"
    class="gui-input-wrap"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div v-if="$slots.prepend" class="gui-input-group_prepend">
      <slot name="prepend"></slot>
    </div>

    <span class="gui-input_prefix">
      <slot name="prefix"></slot>
      <Icon
        v-if="prefixIcon"
      >
        <component :is="prefixIcon" />
      </Icon>
    </span>

    <!-- :value="modelValue" -->
    <input
      ref="input"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :disabled="disabled"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
    >
    <!-- clearable -->
    <RiCloseCircleLine
      v-show="clearable && isShowIcon"
      @click="handleClear"
      class="gui-input-clear"
    />

    <!-- 限制字符长度 -->
    <div v-if="isWordLimitVisible" class="gui-input_limit">
      {{ wordCount }}/{{ $attrs.maxlength || 0 }}
    </div>

    <!-- 显示密码 -->
    <div v-if="showPassword" @click="passwordVisible = !passwordVisible">
      <RiEyeLine v-show="passwordVisible" width="20" />
      <RiEyeOffLine v-show="!passwordVisible" width="20" />
    </div>

    <span class="gui-input_suffix">
      <slot name="suffix"></slot>
      <Icon
        v-if="suffixIcon"
      >
        <component :is="suffixIcon" />
      </Icon>
    </span>

    <div v-if="$slots.append" class="gui-input-group_append">
      <slot name="append"></slot>
    </div>
  </section>
  <section v-else>
    <textarea ref="textarea" name="" id="" cols="30" rows="10"></textarea>
  </section>
</template>

<script lang="ts" setup="props, context">
import { RiCloseCircleLine, RiEyeLine, RiEyeOffLine } from 'vue-remix-icons'
import { computed, reactive, toRefs, watch, useAttrs, shallowRef } from 'vue';

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  size: {
    type: String,
    default: 'normal',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  clearable: {
    type: Boolean,
    default: false,
  },

  type: {
    type: String,
    default: 'text',
  },

  showPassword: {
    type: Boolean,
    default: false,
  },

  showWordLimit: {
    type: Boolean,
    default: false,
  },

  suffixIcon: {
    type: Object,
    default: null,
  },

  prefixIcon: {
    type: Object,
    default: null,
  },
});
const attrs = useAttrs();
const input = shallowRef(null);
const textarea = shallowRef(null);
const _ref = computed(() => input.value || textarea.value)



// 样式
const { size } = props;
const classes = computed(() => {
  return {
    [`gui-size-${size}`]: size,
    [`gui-icon-${size}`]: size,
  }
});

const isWordLimitVisible = computed(() => (
  props.showWordLimit && !!attrs.maxlength && !props.showPassword
))

const state = reactive({
  isShowIcon: false,
  passwordVisible: true,
  wordCount: 0,
});

const setNativeInputValue = () => {
  const input = _ref.value
  if (!input || input.value === props.modelValue) return
  input.value = props.modelValue
}

watch(
  () => props.modelValue,
  (val) => {
    state.isShowIcon = !!val;
    state.wordCount = val.length;
    setNativeInputValue();
  }
)

const emit = defineEmits(['update:modelValue', 'input', 'change'])

const handleInput = (e: Event) => {
  const { value } = e.target as TargetElement;
  emit('update:modelValue', value)
};

const onMouseEnter = () => {
  if (props.modelValue) {
    state.isShowIcon = true;
  }
}

const onMouseLeave = () => {
  state.isShowIcon = false;
};

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value);
}

const handleClear = () => {
  emit('update:modelValue', '');
  emit('change', '');
  emit('input', '')
}

const { isShowIcon, passwordVisible, wordCount } = toRefs(state)

</script>

<style lang="scss">
@import "./index.scss";
</style>
