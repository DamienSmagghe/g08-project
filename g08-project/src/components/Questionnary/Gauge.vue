<template>
    <div class="gauge__container">
        <div class="gauge" v-bind:style="{transform: 'scaleX(' + earthViability + ')'}"></div>
        <div class="gauge" v-bind:style="{transform: 'scaleX(' + populationViability + ')'}"></div>
    </div>
</template>
<script>
export default {
    name: 'Gauges',
    props: {
        earthViability: Number,
        populationViability: Number
    }
}
</script>
<style scoped>
    .gauge {
        width: 400px;
        height: 20px;
        background: blue;
        transform-origin: left;
        will-change: transform;
        margin: 10px;
        transition-delay: 0.3s;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }
    .gauge:first-of-type {
        background: green;
    }
</style>

