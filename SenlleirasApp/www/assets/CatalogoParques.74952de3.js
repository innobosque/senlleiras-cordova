import{a as G,k as g,r as z,o as m,c as _,b as e,d as f,F as V,e as A,t as C,w as H,i as E,f as J,p as k,q as s,B as p,W as X,X as K,s as W,U as M,V as B,T as L,x as Q,y as Y,g as Z,D as ee,l as ae}from"./index.90139639.js";/* empty css                      */import{T as R}from"./TheUploader.4775a76a.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";import{T as oe}from"./TheGeolocationComponent.62266f76.js";const n=x=>(Q("data-v-f5543164"),x=x(),Y(),x),le={class:"tabla_datos_administrativo"},te={class:"header_administrativo"},re=n(()=>e("td",null,"Orden",-1)),ie=n(()=>e("td",null,"Nome",-1)),se=n(()=>e("td",null,"Localizaci\xF3n",-1)),ne=n(()=>e("td",null,"Xeolocalizaci\xF3n",-1)),ue={class:"tabla_administrativo_options"},ce={class:"tabla_administrativo_options"},de={key:0,class:"alerta_container"},pe={class:"alerta_borrar_especie"},me=n(()=>e("h2",null,"Atenci\xF3n",-1)),_e={class:"borrar_txt"},fe={class:"borrar_btn"},ve={key:1,class:"form-container"},be={class:"data_especies"},he=n(()=>e("h2",null,"Editar Parques",-1)),ge=n(()=>e("label",{for:"orden",class:"form-label",required:""},"Orden",-1)),xe=n(()=>e("label",{for:"nombre",class:"form-label",required:""},"Nome",-1)),ye=n(()=>e("label",{for:"tipoloxia",class:"form-label"},"Tipolox\xEDa",-1)),qe=n(()=>e("label",{for:"localizaci\xF3n",class:"form-label"},"Localizaci\xF3n",-1)),$e=n(()=>e("label",{for:"lat",class:"form-label"},"Latitude",-1)),Ce=n(()=>e("label",{for:"lng",class:"form-label"},"Lonxitude",-1)),ke=n(()=>e("label",{for:"carballeira",class:"form-label"},"Carballeira",-1)),Pe=n(()=>e("label",{for:"cronoloxia",class:"form-label"},"Cronolox\xEDa",-1)),Ue=n(()=>e("label",{for:"superficie",class:"form-label"},"Superficie",-1)),Ve=n(()=>e("label",{for:"descripcion",class:"form-label"},"Descrici\xF3n",-1)),we={class:"editar-images"},Fe=["src"],De=["onClick"],ze=["value"],Ee=n(()=>e("div",null,"Fotos do parque",-1)),Ie=n(()=>e("div",null,"Mapa do parque",-1)),Se=["disabled"],Te={key:0},Le={__name:"AdminCatalogoParques",setup(x){const c=G();c.setParques().catch(o=>console.log(o));const $=g(""),d=g(!1),v=g("");let y=null;const u=g(!1),P=({id:o,name:l})=>{y=o,$.value=l,u.value=!0},U=async()=>{y&&(await c.borrarParque(y),u.value=!1)},a=g(null),I=async o=>{const l=await M(`parques/${o.idDoc}`),b=await M(`parquesficha/${o.idDoc}`);r.value=[],l.forEach(async h=>{r.value.push({ref:h,src:await B(h)})}),b.forEach(async h=>{r.value.push({ref:h,src:await B(h)})}),a.value=o},S=async o=>{await L(o,"Parques",a.value);try{d.value=!0,v.value.length&&(a.value.urlficha=v.value),await L(o,"Parques",a.value)}catch(l){console.log(l)}finally{d.value=!1}a.value=null},q=g(!1),w=async o=>{if(o)for(let l=0,b=o.length;l<b;l++){const h=o[l];try{q.value="",await c.subirParque({ref:`parques/${a.value.idDoc}`,file:h})}catch(t){console.log(t),q.value=t.mensage}}},T=async o=>{if(o)for(let l=0,b=o.length;l<b;l++){const h=o[l];try{q.value="",await c.subirParque({ref:`parquesficha/${a.value.idDoc}`,file:h})}catch(t){console.log(t),q.value=t.mensage}}},i=o=>{prompt(`para eliminar a foto confirme a referencia:${o}`)===o&&c.borrarFoto(o)},r=g([]);return(async()=>{try{q.value="",r.value=await setImagenes("parques")}catch(o){q.value=o}})(),(o,l)=>{const b=z("icono"),h=z("router-link");return m(),_(V,null,[e("table",le,[e("tr",te,[re,ie,se,ne,e("td",ue,[e("span",null,[f(b,{icon:["fa","gears"]})])])]),(m(!0),_(V,null,A(J(c).parques,(t,D)=>(m(),_("tr",{class:"catalogo_administrativo",key:D},[e("td",null,C(t.orden),1),e("td",null,C(t.nombre),1),e("td",null,C(t.localizacion),1),e("td",null,C(t.lat)+","+C(t.lng),1),e("td",ce,[e("span",null,[f(b,{icon:["fa","trash"],onClick:j=>P({id:t.idDoc,name:t.nombre})},null,8,["onClick"]),f(b,{onClick:j=>I(t),icon:["fa","pen"],to:"/arb-:id"},null,8,["onClick"]),f(h,{class:"asign-specie",to:{name:"AdminParqueEspecies",params:{idDoc:t.idDoc}}},{default:H(()=>[E(" Asignar Especies ")]),_:2},1032,["to"])])])]))),128))]),u.value?(m(),_("div",de,[e("div",pe,[me,e("span",_e,[f(b,{icon:["fa","circle-exclamation"]}),e("p",null,"Eliminarase "+C($.value)+" de maneira irrevesible",1)]),e("span",fe,[e("button",{onClick:U},"Eliminar"),e("button",{onClick:l[0]||(l[0]=t=>u.value=!1)},"Cancelar")])])])):k("",!0),a.value?(m(),_("div",ve,[e("form",{id:"parques",onSubmit:l[13]||(l[13]=W(t=>S(`${a.value.idDoc}`),["prevent"]))},[f(b,{class:"close-form",icon:["fa","xmark"],onClick:l[1]||(l[1]=t=>a.value=null)}),e("fieldset",be,[he,ge,s(e("input",{type:"number","onUpdate:modelValue":l[2]||(l[2]=t=>a.value.orden=t),id:"orden",placeholder:"Orden"},null,512),[[p,a.value.orden]]),xe,s(e("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=t=>a.value.nombre=t),id:"nombre",placeholder:"Nome"},null,512),[[p,a.value.nombre]]),ye,s(e("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=t=>a.value.tipoloxia=t),id:"tipoloxia",placeholder:"Tipoloxia"},null,512),[[p,a.value.tipoloxia]]),qe,s(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=t=>a.value.localizacion=t),id:"localizacion",placeholder:"Localizaci\xF3n"},null,512),[[p,a.value.localizacion]]),$e,s(e("input",{type:"number",step:"any","onUpdate:modelValue":l[6]||(l[6]=t=>a.value.lat=t),id:"latitud",placeholder:"Latitud"},null,512),[[p,a.value.lat]]),Ce,s(e("input",{type:"number",step:"any","onUpdate:modelValue":l[7]||(l[7]=t=>a.value.lng=t),id:"lng",placeholder:"Longitud"},null,512),[[p,a.value.lng]]),ke,s(e("input",{class:"input-parque","onUpdate:modelValue":l[8]||(l[8]=t=>a.value.carballeira=t),type:"checkbox",name:"carballeira",id:"carballeira"},null,512),[[X,a.value.carballeira]]),Pe,s(e("input",{type:"text","onUpdate:modelValue":l[9]||(l[9]=t=>a.value.cronoloxia=t),id:"cronoloxia",placeholder:"Cronolox\xEDa"},null,512),[[p,a.value.cronoloxia]]),Ue,s(e("input",{type:"text","onUpdate:modelValue":l[10]||(l[10]=t=>a.value.superficie=t),id:"superficie",placeholder:"Superficie"},null,512),[[p,a.value.superficie]]),Ve,s(e("textarea",{type:"text","onUpdate:modelValue":l[11]||(l[11]=t=>a.value.descripcion=t),cols:"50",rows:"20",id:"descripcion",placeholder:"Descripci\xF3n"},null,512),[[p,a.value.descripcion]]),e("fieldset",we,[(m(!0),_(V,null,A(r.value,t=>(m(),_("div",{class:"images",key:t.ref},[e("img",{class:"image",src:t.src,alt:""},null,8,Fe),e("button",{class:"btn-eliminar",onClick:D=>i(t.ref)}," Eliminar ",8,De),s(e("input",{"onUpdate:modelValue":l[12]||(l[12]=D=>v.value=D),name:"portada",value:t.ref,type:"radio"},null,8,ze),[[K,v.value]]),E(" Portada ")]))),128))]),Ee,f(R,{onEmitirFichero:w}),Ie,f(R,{onEmitirFichero:T}),e("input",{type:"submit",value:"Editar Parque",disabled:a.value===null},null,8,Se),d.value?(m(),_("div",Te,"Gardando...")):k("",!0)])],32)])):k("",!0)],64)}}};var Ne=N(Le,[["__scopeId","data-v-f5543164"]]);const Ae={for:"subirImagen",class:"subir-imagen-btn"},Me=["multiple","required"],Be={__name:"theUploader",props:{multiple:{type:Boolean,default:!0},required:{type:Boolean,default:!1}},emits:["emitirFichero"],setup(x,{emit:c}){const $=d=>{d.target.files.length>0&&c("emitirFichero",d.target.files)};return(d,v)=>{const y=z("icono");return m(),_(V,null,[e("label",Ae,[f(y,{icon:["fa","upload"]}),E(" Subir Imagen")]),e("input",{multiple:x.multiple,name:"subirImagen",type:"file",accept:"image/*",onChange:$,id:"subirImagen",required:x.required},null,40,Me)],64)}}};var O=N(Be,[["__scopeId","data-v-989ed9b4"]]);const Re={key:0,class:"especies_alert"},Oe={class:"form-container"},Ge=["onSubmit"],Xe={class:"data-parque"},We=e("h2",null,"Formulario Alta Parque",-1),je=e("label",{for:"nombre",class:"form-label"},[E("Nome"),e("span",{"data-set":"Campo obligatorio",class:"required-user"},"*")],-1),He=e("label",{for:"tipoloxia",class:"form-label"},"Tipolox\xEDa",-1),Je=e("label",{for:"localizaci\xF3n",class:"form-label"},"Localizaci\xF3n",-1),Ke=e("label",{for:"carballeira",class:"form-label"},"Carballeira",-1),Qe=e("label",{for:"cronolox\xEDa",class:"form-label"},"Cronolox\xEDa",-1),Ye=e("label",{for:"superficie",class:"form-label"},"Superficie",-1),Ze=e("label",{for:"descripcion",class:"form-label"},"Descripci\xF3n",-1),ea=e("div",null,"Fotos del parque",-1),aa=e("div",null,"Mapa del parque",-1),oa={key:0,class:"error"},la={key:1,class:"spinner"},ta=e("input",{type:"submit",value:"Cargar Parque"},null,-1),ra={__name:"NuevoFormParque",emits:["cerrarForm"],setup(x,{emit:c}){const $=()=>{c("cerrarForm")},d=G(),v=g(!1),y=g(!1),u=g({error:!1,message:""});let P=null,U=null;const a=Z({nombre:"",tipoloxia:"",localizacion:"",lat:"",lng:"",orden:0,cronoloxia:"",carballeira:!1,superficie:"",descripcion:"",urlficha:"",urlmapa:""});ee("form",a);const I=()=>{a.tipoloxia="",a.localizacion="",a.lat="",a.lng="",a.cronoloxia="",a.carballeira=!1,a.superficie="",a.nombre="",a.descripcion="",a.urlficha="",a.urlmapa="",a.orden=0},S=async i=>{try{u.value={error:!1,message:""},P=i}catch(r){u.value.error=!0,u.value.message=r.message}},q=async i=>{try{u.value={error:!1,message:""},U=i}catch(r){u.value.error=!0,u.value.message=r.message}},w=async(i,r,F="parques")=>{try{u.value={error:!1,message:""},y.value=!0,v.value=!0;for(let o=0,l=i.length;o<l;o++)await d.subirParque({ref:`${F}/${r}`,file:i[o]});y.value=!1,I()}catch(o){u.value.error=!0,u.value.message=o.message}finally{v.value=!1}},T=async()=>{const i=await d.insertarParque(a);if(P!==null&&i.id){const r=`parques/${i.id}/${P[0].name}`;await L(i.id,"Parques",{urlficha:r}),await w(P,i.id)}U!==null&&i.id&&(`${i.id}${U[0].name}`,await w(U,i.id,"parquesficha"),i&&c("cerrarForm"))};return(i,r)=>{const F=z("icono");return m(),_(V,null,[v.value?(m(),_("div",Re,"Cargando...")):k("",!0),e("div",Oe,[e("form",{id:"alta-parque",onSubmit:W(T,["prevent"])},[f(F,{class:"close-form",icon:["fa","xmark"],onClick:$}),e("fieldset",Xe,[We,je,s(e("input",{class:"input-parque","onUpdate:modelValue":r[0]||(r[0]=o=>a.nombre=o),type:"text",required:"",name:"nombre",id:"nombre",placeholder:"Nombre"},null,512),[[p,a.nombre,void 0,{trim:!0}]]),He,s(e("input",{class:"input-parque","onUpdate:modelValue":r[1]||(r[1]=o=>a.tipoloxia=o),type:"text",name:"tipoloxia",id:"tipoloxia",placeholder:"Tipoloxia"},null,512),[[p,a.tipoloxia,void 0,{trim:!0}]]),Je,s(e("input",{class:"input-parque","onUpdate:modelValue":r[2]||(r[2]=o=>a.localizacion=o),type:"text",name:"localizaci\xF3n",id:"localizaci\xF3n",placeholder:"Localizaci\xF3n"},null,512),[[p,a.localizacion,void 0,{trim:!0}]]),f(oe),Ke,s(e("input",{class:"input-parque","onUpdate:modelValue":r[3]||(r[3]=o=>a.carballeira=o),type:"checkbox",name:"carballeira",id:"carballeira"},null,512),[[X,a.carballeira]]),Qe,s(e("input",{class:"input-parque","onUpdate:modelValue":r[4]||(r[4]=o=>a.cronoloxia=o),type:"text",name:"cronolox\xEDa",id:"cronolox\xEDa",placeholder:"Cronolox\xEDa"},null,512),[[p,a.cronoloxia,void 0,{trim:!0}]]),Ye,s(e("input",{class:"input-parque","onUpdate:modelValue":r[5]||(r[5]=o=>a.superficie=o),type:"text",name:"superficie",id:"superficie",placeholder:"Superficie"},null,512),[[p,a.superficie,void 0,{trim:!0}]]),Ze,s(e("textarea",{class:"input-parque","onUpdate:modelValue":r[6]||(r[6]=o=>a.descripcion=o),cols:"30",rows:"10",type:"textarea",name:"descripcion",id:"descripcion",placeholder:"Descripcion"},null,512),[[p,a.descripcion,void 0,{trim:!0}]]),ea,f(O,{required:!0,onEmitirFichero:S}),aa,f(O,{required:!1,onEmitirFichero:q}),u.value.error?(m(),_("div",oa,C(u.value.message),1)):k("",!0),y.value?(m(),_("div",la,"Cargando....")):k("",!0)]),ta],40,Ge)])],64)}}};const ia={__name:"CatalogoParques",setup(x){const c=g(!1);return($,d)=>(m(),_("div",null,[e("button",{class:"admin-add",onClick:d[0]||(d[0]=v=>c.value=!0)},"A\xF1adir Parque"),f(Ne),c.value?(m(),ae(ra,{key:0,onCerrarForm:d[1]||(d[1]=v=>c.value=!1)})):k("",!0)]))}};var pa=N(ia,[["__scopeId","data-v-27f0ee53"]]);export{pa as default};
