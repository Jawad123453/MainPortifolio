<!-- eslint-disable vue/multi-word-component-names -->
<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink } from 'vue-router'
export default {
    data() {
      return {
        listvalue: true,
      }
  },
  methods: {
    changethev() {
      this.listvalue=!this.listvalue
    },
  },
    }
</script>

<template>
  <div class="py-5 fixed top-0 left-0 w-full comeone z-10 bg-transparent">
      <div class="container mx-auto flex justify-between items-center px-10 ">
      <div class="logo">
        <RouterLink to="/"><h1 class="text-3xl text-primary-text-color font-bold">Jawad.</h1></RouterLink>
      </div>
      <i class="fa-solid fa-bars-staggered text-main-list-color text-2xl font-bold cursor-pointer hover:text-primary-blue-color duration-500 sm:hidden block" @click="changethev"></i>
      <ul class="flex z-10 sm:bg-inherit sm:flex-row flex-col sm:gap-5 h-screen absolute top-0 right-0 text-center shadow-lg w-64 gap-6 bg-big-blue-color sm:w-auto sm:relative sm:h-auto sm:shadow-none" :class="{ disappear: listvalue }">
      <i class="fa-regular fa-circle-xmark absolute top-5 right-5 hover:text-primary-blue-color text-main-list-color text-2xl sm:hidden" @click="changethev"></i>
        <li class="mt-14 sm:mt-0"><RouterLink to="/" class="text-main-list-color text-lg font-bold cursor-pointer hover:text-primary-blue-color">Home</RouterLink></li>
        <li><RouterLink to="/about" class="text-main-list-color text-lg font-bold cursor-pointer hover:text-primary-blue-color duration-500">About</RouterLink></li>
        <li><RouterLink to="/Projects" class="text-main-list-color text-lg font-bold cursor-pointer hover:text-primary-blue-color duration-500">Projects</RouterLink></li>
        <li><RouterLink to="/Contact" class="text-main-list-color text-lg font-bold cursor-pointer hover:text-primary-blue-color duration-500">Contact</RouterLink></li>
      </ul>
    </div>
  </div>
  
</template>

<style scoped>
a.router-link-active {
  color:#05adee;
}
.fade-enter-active{
  transition: all .3s ease;
}
.fade-leave-active{
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-to,
.fade-enter-from{
  transform: translateX(10px);
  opacity: 0;
}
ul.disappear{
  display: flex;
}
@media (max-width:640px) {
  ul.disappear{
    animation: fadingout 0.5s forwards linear;
  }
  ul{
    animation: fadingin 0.5s forwards linear;
  }
}
.comeone{
  animation: comeingin 1.5s forwards ease-in-out;
}
@keyframes fadingin {
  0%{
    opacity: 0;
    transform: translateX(256px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
    display: flex;
  }
}
@keyframes fadingout {
  0%{
    opacity: 1;
    transform: translateX(0px);
  }
  100%{
    opacity: 0;
    transform: translateX(256px);
    display: none;
  }
}

@keyframes comeingin {
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
}
</style>