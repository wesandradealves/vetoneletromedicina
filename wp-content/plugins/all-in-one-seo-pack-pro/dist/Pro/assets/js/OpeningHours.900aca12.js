import{c as k,d as A,h as U,u as z}from"./links.4ebb20e1.js";import"./default-i18n.cb62c1e5.js";import{C as F,u as M}from"./DisplayInfo.d9672dba.js";import{B as P}from"./Checkbox.349747c9.js";import{B as T}from"./RadioToggle.48072aa8.js";import{C}from"./index.63c9ec9d.js";import{C as R}from"./Card.fb1280a3.js";import{C as L}from"./SettingsRow.7db26b8a.js";import{C as B}from"./AttributesList.f8126741.js";import{r as a,o as u,d as f,w as l,g as t,c as x,a as e,b as $,y as n,C as c,F as j,D as I}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as H}from"./_plugin-vue_export-helper.d7c6d548.js";import{C as W}from"./Cta.a3563c9d.js";import{C as G}from"./Blur.718f6c18.js";import{R as E}from"./RequiredPlans.220e2dcf.js";import{C as N}from"./ProBadge.fa206e5a.js";import{C as q}from"./Index.a392ec8a.js";import{A as Z}from"./AddonConditions.422a2842.js";import"./constants.3cff9bad.js";/* empty css                                              */import"./isArrayLikeObject.86aee886.js";import"./Php.ab2fff63.js";import"./Row.eead99c7.js";/* empty css                                            */import"./Tooltip.f932ed03.js";import"./CheckSolid.c7378892.js";import"./Slide.b264e916.js";import"./Checkmark.f214118b.js";import"./Caret.833cbb47.js";import"./addons.ece7eb50.js";import"./upperFirst.feef3474.js";import"./_stringToArray.4de3b1f3.js";import"./toString.0b0abfad.js";import"./license.f68289d9.js";/* empty css                                              */const K={components:{CoreAttributesList:B,CoreDisplayInfo:F},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$tdPro),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$tdPro)},{name:"show_title",description:this.$t.__("Show or hide the title.",this.$tdPro)},{name:"show_icons",description:this.$t.__("Show or hide icons ( address, phone, fax, email ).",this.$tdPro)},{name:"show_monday",description:this.$t.__("Show or hide the monday hours.",this.$tdPro)},{name:"show_tuesday",description:this.$t.__("Show or hide the tuesday hours.",this.$tdPro)},{name:"show_wednesday",description:this.$t.__("Show or hide the wednesday hours.",this.$tdPro)},{name:"show_thursday",description:this.$t.__("Show or hide the thursday hours.",this.$tdPro)},{name:"show_friday",description:this.$t.__("Show or hide the friday hours.",this.$tdPro)},{name:"show_saturday",description:this.$t.__("Show or hide the saturday hours.",this.$tdPro)},{name:"show_sunday",description:this.$t.__("Show or hide the sunday hours.",this.$tdPro)},{name:"label",description:this.$t.__("The label.",this.$tdPro)}]}}};function J(o,r,y,S,s,i){const g=a("core-attributes-list"),h=a("core-display-info");return u(),f(h,{label:y.label,options:y.displayOptions},{shortcodeAdvanced:l(()=>[t(g,{description:s.strings.shortcodeAttributesDescription,attributes:s.attributes},null,8,["description","attributes"])]),phpAdvanced:l(()=>[t(g,{description:s.strings.phpArgumentsDescription,attributes:s.attributes},null,8,["description","attributes"])]),_:1},8,["label","options"])}const Q=H(K,[["render",J]]);const X={setup(){const{strings:o}=M({name:"localOpeningHours"});return{licenseStore:k(),optionsStore:A(),postEditorStore:U(),rootStore:z(),composableStrings:o}},components:{BaseCheckbox:P,BaseRadioToggle:T,CoreAlert:C,CoreCard:R,CoreSettingsRow:L,LocalBusinessOpeningHoursDisplayInfo:Q},data(){return{displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Opening Hours" block.',this.$tdPro),"AIOSEO")},shortcode:{copy:"[aioseo_local_opening_hours]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the opening hours info. %1$s",this.$tdPro),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeOpeningHours",!0))},widget:{copy:"",desc:this.composableStrings.visitWidgetsPage},php:{copy:"<?php if( function_exists( 'aioseo_local_opening_hours' ) ) aioseo_local_opening_hours(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the opening hours. %1$s",this.$tdPro),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionOpeningHours",!0))}},strings:{openingHours:this.$t.__("Opening Hours Settings",this.$tdPro),showOpeningHours:this.$t.__("Show Opening Hours",this.$tdPro),displayOpeningHours:this.$t.__("Display Opening Hours",this.$tdPro),labels:this.$t.__("Labels",this.$tdPro),defaultLocationSettings:this.$t.__("Default Location Settings",this.$tdPro),closedLabel:this.$t.__("Closed",this.$tdPro),closedLabelDesc:this.$t.__("Displayed when the business is closed.",this.$tdPro),closedLabelIntro:this.$t.sprintf(this.$t.__("Below are the default settings for all locations, which can be overwritten per %1$slocation%2$s.",this.$tdPro),`<a href="${this.rootStore.aioseo.localBusiness.postTypeEditLink}">`,"</a>"),alwaysOpenLabel:this.$t.__("Open 24h label",this.$tdPro),open24LabelDesc:this.$t.__("Displayed when the business is open all day long.",this.$tdPro),open24Label:this.$t.__("Open 24h",this.$tdPro),open247:this.$t.__("Open 24/7",this.$tdPro),use24hFormat:this.$t.__("Use 24h format",this.$tdPro),timezone:this.$t.__("Timezone",this.$tdPro),selectTimeZone:this.$t.__("Select your timezone",this.$tdPro),hours:this.$t.__("Hours",this.$tdPro),open24h:this.$t.__("Open 24h",this.$tdPro),closed:this.$t.__("Closed",this.$tdPro)},weekdays:{monday:this.$t.__("Monday",this.$tdPro),tuesday:this.$t.__("Tuesday",this.$tdPro),wednesday:this.$t.__("Wednesday",this.$tdPro),thursday:this.$t.__("Thursday",this.$tdPro),friday:this.$t.__("Friday",this.$tdPro),saturday:this.$t.__("Saturday",this.$tdPro),sunday:this.$t.__("Sunday",this.$tdPro)}}},computed:{getDataObject(){return this.$root._data.screenContext==="metabox"?this.postEditorStore.currentPost.local_seo.openingHours:this.optionsStore.options.localBusiness.openingHours}},methods:{isMultipleLocations(){return this.$root._data.screenContext==="metabox"?this.postEditorStore.currentPost.local_seo.locations.general.multiple:this.optionsStore.options.localBusiness.locations.general.multiple},getSelectOptions(o){return this.getDataObject.use24hFormat?this.$constants.HOURS_24H_FORMAT.find(r=>r.value===o):this.$constants.HOURS_12H_FORMAT.find(r=>r.value===o)},getSelectTimezone(o){return this.$constants.TIMEZONES.find(r=>r.value===o)},saveDay(o,r,y){this.getDataObject.days[o][r]=y},saveTimezone(o){this.getDataObject.timezone=o},getWeekDay(o){return this.getDataObject.days[o]}}},Y={class:"aioseo-opening-hours"},ss={class:"aioseo-col col-xs-12 text-xs-left"},es={class:"aioseo-col col-xs-12 text-xs-left"},ts={class:"field-description"},os={class:"aioseo-description"},is={class:"aioseo-col col-xs-12 text-xs-left mt-16"},ns={class:"field-description"},ls={class:"aioseo-description"},as={class:"aioseo-col col-xs-12 text-xs-left"},rs={class:"aioseo-col col-xs-12 text-xs-left mt-16"},cs={class:"aioseo-col col-xs-12 text-xs-left"},ds={class:"aioseo-col-day text-xs-left"},_s={class:"aioseo-col-hours text-xs-left"},us=e("span",{class:"separator"},"-",-1),hs={class:"aioseo-col-alwaysopen text-xs-left"};function ps(o,r,y,S,s,i){const g=a("base-radio-toggle"),h=a("core-settings-row"),b=a("local-business-opening-hours-display-info"),_=a("core-alert"),d=a("base-input"),w=a("base-toggle"),v=a("base-select"),D=a("base-checkbox"),V=a("core-card");return u(),x("div",Y,[t(V,{slug:"localBusinessOpeningHours","header-text":s.strings.openingHours},{default:l(()=>[t(h,{name:s.strings.showOpeningHours,class:"info-openinghours-row"},{content:l(()=>[e("div",ss,[t(g,{name:"openingHours",modelValue:i.getDataObject.show,"onUpdate:modelValue":r[0]||(r[0]=m=>i.getDataObject.show=m),options:[{label:o.$constants.GLOBAL_STRINGS.no,value:!1},{label:o.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])]),_:1},8,["name"]),t(b,{label:s.strings.displayOpeningHours,displayOptions:s.displayInfo},null,8,["label","displayOptions"]),i.getDataObject.show&&i.isMultipleLocations()&&S.licenseStore.license.isActive?(u(),f(h,{key:0,name:s.strings.defaultLocationSettings},{content:l(()=>[t(_,{innerHTML:s.strings.closedLabelIntro},null,8,["innerHTML"])]),_:1},8,["name"])):$("",!0),i.getDataObject.show?(u(),f(h,{key:1,name:s.strings.labels,class:"info-labels-row"},{content:l(()=>[e("div",es,[e("span",ts,n(s.strings.open24Label),1),t(d,{size:"medium",modelValue:i.getDataObject.labels.alwaysOpen,"onUpdate:modelValue":r[1]||(r[1]=m=>i.getDataObject.labels.alwaysOpen=m)},null,8,["modelValue"]),e("div",os,n(s.strings.open24LabelDesc),1)]),e("div",is,[e("span",ns,n(s.strings.closedLabel),1),t(d,{type:"text",size:"medium",modelValue:i.getDataObject.labels.closed,"onUpdate:modelValue":r[2]||(r[2]=m=>i.getDataObject.labels.closed=m)},null,8,["modelValue"]),e("div",ls,n(s.strings.closedLabelDesc),1)])]),_:1},8,["name"])):$("",!0),i.getDataObject.show?(u(),f(h,{key:2,name:"Settings",class:"info-settings-row"},{content:l(()=>[e("div",as,[t(w,{modelValue:i.getDataObject.alwaysOpen,"onUpdate:modelValue":r[3]||(r[3]=m=>i.getDataObject.alwaysOpen=m)},{default:l(()=>[c(n(s.strings.open247),1)]),_:1},8,["modelValue"])]),e("div",rs,[i.getDataObject.alwaysOpen?$("",!0):(u(),f(w,{key:0,modelValue:i.getDataObject.use24hFormat,"onUpdate:modelValue":r[4]||(r[4]=m=>i.getDataObject.use24hFormat=m)},{default:l(()=>[c(n(s.strings.use24hFormat),1)]),_:1},8,["modelValue"]))])]),_:1})):$("",!0),i.getDataObject.show&&!i.getDataObject.alwaysOpen?(u(),f(h,{key:3,name:s.strings.hours,class:"info-hours-row"},{content:l(()=>[e("div",cs,[(u(!0),x(j,null,I(s.weekdays,(m,p)=>(u(),x("div",{class:"aioseo-col-flex text-xs-left",key:p},[e("div",ds,n(m),1),e("div",_s,[t(v,{disabled:i.getWeekDay(p).open24h||i.getWeekDay(p).closed,size:"medium",options:i.getDataObject.use24hFormat?o.$constants.HOURS_24H_FORMAT:o.$constants.HOURS_12H_FORMAT,modelValue:i.getSelectOptions(i.getWeekDay(p).openTime),"onUpdate:modelValue":O=>i.saveDay(p,"openTime",O.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"]),us,t(v,{disabled:i.getWeekDay(p).open24h||i.getWeekDay(p).closed,size:"medium",options:i.getDataObject.use24hFormat?o.$constants.HOURS_24H_FORMAT:o.$constants.HOURS_12H_FORMAT,modelValue:i.getSelectOptions(i.getWeekDay(p).closeTime),"onUpdate:modelValue":O=>i.saveDay(p,"closeTime",O.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"])]),e("div",hs,[t(D,{disabled:i.getWeekDay(p).closed,size:"medium",modelValue:i.getWeekDay(p).open24h,"onUpdate:modelValue":O=>i.getWeekDay(p).open24h=O},{default:l(()=>[c(n(s.strings.open24h),1)]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"]),t(D,{size:"medium",class:"closed-label",modelValue:i.getWeekDay(p).closed,"onUpdate:modelValue":O=>i.getWeekDay(p).closed=O},{default:l(()=>[c(n(s.strings.closed),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1},8,["name"])):$("",!0)]),_:1},8,["header-text"])])}const ms=H(X,[["render",ps]]),gs={components:{BaseCheckbox:P,BaseRadioToggle:T,CoreBlur:G,CoreSettingsRow:L},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},fs={class:"aioseo-opening-hours-blur"},ys={class:"aioseo-col col-xs-12 text-xs-left"},bs={class:"aioseo-col col-xs-12 text-xs-left"},$s={class:"aioseo-col col-xs-12 text-xs-left mt-16"},Os={class:"aioseo-col col-xs-12 text-xs-left"},xs={class:"aioseo-col-flex text-xs-left"},Ss={class:"aioseo-col-day text-xs-left"},Hs={class:"aioseo-col-hours text-xs-left"},ws=e("span",{class:"separator"},"-",-1),vs={class:"aioseo-col-alwaysopen text-xs-left"},Ds={class:"aioseo-col-flex text-xs-left"},Ps={class:"aioseo-col-day text-xs-left"},Ts={class:"aioseo-col-hours text-xs-left"},Rs=e("span",{class:"separator"},"-",-1),Ls={class:"aioseo-col-alwaysopen text-xs-left"},Vs={class:"aioseo-col-flex text-xs-left"},ks={class:"aioseo-col-day text-xs-left"},As={class:"aioseo-col-hours text-xs-left"},Us=e("span",{class:"separator"},"-",-1),zs={class:"aioseo-col-alwaysopen text-xs-left"},Fs={class:"aioseo-col-flex text-xs-left"},Ms={class:"aioseo-col-day text-xs-left"},Cs={class:"aioseo-col-hours text-xs-left"},Bs=e("span",{class:"separator"},"-",-1),js={class:"aioseo-col-alwaysopen text-xs-left"},Is={class:"aioseo-col-flex text-xs-left"},Ws={class:"aioseo-col-day text-xs-left"},Gs={class:"aioseo-col-hours text-xs-left"},Es=e("span",{class:"separator"},"-",-1),Ns={class:"aioseo-col-alwaysopen text-xs-left"},qs={class:"aioseo-col-flex text-xs-left"},Zs={class:"aioseo-col-day text-xs-left"},Ks={class:"aioseo-col-hours text-xs-left"},Js=e("span",{class:"separator"},"-",-1),Qs={class:"aioseo-col-alwaysopen text-xs-left"},Xs={class:"aioseo-col-flex text-xs-left"},Ys={class:"aioseo-col-day text-xs-left"},se={class:"aioseo-col-hours text-xs-left"},ee=e("span",{class:"separator"},"-",-1),te={class:"aioseo-col-alwaysopen text-xs-left"};function oe(o,r,y,S,s,i){const g=a("base-radio-toggle"),h=a("core-settings-row"),b=a("base-toggle"),_=a("base-select"),d=a("base-checkbox"),w=a("core-blur");return u(),x("div",fs,[t(w,null,{default:l(()=>[t(h,{name:s.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:l(()=>[e("div",ys,[t(g,{name:"openingHours",modelValue:!0,options:[{label:o.$constants.GLOBAL_STRINGS.no,value:!1},{label:o.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["options"])])]),_:1},8,["name"]),t(h,{name:s.strings.hours,class:"info-hours-row",align:""},{content:l(()=>[e("div",bs,[t(b,null,{default:l(()=>[c(n(s.strings.open247),1)]),_:1})]),e("div",$s,[t(b,null,{default:l(()=>[c(n(s.strings.use24hFormat),1)]),_:1})]),e("div",Os,[e("div",xs,[e("div",Ss,n(s.strings.monday),1),e("div",Hs,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ws,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",vs,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",Ds,[e("div",Ps,n(s.strings.tuesday),1),e("div",Ts,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Rs,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",Ls,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",Vs,[e("div",ks,n(s.strings.wednesday),1),e("div",As,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Us,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",zs,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",Fs,[e("div",Ms,n(s.strings.thursday),1),e("div",Cs,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Bs,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",js,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",Is,[e("div",Ws,n(s.strings.friday),1),e("div",Gs,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Es,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",Ns,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",qs,[e("div",Zs,n(s.strings.saturday),1),e("div",Ks,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),Js,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",Qs,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])]),e("div",Xs,[e("div",Ys,n(s.strings.sunday),1),e("div",se,[t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ee,t(_,{size:"medium",options:o.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),e("div",te,[t(d,{size:"medium"},{default:l(()=>[c(n(s.strings.open24h),1)]),_:1}),t(d,{size:"medium",class:"closed-label"},{default:l(()=>[c(n(s.strings.closed),1)]),_:1})])])])]),_:1},8,["name"])]),_:1})])}const ie=H(gs,[["render",oe]]);const ne={components:{Blur:ie,RequiredPlans:E,CoreCard:R,CoreProBadge:N,Cta:q},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},le={class:"aioseo-opening-hours"};function ae(o,r,y,S,s,i){const g=a("core-pro-badge"),h=a("blur"),b=a("required-plans"),_=a("cta"),d=a("core-card");return u(),x("div",le,[t(d,{slug:"localBusinessOpeningHours",noSlide:!0},{header:l(()=>[e("span",null,n(s.strings.openingHours),1),t(g)]),default:l(()=>[t(h),t(_,{"cta-link":o.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":s.strings.ctaButtonText,"learn-more-link":o.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},{"header-text":l(()=>[c(n(s.strings.ctaHeader),1)]),description:l(()=>[t(b,{addon:"aioseo-local-business"}),c(" "+n(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const re=H(ne,[["render",ae]]),ce={mixins:[Z],components:{OpeningHours:ms,Cta:W,Lite:re},data(){return{addonSlug:"aioseo-local-business",strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}},de={class:"aioseo-opening-hours"};function _e(o,r,y,S,s,i){const g=a("opening-hours",!0),h=a("cta"),b=a("lite");return u(),x("div",de,[o.shouldShowMain?(u(),f(g,{key:0})):$("",!0),o.shouldShowUpdate||o.shouldShowActivate?(u(),f(h,{key:1,"card-slug":"localBusinessOpeningHours","header-text":s.strings.openingHours,"align-top":""},null,8,["header-text"])):$("",!0),o.shouldShowLite?(u(),f(b,{key:2})):$("",!0)])}const Ne=H(ce,[["render",_e]]);export{Ne as default};