const state = {
    counter: 0,
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' clicks';
    },
};

const mutations = {
    increment: (state, payLoad) => {
        state.counter += payLoad;
    },
    decrement: (state, payLoad) => {
        state.counter -= payLoad;
    },
};

const actions = {
    increment: ({commit}, payLoad) => {
        commit('increment', payLoad);
    },
    decrement: ({commit}, payLoad) => {
        commit('decrement', payLoad);
    },
    asyncIncrement: ({commit}, payLoad) => {
        setTimeout(() => {
            commit('increment', payLoad.value);
        }, payLoad.duration);
    },
    asyncDecrement: ({commit}, payLoad) => {
        setTimeout(() => {
            commit('decrement',payLoad.value);
        }, payLoad.duration);
    },
};

export default{
    state,
    getters,
    mutations,
    actions,
}