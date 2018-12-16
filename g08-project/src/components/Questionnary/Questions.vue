<template>
    <div class="questions cornered">
        <div class="question" v-for="q in questionsAll" v-if="q.id === questId">
            <h4 v-html="q.text"></h4>
            <div class="answer" v-for="answer in q.answers">
                <input type="button" v-bind:class="{current: answer.effects === effect}" @click="storeEffects(answer.effects)" :value="answer.text">
            </div>
        </div>
        <button class="validation" @click="nextQuestion" :disabled="effect === null">Validate</button>
        <span></span>
    </div>
</template>

<script>
    import {
        affectThemes
    } from './themes.js'
    import {
        earthViability,
        populationViability
    } from './viabilities.js'
    
    export default {
        name: 'questions',
        props: {
            questions: Array,
            earthViability: Number,
            populationViability: Number
        },
        methods: {
            nextQuestion() {
                for (let i = 0; i < this.effect.length; i++) {
                    affectThemes[this.effect[i].themeAffected].value += this.effect[i].value
                }
    
                let populationAverage = 0
                for (let i = 0; i < 8; i++) {
                    populationAverage += affectThemes[i].value
                }
                populationAverage /= 8
    
                let earthAverage = 0
                for (let i = 8; i < affectThemes.length; i++) {
                    earthAverage += affectThemes[i].value
                }
                earthAverage /= 7
    
                earthViability.value *= earthAverage
                populationViability.value *= populationAverage
                if (earthViability.value > 1) {
                    earthViability.value = 1
                }
                if (populationViability.value > 1) {
                    populationViability.value = 1
                }
    
                this.$emit('updateViabilities')
                this.effect = null
                this.questId++
            },
            storeEffects(_effects) {
                this.effect = _effects
            }
        },
        data() {
            return {
                questId: 0,
                effect: null
            }
        },
        computed: {
            questionsAll() {
                return this.questions
            }
        }
    }
</script>

<style scoped>
    .questions {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 25%;
        height: 65%;
        text-align: center;
        padding: 20px;
        margin: 20px;
    }
    .question, input {
        max-width: 100%;
        white-space: normal;
    }
    .answer .current {
        background: #5CA2FF;    
    }
    input,
    .validation {
        background: transparent;
        border: 2px solid #5CA2FF;
        border-radius: 33px;
        color: white;
        font-size: 1rem;
        margin: 5px;
        padding: 5px 15px;
        cursor: pointer;
        transition: 0.3s ease-out;
        will-change: transform;
    }
    
    input:focus, .validation:focus {
        outline: none
    }
    
    .validation {
        background: #5CA2FF;
        margin-top: 30px;
        text-transform: uppercase;
        padding: 10px 25px;
        position: absolute;
        bottom: 5px;
    }
    .validation:active, input:active {
        transform: scale(0.98) translateY(-2px)
    }
    
    .validation:disabled,
    .validation[disabled] {
        opacity: 0.5;
    }
    .question h4 {
        margin-top: 0;
    }
    .question h4::after {
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        background: white;
        font-size: 1.5rem;
        margin: 10px auto;
    }
    @media screen and (max-width: 960px) {
        .questions {
            width: 100%;
            height: 35%;
            margin: 20px;
        }
        
    }
</style>
