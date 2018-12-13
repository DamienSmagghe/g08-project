<template>
  <div id="app">
    <questionnary v-if="gameLaunch"></questionnary>
    <router-view/>
  </div>
</template>

<script>
import Questionnary from './components/Questionnary/Questionnary.vue'

export default {
  name: 'App',
  components: {
    'questionnary': Questionnary
  },
  data() {
    return {
      gameLaunch: true
    }
  }
}
</script>

