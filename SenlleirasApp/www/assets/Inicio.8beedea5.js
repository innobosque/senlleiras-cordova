/* empty css                        */import{u as ea,a as ia,r as h,o as u,c as d,b as a,d as t,F as oa,e as ca,t as ra,f as na,_ as b,g as f,h as ga,n as _,w as o,i as sa,j as ua,k as la,l as ta,m as _a,p as da}from"./index.90139639.js";import{C as ma}from"./CarruselImagenes.3b51b3a3.js";import"./plugin-vue_export-helper.21dcd24c.js";const ha={class:"componente-stories"},va={class:"tittle"},fa=a("h2",null,"Parques",-1),ba={class:"stories-navigator"},Fa=["onClick"],$a=["src","alt","title"],ka={class:"arbol-name"},pa={__name:"CarruselStories",setup(e){const c=ea(),n=ia();n.setParques();const r=async g=>{c.push({name:"FichaParque",params:{idDoc:g.idDoc}})};return(g,m)=>{const $=h("icono");return u(),d("section",ha,[a("span",va,[t($,{icon:["fa","leaf"]}),fa]),a("div",ba,[(u(!0),d(oa,null,ca(na(n).parques,(i,v)=>(u(),d("article",{class:"component-arbol",onClick:F=>r(i),key:v},[a("img",{src:i.url_google,alt:i.url_google,title:i.url_google},null,8,$a),a("p",ka,ra(i.nombre),1)],8,Fa))),128))])])}}},xa={class:"catalogo-especies-section"},ja=a("h2",{class:"title"},"\xC1rbores senlleiras",-1),ya={class:"catalogo-arboles-app"},Ca={class:"arboles-inner"},za=["src","alt"],Ia=["src","alt"],Pa={class:"arboles-inner"},Va=["src","alt"],Da=["src","alt"],Ea={class:"arboles-inner"},qa=["src","alt"],Ma=["src","alt"],Sa={class:"arboles-inner"},Aa=["src","alt"],La=["src","alt"],Na={class:"arboles-inner"},Oa=["src","alt"],Ra=["src","alt"],Ta={class:"arboles-inner"},Ba=["src","alt"],Ha=["src","alt"],wa={class:"arboles-inner"},Ga=["src","alt"],Ua=["src","alt"],Ja={class:"arboles-inner"},Wa=["src","alt"],Ya=["src","alt"],Ka={class:"arboles-inner"},Qa=["src","alt"],Xa=["src","alt"],Za={__name:"Galeria",props:{images:{type:Array,default:[{google_url:"src/assets/gallery/senlleiras_1.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_2.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_3.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_4.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_5.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_6.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_7.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_8.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_9.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_10.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_11.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_12.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_13.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_14.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_15.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_16.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_17.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""},{google_url:"src/assets/gallery/senlleiras_18.jpg",urlFicha:"/ficha-tecnica/",title:"",alt:""}]}},setup(e){b(()=>Promise.resolve({}),["assets/galeria.2eaeedaf.css"]);const c=f({horizontalMovement:!0}),n=f({verticalMovement:!0}),r=f({verticalFlip:!0}),g=f({horizontalFlip:!0});return ga(()=>{setInterval(()=>{c.horizontalMovement=!c.horizontalMovement},7e3),setInterval(()=>{n.verticalMovement=!n.verticalMovement},9e3),setInterval(()=>{r.verticalFlip=!r.verticalFlip},12e3),setInterval(()=>{g.horizontalFlip=!g.horizontalFlip},5e3)}),(m,$)=>{var v,F,k,p,x,j,y,C,z,I,P,V,D,E,q,M,S,A,L,N,O,R,T,B,H,w,G,U,J,W,Y,K,Q,X,Z,aa;const i=h("router-link");return u(),d("section",xa,[ja,a("div",ya,[a("div",{class:_(["arboles-card animation-flip-vertical",r])},[a("div",Ca,[t(i,{to:(F=(v=e.images[0])==null?void 0:v.urlFicha)!=null?F:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[0])==null?void 0:s.google_url,alt:(l=e.images[0])==null?void 0:l.alt},null,8,za)]}),_:1},8,["to"]),t(i,{to:(p=(k=e.images[1])==null?void 0:k.urlFicha)!=null?p:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[1])==null?void 0:s.google_url,alt:(l=e.images[1])==null?void 0:l.alt},null,8,Ia)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-horizontal",c])},[a("div",Pa,[t(i,{to:(j=(x=e.images[2])==null?void 0:x.urlFicha)!=null?j:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[2])==null?void 0:s.google_url,alt:(l=e.images[2])==null?void 0:l.alt},null,8,Va)]}),_:1},8,["to"]),t(i,{to:(C=(y=e.images[3])==null?void 0:y.urlFicha)!=null?C:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[3])==null?void 0:s.google_url,alt:(l=e.images[3])==null?void 0:l.alt},null,8,Da)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-horizontal",c])},[a("div",Ea,[t(i,{to:(I=(z=e.images[4])==null?void 0:z.urlFicha)!=null?I:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[4])==null?void 0:s.google_url,alt:(l=e.images[4])==null?void 0:l.alt},null,8,qa)]}),_:1},8,["to"]),t(i,{to:(V=(P=e.images[5])==null?void 0:P.urlFicha)!=null?V:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[5])==null?void 0:s.google_url,alt:(l=e.images[5])==null?void 0:l.alt},null,8,Ma)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-vertical",n])},[a("div",Sa,[t(i,{to:(E=(D=e.images[6])==null?void 0:D.urlFicha)!=null?E:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[6])==null?void 0:s.google_url,alt:(l=e.images[6])==null?void 0:l.alt},null,8,Aa)]}),_:1},8,["to"]),t(i,{to:(M=(q=e.images[7])==null?void 0:q.urlFicha)!=null?M:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[7])==null?void 0:s.google_url,alt:(l=e.images[7])==null?void 0:l.alt},null,8,La)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-flip",g])},[a("div",Na,[t(i,{to:(A=(S=e.images[8])==null?void 0:S.urlFicha)!=null?A:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[8])==null?void 0:s.google_url,alt:(l=e.images[8])==null?void 0:l.alt},null,8,Oa)]}),_:1},8,["to"]),t(i,{to:(N=(L=e.images[9])==null?void 0:L.urlFicha)!=null?N:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[9])==null?void 0:s.google_url,alt:(l=e.images[9])==null?void 0:l.alt},null,8,Ra)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-flip-vertical",r])},[a("div",Ta,[t(i,{to:(R=(O=e.images[10])==null?void 0:O.urlFicha)!=null?R:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[10])==null?void 0:s.google_url,alt:(l=e.images[10])==null?void 0:l.alt},null,8,Ba)]}),_:1},8,["to"]),t(i,{to:(B=(T=e.images[11])==null?void 0:T.urlFicha)!=null?B:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[11])==null?void 0:s.google_url,alt:(l=e.images[11])==null?void 0:l.alt},null,8,Ha)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-vertical",n])},[a("div",wa,[t(i,{to:(w=(H=e.images[12])==null?void 0:H.urlFicha)!=null?w:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[12])==null?void 0:s.google_url,alt:(l=e.images[12])==null?void 0:l.alt},null,8,Ga)]}),_:1},8,["to"]),t(i,{to:(U=(G=e.images[13])==null?void 0:G.urlFicha)!=null?U:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[13])==null?void 0:s.google_url,alt:(l=e.images[13])==null?void 0:l.alt},null,8,Ua)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-flip-vertical",r])},[a("div",Ja,[t(i,{to:(W=(J=e.images[14])==null?void 0:J.urlFicha)!=null?W:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[14])==null?void 0:s.google_url,alt:(l=e.images[14])==null?void 0:l.alt},null,8,Wa)]}),_:1},8,["to"]),t(i,{to:(K=(Y=e.images[15])==null?void 0:Y.urlFicha)!=null?K:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[15])==null?void 0:s.google_url,alt:(l=e.images[15])==null?void 0:l.alt},null,8,Ya)]}),_:1},8,["to"])])],2),a("div",{class:_(["arboles-card animation-flip",g])},[a("div",Ka,[t(i,{to:(X=(Q=e.images[16])==null?void 0:Q.urlFicha)!=null?X:"",class:"arboles-front"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[16])==null?void 0:s.google_url,alt:(l=e.images[16])==null?void 0:l.alt},null,8,Qa)]}),_:1},8,["to"]),t(i,{to:(aa=(Z=e.images[17])==null?void 0:Z.urlFicha)!=null?aa:"",class:"arboles-back"},{default:o(()=>{var s,l;return[a("img",{src:(s=e.images[17])==null?void 0:s.google_url,alt:(l=e.images[17])==null?void 0:l.alt},null,8,Xa)]}),_:1},8,["to"])])],2)])])}}};var ae="/assets/Logo_ConcelloSTGO_Blanco.c65fa1e8.png";const ee={class:"container-participa"},se={class:"call-to-action-senlleira"},le=a("img",{class:"logo-santiago",src:ae,alt:"logotipo de santiago"},null,-1),te=a("h1",null,"Invol\xFAcrate",-1),ie=a("p",null,"An\xEDmate, explora e prop\xF3n as t\xFAas \xE1rbores senlleiras para facer un Cat\xE1logo participativo.",-1),oe={__name:"Participa",setup(e){return b(()=>Promise.resolve({}),["assets/participa.d074399f.css"]),(c,n)=>{const r=h("router-link");return u(),d("div",ee,[a("div",se,[le,te,ie,t(r,{to:"/nova-arbore"},{default:o(()=>[sa("Subir \xE1rbore")]),_:1})])])}}};var ce="/assets/senlleiras_16.5bc97d77.jpg",re="/assets/senlleiras_9.3fd12a46.jpg",ne="/assets/senlleiras_1.9e3c9746.jpg",ge="/assets/senlleiras_4.b4092009.jpg";const ue={class:"component-explora"},_e=a("h2",{class:"explora-titulo"},"Explora",-1),de=a("p",{class:"explora-descripcion"},"Unha gu\xEDa interactiva con planos que te guiar\xE1n para localizar ata 150 especies arb\xF3reas que medran nos parques da nosa cidade, fotos para poder reco\xF1ecelos e fichas de cada especie que te descubrir\xE1n o fascinantes que son. ",-1),me={class:"container-explora"},he=a("img",{src:ce,alt:"imagen-explora-senlleiras"},null,-1),ve=a("h3",null,"Senlleiras",-1),fe=a("img",{src:re,alt:"imagen-explora-senlleiras"},null,-1),be=a("h3",null,"Parques",-1),Fe=a("img",{src:ne,alt:"imagen-explora-senlleiras"},null,-1),$e=a("h3",null,"Especies",-1),ke=a("img",{src:ge,alt:"imagen-explora-senlleiras"},null,-1),pe=a("h3",null,"Propostas cidad\xE1s",-1),xe={__name:"Explora",setup(e){return b(()=>Promise.resolve({}),["assets/explora.b0ab3f82.css"]),(c,n)=>{const r=h("router-link");return u(),d("div",ue,[_e,de,a("div",me,[t(r,{to:"/catalogo-senlleiras",class:"explora-senlleira"},{default:o(()=>[he,ve]),_:1}),t(r,{to:"/catalogo-de-parques",class:"explora-parques"},{default:o(()=>[fe,be]),_:1}),t(r,{to:"/catalogo-de-especies",class:"explora-especies"},{default:o(()=>[Fe,$e]),_:1}),t(r,{to:"/catalogo-propostas",class:"explora-arbores"},{default:o(()=>[ke,pe]),_:1})])])}}};var je="/assets/MIRADOR.9c41d70a.jpg";const ye={class:"skeleton-component-inicio"},Ce=ua('<div class="skeleton-imagen-grande"></div><div class="skeleton-img"><div class="skeleton-txt"><div class="skeleton-h1"></div><div class="skeleton-h1"></div></div><div class="skeleton-txt"><div class="skeleton-h2"></div><div class="skeleton-h2"></div></div></div>',2),ze=[Ce],Ie={__name:"SkeletonInicio",setup(e){return(c,n)=>(u(),d("div",ye,ze))}},Pe={key:0,class:"noticia-component"},Ve=a("img",{src:je,alt:"imagen mirador de conxo"},null,-1),De={class:"noticia-block-txt"},Ee=a("h1",null,"Carballo banquete de conxo",-1),qe=a("h3",null,"Ga\xF1ador \xE1rbore nacional 2022",-1),Me={__name:"NoticiaCarballo",setup(e){b(()=>Promise.resolve({}),["assets/noticia-arbol.37d6fe74.css"]);const c=la(!1);return c.value?c.value=!0:setTimeout(()=>{c.value=!0},400),(n,r)=>{const g=h("router-link");return c.value?(u(),d("div",Pe,[Ve,a("div",De,[Ee,qe,t(g,{to:{name:"FichaSenlleira",params:{idDoc:"uf9njzs2UC7HY0JO55FL"}}},{default:o(()=>[sa("Ver \xE1rbore")]),_:1})])])):(u(),ta(Ie,{key:1}))}}},Se={class:"home"},Re={__name:"Inicio",setup(e){const c=la([]);ea();const n=["./senlleiras_1.jpg","./senlleiras_2.jpg","./senlleiras_5.jpg","./senlleiras_10.jpg"];return(async()=>{try{c.value=await _a("Arbores","propuesta_senlleira",!0,"nombre_arbol");const r=c.value.length,g=[];for(let m=0;m<18;m++)g.push(c.value[Math.floor(Math.random()*r)]);c.value=g,c.value=c.value.map(m=>(m.urlFicha=`/ficha-tecnica/${m.idDoc}`,m))}catch(r){console.log("------------>",r)}})(),(r,g)=>(u(),d("div",Se,[t(Me),t(xe),t(oe),t(pa),t(ma,{minHeight:"350px",images:n}),c.value.length?(u(),ta(Za,{key:0,images:c.value},null,8,["images"])):da("",!0)]))}};export{Re as default};
