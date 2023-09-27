<template>
  <div class=" h-auto w-full bg-primary-color rounded-md fadingin opacity-0 border-4 border-primary-blue-color shadow-md shadow-black">
    <img :src="getImageUrl(Project.src)" class="w-full h-32 setbackg rounded-t-sm ">
    <div class="h-32 flex justify-between flex-col">
      <p class="text-main-list-color px-2 py-3 text-center">{{ Project.ditales }}</p>
      <a :href="Project.smalllink" class="text-center w-full text-primary-blue-color bg-primary-bcground-color py-2 hover:bg-primary-blue-color hover:text-primary-bcground-color duration-200 font-bold rounded-b-sm" target="_blank">View Site</a>
    </div>
  </div>
</template>

<script>
  export default {
  props: {
      Project:Object
  },
  data() {
    return {
      
    }
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../assets/${name}`, import.meta.url).href
    }
      return {  getImageUrl }
    }
  }
</script>

<style scoped>
.setbackg{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.fadingin{
  animation: comingon 1s forwards ease-in 2s;
}
@keyframes comingon {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>