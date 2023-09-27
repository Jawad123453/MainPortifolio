<script setup>
import HomePageVue from '../components/HomePage.vue';
import Footer from "../components/Footer.vue"
</script>

<template>
  <div class="w-full min-h-screen bg-primary-bcground-color">
    <HomePageVue />
    <Footer class="sm:absolute sm:bottom-0 sm:left-0 relative"/>
  </div>
</template>
