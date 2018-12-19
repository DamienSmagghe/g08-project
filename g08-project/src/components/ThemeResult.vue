<template>
    <div class="theme__result cornered">
        <div v-for="theme in data" class="gauge__content">
            <div class="gauge__info end__tooltip">
                <h4>
                    <font-awesome-icon icon="question-circle"/>
                    {{theme.name + ' : ' + Math.floor((theme.value - 0.5) * 100) + '%'}}
                </h4>
            </div>
            <div class="gauge__border">
                <div class="gauge" :style="{transform: 'scaleX(' + (theme.value - 0.5) + ')'}"></div>
            </div>
        </div>
        <span></span>
        <div class="themeResultTitle" v-html="info"></div>
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
        // data(){
        //     return {
        //         infoTheme: this.info
        //     }
        // }
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
    
    .themeResultTitle {
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
    .end__tooltip {
        cursor: pointer;
    }
    .end__tooltip::before {
        content: 'The clother you are to 100%, the more you succeeded in this category';
        display: block;
        position: absolute;
        top: -5%;
        padding: 5px;
        opacity: 0;
        color: white;
        background: rgba(0, 0, 0, 0.6);
        transition: 0.2s ease-out;
        font-size: 0.8rem;
        transform-origin: bottom left;
        transform: scale(0);
    }
    .end__tooltip:hover::before {
        transform: scale(1);
        opacity: 1;
    }
    @media screen and (max-width: 660px) {
        .theme__result h4 {
            font-size: 10px;
        }
    }
</style>

