<template>
  <v-app>
    <v-navigation-drawer
            v-if="results.length > 0"
            fixed
            app
    >
      <v-toolbar-title class="pl-4 pt-2">History</v-toolbar-title>
      <v-list>
        <historySideItem v-for="result in results" :key="result.id" :result="result"/>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt/>
    </v-content>
    <v-alert
            mode="out-in"
            :type="alert.type"
            :value="alert.is"
            fixed
            dismissible
    >
      {{alert.text}}
    </v-alert>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  import historySideItem from '@/components/historySideItem'
  
  export default {
    components: {historySideItem},
    computed: {
      ...mapState({
        alert: state => state.alert.alert,
        results: state => state.persist.results
      })
    },
  }
</script>
