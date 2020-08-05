export const state = () => ({
  amount: null,
  lastResult: {
    value: '',
    currency: '',
    id: ''
  },
  results: []
})

export const actions = {
  changeAmount({ commit }, payload){
    commit('setAmount', payload);
  },
  addResult({ commit }, payload){
    commit('setLastResult', payload);
    commit('addResult', payload);
  }
}

export const mutations = {
  setAmount (state, data) {
    state.amount = data
  },
  setLastResult (state, data) {
    state.lastResult = data
  },
  addResult (state, data) {
    state.results.push(data)
  }
}