<template>
  <div>
    <li class="list-group-item" style="cursor: pointer" @click="serverSelected">Server #{{ server.id }}</li>
  </div>
</template>

<script>
import { ServerBus } from '../../main.js';
export default {
  props: ['server'],
  methods: {
      serverSelected(){
          ServerBus.$emit('serverSelected', this.server);
      }
  }

};
</script>

<style>
</style>
