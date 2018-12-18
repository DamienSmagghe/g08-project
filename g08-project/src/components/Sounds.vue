<template>
    <div class="sounds__container">
        <div class="volume" @click="toggleMusic">
            <img :src="volumeSrc" alt="Volume logo">
        </div>
        <div class="voice" @click="toggleVoice">
            <img :src="voiceSrc" alt="Voice logo">
        </div>
    </div>
</template>

<script>
import { voiceControl } from './store.js'
    export default {
        name: 'sounds',
        data() {
            return {
                isMusic: true,
                isVoice: true,
                volumeSrc: require('../assets/images/volume.svg'),
                voiceSrc: require('../assets/images/micro.svg')
            }
        },
        methods: {
            toggleMusic() {
                this.isMusic = !this.isMusic
                let music = document.querySelector('.music')
                if (this.isMusic) {
                    this.volumeSrc = require('../assets/images/volume.svg')
                    music.play()
                }
                else {
                    this.volumeSrc = require('../assets/images/mute.svg')
                    let music = document.querySelector('.music')
                    music.pause()
                }
            },
            toggleVoice() {
                this.isVoice = !this.isVoice
                let voice = document.querySelector('.voice')
                if (this.isVoice) {
                    this.voiceSrc = require('../assets/images/micro.svg')
                    voice.play()
                    voiceControl.isVoice = true
                }
                else {
                    this.voiceSrc = require('../assets/images/micromute.svg')
                    voice.pause()
                    voiceControl.isVoice = false
                }
            }
        }
    }
</script>

<style scoped>
    .sounds__container {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        margin: 20px;
        width: 50px;
        justify-content: space-between;
    }
    .sounds__container img {
        width: 15px;
        height: 15px;
    }
    .sounds__container div {
        cursor: pointer;
    }
</style>


