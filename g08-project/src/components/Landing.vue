<template>
    <div class="landing" @wheel="scrollChapter">
        <img src="../assets/images/bg.jpg" alt="Earth vue" class="background">
        <scroll v-if="chapter > 1"></scroll>
        <chapter :who-current="chapter"></chapter>
        <social></social>
        <transition-group name="fade">
            <story v-for="chap in chapterContent" v-bind:key="chap.id" :chapter-data="chap" v-if="chapter === chap.id + 2"></story>
        </transition-group>
        <h3 class="earth" v-if="chapter === 1">Eart<span>h</span></h3>
        <input v-if="chapter === 4" v-model="planetName" type="text" maxlength="12" placeholder="Name Your Planet" class="planet__name" @keypress.13="shouldRun" required>
        <launch v-if="chapter === 1" v-on:launch="iterateChapter"></launch>
    </div>
</template>

<script>
    import Scroll from './Scroll.vue'
    import Chapter from './Chapter.vue'
    import Story from './Story.vue'
    import Launch from './Launch.vue'
    import Social from './Social.vue'
    
    import {
        storyTelling
    } from './storyTelling.js'
    
    export default {
        name: 'landing',
        components: {
            'scroll': Scroll,
            'chapter': Chapter,
            'story': Story,
            'launch': Launch,
            'social': Social
        },
        data() {
            return {
                chapter: 1,
                chapterContent: storyTelling,
                justChanged: false,
                planetName: ''
            }
        },
        methods: {
            iterateChapter() {
                this.chapter++
            },
            shouldRun() {
                if (this.planetName.length > 2) {
                    this.$emit('run', this.planetName)
                }
            },
            scrollChapter(_event) {
                if (this.chapter > 1 && this.chapter < 4 && this.justChanged === false) {
                    if (_event.deltaY < 0) {
                        this.chapter--
                    }
                    else if (_event.deltaY > 0) {
                        this.iterateChapter()
                    }
                    this.justChanged = true
                    if (this.chapter <= 4) {
                        window.setTimeout(() => {
                            this.justChanged = false
                        }, 2000)
                    }
                }
            }
        }
    }
</script>

<style>
.landing {
    width: 100vw;
    height: 100vh;
}
    .background {
        width: 100%;
        min-height: 100%;
        height: auto;
        position: fixed;
        top: 0;
        left: 0;
        object-fit: cover;
        filter: brightness(80%);
        z-index: -3;
    }
    
    .landing .earth {
        position: absolute;
        text-align: right;
        margin: 0 -4rem 0 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Fjalla';
        font-size: 6rem;
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing: 4rem;
    }
    
    .planet__name {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .landing .earth span {
        letter-spacing: 0;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
    
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    @media screen and (max-width: 660px) {
        .landing .earth {
            font-size: 3rem;
            letter-spacing: 2.5rem;
        }
    }
</style>

