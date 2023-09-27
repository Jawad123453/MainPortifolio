<template>
  <form class="container mx-auto px-10" @submit.prevent="sendEmail">
    <div class="flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full sm:flex-row flex-col">
      <input type="text" placeholder="Name" class="w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion2" required v-model="fromname">
      <input type="email" placeholder="Email" class="w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion3" required v-model="emailvalue">
    </div>
    <div class="flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full sm:flex-row flex-col">
      <input type="text" placeholder="Company Name" class="w-full btn-secondary outline-none px-4  opacity-0 anyanmitaion3" v-model="CompanyN">
      <input type="phone" placeholder="Phone Number" class="w-full btn-secondary outline-none px-4  opacity-0 anyanmitaion4" required v-model="PhoneNumber">
    </div>
    <div class="flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full">
      <textarea cols="30" rows="10" placeholder="Message Me Here" class="w-full btn-secondary outline-none opacity-0  px-4 anyanmitaion6" v-model="Message"></textarea>
    </div>
    <div class="w-full opacity-0 text-center pb-3 sm:pb-0 btnanimation">
      <button class="btn-primary sm:w-fit w-full" type="submit">Submite</button>
    </div>
  </form>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import emailjs from 'emailjs-com';
export default {
  mounted() {
    emailjs.init('rlxa8032BmhoaihPO');
  },
  data() {
    return {
      fromname: "",
      Message: "",
      PhoneNumber:"",
      emailvalue:"",
      CompanyN:""
    }
  },
  methods: {
    // resetthedata() {
    //   this.fromname = "";
    //   this.email_id = "";
    //   this.Phone_number = "";
    //   this.Companyname = "";
    //   this.message = "";
    // },
    sendEmail() {
      emailjs.send('service_gp62ome', 'template_mknu2ki', {
        from_name: this.fromname,
        email_id: this.emailvalue,
        Phone_number:this.PhoneNumber,
        Companyname:this.CompanyN,
        message: this.Message
      })
        .then((res) => {
          alert(`Email sent successfully!: ${res.status}`);
          // this.resetthedata();
        })
        .catch((res) => {
          alert(`Error sending email: ${res.status}`);
        });
    }
  }
}
</script>

<style scoped>
.anyanmitaion2{
  animation: appears 2s forwards ease-out 2s;
}
.anyanmitaion3{
  animation: appears 2s forwards ease-out 2.25s;
}
.anyanmitaion4{
  animation: appears 2s forwards ease-out 2.5s;
}
.anyanmitaion5{
  animation: appears 2s forwards ease-out 2.75s;
}
.anyanmitaion6{
  animation: appears 2s forwards ease-out 3s;
}
.btnanimation{
  animation: moveing 2s forwards ease-out 3.25s;
}
@keyframes moveing {
  0%{
    opacity: 1;
    transform: translateX(-1000px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes appears {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>