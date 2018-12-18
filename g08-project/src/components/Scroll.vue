<template>
    <div class="scroll__container">
        <img src="../assets/images/mouse.svg" alt="Mouse Logo">
        <div class="arrows">
            
        </div>
        <img src="../assets/images/arrow.svg" alt="Arrow logo" class="animated">
        <img src="../assets/images/arrow.svg" alt="Arrow logo" class="animated">
    </div>
</template>
<script>
export default {
    name: 'scroll'
}
</script>
<style>
 .scroll__container {
     position: absolute;
     display: flex;
     flex-direction: column;
     align-items: center;
     right: 0;
     bottom: 0;
     margin: 15px;
 }

  .scroll__container img:first-of-type {
      width: 30px;
      transform: rotate(0);
      margin-bottom: 5px;
  }
  .scroll__container img {
      width: 15px;
      transform: rotate(90deg)
  }
  .scroll__container img:last-of-type {
      width: 12px;
      margin-bottom: 5px;
      transform: rotate(90deg);
  }
  .scroll__container .animated {
      animation-name: scroll;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-fill-mode: backwards;
      animation-iteration-count: infinite;
      animation-direction: alternate;
  }
  @keyframes scroll {
      0% {
          transform: rotate(90deg);
      }
      100% {
          transform: rotate(90deg) translateX(5px);
          opacity: 0.6;
      }
  }
</style>


