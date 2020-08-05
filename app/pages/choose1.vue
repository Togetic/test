<template>
  <v-layout>
    <exchanger :amount="amount">
      <v-toolbar-title slot="title">Exchange page</v-toolbar-title>
    </exchanger>
  </v-layout>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import exchanger from '@/components/exchanger'

  export default {
    name: "choose1",
    components: { exchanger },
    computed: {
      ...mapState({
        amount: state => state.persist.amount
      }),
    }
  }
</script>