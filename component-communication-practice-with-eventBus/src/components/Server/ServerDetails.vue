<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please Select a Server to see the current Condition</p>
    <p v-else>Server id:#{{ server.id }} is Selected ans Condition is #{{ server.status }}</p>
    <br>
    <hr>
    <button class="btn btn-primary" @click="changeStatus">Change Status to Danger</button>
  </div>
</template>

<script>
import { ServerBus } from '../../main.js';
export default {
  data() {
    return {
      server: null
    };
  },
  created() {
    ServerBus.$on('serverSelected', (server) => {
      this.server = server
    })
  },
  methods: {
      changeStatus(){
          this.server.status = 'Dangerous';
      }
  }
};
</script>

<style>
</style>
