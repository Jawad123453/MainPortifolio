<template>
    <div class="bigone container mx-auto px-10 min-h-screen flex justify-center items-center flex-col">
      <h1 class="sm:text-4xl text-2xl text-normal-white-color font-bold smallanimation">Hi,I'm Jawad Hajj</h1>
      <p class="text-xl text-primary-blue-color font-bold mb-5 smallanimation2">Frontend Developer</p>
      <div class="w-40 h-40 mb-10 mainimg border-primary-blue-color border-4 bg-cover bg-top bg-no-repeat smallanimation3 outline-4 outline-big-blue-color outline "></div>
      <div class="text-primary-text-color mb-7 font-bold text-center md:text-3xl text-xl flex gap-3 smallanimation4 opacity-0 lg:flex-row flex-col items-center">
      <p class="w-fit">Stack Teck:</p>
      <div class="flex md:items-center items-start gap-5 flex-wrap">
        <img src="../assets/file-type-html.svg" class="w-10">
        <img src="../assets/file-type-css.svg" class="w-10">
        <img src="../assets/file-type-js-official.svg" class="w-10">
        <img src="../assets/vue.svg" class="w-10">
        <img src="../assets/tailwind-css.svg" class="w-10">
        <img src="../assets/github-original-wordmark.svg" class="w-10">
        <img src="../assets/bootstrap.svg" class="w-10">
        <img src="../assets/git.svg" class="w-10">
        <img src="../assets/nuxtjs.svg" class="w-10">
        <img src="../assets/Pinia.png" class="w-8">
        <img src="../assets/TS.png" class="w-12">
      </div>
      </div>
      <div class="flex sm:flex-row flex-col items-center sm:gap-5 gap-2">
        <a href="ok.docx" download="ok.docx" class="btn-primary smallanimation5 opacity-0">Donload My CV</a>
        <RouterLink to="/Contact" class="btn-secondary smallanimation6 opacity-0">Let's Talk</RouterLink>
      </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
@media (max-width:550px) {
  .bigone{
    height:calc(100vh + 100px);
  }
}
.mainimg{
  border-radius: 50%;
  box-shadow: 0 0 0px 7px #05adee;
  background-image: url("../assets/hero-img.png");
}
.smallanimation{
  animation: movingin 1.5s forwards linear;
}
.smallanimation2{
  animation: movingin 1.75s forwards linear;
}
.smallanimation3{
  animation: movingin 2s forwards linear;
}
.smallanimation4{
  animation: movingin2 1.5s forwards linear 2s;
}
.smallanimation5{
  animation: movingin3 1s forwards linear 3.5s;
}
.smallanimation6{
  animation: movingin3 1s forwards linear 3.75s;
}
@keyframes movingin {
  0%{
    transform: translateX(-1000px);
  }
  100%{
    transform: translateX(0px);
  }
}
@keyframes movingin2 {
  0%{
    opacity: 0;
  }
  33%{
    opacity: 1;
  }
  66%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes movingin3 {
  0%{
    opacity: 1;
    transform: translateY(100px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>