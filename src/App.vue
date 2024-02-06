<script setup>
import {  RouterView } from 'vue-router'
import Header from "./components/Header.vue"


// const activateChildFunction = ()=> {
//   $refs.childRef.changeittofalse();
//   console.log("yes")
// }
</script>

<template>
  <div class="min-h-screen bg-primary-bcground-color">
    <Header ref="childRef"/>
    <RouterView v-slot="{ Component }" >
      <!-- @click="activateChildFunction" -->
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

::-webkit-scrollbar{
  width: 10px;
  border-radius: 30px;
  transition: 0.3s linear;
}
::-webkit-scrollbar-track {
  background: #091b29;
  box-shadow: inset 0 0 5px #8e949c; 
}
::-webkit-scrollbar-thumb {
  background: #8e949c;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
  background: #05adee;
}
</style>