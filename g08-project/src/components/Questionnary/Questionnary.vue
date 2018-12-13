<template>
    <div class="questionnary">
        <gauges v-bind:earth-viability="dataEarthViability" :population-viability="dataPopulationViability"></gauges>
        <questions v-bind:questions="allQuestions" v-bind:earth-viability="dataEarthViability" v-bind:population-viability="dataPopulationViability" v-on:updateViabilities="updateGauge"></questions>
    </div>
</template>
<script>
import Gauges from './Gauge.vue'
import Questions from './Questions.vue'
import { questions } from './questions.js'
import { earthViability, populationViability } from './viabilities.js'

export default {
    name: 'Questionnary',
    components: {
    'gauges': Gauges,
    'questions': Questions
  },
  data() {
      return {
          allQuestions: questions,
          isLosing: false,
          dataEarthViability: earthViability.value,
          dataPopulationViability: populationViability.value
      }
  },
  methods : {
      updateGauge() {
            this.dataEarthViability = earthViability.value
            this.dataPopulationViability = populationViability.value

            if ((this.dataEarthViability < 0.1 ) || (this.dataPopulationViability < 0.1)) {
                this.isLosing = true
            }
      }
  }
}
</script>
