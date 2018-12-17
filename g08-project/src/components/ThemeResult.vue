<template>
    <div class="theme__result cornered">
        <div v-for="theme in data" class="gauge__content">
            <div class="gauge__info">
                <h4>{{theme.name + ' : ' + Math.floor((theme.value - 0.5) * 100) + '%'}}</h4>
            </div>
            <div class="gauge__border">
                <div class="gauge" :style="{transform: 'scaleX(' + (theme.value - 0.5) + ')'}"></div>
            </div>
        </div>
        <span></span>
    </div>
</template>
<script>
export default {
    name: 'theme-result',
    props: {
        data: Array
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

.theme__result:first-child{
    left: 60px;
}

.theme__result:nth-child(2){
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
</style>

