<template>
    <div class="gauge__container cornered">
        <div class="gauge__content">
            <div class="gauge__info">
                <h4>Planet Viability : {{Math.floor(earthViability * 100)}}%</h4>
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
export default {
    name: 'Gauges',
    props: {
        earthViability: Number,
        populationViability: Number
    }
}
</script>
<style scoped>
.gauge__container {
    width: 20%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    font-family: 'Fjalla', 'helvetica', sans-serif;
    letter-spacing: 0.05rem;
}
.gauge__content {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
.gauge__content .gauge__info h4 {
    margin: 0 10px 5px 10px;
}
.gauge__info span {
    color: white;
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
    @media screen and (max-width: 960px) {
        .gauge__container {
            width: 100%;
        }
        
    }
</style>

