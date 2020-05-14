import stocks from '../../data/stocks.js';

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {

    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit();
    },
    inStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStock: ({sommit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    } 
};

export default{
    getters,
    actions,
    mutations,
    state,
}