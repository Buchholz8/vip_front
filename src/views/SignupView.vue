<template>
    <div class="home">
        <signup-comp></signup-comp>
    </div>
</template>

<script>
import SignupComp from '@/components/SignupComp.vue';
    export default {
        name: 'loginView',
  components: {
    SignupComp
  },
    }
</script>

<style scoped>
  .home {
    display: grid;
    place-content: center;
    align-content: center;
    min-height: 80vh;
    background-image: url(../assets/background.avif);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
  }
</style>