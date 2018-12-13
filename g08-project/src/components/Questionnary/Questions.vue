<template>
    <div>
        <div class="question" v-for="q in questions" v-if="q.id === questId">
            <h3 v-html="q.text"></h3>
            <input v-for="answer in q.answers" type="button" :value="answer.text" @click="storeEffects(answer.effects)">
        </div>
        <button class="validation" @click="nextQuestion" :disabled="effect === null">Validate</button>
    </div>
</template>

<script>
import { affectThemes } from './themes.js'
import { earthViability, populationViability } from './viabilities.js'

    export default {
        name: 'questions',
        methods: {
            nextQuestion() {
                for (let i = 0; i < this.effect.length; i++)
                {
                    affectThemes[this.effect[i].themeAffected].value += this.effect[i].value
                }

                let populationAverage = 0
                for (let i = 0; i < 8; i++)
                {
                    populationAverage += affectThemes[i].value
                }
                populationAverage /= 8

                let earthAverage = 0
                for (let i = 8; i < affectThemes.length; i++)
                {
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
        props:
        {
                questions: Array,
                earthViability: Number,
                populationViability: Number
        }
        ,
        data() {
            return {
                questId: 0,
                effect: null
            }
        }
    }
</script>
<style>
    
</style>
