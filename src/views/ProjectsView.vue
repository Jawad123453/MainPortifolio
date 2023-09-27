<template>
  <div class="min-h-screen bg-primary-bcground-color relative">
    <h1 class="tiltle anyanmitaion">My<span class="text-primary-blue-color"> Projects</span></h1>
    <p class="mb-5 text-main-list-color  gap-5 container mx-auto px-10 font-bold blowing opacity-0">This Is Some Of My Projects:</p>
    <div class="md:grid-cols-2 grid gap-5 container mx-auto px-10 grid-cols-1 mb-5">
    <RouterLink :to="{ name: 'DisplayProjects', params: { id: 'Css Projects' }}"><ProjectBox title="HTML - CSS" :title2="forn1" class="comingtiright1 opacity-0"/></RouterLink>
    <RouterLink :to="{name:'DisplayProjects', params: { id: 'Js' } }"><ProjectBox title="JS" :title2="forn2" class="comingtiright2 opacity-0"/></RouterLink>
    <RouterLink :to="{ name: 'DisplayProjects', params: { id: 'Vue Projects' } }"><ProjectBox title="VUE" :title2="forn3" class="comingtiright3 opacity-0"/></RouterLink>
    <RouterLink :to="{ name: 'DisplayProjects', params: { id: 'Random Projects' } }" ><ProjectBox title="RANDOM PROJECTS" :title2="forn4" class="comingtiright4 opacity-0"/></RouterLink>
    </div>
    <Footer class="md:absolute md:bottom-0 md:left-0"/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import ProjectBox from "../components/ProjectBox.vue"
// eslint-disable-next-line no-unused-vars
import { RouterLink } from "vue-router";
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components:{ProjectBox , Footer },
  data() {
    return {
      forn1 : "In this section you will see projects about html and css in three diffent ways of using css: Pure - tailwind - BootStarp",
      forn2 : "In this section you will see a small projects about html - css and js",
      forn3 : "In this section you will see projects about html - css - js and vue. Some projects are with tailwind others pure or with bootstarp",
      forn4 : "In this section you will see a small random projects about any topic.These projects I did for fun and loved to share them"
    }
  },
}

</script>


<style scoped>
.anyanmitaion{
  animation: bonsing 2s forwards ease-out;
}
.blowing{
  animation: justcome 0.5s forwards linear 1.75s;
}
.comingtiright1{
  animation: totheright 1s forwards linear 2s;
}
.comingtiright2{
  animation: totheright 1s forwards linear 2.5s;
}
.comingtiright3{
  animation: totheright 1s forwards linear 3s;
}
.comingtiright4{
  animation: totheright 1s forwards linear 3.5s;
}
@keyframes bonsing {
  0%{
    transform: translateY(-300px);
  }
  100%{
    transform: translateY(0);
  }
}
@keyframes totheright {
  0%{
    opacity: 1;
    transform: translateX(-500%);
  }
  100%{
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes justcome {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
