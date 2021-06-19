<template>
  <button @click="gotoTeams">Go to Team</button>
  <button @click="isSaved">Save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data() {
    return {
      changesSave: false
    };
  },
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    gotoTeams() {
      this.$router.push('/teams');
    },
    isSaved() {
      this.changesSave = true;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.changesSave) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure to leavew the page without saving?');
      next(userWantsToLeave);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
