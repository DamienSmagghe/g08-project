<template>
    <div class="launcher">
        <button @click="launch()">Discover</button>
    </div>
</template>

<script>
    export default {
        name: 'launch',
        methods: {
            launch() {
                this.$emit('launch')
            }
        }
    }
</script>

<style scoped>
    .launcher {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .launcher button {
        text-transform: uppercase;
        font-size: 1rem;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        background: transparent;
        border: 1px solid white;
        cursor: pointer;
        transition: 0.2s ease-out;
        opacity: 0.9;
    }
    
    .launcher button:hover {
        transform: scale(1.05);
        opacity: 1;
    }
    
    .launcher button:active {
        transform: scale(1.02) translateY(-1px);
    }
    
    .launcher button:focus {
        outline: none;
    }
</style>

