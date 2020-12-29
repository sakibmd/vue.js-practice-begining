<template>
  <div class="navbar">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <ul>
      <li v-for="(id, index) in allProfiles" :key="index">
        <router-link
          :to="{ name: 'Profile', params: { userid: id } }"
        >Profile {{ id }}</router-link>
      </li>
    </ul>
    <button @click="contact">Contact</button>
    <button @click="about">About</button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      allProfiles: [
        1,2,3,4,5,6,7
      ]
    };
  },
  methods:{
    contact(){
      this.$router.push({name:'Contact'})
    },
    about(){
      this.$router.push({name:'About'})
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
a.router-link-exact-active{
  color:red;
}
</style>
