<template>
  <router-view>
  </router-view>
  <the-footer />
</template>

<script>
import TheFooter from './layout/footer/TheFooter';

export default {
  name: 'App',
  components: {
    TheFooter,
  }
}

/**
 
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

 */
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: contain;
}

a {
  text-transform: capitalize;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#hero {
  background-image: url('./images/pngs/gigant-dice.png');
  background-repeat: no-repeat;
  background-size: cover;
}

@media(max-width:576px) {
  #hero {
    background-image: url('./images/pngs/gigant-dice.png');
    background-size: center;
  }
}

/* HAMBURGER ANIMATION */
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  left: 0;
  top: 0;
  background: #fff;
  transform: rotate(0);
  transition: all .5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
  position: fixed;
  right: 30px;
  visibility: visible;
}

.closed {
  display: none;
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px)
}

.open .hamburger-middle {
  display: none
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px)
}

.items-container {
  @apply flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mb-8
}

/* ROUTING ANIMATION */
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
