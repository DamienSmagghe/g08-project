<template>
    <div class="questionnary">
        <div class="game">
            <img src="../../assets/images/bg2.jpg" alt="Cosmos" class="background">
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
    import Planet from '../Planet.js'
    import Gauges from './Gauge.vue'
    import Questions from './Questions.vue'
    import Era from './Era.vue'
    import * as THREE from 'three'
    import {
        planet
    } from './storePlanet.js'
    
    import {
        questions
    } from './questions.js'
    import {
        earthViability,
        populationViability
    } from './viabilities.js'
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
                questionId: 0,
            }
        },
        mounted() {
            planet.planet = new Planet(document.querySelector('.planet__container'))
            planet.planet.scene.add(planet.planet.kernel)
            planet.planet.scene.add(planet.planet.surface)
            planet.planet.scene.add(planet.planet.atmosphere)
            planet.planet.scene.add(planet.planet.satelite)
        },
        computed: {
            era() {
                if (this.questionId < 8) {
                    return 1
                } else if (this.questionId >= 8 && this.questionId < 16) {
                    return 2
                } else {
                    return 3
                }
            }
        },
        methods: {
            updateGauge() {
                this.updatePlanet()
                this.questionId++
                    if (this.questionId >= 25) {
                        this.$emit('end')
                    }
                this.dataEarthViability = earthViability.value
                this.dataPopulationViability = populationViability.value
    
                if ((this.dataEarthViability < 0.1) || (this.dataPopulationViability < 0.1)) {
                    this.isLosing = true
                    this.$emit('end')
                }
            },
            updatePlanet(){
                // this.kernelAnimation = this.changeColor(this.kernel, 'hsl(12, 82%, 50%)')
                planet.planet.kernelAnimation = planet.planet.changeColor(
                    planet.planet.kernel,
                    new THREE.Color().setHSL(
                        (earthViability.value + 0.04) * 80 / 250, //20 to 80 --> 0.08 to 0.36
                        0.88, // 80 to 100 --> 0.32 to 0.4
                        0.35 // keep 0.5
                    )
                )
                planet.planet.surfaceAnimation = planet.planet.changeColor(
                    planet.planet.surface,
                    new THREE.Color().setHSL(
                        (populationViability.value + 0.08) * 100 / 100,
                        0.7,
                        0.44
                    )
                )
                planet.planet.atmosphereAnimation = planet.planet.changeColor(
                    planet.planet.atmosphere,
                    new THREE.Color().setHSL(
                        (earthViability.value + 0.5) * 100 / 100, //20 to 90 --> 0.08 to 0.36
                        1,
                        0.84
                    )
                )
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
        z-index: 20;
    }
    
    .game {
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
        margin: 20px;
        height: 100%;
    }
    
    .planet__container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100vw;
        height: 100vh;
    }
    
    .planet__container>canvas {
        width: 100vw;
        height: 100vh;
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
