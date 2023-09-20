<template>
  <landing-page />
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

/* @layer base{
  button{
    @apply px-10 py-2 my-0 font-bold tracking-widest uppercase border-2 border-black font-alata hover:bg-black hover:text-white;
  }
} */

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-repeat:no-repeat;
  background-size: contain;
}

a{
  text-transform: capitalize;
}

/* @media(max-width:576px){
  body{
    
  }
} */

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#hero{
  background-image:url('./images/pngs/gigant-dice.png');
  background-repeat:no-repeat;
  background-size:cover;
}

@media(max-width:576px){
    #hero{
    background-image:url('./images/pngs/gigant-dice.png'); 
    background-size:center;
  }
}

.hamburger {
  cursor:pointer;
  width:24px;
  height:24px;
  transition:all 0.25s;
  position:relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position:absolute;
  width:24px;
  height:2px;
  left:0;
  top:0;
  background:#fff;
  transform:rotate(0);
  transition:all .5s;
}
.hamburger-middle{
  transform:translateY(7px);
}
.hamburger-bottom{
  transform:translateY(14px);
}

.open{
transform:rotate(90deg)
}

.open .hamburger-top{
  transform:rotate(45deg) translateY(6px) translateX(6px)
}

.open .hamburger-middle{
  display:none
}

.open .hamburger-bottom{
  transform:rotate(-45deg) translateY(6px) translateX(-6px)
}

.items-container{
  @apply flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 mb-8
}
</style>
