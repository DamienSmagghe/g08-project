<template>
    <div class="landing" @wheel="scrollChapter" @touchstart="touchPosition" @touchmove="touchChapter">
        <img src="../assets/images/bg.jpg" alt="Earth vue" class="background">
        <scroll v-if="chapter > 1"></scroll>
        <chapter :who-current="chapter"></chapter>
        <social></social>
        <transition-group name="fade">
            <story v-for="chap in chapterContent" v-bind:key="chap.id" :chapter-data="chap" v-if="chapter === chap.id + 2"></story>
        </transition-group>
        <h3 class="earth" v-if="chapter === 1">Eart<span>h</span></h3>
        <div class="groupInput">
            <input v-if="chapter === 4" v-model="planetName" type="text" maxlength="12" class="planet__name" @keypress.13="shouldRun" required>
            <label v-if="chapter === 4" for="name">Name your planet</label>
        </div>
        <launch v-if="chapter === 1" v-on:launch="runExperience"></launch>
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
                planetName: '',
                ts: Number
            }
        },
        methods: {
            runExperience() {
                let music = document.querySelector('.music')
                music.play()
                this.chapter++
            },
            shouldRun() {
                if (this.planetName.length > 2) {
                    this.$emit('run', this.planetName)
                }
            },
            touchPosition(_event) {
                this.ts = _event.touches[0].clientY
            },
            touchChapter(_event) {
                let contact = _event.touches
                let end = contact[0].pageY
                let distance = end - this.ts

                if (distance < -30 && this.justChanged === false && this.chapter > 1 && this.chapter < 4) {
                    this.chapter--
                    this.justChanged = true
                    if (this.chapter <= 4) {
                        window.setTimeout(() => {
                            this.justChanged = false
                        }, 200)
                    }
                }
                if (distance > 30 && this.justChanged === false && this.chapter > 1 && this.chapter < 4) {
                    this.chapter++
                    this.justChanged = true
                    if (this.chapter <= 4) {
                        window.setTimeout(() => {
                            this.justChanged = false
                        }, 200)
                    }
                }
            },
            scrollChapter(_event) {
                if (this.chapter > 1 && this.chapter <= 4 && this.justChanged === false) {
                    if (_event.deltaY < 0) {
                        this.chapter--
                    }
                    else if (_event.deltaY > 0 && this.chapter < 4) {
                        this.chapter++
                    }
                    this.justChanged = true
                    if (this.chapter <= 4) {
                        window.setTimeout(() => {
                            this.justChanged = false
                        }, 200)
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
        filter: brightness(40%);
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

       .groupInput{
        position: relative;
        width:200px;
        top:80%;
        left:50%;
        transform: translateX(-50%);
    }

    input{
        font-size:18px;
        display:block;
        width:200px;
        background: none;
        border:none;
        border-bottom: 2px solid #fff;
    }
    
    input[type=text]{
        color: #fff;
    }

    input:focus{ 
        outline:none;
    }
    
    label{
        color:#fff; 
        font-size:14px;
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        top:0;
        transition:0.2s ease all; 
    }

    input:focus ~ label, input:valid ~ label{
        top:-20px;
        font-size:10px;
        color: rgba(255,255,255,0.5);
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

