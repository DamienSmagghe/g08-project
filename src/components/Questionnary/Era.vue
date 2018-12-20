<template>
    <div class="era__container">
        <div class="row">
            <div class="dot dot-1" v-bind:class="{current: currentEra === 1}"></div>
            <div class="dot dot-2" v-bind:class="{current: currentEra === 2}"></div>
            <div class="dot dot-3" v-bind:class="{current: currentEra === 3}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'era',
        props: {
            currentEra: Number
        }
    }
</script>

<style scoped>
    .era__container {
        position: absolute;
        bottom: 20px;
        left: 50%;
        width: 50%;
        transform: translateX(-50%);
    }
    
    .row {
        width: 100%;
        height: 2px;
        background: white;
    }
    
    .dot {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: white;
        top: -8px;
    }
    
    .dot-1 {
        left: 15%
    }
    
    .dot-2 {
        left: 50%
    }
    
    .dot-3 {
        left: 85%
    }
    
    .dot-1::after {
        content: 'Colonial Era'
    }
    
    .dot-2::after {
        content: 'Progressist Era'
    }
    
    .dot-3::after {
        content: 'Futuristic Era'
    }
    
    .dot::after {
        position: absolute;
        width: 120px;
        transform: translate(-30%, -150%);
        display: block;
        color: white;
        font-family: 'Roboto', 'helvetica', sans-serif;
    }
    
    .row .dot::before {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
        width: 24px;
        height: 24px;
        border: 1px solid white;
        border-radius: 50%;
        transform: scale(0.5);
        will-change: transform;
        transition-delay: 1s;
        transition: transform 0.5s ease-out;
    }
    
    .row .dot.current::before {
        transform: scale(1);
    }
    
    @media screen and (max-width: 960px) {
        .era__container {
            display: none;
        }
    }
</style>
