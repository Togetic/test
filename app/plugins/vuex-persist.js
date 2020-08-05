import VuexPersistence from 'vuex-persist'
//it can save data in cookies ;)
export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: window.localStorage,
      modules: ['persist']
    }).plugin(store);
  });
}