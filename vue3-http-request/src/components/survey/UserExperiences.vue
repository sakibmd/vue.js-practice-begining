<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadSubmittedData"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data found. Please add some data.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :id="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>

      <!-- else =>  !isLoading && result && result.length > 0" -->
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  mounted() {
    this.loadSubmittedData();
  },
  provide(){
    return {
      loadSubmittedData: this.loadSubmittedData
    }
  },
  methods: {
    loadSubmittedData() {
      this.isLoading = true;
      this.error = null;
      fetch(
        'https://vue3-http-demo-fab96-default-rtdb.firebaseio.com/surveys.json'
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results;
        }).catch(error => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fatch data, try again later'
        });
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
