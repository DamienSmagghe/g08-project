<template>
    <div class="questionnary">
        <div class="game">
            <img src="../../assets/images/bg2.png" alt="Cosmos" class="background">
            <h3 class="planet-name">{{planetName}}</h3>
            <gauges v-bind:earth-viability="dataEarthViability" :population-viability="dataPopulationViability"></gauges>
            <div class="planet__container">
    
            </div>
            <questions v-bind:questions="allQuestions" v-bind:earth-viability="dataEarthViability" v-bind:population-viability="dataPopulationViability" v-on:updateViabilities="updateGauge"></questions>
            <era v-bind:current-era="era"></era>
        </div>
        <audio src="../../../static/assets/sounds/cling.mp3" autoplay></audio>
    </div>
</template>

<script>
    import Gauges from './Gauge.vue'
    import Questions from './Questions.vue'
    import Era from './Era.vue'
    import {
        questions
    } from './questions.js'
    import {
        earthViability,
        populationViability
    } from './viabilities.js'
    import Renderer from '../world/components/Renderer.js'

    export default {
        name: 'Questionnary',
        components: {
            'gauges': Gauges,
            'questions': Questions,
            'era': Era
        },
        props: {
            planetName: String
        },
        data() {
            return {
                allQuestions: questions,
                isLosing: false,
                dataEarthViability: earthViability.value,
                dataPopulationViability: populationViability.value,
                questionId: 0
            }
        },
        mounted() {
            // const planet = new Renderer()
        },
        computed: {
            era() {
                if (this.questionId < 25) {
                    return 1
                } else if (this.questionId >= 25 && this.questionId < 50) {
                    return 2
                } else {
                    return 3
                }
            }
        },
        methods: {
            updateGauge() {
                this.questionId++
                    if (this.questionId >= 73) {
                        this.$emit('end')
                    }
                this.dataEarthViability = earthViability.value
                this.dataPopulationViability = populationViability.value
    
                if ((this.dataEarthViability < 0.1) || (this.dataPopulationViability < 0.1)) {
                    this.isLosing = true
                    this.$emit('end')
                }
            }
        }
    }
</script>

<style>
    .planet-name {
        /* width: 20%; */
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        text-transform: uppercase;
        font-family: 'Fjalla', 'helvetica', sans-serif;
        font-size: 3rem;
        letter-spacing: 1rem;
    }
    
    .game {
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        margin: 20px;
        height: 100%;
    }
    
    .questionnary {
        width: 100vw;
        height: 100vh;
    }
    
    @media screen and (max-width: 960px) {
        .planet-name {
            display: none;
        }
        .game {
            flex-direction: column;
            padding: 20px;
        }
    }
</style>
