<template>
    <div class="logo__container">
        <img src="../assets/images/logo2.svg" alt="Flat planet logo">
        <h1>Terra-Star</h1>
    </div>
</template>
<script>
export default {
    name: 'logo'
}
</script>
<style scoped>
    .logo__container {
        display: flex;
        align-items: center;
        margin: 15px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
    .logo__container img {
        width: 4rem;
        height: 4rem;
    }
    .logo__container h1 {
        font-size: 1.5rem;
        font-weight: normal;
        font-family: 'Fjalla', 'helvetica', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    .logo__container img {
        margin-right: 15px;
    }
</style>

