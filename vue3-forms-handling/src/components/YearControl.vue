<template>
    <!-- When we use input field then we can apply that type of syntex.
    modelValue & update:modelValue is by default: https://stackoverflow.com/questions/46258763/vuejs-v-model-in-custom-component
    we accect this in another page like: <r-c v-model="rating"></rx> & data=> rating:null then console somewhere -->
    <label>Current Year</label>
    <input type="number" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
};
</script>

