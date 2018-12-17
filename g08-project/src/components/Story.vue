<template>
    <div class="story">
            <h3 class="chapter__title">{{chapter.title}}</h3>
            <div class="paragraph cornered">
            <p> {{chapter.content}}</p>
            <span></span>
        </div>
        <audio :src="chapter.sound" type="audio/mp3" :autoplay="isVoice" class="voice"></audio>
    </div>
</template>

<script>
import { voiceControl } from './store.js'

    export default {
        name: 'story',
        props: {
            chapterData: Object
        },
        data() {
            return {
                isVoice: voiceControl.isVoice
            }
        },
        computed: {
            chapter() {
                return this.chapterData
            }
        }
    }
</script>

<style scoped>
    .story {
        position: absolute;
        padding: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 50%;
        z-index: 99;
        font-family: 'Roboto', 'Helvetica', sans-serif;
        text-align: center;
    }
    
    .story .chapter__title {
        position: relative;
        font-family: 'Roboto', 'Helvetica', sans-serif;
        font-size: 1.5rem;
        letter-spacing: normal;
        display: inline-block;
    }
    .paragraph {
        position: relative;
        padding: 20px;
        margin: 20px;
    }
    @media screen  and (max-width: 660px){
        .story {
            width: 100%;
        }
    }
</style>
