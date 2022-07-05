<template>
  <label class='form-label' :class="[required === true ? 'required' : '']">{{label}}</label>
  <input
      v-bind="$attrs"
      class='form-control form-control-sm'
      :placeholder='label'
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      autocomplete="off"
  />
</template>

<script>
export default {
  props:{
    label:{
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type : [String, Number],
      default: ''
    },
    required:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>