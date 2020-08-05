import axios from '~/services/nuxtAxiosPort'

export default {
  get(payload) {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`, {
      // params: payload.params
    })
  },
  send(data) {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo`, data)
  },
}
