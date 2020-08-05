import {setClient} from '~/services/nuxtAxiosPort'

export default ({app}) => {
  setClient(app.$axios)
}