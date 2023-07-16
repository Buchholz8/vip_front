<template>
  <div class="home">
    <login-comp class="login"></login-comp>
  </div>
</template>

<script>
import LoginComp from '@/components/LoginComp.vue';

export default {
  name: 'loginView',
  components: {
    LoginComp,
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



