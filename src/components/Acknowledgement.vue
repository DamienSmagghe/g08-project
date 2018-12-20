<template>
    <div class="acknowledgement">
        <font-awesome-icon icon="question-circle" />
    </div>
</template>

<script>
    import {
        library
    } from '@fortawesome/fontawesome-svg-core'
    import {
        faQuestionCircle
    } from '@fortawesome/free-solid-svg-icons'
    import {
        FontAwesomeIcon
    } from '@fortawesome/vue-fontawesome'
    
    library.add(faQuestionCircle)
    export default {
        name: 'acknowledgement',
        components: {
            'font-awesome-icon': FontAwesomeIcon
        }
    }
</script>

<style>
    .acknowledgement {
        position: absolute;
        margin: 20px;
        bottom: 0;
        cursor: pointer;
    }
    
    .acknowledgement::before {
        content: 'CE TRAVAIL A ÉTÉ RÉALISÉ DANS LE CADRE D’UN PROJET PÉDAGOGIQUE ET À DES FINS PÉDAGOGIQUES. LES DROITS D’EXPLOITATION N’ONT PAS FAIT L’OBJET D’UNE VÉRIFICATION, NI D’UNE ACQUISITION. A big thank you to Troy Ragnor for recording voices. audio: Icon made by itim2120,facebook: Icon made by simpleicon, twitter: Icon made by elegant themes, instagram:  Icon made by pixel perfect, mouse: Icon made by Kiranshastry, microphone: Icon made by @flaticon, arrrow: Icon made by Lucy G all from www.flaticon.com';
        position: absolute;
        display: block;
        top: -300%;
        left: 10%;
        width: 60vw;
        background: rgba(0, 0, 0, 0.8);
        font-size: 0.5rem;
        padding: 10px;
        transform: scale(0);
        opacity: 0;
        transition: 0.2s ease-out;
        transform-origin: bottom left;
        will-change: transform opacity;
        color: white;
        z-index: 10;
    }
    .acknowledgement:hover::before {
        transform: scale(1);
        opacity: 1;
    }
</style>
