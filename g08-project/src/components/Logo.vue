<template>
    <div class="logo__container">
        <img src="../assets/images/logo2.svg" alt="Flat planet logo">
        <h1>Website name</h1>
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
        font-size: 1rem;
        font-weight: normal;
    }
    .logo__container img {
        margin-right: 15px;
    }
</style>

