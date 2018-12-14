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
                justChanged: false
            }
        },
        methods: {
            iterateChapter() {
                this.chapter++
            },
            scrollChapter() {
                if (this.chapter > 1 && this.chapter <= 4 && this.justChanged === false) {
                    this.iterateChapter()
                    this.justChanged = true
                    if (this.chapter < 4) {
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
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    
    .landing .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(80%)
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
    
    .landing .earth span {
        letter-spacing: 0;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
    
    .fade-enter,
    .fade-leave-to    
    {
        opacity: 0;
    }
</style>

