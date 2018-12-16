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
    export default {
        name: 'sounds',
        data() {
            return {
                isMusic: true,
                isVoice: true,
                volumeSrc: require('../assets/images/volume.svg'),
                voiceSrc: require('../assets/images/volume.svg')
            }
        },
        methods: {
            toggleMusic() {
                this.isMusic = !this.isMusic
                if (this.isMusic) {
                    this.volumeSrc = require('../assets/images/volume.svg')
                }
                else {
                    this.volumeSrc = require('../assets/images/mute.svg')
                }
            },
            toggleVoice() {
                this.isVoice = !this.isVoice
                if (this.isVoice) {
                    this.voiceSrc = require('../assets/images/volume.svg')
                }
                else {
                    this.voiceSrc = require('../assets/images/mute.svg')
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


