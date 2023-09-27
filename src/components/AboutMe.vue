<template>
  <div class="container px-10 flex items-center justify-between mx-auto lg:gap-10 sm:gap-5 lg:flex-row flex-col pb-10 lg:pb-0">
    <div class="lg:basis-3/6 w-full">
      <p class="mb-6 text-primary-text-color text-lg scalingfrom0 opacity-0">{{ maintext2 }}</p>
      <div class="flex md:gap-10 mb-6 movingtofrom0 opacity-0 flex-wrap gap-5">
        <h3 class="text-normal-white-color relative sbefore cursor-pointer" @click="changetothis(allclass[0])" :class="allclass[0].class ? 'fastone' : ''">Skills</h3>
        <h3 class="text-normal-white-color relative sbefore  cursor-pointer" @click="changetothis(allclass[1])" :class="allclass[1].class ? 'fastone' : ''">Experience</h3>
        <h3 class="text-normal-white-color relative sbefore cursor-pointer" @click="changetothis(allclass[2])" :class="allclass[2].class ? 'fastone' : ''">Education</h3>
      </div>
      <div class="movingtofrom0 opacity-0 lg:w-2/3 w-full">
        <transition name="fading">
          <div v-if="allclass[0].class">
            <span class="text-primary-blue-color font-bold">{{ c1info.p1.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c1info.p1.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c1info.p2.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c1info.p2.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c1info.p3.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c1info.p3.infotext }}</p>
          </div>
        </transition>
        <transition name="fading">
          <div v-if="allclass[1].class">
            <span class="text-primary-blue-color font-bold">{{ c2info.p1.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c2info.p1.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c2info.p2.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c2info.p2.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c2info.p3.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c2info.p3.infotext }}</p>
          </div>
        </transition>
        <transition name="fading">
        <div v-if="allclass[2].class">
            <span class="text-primary-blue-color font-bold">{{ c3info.p1.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c3info.p1.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c3info.p2.info }}</span>
            <p class="text-primary-text-color mb-5">{{ c3info.p2.infotext }}</p>
            <span class="text-primary-blue-color font-bold">{{ c3info.p3.info }}</span>
              <p class="text-primary-text-color mb-5">{{ c3info.p3.infotext }}</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="lg:basis-3/6 w-full">
      <img src="../assets/smallone.png" alt="" class="w-full comingout opacity-0 duration-200">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        maintext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facilis aliquid praesentium consequatur illum ullam error eius recusandae veritatis! Illum inventore mollitia quod consequuntur enim facilis cum iusto ab possimus.",
        maintext2:"Hi, my name is Jawad I'm from Lebanon. I speak two language which are Arabic and English. I start coding in my free time and ending up mastring the basics, then i find myself learning more and more tell I reach this level. Now I want to do more projects that push me to the edge and increases my level.",
        allclass: [
          { class: true },
          { class: false },
          { class: false }
        ],
        c1info: {
          p1:{
            info: "Web Development",
            infotext:"I can build website from scratch"
          },
            p2: {
            info: "Responsive Design",
            infotext: "The website I make are good for both wild and narrow screens"
          },
            p3: {
            info: "Multiplayer Teck Using",
            infotext: "I try to make the website as good as I can so I use multiplayer teck to do that"
          }
        },
        c2info: 
        {
          p1: {
            info: "Experience",
            infotext: "I work in web domain for a time now with companies or friends"
          },
          p2: {
            info: "Searching",
            infotext: "I am a self-taught developer so my searching skills increase with time I was learning"
          },
          p3: {
            info: "As Fast As Could",
            infotext: "I see multiplayer web designs and build many do the time needed to redo a similar one is shorter"
          }
        },
      c3info:
        {
          p1: {
            info: "University",
            infotext: "Biomadical engineer"
          },
          p2: {
            info: "Devoloping",
            infotext: "I am still improving in front-end and learning more about designing"
          },
          p3: {
          info: "Backend",
          infotext: "Front-end and Back-end work together so knowing about back-end will improve more in front-end"
        }
        }
      }
      
  },
    methods: {
      changetothis(e) {
        this.allclass.forEach((one) => {
          return one.class = false;
        })
        return setTimeout(() => {
          return e.class = true
        }, 800);
      }
    },
  }
</script>

<style scoped>
.sbefore::after{
  content: "";
  position: absolute;
  bottom:-3px;
  left:0;
  background-color: #05adee;
  width:0;
  height:3px;
  transition: 0.3s linear;
}
.fastone.sbefore::after{
  width:30%;
}

.fading-enter-active{
  transition: all 0.3s ease-out;
}
.fading-leave-active{
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fading-enter-from,
.fading-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.scalingfrom0{
  animation: goingup 1s forwards ease-in-out 2s;
}
.movingtofrom0{
  animation: movingto 1.5s forwards ease-in-out 2.75s;
}
.comingout{
  animation: coming 1s forwards ease-in-out 4.5s;
}
@keyframes goingup {
  0%{
    opacity: 1;
    transform: scale(0);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes movingto {
  0%{
    opacity: 1;
    transform: translateX(-500px);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes coming{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>