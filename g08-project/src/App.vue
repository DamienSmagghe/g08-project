<template>
  <div id="app">
    <logo></logo>
    <landing></landing>
    <questionnary v-if="gameLaunch"></questionnary>
    <period v-if="gameLaunch" :chapter-id="1"></period>
    <router-view/>
  </div>
</template>

<script>
import Questionnary from './components/Questionnary/Questionnary.vue'
import Period from './components/period.vue'
import Landing from './components/Landing.vue'
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    'questionnary': Questionnary,
    'period': Period,
    'landing': Landing,
    'logo': Logo
  },
  data() {
    return {
      gameLaunch: false
    }
  }
}
</script>
<style>
@font-face {
 font-family: 'Fjalla';
  src: url('./assets/fonts/FjallaOne-Regular.ttf');
}
@font-face {
  font-family: 'Roboto';
  src: url('./assets/fonts/roboto/Roboto-Regular.ttf');
}
@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Regular.ttf');
}
body {
  margin: 0;
  color: white;
  font-family: 'Montserrat', 'Helevetica', sans-serif;
}
ul, li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  color: inherit;
}
</style>


