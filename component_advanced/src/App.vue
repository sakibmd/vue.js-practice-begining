<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        {{ selectedComponent }}
        <!-- <app-quote>
          <h1 slot="title">{{ quoteTitle }}</h1>
          <h2 slot="content">Sakib Mohammed</h2>
          <h2 slot="subTitle">Metropolitan University</h2>
          <h4>Hello World</h4>
        </app-quote> -->

  <keep-alive>
     <component :is="selectedComponent">
         <p> Default Text</p>
        </component>
  </keep-alive>
     


      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote';
import Author from './components/Author';
import New from './components/New';
export default {
  data: function(){
    return {
      quoteTitle: 'Hello',
      selectedComponent: 'appQuote',
    }; 
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
}
</script>

<style>

</style>
