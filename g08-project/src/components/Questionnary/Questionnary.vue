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
                questionId: 0
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
            
            changeColor(_value) {
                this.color = new THREE.Color()
                this.red = new THREE.Color(0xff3333)
                this.blue = new THREE.Color(0x3399ff)
                this.white = new THREE.Color(0xffffff)

                switch (_value) {
                    case _vale >= 0 || _value < 0.5:
                        this.color.lerp(this.red)
                        return this.color
                    case _vale == 0.5:
                        this.color.lerp(this.white)
                        return this.color
                    case _vale >= 0.5 || _value < 1:
                        this.color.lerp(this.blue)
                        return this.color
                }
            },
            
            updatePlanet() {
                planet.planet.scene.remove(planet.planet.scene.getObjectByName(planet.planet.kernel.name))
                planet.planet.scene.remove(planet.planet.scene.getObjectByName(planet.planet.surface.name))
                planet.planet.scene.remove(planet.planet.scene.getObjectByName(planet.planet.atmosphere.name))
                planet.planet.scene.remove(planet.planet.scene.getObjectByName(planet.planet.satelite.name))
    
                planet.planet.kernel = planet.planet.createParticles({
                    amount: 100000,
                    particleSize: 0.15,
                    color: 0xff0000,
                    radius: 20,
                    name: 'kernel'
                })
                planet.planet.surface = planet.planet.createParticles({
                    amount: 100000,
                    particleSize: 0.15,
                    color: 0xD4E1FE, //
                    radius: 50,
                    get: false,
                    name: 'surface'
                })
                planet.planet.atmosphere = planet.planet.createParticles({
                    amount: 5000,
                    particleSize: 0.15,
                    color: 0xf3eed9, //
                    radius: 60,
                    get: false,
                    name: 'atmosphere'
                })
                planet.planet.satelite = planet.planet.createParticles({
                    amount: 1000,
                    particleSize: 0.05,
                    color: 0xffffff,
                    radius: 64,
                    name: 'satelite'
                })
    
                planet.planet.scene.add(planet.planet.kernel)
                planet.planet.scene.add(planet.planet.surface)
                planet.planet.scene.add(planet.planet.atmosphere)
                planet.planet.scene.add(planet.planet.satelite)
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
