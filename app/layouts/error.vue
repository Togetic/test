<template>
  <main class="main holder-404">
    <div>
      <h2>{{error.statusCode}}</h2>
      <p v-if="error.message">{{error.message}}</p>
      <p v-if="error.subMessage">{{error.subMessage}}</p>
    </div>
  </main>
</template>

<script>
  export default {
    props: [ 'error' ],
    layout: 'empty',
    auth: false
  }
</script>
