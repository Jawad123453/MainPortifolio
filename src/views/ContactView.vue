<template>
  <div class="min-h-screen bg-big-blue-color">
    <h1 class="tiltle anyanmitaion">Contact <span class="text-primary-blue-color">Me!</span></h1>
    <ContactMeVue />
    <Footer class="sm:absolute sm:bottom-0 sm:left-0 "/>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue"
import ContactMeVue from '../components/ContactMe.vue';
</script>

<style scoped>
.anyanmitaion{
  animation: bonsing 2s forwards ease-out;
}
@keyframes bonsing {
  0%{
    transform: translateY(-300px);
  }
  100%{
    transform: translateY(0);
  }
}
</style>
