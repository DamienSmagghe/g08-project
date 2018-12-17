<template>
    <div class="end-page">
        <theme-result :data="populationThemes"></theme-result>
        <theme-result :data="planetThemes"></theme-result>
        <social></social>
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
</style>
