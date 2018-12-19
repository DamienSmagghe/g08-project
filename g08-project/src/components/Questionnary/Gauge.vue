<template>
    <div class="gauge__container cornered">
        <div class="gauge__content">
            <div class="gauge__info tooltip">
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
            <div class="gauge__info tooltip">
                <h4>
                    <font-awesome-icon icon="question-circle"/>
                    Population Viability : {{Math.floor(populationViability * 100)}}%
                </h4>
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
        components: {
            'font-awesome-icon': FontAwesomeIcon
        },
        props: {
            earthViability: Number,
            populationViability: Number
        }
    }
</script>

<style>
    .gauge__container {
        width: 20%;
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 10px;
        font-family: 'Fjalla', 'helvetica', sans-serif;
        letter-spacing: 0.05rem;
        z-index: 10;
    }
    
    .gauge__content {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    
    .gauge__content .gauge__info h4 {
        margin: 0 10px 5px 10px;
    }
    
    
    .gauge__border {
        border: 1px solid white;
        border-radius: 30px;
        padding: 2px;
        width: 100%;
        height: 15px;
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
    .tooltip::before {
        content: 'The viability represents wellness of your population or of your home planet. The higher the percentage is the better it is.';
        display: block;
        position: absolute;
        padding: 5px;
        top: -50%;
        opacity: 0;
        color: white;
        background: rgba(0, 0, 0, 0.6);
        transition: 0.2s ease-out;
        font-size: 0.8rem;
        transform-origin: bottom left;
        transform: scale(0);

    }
    .tooltip:hover::before {
        transform: scale(1);
        opacity: 1;
    }
    @media screen and (max-width: 960px) {
        .gauge__container {
            width: 300px;
            font-size: 0.8rem;
            margin-top: 40px;
        }
        .gauge__border {
            height: 10px;
        }
    }
    
    @media screen and (max-width: 660px) {
        .gauge__container {
            margin-top: 20px;
            padding: 5px;
        }
    }
</style>

