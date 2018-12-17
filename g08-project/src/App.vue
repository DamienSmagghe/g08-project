<template>
  <div id="app">
    <img src="./assets/images/bg2.png" alt="Cosmos" class="background">
    <logo></logo>
    <!-- <landing @run="game" v-if="!gameLaunch"></landing> -->
    <transition name="fade">
      <questionnary v-if="gameLaunch && !gameEnd" :planet-name="planetName" @end="gameEnd = true"></questionnary>
    </transition>
    <transition name="fade">
      <end-page v-if="gameEnd"></end-page>
    </transition>
    <sounds></sounds>
    <audio src="../static/assets/sounds/music.mp3" autoplay loop class="music"></audio>
    <router-view/>
  </div>
</template>

<script>
  import Questionnary from './components/Questionnary/Questionnary.vue'
  import Landing from './components/Landing.vue'
  import Logo from './components/Logo.vue'
  import Sounds from './components/Sounds.vue'
  import EndPage from './components/EndPage.vue'

  export default {
    name: 'App',
    components: {
      'questionnary': Questionnary,
      'landing': Landing,
      'logo': Logo,
      'sounds': Sounds,
      'end-page': EndPage
    },
    data() {
      return {
        gameLaunch: false,
        planetName: '',
        gameEnd: true
      }
    },
    methods: {
      game(value) {
        this.planetName = value
        this.gameLaunch = true
      }
    },
    mounted() {
      let music = document.querySelector('.music')
      music.volume = 0.2
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
    position: fixed;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    color: inherit;
  }
  
  .cornered:before {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;
    border-top: 2px solid white;
    border-left: 2px solid white;
  }
  
  .cornered:after {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    border-top: 2px solid white;
    border-right: 2px solid white;
  }
  
  .cornered span:before {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
  }
  
  .cornered span:after {
    display: block;
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
  }
</style>


