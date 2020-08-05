<template>
  <v-layout flex-column align-center justify-center>
    <h1>Congratulations!</h1>
    <p>Total: {{lastResult.value}}
      <v-icon>{{getCurrencyIcoName(lastResult.currency)}}</v-icon>
    </p>
    <v-btn to="/">To start</v-btn>
  </v-layout>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    name: "result",
    methods: {
      ...mapActions({ changeAmount: 'persist/changeAmount', }),
      ...mapMutations({ clearLast: 'persist/setLastResult' }),
      getCurrencyIcoName (name) {
        switch (name) {
          case 'USD':
            return 'fas fa-dollar-sign';
          case 'EUR':
            return 'fas fa-euro-sign';
          case 'BTC':
            return 'fab fa-btc';
          case 'RUR':
            return 'fas fa-ruble-sign';
          case 'UAH':
            return 'fas fa-hryvnia';
          default:
            return ''
        }
      }
    },
    beforeDestroy () {
      this.clearLast({});
      this.changeAmount(null);
    },
    computed: {
      ...mapState({
        lastResult: state => state.persist.lastResult,
      }),
    }
  }
</script>