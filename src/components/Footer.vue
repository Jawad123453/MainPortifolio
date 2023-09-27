<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-primary-color w-full  py-4 comeone">
    <div class="container mx-auto px-10 flex justify-center items-center text-normal-white-color font-bold bg-transparent">
      Made By Jawad &lt;3
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.comeone{
  animation: comeingin 1.5s forwards ease-in-out;
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