<template>
    <div class="chapter__container">
        <div class="row">
            <div class="dot dot-1" v-bind:class="{current: currentChapter === 1}"></div>
            <div class="dot dot-2" v-bind:class="{current: currentChapter === 2}"></div>
            <div class="dot dot-3" v-bind:class="{current: currentChapter === 3}"></div>
            <div class="dot dot-4" v-bind:class="{current: currentChapter === 4}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chapter',
        props: {
            whoCurrent: Number
        },
        computed: {
            currentChapter() {
                return this.whoCurrent
            }
        }
    }
</script>

<style>
    .chapter__container {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 30px;
    }
    
    .chapter__container .row {
        position: relative;
        width: 2px;
        transform: translateX(-50%);
        height: 300px;
        background: white;
    }
    
    .chapter__container .row .dot {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: white;
    }
    
    .chapter__container .row .dot::before {
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
    
    .chapter__container .row .dot.current::before {
        transform: scale(1);
    }
    
    .chapter__container .row .dot-1.current::after {
        content: 'Welcome'
    }
    
    .chapter__container .row .dot-2.current::after {
        content: 'Chapter I'
    }
    
    .chapter__container .row .dot-3.current::after {
        content: 'Chapter II'
    }
    
    .chapter__container .row .dot-4.current::after {
        content: 'Chapter III'
    }
    
    .chapter__container .row .dot.current::after {
        display: block;
        width: 5.5rem;
        position: absolute;
        left: 160%;
    }
    
    .chapter__container .row .dot-1 {
        transform: translate(-50%, 20px)
    }
    
    .chapter__container .row .dot-2 {
        transform: translate(-50%, 100px)
    }
    
    .chapter__container .row .dot-3 {
        transform: translate(-50%, 180px)
    }
    
    .chapter__container .row .dot-4 {
        transform: translate(-50%, 260px)
    }
    
    @media screen and (max-width: 660px) {
        .chapter__container {
            bottom: -40%;
            left: 50%;
            transform: rotate(-90deg) translate(0, 20%);
        }
        .chapter__container .row .dot.current::after {
            transform: rotate(90deg);
            left: 0;
        }
    }
</style>

