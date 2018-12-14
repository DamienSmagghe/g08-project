<template>
    <div class="story">
            <h3 class="chapter__title">{{chapter.title}}</h3>
            <div class="paragraph">
            <p> {{chapter.content}}</p>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'story',
        props: {
            chapterData: Object
        },
        computed: {
            chapter() {
                return this.chapterData
            }
        }
    }
</script>

<style scoped>
    .story {
        position: absolute;
        padding: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        width: 50%;
        z-index: 99;
        font-family: 'Roboto', 'Helvetica', sans-serif;
        text-align: center;
    }
    
    .story .chapter__title {
        position: relative;
        font-family: 'Roboto', 'Helvetica', sans-serif;
        font-size: 1.5rem;
        letter-spacing: normal;
        display: inline-block;
    }
    .paragraph {
        position: relative;
        padding: 20px;
    }
    .paragraph:before {
        display: block;
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        border-top: 2px solid white;
        border-left: 2px solid white;
    }
    
    .paragraph:after {
        display: block;
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        right: 0;
        border-top: 2px solid white;
        border-right: 2px solid white;
    }
    
    .paragraph span:before {
        display: block;
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid white;
        border-left: 2px solid white;
    }
    
    .paragraph span:after {
        display: block;
        content: "";
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
    }
</style>
