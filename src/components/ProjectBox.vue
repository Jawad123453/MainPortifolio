<template>
  <div class="relative h-32 overflow-hidden border-2 border-primary-blue-color rounded-md" @mouseenter="mainhover = true" @mouseleave="mainhover = false">
  <transition name="tothedirction">
    <div v-if="!mainhover" class="projectbtns-primary w-full h-32 flex justify-center items-center">
      <h1 class="lg:text-3xl md:text-2xl sm:text-2xl text-xl">{{ title }}</h1>
    </div>
    <div v-else class="projectbtns-secondary h-32 absolute top-0 left-0 flex justify-center items-center w-full cursor-pointer">
      <h1 class="sm:text-xl md:text-sm lg:text-xl text-sm text-center">{{ title2 }}</h1>
    </div>
  </transition>
    
  </div>
</template>

<script>
  export default {
    props: {
      title:String,
      title2: String
  },
    data() {
      return {
        mainhover:false
      }
    },
  }
</script>

<style scoped>
.tothedirction-enter-active{
  transition:all 0.5s linear;
}
.tothedirction-enter-leave{
  transition:all 0.5s linear;
}

.tothedirction-enter-from,
.tothedirction-leave-to{
  transform: translateX(-100%);
}
.tothedirction-enter-to,
.tothedirction-leave-from{
  transform: translateX(0%);
}
</style>
