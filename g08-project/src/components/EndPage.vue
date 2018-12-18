<template>
    <div class="end-page">
        <theme-result :data="populationThemes" info="Population"></theme-result>
        <div class="endGameText">
            <div class="titleEndPage"><strong>Your Result</strong></div>
            <div class="currentText" v-html="profil"></div>
        </div>
        
        <theme-result :data="planetThemes" info="Planet"></theme-result>
        <social></social> 
        <div class="endButton">
            <button @click="genScreenshot">Save your results</button>
        </div>
    </div>
</template>
<script>
import { affectThemes } from './Questionnary/themes.js'
import ThemeResult from './ThemeResult.vue'
import Social from './Social.vue'
import html2canvas from 'html2canvas'
import saveAs from 'file-saver'

export default {
        name: 'end-page',
        components: {
            'theme-result': ThemeResult,
            'social': Social
        },
        methods: {
            genScreenshot() {
                html2canvas(document.querySelector('#app')).then(function(canvas) {
                    saveAs(canvas.toDataURL(), 'results.png')
                })
            }
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
            },
            profil() {
                if (affectThemes[3].value >= 1 && affectThemes[11].value >= 1 && affectThemes[2].value < 1 && affectThemes[13].value < 1 && affectThemes[8].value < 1) {
                    return 'You are a very honourable eco-citizen. You are aware of the global challenges and want to protect the environment. However, you can do even better to save the planet, preserve its resources and prepare for a brighter future for future generations.'
                }
                else if (affectThemes[4].value >= 1 && affectThemes[2].value >= 1 && affectThemes[8].value < 1 && affectThemes[9].value < 1) {
                    return 'You are a very material person, able to love beautiful things. However, you still need to be more careful about what is around you. You feel that there is nothing you can do to counter global warming. However, ecology begins with simple actions, such as always having recycled paper bags.'
                }
                else if (affectThemes[1].value >= 1 && affectThemes[0].value >= 1 && affectThemes[3].value >= 1 && affectThemes[8].value < 1) {
                    return 'You are a well educated and educated person. You fit perfectly with the profile our league needs. In addition, you are not totally insensitive to global warming or pollution problems. However, it should be remembered that you still have some way to go to defend 100% the colours of ecology.'
                }
                else if (affectThemes[7].value >= 1 && affectThemes[5].value >= 1 && affectThemes[6].value >= 1 && affectThemes[13].value < 1) {
                    return 'You are a great strategist who likes to participate in the construction of the world. In this you stand out for your ability to be creative. However, you are not afraid to use a lot of resources, which has the effect of damaging the environment.'
                }
                else if (affectThemes[14].value >= 1 && affectThemes[12].value >= 1 && affectThemes[6].value >= 1 && affectThemes[10].value < 1 && affectThemes[9].value < 1) {
                    return 'When it comes to ecology, you can\'t say you\'re an expert, but you know what\'s good for your health and community life. You are making efforts to protect the planet, and that felt good through your choices.'
                }
                else {
                    return 'bullshit profil'
                }
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
