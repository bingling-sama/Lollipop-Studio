import{r as e,o as t,c as s,a as o,w as r,b as a,d as n,e as l}from"./vendor.8a7ebeb0.js";const c={class:"main"},i={class:"header"},p={class:"nav"},d=o("li",null,[o("a",{href:"",class:"banner"},[o("img",{src:"/assets/logo.4eb8a4c3.png",alt:"Lollipop Studio",class:"logo"}),o("span",{style:{"font-size":"1.3rem","font-weight":"500"}},"Lollipop Studio")])],-1),u=o("li",{style:{width:"60%",height:"50px"}},null,-1),m=o("span",{class:"text"},"Home",-1),h=o("span",{class:"text"},"Projects",-1),f=o("footer",{class:"footer"},null,-1),v={setup:a=>(a,n)=>{const l=e("router-link"),v=e("router-view");return t(),s("div",c,[o("header",i,[o("ul",p,[d,u,o(l,{to:"/",custom:""},{default:r((({href:e,isExactActive:t})=>[o("li",{class:["page",[t&&"active"]]},[o("a",{href:e},[m],8,["href"])],2)])),_:1}),o(l,{to:"/projects",custom:""},{default:r((({href:e,isExactActive:t})=>[o("li",{class:["page",[t&&"active"]]},[o("a",{href:e},[h],8,["href"])],2)])),_:1})])]),o(v,{class:"content"}),f])}};let _;const g={},E=function(e,t){if(!t||0===t.length)return e();if(void 0===_){const e=document.createElement("link").relList;_=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/${e}`)in g)return;g[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":_,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},j=[{path:"/",name:"Home",component:()=>E((()=>import("./Home.c8d5bbe6.js")),["assets/Home.c8d5bbe6.js","assets/Home.4d67ae4e.css","assets/vendor.8a7ebeb0.js"])},{path:"/projects",name:"Projects",component:()=>E((()=>import("./Projects.da5c7540.js")),["assets/Projects.da5c7540.js","assets/Home.4d67ae4e.css","assets/vendor.8a7ebeb0.js"])}],b=a({history:n(),routes:j});l(v).use(b).mount("#app");