import{k as l,h as _,o,c as d,b as a,i as t,R as i,j as v,d as n}from"./index.90139639.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const p={class:"component-btn-darkmode"},g=a("p",null,[t("Modo "),a("br"),t("claro")],-1),u={class:"switch-button"},f=a("label",{for:"switch-label",class:"switch-button__label"},null,-1),h=a("p",null,[t("Modo "),a("br"),t("oscuro")],-1),k={__name:"ToggleDarkMode",setup(c){const e=l();_(()=>{localStorage.getItem("dark-mode")=="true"?e.value.checked=!0:e.value.checked=!1});const s=()=>{e.value.checked?(localStorage.setItem("dark-mode",!0),i()):(localStorage.setItem("dark-mode",!1),i())};return(C,r)=>(o(),d("div",p,[g,a("div",u,[a("input",{ref_key:"toggleDark",ref:e,type:"checkbox",onClick:r[0]||(r[0]=T=>s()),name:"switch-button",id:"switch-label",class:"switch-button__checkbox"},null,512),f]),h]))}};var b="/assets/FSE.26f54723.png",x="/assets/concello-de-santiago-de-compostela-marca-logo.00d55194.png",$="/assets/Xunta-de-Galicia.0873c6be.png",w="/assets/obradoiro-de-emprego.0dc5d35c.png",M="/assets/galicia.96c69979.png",D="/assets/xacobeo2122-transparente.b7862117.png",E="/assets/logo-editoria-alvarellos.79c670d3.png";const V={class:"component-entidades-promotoras"},S=v('<div class="img-container" data-v-d25f6a0e><img src="'+b+'" alt="logotipo entidad fondo social europeo" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img src="'+x+'" alt="" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img src="'+$+'" alt="logotipo xunta de galicia" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img src="'+w+'" alt="" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img src="'+M+'" alt="" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img src="'+D+'" alt="" data-v-d25f6a0e></div><div class="img-container" data-v-d25f6a0e><img class="alvarellos" src="'+E+'" alt="" data-v-d25f6a0e><p data-v-d25f6a0e>Cesi\xF3n de planos de parques</p></div>',7),j=[S],y={__name:"EntidadesPromotoras",setup(c){return(e,s)=>(o(),d("div",V,j))}};var I=m(y,[["__scopeId","data-v-d25f6a0e"]]);const N={class:"template-ajustes"},P=a("h3",{class:"template-title"},"Axustes",-1),B=a("h3",{class:"template-title"},"Entidades promotoras do proxecto",-1),A=a("p",{class:"version"},"Versi\xF3n: 1.0.0",-1),G={__name:"Ajustes",setup(c){return(e,s)=>(o(),d("div",N,[a("section",null,[P,n(k)]),a("section",null,[B,n(I)]),A]))}};export{G as default};
