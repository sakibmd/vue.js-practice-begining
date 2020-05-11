import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js'; //for module

import * as actions from './actions';
import * as mutations from './mutations';
import * as 
getters from './getters';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 100,
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    },
});
