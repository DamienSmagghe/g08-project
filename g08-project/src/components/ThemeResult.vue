<template>
    <div class="theme__result cornered">
        <div v-for="theme in data" class="gauge__content">
            <div class="gauge__info tooltip result-tooltip">
                <h4>
                    <font-awesome-icon icon="question-circle" /> {{theme.name + ' : ' + Math.floor((theme.value - 0.5) * 100) + '%'}}
                </h4>
            </div>
            <div class="gauge__border">
                <div class="gauge" :style="{transform: 'scaleX(' + (theme.value - 0.5) + ')'}"></div>
            </div>
        </div>
        <span></span>
        <div class="theme__result__title" v-html="info"></div>
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
        name: 'theme-result',
        props: {
            data: Array,
            info: String
        },
        components: {
            'font-awesome-icon': FontAwesomeIcon
        }
    }
</script>

<style>
    .theme__result {
        position: relative;
        padding: 30px;
        top: 50%;
        transform: translateY(-50%);
        /* a modifier en responsive */
        width: 200px;
        height: 500px;
    }
    
    .theme__result__title {
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
    }
    
    .theme__result:first-child {
        left: 60px;
    }
    
    .theme__result:nth-child(3) {
        right: 60px;
    }
    
    .result-tooltip::before {
        content: 'The %  represents the success in this category. The clother you are to 100% the better it is.';
        top: -5%;
    }
    
    .tooltip::before {
        position: absolute;
        display: block;
        background: rgba(0, 0, 0, 0.5);
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
    
    .gauge__border {
        border: 1px solid white;
        border-radius: 30px;
        padding: 2px;
        width: 100%;
        height: 15px;
        overflow: hidden;
        margin-bottom: 15px;
    }
    
    .theme__result h4 {
        margin: 0 0 5px 0;
        font-size: 13px;
    }
    
    .gauge {
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
    
    @media screen and (max-width: 960px) {
        .theme__result {
            width: 30%;
            height: 55%;
            top: 40%;
            padding: 15px;
        }
        .theme__result h4 {
            font-size: 10px;
        }
        .gauge__border {
            height: 5px;
        }
        .theme__result:first-child {
            left: 20px;
        }
        .theme__result:nth-child(3) {
            right: 20px;
        }
        .theme__result__title {
            font-size: 0.8rem;
        }
    }
</style>

