import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks.js';
Vue.use(Vuex);

export default new Vue.Store({
    modules: {
        stocks,
    }
});

