<template>
    <div class="social__container">
        <div class="row"></div>
        <ul>
            <li>
                <a href="https://www.instagram.com/terrastar.hetic/" target="_blank">
                    <img src="../assets/images/instagram.svg" alt="Instagram Logo">
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/Terrastar-585312258575578/" target="_blank">
                    <img src="../assets/images/facebook.svg" alt="Facebook Logo">
                </a>
            </li>
            <li>
                <a href="https://twitter.com/TerrastarH" target="_blank">
                    <img src="../assets/images/twitter.svg" alt="Twitter Logo">
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'social'
}
</script>
<style scoped>
 .social__container {
     display: flex;
     flex-direction: column;
     align-items: center;
     position: absolute;
     top: 50%;
     right: 0;
     transform: translateY(-50%)
 }
 .social__container img {
     width: 16px;
     height: 16px;
     transition: 0.3s ease-out;
     transform: scale(1)
 }
 .social__container a:hover img {
     transform: scale(1.1)
 }
 .social__container .row, .social__container li {
     margin: 15px;
 }
 .social__container .row {
     width: 2px;
     height: 40px;
     background: white;
 }
 @media screen and (max-width: 660px){
     .social__container {
         display: none;
     }
 }
</style>
