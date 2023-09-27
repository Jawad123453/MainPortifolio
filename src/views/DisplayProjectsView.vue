<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div>
    <div class="w-full min-h-screen bg-primary-bcground-color">
      <h1 class="tiltle anyanmitaion">{{ word1 }}<span class="text-primary-blue-color">{{ word2 }}</span></h1>
      <div class="container px-10 mx-auto grid lg:grid-cols-4 gap-5 h-full pb-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1" v-if="MainProjects.length > 0">
        <MainProjectShapVue v-for="Project in MainProjects" :key="Project" :Project="Project"/>
      </div>
    </div>
    <Footer class="bg-primary-bcground-color" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import MainProjectShapVue from '../components/MainProjectShap.vue';
// eslint-disable-next-line no-unused-vars
import Getallnames from "../Json/db.json";
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { MainProjectShapVue, Footer },
  data() {
    return {
      mainname: this.$route.params.id,
      word1:"",
      word2: "",
      MainProjects:[],
    }
  }, mounted() {
    this.FillAllThearray();
    // eslint-disable-next-line vue/return-in-computed-property
      if (this.mainname.split(" ").length == 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.word1 = this.mainname.split("")[0],
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.word2 = this.mainname.split("")[1];
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.word1 = this.mainname.split(" ")[0],
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.word2 =" " + this.mainname.split(" ")[1];
      }
  },methods: {
    FillAllThearray() {
      if (this.mainname == 'Css Projects') {
        return this.MainProjects = Getallnames[0].Css
      } else if (this.mainname == 'Js') {
        return this.MainProjects = Getallnames[1].Js
      } else if (this.mainname == 'Vue Projects') {
        return this.MainProjects = Getallnames[2].Vue
      } else if (this.mainname == 'Random Projects') {
        return this.MainProjects = Getallnames[3].Random
      }else{
        return 
      }
    }
  },
}
</script>

<style scoped>
.anyanmitaion {
  animation: bonsing 2s forwards ease-out;
}

@keyframes bonsing {
  0% {
    transform: translateY(-300px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>