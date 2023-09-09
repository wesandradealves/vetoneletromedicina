import{c as V,d as B,u as I}from"./links.138c5ae5.js";import{v as D}from"./isArrayLikeObject.7cab3d31.js";import{B as x}from"./Checkbox.349747c9.js";import{B as E}from"./RadioToggle.48072aa8.js";import{C as G,a as P}from"./index.63c9ec9d.js";import{C as W}from"./Card.c35b3a6c.js";import{C as K}from"./PostTypeOptions.9daaec29.js";import{C as z}from"./ProBadge.fa206e5a.js";import{C as H}from"./SettingsRow.7db26b8a.js";import{C as N}from"./Tooltip.f932ed03.js";import{G as R,a as Y}from"./Row.eead99c7.js";import{r as p,c as y,g as n,w as s,o as r,a as l,y as i,d as c,b as d,C as h,F as q,D as F}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as j}from"./_plugin-vue_export-helper.d7c6d548.js";import"./default-i18n.cb62c1e5.js";import"./Checkmark.f214118b.js";import"./Caret.833cbb47.js";import"./Slide.b264e916.js";import"./HighlightToggle.8b034f4a.js";import"./Radio.4c8191fb.js";/* empty css                                            */const Q={setup(){return{licenseStore:V(),optionsStore:B(),rootStore:I()}},components:{BaseCheckbox:x,BaseRadioToggle:E,CoreAlert:G,CoreCard:W,CorePostTypeOptions:K,CoreProBadge:z,CoreSettingsRow:H,CoreTooltip:N,GridColumn:R,GridRow:Y,SvgCircleQuestionMark:P},data(){return{openAiKeyInvalid:!1,strings:{advanced:this.$t.__("Advanced Settings",this.$td),truSeo:this.$t.__("TruSEO Score & Content",this.$td),truSeoDescription:this.$t.__("Enable our TruSEO score to help you optimize your content for maximum traffic.",this.$td),headlineAnalyzer:this.$t.__("Headline Analyzer",this.$td),headlineAnalyzerDescription:this.$t.__("Enable our Headline Analyzer to help you write irresistible headlines and rank better in search results.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),postTypeColumns:this.$t.__("Post Type Columns",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.sprintf(this.$t.__("Select which Post Types you want to use the %1$s columns with.",this.$td),"AIOSEO"),usageTracking:this.$t.__("Usage Tracking",this.$td),adminBarMenu:this.$t.__("Admin Bar Menu",this.$td),adminBarMenuDescription:this.$t.sprintf(this.$t.__("This adds %1$s to the admin toolbar for easy access to your SEO settings.",this.$td),"AIOSEO"),dashboardWidgets:this.$t.__("Dashboard Widgets",this.$td),dashboardWidgetsDescription:this.$t.sprintf(this.$t.__("Select which %1$s widgets to display on the dashboard.",this.$td),"AIOSEO"),announcements:this.$t.__("Announcements",this.$td),announcementsDescription:this.$t.__("This allows you to hide plugin announcements and update details.",this.$td),automaticUpdates:this.$t.__("Automatic Updates",this.$td),all:this.$t.__("All (recommended)",this.$td),allDescription:this.$t.__("You are getting the latest features, bugfixes, and security updates as they are released.",this.$td),minor:this.$t.__("Minor Only",this.$td),minorDescription:this.$t.__("You are getting bugfixes and security updates, but not major features.",this.$td),none:this.$t.__("None",this.$td),noneDescription:this.$t.__("You will need to manually update everything.",this.$td),usageTrackingDescription:this.$t.__("By allowing us to track usage data we can better help you as we will know which WordPress configurations, themes and plugins we should test.",this.$td),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf(this.$t.__("The Admin Bar feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetsUpsell:this.$t.sprintf(this.$t.__("The Dashboard Widget feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:this.$t.__("Taxonomy Columns",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.sprintf(this.$t.__("Select which Taxonomies you want to use the %1$s columns with.",this.$td),"AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf(this.$t.__("This feature is only for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf(this.$t.__("Uninstall %1$s",this.$td),"AIOSEO"),uninstallAioseoDescription:this.$t.sprintf(this.$t.__("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.",this.$td),"AIOSEO"),headlineAnalyzerWarning:this.$t.sprintf(this.$t.__("The Headline Analyzer is only available in %1$s and up. %2$s",this.$td),"WordPress 5.2",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"updateWordPress",!0)),openAiKey:this.$t.__("OpenAI API Key",this.$td),openAiKeyDescription:this.$t.sprintf(this.$t.__("Enter an OpenAI API key in order to automatically generate SEO titles and meta descriptions for your pages. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"openAi",!0)),openAiKeyUpsell:this.$t.sprintf(this.$t.__("The OpenAI integration is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"open-ai",!0)),openAiKeyInvalid:this.$t.__("The API key you have entered is invalid. Please check your API key and try again.",this.$td)}}},computed:{adminBarMenu:{get(){return this.licenseStore.isUnlicensed?!0:this.optionsStore.options.advanced.adminBarMenu},set(u){this.optionsStore.options.advanced.adminBarMenu=u}},widgets(){return[{key:"seoSetup",label:this.$t.__("SEO Setup Wizard",this.$td),tooltip:this.$t.__("Our SEO Setup Wizard dashboard widget helps you remember to finish setting up some initial crucial settings for your site to help you rank higher in search results. Once the setup wizard is completed this widget will automatically disappear.",this.$td)},{key:"seoOverview",label:this.$t.__("SEO Overview",this.$td),tooltip:this.$t.__("Our SEO Overview widget helps you determine which posts or pages you should focus on for content updates to help you rank higher in search results.",this.$td)},{key:"seoNews",label:this.$t.__("SEO News",this.$td),tooltip:this.$t.__("Our SEO News widget provides helpful links that enable you to get the most out of your SEO and help you continue to rank higher than your competitors in search results.",this.$td)}]}},methods:{versionCompare:D,updateDashboardWidgets(u,a){if(u){const e=this.optionsStore.options.advanced.dashboardWidgets;e.push(a.key),this.optionsStore.options.advanced.dashboardWidgets=e;return}const f=this.optionsStore.options.advanced.dashboardWidgets.findIndex(e=>e===a.key);f!==-1&&this.optionsStore.options.advanced.dashboardWidgets.splice(f,1)},isDashboardWidgetChecked(u){return this.licenseStore.isUnlicensed?!0:this.optionsStore.options.advanced.dashboardWidgets.includes(u.key)},validateOpenAiKey(){this.optionsStore.options.advanced.openAiKey&&this.optionsStore.options.advanced.openAiKey.match(/^sk-[a-zA-Z0-9]{48}$/)===null?this.openAiKeyInvalid=!0:this.openAiKeyInvalid=!1}},beforeMount(){this.validateOpenAiKey()}},Z={class:"aioseo-advanced"},J={class:"aioseo-description"},X={class:"aioseo-description"},ee=["innerHTML"],te={class:"aioseo-description"},se=["innerHTML"],ne={class:"aioseo-description"},oe=["innerHTML"],ie=["innerHTML"],ae={class:"aioseo-description"},re=["innerHTML"],le={class:"aioseo-description"},de=["innerHTML"],ce={class:"aioseo-description"},ue={class:"aioseo-description"},pe={key:0},he={key:1},me={key:2},_e=["innerHTML"],ge={class:"aioseo-description"},ye=["innerHTML"],Se=["innerHTML"],ve={class:"aioseo-description"};function Ae(u,a,f,e,t,_){const S=p("base-toggle"),m=p("core-settings-row"),g=p("core-alert"),v=p("base-checkbox"),b=p("core-post-type-options"),A=p("core-pro-badge"),k=p("base-radio-toggle"),T=p("svg-circle-question-mark"),$=p("core-tooltip"),O=p("grid-column"),L=p("grid-row"),U=p("base-input"),w=p("core-card");return r(),y("div",Z,[n(w,{slug:"advanced","header-text":t.strings.advanced},{default:s(()=>[n(m,{name:t.strings.truSeo},{content:s(()=>[n(S,{modelValue:e.optionsStore.options.advanced.truSeo,"onUpdate:modelValue":a[0]||(a[0]=o=>e.optionsStore.options.advanced.truSeo=o)},null,8,["modelValue"]),l("div",J,i(t.strings.truSeoDescription),1)]),_:1},8,["name"]),n(m,{name:t.strings.headlineAnalyzer},{content:s(()=>[n(S,{modelValue:e.optionsStore.options.advanced.headlineAnalyzer,"onUpdate:modelValue":a[1]||(a[1]=o=>e.optionsStore.options.advanced.headlineAnalyzer=o),disabled:_.versionCompare(e.rootStore.aioseo.wpVersion,"5.2","<")},null,8,["modelValue","disabled"]),l("div",X,i(t.strings.headlineAnalyzerDescription),1),_.versionCompare(e.rootStore.aioseo.wpVersion,"5.2","<")?(r(),c(g,{key:0,class:"warning",type:"yellow"},{default:s(()=>[l("div",{innerHTML:t.strings.headlineAnalyzerWarning},null,8,ee)]),_:1})):d("",!0)]),_:1},8,["name"]),n(m,{name:t.strings.postTypeColumns},{content:s(()=>[n(v,{size:"medium",modelValue:e.optionsStore.options.advanced.postTypes.all,"onUpdate:modelValue":a[2]||(a[2]=o=>e.optionsStore.options.advanced.postTypes.all=o)},{default:s(()=>[h(i(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.optionsStore.options.advanced.postTypes.all?d("",!0):(r(),c(b,{key:0,options:e.optionsStore.options.advanced,type:"postTypes"},null,8,["options"])),l("div",te,[h(i(t.strings.selectPostTypes)+" ",1),l("span",{innerHTML:u.$links.getDocLink(u.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0)},null,8,se)])]),_:1},8,["name"]),n(m,null,{name:s(()=>[h(i(t.strings.taxonomyColumns)+" ",1),e.licenseStore.isUnlicensed?(r(),c(A,{key:0})):d("",!0)]),content:s(()=>[e.licenseStore.isUnlicensed?(r(),c(v,{key:0,disabled:"",size:"medium",modelValue:!0},{default:s(()=>[h(i(t.strings.includeAllTaxonomies),1)]),_:1})):d("",!0),e.licenseStore.isUnlicensed?d("",!0):(r(),c(v,{key:1,size:"medium",modelValue:e.optionsStore.options.advanced.taxonomies.all,"onUpdate:modelValue":a[3]||(a[3]=o=>e.optionsStore.options.advanced.taxonomies.all=o)},{default:s(()=>[h(i(t.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"])),!e.optionsStore.options.advanced.taxonomies.all&&!e.licenseStore.isUnlicensed?(r(),c(b,{key:2,options:e.optionsStore.options.advanced,type:"taxonomies"},null,8,["options"])):d("",!0),l("div",ne,[h(i(t.strings.selectTaxonomies)+" ",1),l("span",{innerHTML:u.$links.getDocLink(u.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0)},null,8,oe)]),e.licenseStore.isUnlicensed?(r(),c(g,{key:3,class:"inline-upsell",type:"blue"},{default:s(()=>[l("div",{innerHTML:t.strings.taxonomyColumnsUpsell},null,8,ie)]),_:1})):d("",!0)]),_:1}),n(m,null,{name:s(()=>[h(i(t.strings.adminBarMenu)+" ",1),e.licenseStore.isUnlicensed?(r(),c(A,{key:0})):d("",!0)]),content:s(()=>[n(k,{disabled:e.licenseStore.isUnlicensed,modelValue:_.adminBarMenu,"onUpdate:modelValue":a[4]||(a[4]=o=>_.adminBarMenu=o),name:"adminBarMenu",options:[{label:u.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:u.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["disabled","modelValue","options"]),l("div",ae,i(t.strings.adminBarMenuDescription),1),e.licenseStore.isUnlicensed?(r(),c(g,{key:0,class:"inline-upsell",type:"blue"},{default:s(()=>[l("div",{innerHTML:t.strings.adminBarMenuUpsell},null,8,re)]),_:1})):d("",!0)]),_:1}),n(m,null,{name:s(()=>[h(i(t.strings.dashboardWidgets)+" ",1),e.licenseStore.isUnlicensed?(r(),c(A,{key:0})):d("",!0)]),content:s(()=>[n(L,null,{default:s(()=>[(r(!0),y(q,null,F(_.widgets,(o,C)=>(r(),c(O,{key:C},{default:s(()=>[n(v,{size:"medium",disabled:e.licenseStore.isUnlicensed,modelValue:_.isDashboardWidgetChecked(o),"onUpdate:modelValue":M=>_.updateDashboardWidgets(M,o)},{default:s(()=>[h(i(o.label)+" ",1),n($,null,{tooltip:s(()=>[h(i(o.tooltip),1)]),default:s(()=>[n(T)]),_:2},1024)]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1}),l("div",le,i(t.strings.dashboardWidgetsDescription),1),e.licenseStore.isUnlicensed?(r(),c(g,{key:0,class:"inline-upsell",type:"blue"},{default:s(()=>[l("div",{innerHTML:t.strings.dashboardWidgetsUpsell},null,8,de)]),_:1})):d("",!0)]),_:1}),n(m,{name:t.strings.announcements},{content:s(()=>[n(k,{modelValue:e.optionsStore.options.advanced.announcements,"onUpdate:modelValue":a[5]||(a[5]=o=>e.optionsStore.options.advanced.announcements=o),name:"announcements",options:[{label:u.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:u.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["modelValue","options"]),l("div",ce,i(t.strings.announcementsDescription),1)]),_:1},8,["name"]),n(m,null,{name:s(()=>[h(i(t.strings.automaticUpdates),1)]),content:s(()=>[n(k,{modelValue:e.optionsStore.options.advanced.autoUpdates,"onUpdate:modelValue":a[6]||(a[6]=o=>e.optionsStore.options.advanced.autoUpdates=o),name:"autoUpdates",options:[{label:t.strings.all,value:"all"},{label:t.strings.minor,value:"minor"},{label:t.strings.none,value:"none",activeClass:"dark"}]},null,8,["modelValue","options"]),l("div",ue,[e.optionsStore.options.advanced.autoUpdates==="all"?(r(),y("span",pe,i(t.strings.allDescription),1)):d("",!0),e.optionsStore.options.advanced.autoUpdates==="minor"?(r(),y("span",he,i(t.strings.minorDescription),1)):d("",!0),e.optionsStore.options.advanced.autoUpdates==="none"?(r(),y("span",me,i(t.strings.noneDescription),1)):d("",!0)])]),_:1}),u.$isPro?d("",!0):(r(),c(m,{key:0},{name:s(()=>[h(i(t.strings.usageTracking)+" ",1),n($,null,{tooltip:s(()=>[l("div",{innerHTML:t.strings.usageTrackingTooltip},null,8,_e)]),default:s(()=>[n(T)]),_:1})]),content:s(()=>[n(S,{modelValue:e.optionsStore.options.advanced.usageTracking,"onUpdate:modelValue":a[7]||(a[7]=o=>e.optionsStore.options.advanced.usageTracking=o)},null,8,["modelValue"]),l("div",ge,i(t.strings.usageTrackingDescription),1)]),_:1})),n(m,{id:"aioseo-open-ai-api-key",name:t.strings.openAiKey},{name:s(()=>[h(i(t.strings.openAiKey)+" ",1),e.licenseStore.isUnlicensed?(r(),c(A,{key:0})):d("",!0)]),content:s(()=>[n(U,{class:"openAiKey",type:"text",size:"medium",modelValue:e.optionsStore.options.advanced.openAiKey,"onUpdate:modelValue":a[8]||(a[8]=o=>e.optionsStore.options.advanced.openAiKey=o),disabled:e.licenseStore.isUnlicensed,onBlur:_.validateOpenAiKey},null,8,["modelValue","disabled","onBlur"]),l("div",{class:"aioseo-description",innerHTML:t.strings.openAiKeyDescription},null,8,ye),!e.licenseStore.isUnlicensed&&e.optionsStore.options.advanced.openAiKey&&t.openAiKeyInvalid?(r(),c(g,{key:0,class:"inline-upsell",type:"red"},{default:s(()=>[l("div",null,i(t.strings.openAiKeyInvalid),1)]),_:1})):d("",!0),e.licenseStore.isUnlicensed?(r(),c(g,{key:1,class:"inline-upsell",type:"blue"},{default:s(()=>[l("div",{innerHTML:t.strings.openAiKeyUpsell},null,8,Se)]),_:1})):d("",!0)]),_:1},8,["name"]),n(m,{name:t.strings.uninstallAioseo},{content:s(()=>[n(S,{modelValue:e.optionsStore.options.advanced.uninstall,"onUpdate:modelValue":a[9]||(a[9]=o=>e.optionsStore.options.advanced.uninstall=o)},null,8,["modelValue"]),l("div",ve,i(t.strings.uninstallAioseoDescription),1)]),_:1},8,["name"])]),_:1},8,["header-text"])])}const Ke=j(Q,[["render",Ae]]);export{Ke as default};
