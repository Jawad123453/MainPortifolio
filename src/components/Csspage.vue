<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="btn-secondary text-center py-8 text-2xl cursor-pointer gitbig2 opacity-0">
    {{ title }}
  </div>
</template>

<script>
  export default {
  props: {
      title:String
    }
  }
</script>

<style scoped>
.gitbig2{
  animation: scalingup 2s ease forwards 1s;
}
@keyframes scalingup {
  0%{
    opacity: 1;
    transform: scale(0);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
</style>