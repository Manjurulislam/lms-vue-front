<template>
  <label class='form-label' :class="[required === true ? 'required' : '']">{{label}}</label>
  <textarea
      class='form-control form-control-sm'
      rows="5"
      :placeholder='label'
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props:{
    label:{
      type: String,
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