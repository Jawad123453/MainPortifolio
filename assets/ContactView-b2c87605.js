import{_ as f,o as h,c as y,a as o,g as l,v as m,h as g,p as b,e as x,b as u,F as N,f as M}from"./index-bce877c4.js";const c={_origin:"https://api.emailjs.com"},V=(t,e="https://api.emailjs.com")=>{c._userID=t,c._origin=e},w=(t,e,i)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class d{constructor(e){this.status=e.status,this.text=e.responseText}}const v=(t,e,i={})=>new Promise((r,n)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:s})=>{const p=new d(s);p.status===200||p.text==="OK"?r(p):n(p)}),a.addEventListener("error",({target:s})=>{n(new d(s))}),a.open("POST",c._origin+t,!0),Object.keys(i).forEach(s=>{a.setRequestHeader(s,i[s])}),a.send(e)}),C=(t,e,i,r)=>{const n=r||c._userID;return w(n,t,e),v("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:t,template_id:e,template_params:i}),{"Content-type":"application/json"})},S=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},E=(t,e,i,r)=>{const n=r||c._userID,a=S(i);w(n,t,e);const s=new FormData(a);return s.append("lib_version","3.2.0"),s.append("service_id",t),s.append("template_id",e),s.append("user_id",n),v("/api/v1.0/email/send-form",s)},_={init:V,send:C,sendForm:E};const P={mounted(){_.init("rlxa8032BmhoaihPO")},data(){return{fromname:"",Message:"",PhoneNumber:"",emailvalue:"",CompanyN:""}},methods:{sendEmail(){_.send("service_gp62ome","template_mknu2ki",{from_name:this.fromname,email_id:this.emailvalue,Phone_number:this.PhoneNumber,Companyname:this.CompanyN,message:this.Message}).then(t=>{alert(`Email sent successfully!: ${t.status}`)}).catch(t=>{alert(`Error sending email: ${t.status}`)})}}},I=t=>(b("data-v-18cd996a"),t=t(),x(),t),T={class:"flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full sm:flex-row flex-col"},q={class:"flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full sm:flex-row flex-col"},F={class:"flex items-center gap-3 lg:w-1/2 mx-auto mb-3 w-full"},j=I(()=>o("div",{class:"w-full opacity-0 text-center pb-3 sm:pb-0 btnanimation"},[o("button",{class:"btn-primary sm:w-fit w-full",type:"submit"},"Submite")],-1));function D(t,e,i,r,n,a){return h(),y("form",{class:"container mx-auto px-10",onSubmit:e[5]||(e[5]=g((...s)=>a.sendEmail&&a.sendEmail(...s),["prevent"]))},[o("div",T,[l(o("input",{type:"text",placeholder:"Name",class:"w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion2",required:"","onUpdate:modelValue":e[0]||(e[0]=s=>n.fromname=s)},null,512),[[m,n.fromname]]),l(o("input",{type:"email",placeholder:"Email",class:"w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion3",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>n.emailvalue=s)},null,512),[[m,n.emailvalue]])]),o("div",q,[l(o("input",{type:"text",placeholder:"Company Name",class:"w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion3","onUpdate:modelValue":e[2]||(e[2]=s=>n.CompanyN=s)},null,512),[[m,n.CompanyN]]),l(o("input",{type:"phone",placeholder:"Phone Number",class:"w-full btn-secondary outline-none px-4 opacity-0 anyanmitaion4",required:"","onUpdate:modelValue":e[3]||(e[3]=s=>n.PhoneNumber=s)},null,512),[[m,n.PhoneNumber]])]),o("div",F,[l(o("textarea",{cols:"30",rows:"10",placeholder:"Message Me Here",class:"w-full btn-secondary outline-none opacity-0 px-4 anyanmitaion6","onUpdate:modelValue":e[4]||(e[4]=s=>n.Message=s)},null,512),[[m,n.Message]])]),j],32)}const O=f(P,[["render",D],["__scopeId","data-v-18cd996a"]]);const H=t=>(b("data-v-68284848"),t=t(),x(),t),L={class:"min-h-screen bg-big-blue-color"},U=H(()=>o("h1",{class:"tiltle anyanmitaion"},[M("Contact "),o("span",{class:"text-primary-blue-color"},"Me!")],-1)),k={__name:"ContactView",setup(t){return(e,i)=>(h(),y("div",L,[U,u(O),u(N,{class:"sm:absolute sm:bottom-0 sm:left-0"})]))}},R=f(k,[["__scopeId","data-v-68284848"]]);export{R as default};