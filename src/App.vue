<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LandingPage msg="Welcome to Your Vue.js App"/>
  <the-footer/>
</template>

<script>
import LandingPage from './pages/landingPage/LandingPage';
import TheFooter from './layout/footer/TheFooter';

export default {
  name: 'App',
  components: {
    LandingPage,
    TheFooter,
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
