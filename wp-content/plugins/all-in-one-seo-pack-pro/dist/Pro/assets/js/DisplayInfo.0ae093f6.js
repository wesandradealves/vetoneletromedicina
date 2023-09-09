import{u as O}from"./links.138c5ae5.js";import{j as h,_}from"./default-i18n.cb62c1e5.js";import{r as c,Q as A,o as s,c as a,a as r,y as g,g as f,w as l,C as I,K as T,d as m,b as p,e as $,D as M,f as L,n as E,F as Z,U as D}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{B as P,S as J}from"./Php.ab2fff63.js";import{C as W}from"./Tooltip.f932ed03.js";import{S as j}from"./CheckSolid.c7378892.js";import{c as N}from"./index.63c9ec9d.js";import{_ as y}from"./_plugin-vue_export-helper.d7c6d548.js";import{C as R}from"./SettingsRow.7db26b8a.js";import{T as U}from"./Slide.b264e916.js";const u="all-in-one-seo-pack",Ee=({name:e})=>{var w;const t=O();let i={names:{htmlSitemap:h(_("%1$s - HTML Sitemap",u),"AIOSEO"),breadcrumbs:h(_("%1$s - Breadcrumbs",u),"AIOSEO"),localOpeningHours:h(_("%1$s Local - Opening Hours",u),"AIOSEO"),localMap:h(_("%1$s Local - Map",u),"AIOSEO"),localBusinessInfo:h(_("%1$s Local - Business Info",u),"AIOSEO")},noWidgetSupport:_("This functionality relies on widget support, which is not available in your current theme.",u)};return i={...i,visitWidgetsPage:(w=t.aioseo.theme.features)!=null&&w.widgets?h(_('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s" widget.',u),`<a href="${t.aioseo.urls.admin.widgets}" target="_blank">`,"</a>",i.names[e]):i.noWidgetSupport},{strings:i}};const F={components:{CoreTooltip:W,SvgCircleCheckSolid:j,SvgCopy:N},props:{message:{type:String,required:!0}},data(){return{copied:!1}},computed:{copyText(){return this.copied?this.$t.__("Copied!",this.$td):this.$t.__("Click to Copy",this.$td)}},methods:{onCopy(){this.copied=!0;const e=this.$refs.copy;e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,setTimeout(()=>{e.popperJS&&(e.popperJS.destroy(),e.popperJS=null),e.showPopper=!1,this.copied=!1},2e3)},onError(){}}},G={class:"aioseo-copy-block"},q={class:"message"},z={ref:"copy",class:"copy"};function K(e,t,i,w,o,d){const S=c("svg-copy"),C=c("svg-circle-check-solid"),b=c("core-tooltip"),v=A("clipboard");return s(),a("div",G,[r("div",q,g(i.message),1),f(b,{class:"copy-tooltip",type:"action"},{tooltip:l(()=>[I(g(d.copyText),1)]),default:l(()=>[T((s(),a("div",z,[o.copied?p("",!0):(s(),m(S,{key:0})),o.copied?(s(),m(C,{key:1})):p("",!0)])),[[v,i.message,"copy"],[v,d.onCopy,"success"],[v,d.onError,"error"]])]),_:1})])}const Q=y(F,[["render",K]]),X={},Y={viewBox:"0 0 59 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-gutenberg-block"},ee=r("rect",{x:"1.5",y:"1.50024",stroke:"currentColor","stroke-width":"3","stroke-dasharray":"5 3"},null,-1),te=r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.6849 10.0276H11.3151V43.9728H47.6849V10.0276ZM22.6301 25.8377V28.1766H28.7115V34.2742H31.0967V28.1766H37.1781V25.8377H31.0967V19.7262H28.7115V25.8377H22.6301Z",fill:"currentcolor"},null,-1),oe=[ee,te];function se(e,t){return s(),a("svg",Y,oe)}const ne=y(X,[["render",se]]),re={},ce={viewBox:"0 0 59 39",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-shortcode"},ie=r("path",{d:"M0 0.000244141H11V4.31055H5.91633V34.6692H11V39.0002H0V0.000244141Z",fill:"currentColor"},null,-1),le=r("path",{d:"M34.1337 0.000244141H40L25.8168 39.0002H20L34.1337 0.000244141Z",fill:"currentColor"},null,-1),ae=r("path",{d:"M59 0.000244141H48V4.31055H53.0837V34.6692H48V39.0002H59V0.000244141Z",fill:"currentColor"},null,-1),pe=[ie,le,ae];function de(e,t){return s(),a("svg",ce,pe)}const _e=y(re,[["render",de]]),ue={},ge={viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-widget"},he=r("path",{d:"M48.6875 7.12506H8.3125C7.00625 7.12506 5.9375 8.19381 5.9375 9.50006V23.7501C5.9375 25.0563 7.00625 26.1251 8.3125 26.1251H48.6875C49.9938 26.1251 51.0625 25.0563 51.0625 23.7501V9.50006C51.0625 8.19381 49.9938 7.12506 48.6875 7.12506ZM46.3125 21.3751V11.8751H10.6875V21.3751H46.3125ZM46.3125 45.1251V35.6251H10.6875V45.1251H46.3125ZM8.3125 30.8751H48.6875C49.9938 30.8751 51.0625 31.9438 51.0625 33.2501V47.5001C51.0625 48.8063 49.9938 49.8751 48.6875 49.8751H8.3125C7.00625 49.8751 5.9375 48.8063 5.9375 47.5001V33.2501C5.9375 31.9438 7.00625 30.8751 8.3125 30.8751Z",fill:"currentColor"},null,-1),fe=[he];function me(e,t){return s(),a("svg",ge,fe)}const ve=y(ue,[["render",me]]);const ye={components:{BaseBoxToggle:P,CoreCopyBlock:Q,CoreSettingsRow:R,SvgGutenbergBlock:ne,SvgPhp:J,SvgShortcode:_e,SvgWidget:ve,TransitionSlide:U},props:{label:{type:String,default(){const e=D();return e.appContext.app.$t.__("Display Info",e.appContext.app.$td)}},options:{type:Object,default(){return{block:{copy:"",desc:"",input:!1},shortcode:{copy:"",desc:"",input:!1},widget:{copy:"",desc:"",input:!1},php:{copy:"",desc:"",input:!1},extra:{copy:"",desc:"",input:!1}}}}},data(){return{currentItem:Object.keys(this.options)[0],errors:[],showAdvancedSettings:!1,strings:{advancedSettings:this.$t.__("Advanced Settings",this.$td),gutenbergBlock:this.$t.__("Gutenberg Block",this.$td),phpCode:this.$t.__("PHP Code",this.$td),shortcode:this.$t.__("Shortcode",this.$td),widget:this.$t.__("Widget",this.$td)}}},computed:{boxToggleOptions(){return Object.keys(this.options).map(t=>({value:t,slot:t,copy:this.options[t].copy,desc:this.options[t].desc}))}},watch:{currentItem(e){this.currentItem=e}},methods:{inputEvent(e){this.$emit("input",e),this.showAdvancedSettings=!1}}},we={class:"displayInfo-show-content"},Se={key:0,class:"copy-box"},Ce=["innerHTML"],be={key:1,class:"extra-box"};function $e(e,t,i,w,o,d){const S=c("svg-shortcode"),C=c("svg-gutenberg-block"),b=c("svg-php"),v=c("svg-widget"),k=c("base-box-toggle"),H=c("core-copy-block"),x=c("transition-slide"),V=c("core-settings-row");return s(),m(V,{class:"aioseo-display-info",name:i.label},{content:l(()=>[f(k,{modelValue:o.currentItem,"onUpdate:modelValue":[t[0]||(t[0]=n=>o.currentItem=n),t[1]||(t[1]=n=>d.inputEvent(n))],name:"displayInfo",options:d.boxToggleOptions},{extra:l(()=>[$(e.$slots,"extra")]),shortcode:l(()=>[f(S),r("p",null,g(o.strings.shortcode),1)]),block:l(()=>[f(C),r("p",null,g(o.strings.gutenbergBlock),1)]),php:l(()=>[f(b),r("p",null,g(o.strings.phpCode),1)]),widget:l(()=>[f(v),r("p",null,g(o.strings.widget),1)]),_:3},8,["modelValue","options"]),r("div",we,[(s(!0),a(Z,null,M(d.boxToggleOptions,(n,B)=>(s(),m(x,{key:B,active:n.value===o.currentItem},{default:l(()=>[n.slot!=="extra"?(s(),a("div",Se,[r("div",null,[n.desc?(s(),a("div",{key:0,class:"aioseo-description",innerHTML:n.desc},null,8,Ce)):p("",!0),n.copy?(s(),m(H,{key:1,message:n.copy},null,8,["message"])):p("",!0),e.$slots[n.slot+"Advanced"]&&!o.showAdvancedSettings?(s(),a("a",{key:2,class:"advanced-settings-link",href:"#",onClick:t[2]||(t[2]=L(xe=>o.showAdvancedSettings=!o.showAdvancedSettings,["prevent"]))},g(o.strings.advancedSettings),1)):p("",!0)]),e.$slots[n.slot+"Advanced"]?(s(),m(x,{key:0,class:E({"advanced-settings":!0,"advanced-settings-hidden":!o.showAdvancedSettings}),active:o.showAdvancedSettings},{default:l(()=>[$(e.$slots,n.slot+"Advanced")]),_:2},1032,["class","active"])):p("",!0)])):p("",!0),n.slot==="extra"?(s(),a("div",be,[$(e.$slots,"extraBox",{item:n})])):p("",!0)]),_:2},1032,["active"]))),128))])]),_:3},8,["name"])}const Ze=y(ye,[["render",$e]]);export{Ze as C,Ee as u};
