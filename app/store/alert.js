let timeOut;

export const state = () => ({
  alert: {
    is: false,
    text: '',
    type: 'info',
  }
})
export const actions = {
  callAlert ({ commit }, data) {
    clearTimeout(timeOut);
    commit('alertOn', data);
    timeOut = setTimeout(() => {
      commit('alertOff')
    }, data.time || 5000)
  }
}

export const mutations = {
  alertOn (state, data) {
    state.alert.is = _.get(data, 'is', true);
    if (_.isObject(data)) {
      state.alert.text = data.text;
      state.alert.type = data.type || 'info';
    } else {
      state.alert.text = data;
    }
  },
  alertOff (state) {
    state.alert.is = false;
    state.alert.type = 'info'
  },
}