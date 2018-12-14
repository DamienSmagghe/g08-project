<template>
    <div>
        <div class="timeline">
            <div class="dot dot-1" v-bind:class="{ current: chapterId == 1}"></div>
            <div class="dot dot-2" v-bind:class="{ current: chapterId == 2}"></div>
            <div class="dot dot-3" v-bind:class="{ current: chapterId == 3}"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'chapter',
    props: {
        chapterId: Number
    }
}
</script>
<style scoped>
    .timeline {
        width: 2px;
        height: 360px;
        background: white;
        position: relative;
    }
    .dot {
        position: absolute;
        width: 20px;
        height: 20px;
        border: 4px solid white;
        border-radius: 50%;
        transition: 0.3s ease-out;
    }
    .dot-1 {
        transform: translate(-50%, -24px);
    }
    .dot-2 {
        transform: translate(-50%, 176px);
    }
    .dot-3 {
        transform: translate(-50%, 360px);
    }
    .current {
        background: white;
    }
</style>


