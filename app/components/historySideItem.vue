<template>
  <v-list-item>
    {{prettifiedValue}}
    {{result.currency}}
  </v-list-item>
</template>

<script>
  export default {
    name: "historySidebar",
    props: ['result'],
    computed: {
      prettifiedValue(){
        if(this.result.currency === 'BTC'){
          return this.result.value
        }
        return this.result.value.toFixed(2)
      }
    }
  }
</script>