<template>
  <div class="about">
      <h2>This profile is: {{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data(){
      return{
          id: this.$route.params.userid
      }
  },

  methods:{
      updateId(){
          this.id = this.$route.params.userid
      }
  },
  watch:{
      $route: 'updateId'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
