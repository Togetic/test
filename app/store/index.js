import api from '@/api/main'

export const state = () => ({
  rates: [],
  actionType: 'sale',
  currencyType: null,
})

export const getters = {
  rates: state => state.rates
}

export const actions = {
  async loadRates({ commit }) {
    const {data} = await api.get();
    commit('setRates', data);
    return data
  },
  async nuxtServerInit ({ dispatch }) {
    await dispatch('loadRates')
  },
  changeActionType({ commit }, payload){
    commit('setActionType', payload);
  },
  changeCurrencyType({ commit }, payload){
    commit('setCurrencyType', payload);
  },
  async sendToServerForCalculate ({ state, rootState }) {
    // const {data} = api.send({
    //   amount: state.persist,
    //   actionType: state.actionType,
    //   currencyType: state.currencyType
    // })
    // return data
    await new Promise(resolve => setTimeout(resolve, 2000));
  },
}

export const mutations = {
  setRates (state, data) {
    state.rates = data
  },
  setActionType (state, data) {
    state.actionType = data
  },
  setCurrencyType (state, data) {
    state.currencyType = data
  },
}