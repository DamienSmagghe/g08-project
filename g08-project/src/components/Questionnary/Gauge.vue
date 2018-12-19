<template>
    <div class="gauge__container cornered">
        <div class="gauge__content">
            <div class="gauge__info tooltip gauge-tooltip">
                <h4>
                    <font-awesome-icon icon="question-circle"/>
                    Planet Viability : {{Math.floor(earthViability * 100)}}%
                </h4>
            </div>
            <div class="gauge__border">
                <div class="gauge" v-bind:style="{transform: 'scaleX(' + earthViability + ')'}"></div>
            </div>
        </div>
        <div class="gauge__content">
            <div class="gauge__info">
                <h4>Population Viability : {{Math.floor(populationViability * 100)}}%</h4>
            </div>
            <div class="gauge__border">
                <div class="gauge" v-bind:style="{transform: 'scaleX(' + populationViability + ')'}"></div>
            </div>
        </div>
    
        <span></span>
    </div>
</template>

<script>
import {
    library
  } from '@fortawesome/fontawesome-svg-core'
  import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons'
  import {
    FontAwesomeIcon
  } from '@fortawesome/vue-fontawesome'

  library.add(faQuestionCircle)
    export default {
        name: 'Gauges',
        props: {
            earthViability: Number,
            populationViability: Number
        },
        components: {
            'font-awesome-icon': FontAwesomeIcon
        }
    }
</script>

<style>
    .gauge__container {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 10px;
        font-family: 'Fjalla', 'helvetica', sans-serif;
        letter-spacing: 0.05rem;
        padding: 20px;
        z-index: 20;
    }
    
    .gauge__content {
        display: flex;
        flex-direction: column;
        margin:10px 0;

    }
    
    .gauge__content .gauge__info h4 {
        margin: 0 10px 5px 10px;
        font-size: 13px;
    }
    
    
    .gauge__border {
        border: 1px solid white;
        border-radius: 30px;
        padding: 2px;
        width: 100%;
        height: 10px;
        overflow: hidden;
    }
    
    .gauge__container .gauge {
        width: 100%;
        height: 100%;
        background: #5CA2FF;
        border-radius: 35px;
        transform-origin: left;
        will-change: transform;
        transition-delay: 0.3s;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }
    .tooltip {
        cursor: pointer;
    }
    .gauge-tooltip::before {
        content: 'The viability represents the wellness of your planet or your population. The clother you are to 100% the better it is';
        top: -50%;
    }
    .tooltip::before {
        position: absolute;
        display: block;
        background: rgba(0,0,0,0.5);
        font-size: 0.7rem;
        padding: 10px;
        transform: scale(0);
        opacity: 0;
        transition: 0.2s ease-out;
        transform-origin: bottom left;
        will-change: transform opacity;
        color: white;
    }
    .tooltip:hover::before {
        opacity: 1;
        transform: scale(1);
    }
</style>

