<template>
  <li>
    <p>
      <span class="highlight">{{ name }}</span> rated the learning experience
      <span :class="ratingClass">{{ rating }}</span
      >.
    </p>
    <base-button class="danger" @click="deleteItem(id)">Delete</base-button>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'rating'],
  inject: ['loadSubmittedData'],
  computed: {
    ratingClass() {
      return 'highlight rating--' + this.rating;
    }
  },
  methods: {
    deleteItem(id) {
      fetch(
        'https://vue3-http-demo-fab96-default-rtdb.firebaseio.com/surveys/' + id + '.json',
        {
          method: 'DELETE'
        }
      ).then(() => {
        this.loadSubmittedData();
      });
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.rating--poor {
  color: #b80056;
}

.rating--average {
  color: #330075;
}

.rating--great {
  color: #008327;
}
.danger {
  background-color: rgb(253, 142, 142);
  color: white;
  border: none;
}
</style>
