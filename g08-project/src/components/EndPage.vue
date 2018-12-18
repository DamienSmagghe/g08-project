<template>
    <div class="end-page">
        <theme-result :data="populationThemes"></theme-result>
        <div class="endGameText">
            <div class="titleEndPage"><strong>Your Result</strong></div>
            <div class="currentText">You are a very honourable eco-citizen. You are aware of the global challenges and want to protect the environment. However, you can do even better to save the planet, preserve its resources and prepare for a brighter future for future generations.</div>
        </div>
        
        <theme-result :data="planetThemes"></theme-result>
        <social></social> 
        <div class="endButton">
            <button>Get your results</button>
        </div>
    </div>
</template>
<script>
import { affectThemes } from './Questionnary/themes.js'
import ThemeResult from './ThemeResult.vue'
import Social from './Social.vue'
export default {
        name: 'end-page',
        components: {
            'theme-result': ThemeResult,
            'social': Social
        },
        computed: {
            populationThemes() {
                let result = []
                for(let i = 0; i < 8; i++) {
                    result.push(affectThemes[i])
                }
                return result
            },
            planetThemes() {
                let result = []
                for(let i = 8; i < 15; i++) {
                    result.push(affectThemes[i])
                }
                return result
            }
        }
}
</script>
<style>
.end-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between; 
}

.endGameText{
    position: relative;
    width:40%;
    height: 200px;
    top: 40%;
    transform: translateY(-40%);
}

.titleEndPage{
    text-align: center;
    font-size: 1.5rem;

}

.currentText{
    text-align: center;
    margin-top: 40px;
    line-height: 1.5rem;
}

.endButton{
    position: absolute;
    top: 90%;
    left:50%;
    transform: translateX(-50%);
}

.endButton button {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        background: transparent;
        border: 1px solid white;
        cursor: pointer;
        transition: 0.2s ease-out;
        opacity: 0.9;
    }
    
    .endButton button:hover {
        transform: scale(1.05);
        opacity: 1;
    }
    
    .endButton button:active {
        transform: scale(1.02) translateY(-1px);
    }
    
    .endButton button:focus {
        outline: none;
    }

    @media screen and (max-width: 960px) {
        .endGameText{
            position: absolute;
            width: 80%;
            height: 30%;
            top: 71%;
            left:50%;
            transform: translateX(-50%);
        }

        .titleEndPage{
            font-size: 14px;
        }

        .currentText{
            font-size: 12px;
            line-height: 1rem;
            margin-top: 15px;
        }

        .endButton{
            top: 92%;
        }

        .endButton button{
            font-size: 0.6rem;
        }
    }
</style>
