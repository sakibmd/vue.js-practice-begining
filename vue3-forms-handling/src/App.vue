<template>
 <!-- important resource:
 How to use v-model in custom component: https://stackoverflow.com/questions/46258763/vuejs-v-model-in-custom-component  -->

  <the-form></the-form>
</template>

<script>
import TheForm from './components/TheForm.vue';

export default {
  components: {
    TheForm
  }  
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>