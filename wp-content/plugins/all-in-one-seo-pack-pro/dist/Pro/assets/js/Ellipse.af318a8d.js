import{u as a,d as c}from"./links.4ebb20e1.js";import{o as i,c as u,a as l}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as f}from"./_plugin-vue_export-helper.d7c6d548.js";const x={emits:["changes-saved"],methods:{processSaveChanges(){const e=a();e.loading=!0;let t=!1,s=!1,o="saveChanges";setTimeout(()=>{t=!0,s&&(e.loading=!1)},1500);const r=c();this.$router.currentRoute.value.name==="htaccess-editor"&&(o="saveHtaccess",r.htaccessError=null),e.aioseo.data.isNetworkAdmin&&this.$router.currentRoute.value.name==="robots-editor"&&(o="saveNetworkRobots"),r[o]().then(n=>{n&&n.body.redirection||(t||this.$router.currentRoute.value.name==="htaccess-editor"?e.loading=!1:s=!0,window.aioseoBus.$emit("changes-saved"))})}}},_={},m={viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-ellipse"},p=l("circle",{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"},null,-1),d=[p];function h(e,t){return i(),u("svg",m,d)}const y=f(_,[["render",h]]);export{y as S,x as a};
