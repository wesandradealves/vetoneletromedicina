import{d as T,c as U,u as V}from"./links.138c5ae5.js";import{o as u,c as f,a as i,y as r,n as P,r as n,d as g,w as l,g as o,b as m,F as A,D,C as B,G}from"./vue.runtime.esm-bundler.a2ae84e1.js";import"./default-i18n.cb62c1e5.js";import{C as N,u as R}from"./DisplayInfo.0ae093f6.js";import{_ as $}from"./_plugin-vue_export-helper.d7c6d548.js";import{B as M}from"./RadioToggle.48072aa8.js";import{C as O}from"./index.63c9ec9d.js";import"./Caret.833cbb47.js";/* empty css                                            *//* empty css                                              */import"./constants.3cff9bad.js";import{S as z}from"./ScrollAndHighlight.e31477b3.js";/* empty css                                              */import{C as w}from"./Card.c35b3a6c.js";import{C}from"./SettingsRow.7db26b8a.js";import{L as H,a as W,b as F,c as q,d as Y,e as j,f as K,g as J,h as Q}from"./PaymentInfo.df908cec.js";import{C as E}from"./ProBadge.fa206e5a.js";import{C as X}from"./AttributesList.f8126741.js";import{B as Z}from"./Checkbox.349747c9.js";import{S as ss,a as os}from"./Mobile.859937cc.js";import{C as es}from"./Cta.164ffd66.js";import{C as ts}from"./Blur.718f6c18.js";import{S as ns}from"./Plus.cf4682aa.js";import{R as is}from"./RequiredPlans.57b9c43d.js";import{C as as}from"./Index.a392ec8a.js";import{A as ls}from"./AddonConditions.5fda9fa9.js";import"./isArrayLikeObject.7cab3d31.js";import"./Php.ab2fff63.js";import"./Row.eead99c7.js";import"./Tooltip.f932ed03.js";import"./CheckSolid.c7378892.js";import"./Slide.b264e916.js";import"./params.f0608262.js";import"./HtmlTagsEditor.1ba1c91b.js";import"./tags.8f0eae2d.js";import"./Editor.2cae2b86.js";import"./UnfilteredHtml.8734f76e.js";import"./Phone.65d09b40.js";import"./preload-helper.27958db9.js";import"./ImageUploader.0da34d7b.js";import"./Img.ce944fbf.js";import"./Map.fe41faae.js";import"./isEqual.c38e709d.js";import"./_baseIsEqual.77e7fbd7.js";import"./_getAllKeys.6f3be0f6.js";import"./_getTag.ae88cce7.js";import"./toString.55d4b1ab.js";import"./Checkmark.f214118b.js";import"./addons.3740efb6.js";import"./upperFirst.fa56af60.js";import"./_stringToArray.4de3b1f3.js";import"./license.ff32fc77.js";const rs={props:{strings:{}},data(){return{hoveringOver:!1}}},cs={href:"edit.php?post_type=aioseo-location",class:"wp-has-submenu wp-not-current-submenu menu-top menu-icon-aioseo-location menu-top-last","aria-haspopup":"true"},us=i("div",{class:"wp-menu-image dashicons-before dashicons-location","aria-hidden":"true"},null,-1),ds={class:"wp-menu-name"},ps={class:"wp-submenu wp-submenu-wrap"},_s={class:"wp-submenu-head","aria-hidden":"true"},ms={class:"wp-first-item"},hs={href:"edit.php?post_type=aioseo-location",class:"wp-first-item"},gs={href:"post-new.php?post_type=aioseo-location"},bs={href:"edit-tags.php?taxonomy=aioseo-location-category&post_type=aioseo-location"};function fs(a,t,_,e,s,b){return u(),f("li",{class:P(["wp-has-submenu wp-not-current-submenu menu-top menu-icon-aioseo-location menu-top-last",{opensub:s.hoveringOver===0}]),id:"menu-posts-aioseo-location",onMouseover:t[0]||(t[0]=p=>s.hoveringOver=0),onMouseleave:t[1]||(t[1]=p=>s.hoveringOver=-1)},[i("a",cs,[us,i("div",ds,r(_.strings.locations),1)]),i("ul",ps,[i("li",_s,r(_.strings.locations),1),i("li",ms,[i("a",hs,r(_.strings.allLocations),1)]),i("li",null,[i("a",gs,r(_.strings.addNew),1)]),i("li",null,[i("a",bs,r(_.strings.locationCategories),1)])])],34)}const Ss=$(rs,[["render",fs]]),ys={setup(){return{optionsStore:T()}},mixins:[z],components:{CoreCard:w,CoreSettingsRow:C,LocalBusinessAreaServed:H,LocalBusinessBusinessAddress:W,LocalBusinessBusinessContact:F,LocalBusinessBusinessIds:q,LocalBusinessBusinessType:Y,LocalBusinessImage:j,LocalBusinessMap:K,LocalBusinessName:J,LocalBusinessPaymentInfo:Q},data(){return{scrollTimeout:200,strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$tdPro),locationInfo2:this.$t.__("Local business information may be displayed when users search for businesses on Google search or Google Maps. Google decides on a per search basis whether to display this information or not and it’s completely automated.",this.$tdPro),businessInfo:this.$t.__("Business Info",this.$tdPro),name:this.$t.__("Name",this.$tdPro),businessType:this.$t.__("Type",this.$tdPro),urls:this.$t.__("URLs",this.$tdPro),businessAddress:this.$t.__("Address",this.$tdPro),businessContact:this.$t.__("Contact Info",this.$tdPro),businessIDs:this.$t.__("IDs",this.$tdPro),paymentInfo:this.$t.__("Payment Info",this.$tdPro),areaServed:this.$t.__("Area Served",this.$tdPro),image:this.$t.__("Image",this.$tdPro),map:this.$t.__("Map",this.$tdPro)}}}},$s={class:"aioseo-settings-row aioseo-section-description"},Ls={class:"location-description"},vs={class:"location-description mb-0"};function Bs(a,t,_,e,s,b){const p=n("local-business-name"),d=n("core-settings-row"),h=n("local-business-image"),S=n("local-business-business-type"),y=n("local-business-business-address"),L=n("local-business-map"),c=n("local-business-business-contact"),v=n("local-business-business-ids"),k=n("local-business-payment-info"),x=n("local-business-area-served"),I=n("core-card");return u(),f("div",null,[e.optionsStore.options.localBusiness.locations.general.multiple?m("",!0):(u(),g(I,{key:0,slug:"localBusinessInfo","header-text":s.strings.businessInfo},{default:l(()=>[i("div",$s,[i("p",Ls,r(s.strings.locationInfo1),1),i("p",vs,r(s.strings.locationInfo2),1)]),o(d,{name:s.strings.name,class:"info-name-row",align:""},{content:l(()=>[o(p)]),_:1},8,["name"]),o(d,{class:"info-business-image",name:s.strings.image,align:""},{content:l(()=>[o(h)]),_:1},8,["name"]),o(d,{id:"info-business-type",name:s.strings.businessType,class:"info-business-type",align:""},{content:l(()=>[o(S)]),_:1},8,["name"]),o(d,{id:"info-business-address-row",name:s.strings.businessAddress,class:"info-business-address-row",align:""},{content:l(()=>[o(y)]),_:1},8,["name"]),o(d,{name:s.strings.map,align:"",id:"aioseo-business-info-map"},{content:l(()=>[o(L)]),_:1},8,["name"]),o(d,{id:"info-business-contact-row",name:s.strings.businessContact,class:"info-business-contact-row",align:""},{content:l(()=>[o(c)]),_:1},8,["name"]),o(d,{name:s.strings.businessIDs,class:"info-business-IDs-row",align:""},{content:l(()=>[o(v)]),_:1},8,["name"]),o(d,{id:"info-payment-info-row",name:s.strings.paymentInfo,class:"info-payment-info-row",align:""},{content:l(()=>[o(k)]),_:1},8,["name"]),o(d,{name:s.strings.areaServed,class:"info-area-row",align:""},{content:l(()=>[o(x)]),_:1},8,["name"])]),_:1},8,["header-text"]))])}const Ps=$(ys,[["render",Bs]]),ws={components:{CoreAttributesList:X,CoreDisplayInfo:N},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$tdPro),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$tdPro)},{name:"show_labels",description:this.$t.__("Show or hide labels ( ‘Address:’, ‘Phone:’, ‘Fax:’, ‘Email:’, etc ).",this.$tdPro)},{name:"show_icons",description:this.$t.__("Show or hide icons ( address, phone, fax, email ).",this.$tdPro)},{name:"show_name",description:this.$t.__("Show or hide the business name.",this.$tdPro)},{name:"show_address",description:this.$t.__("Show or hide the address.",this.$tdPro)},{name:"show_phone",description:this.$t.__("Show or hide the phone number.",this.$tdPro)},{name:"show_fax",description:this.$t.__("Show or hide the fax number.",this.$tdPro)},{name:"show_email",description:this.$t.__("Show or hide the email.",this.$tdPro)},{name:"show_vat",description:this.$t.__("Show or hide the Vat ID.",this.$tdPro)},{name:"show_tax",description:this.$t.__("Show or hide the Tax ID.",this.$tdPro)},{name:"address_label",description:this.$t.__("The address label.",this.$tdPro)},{name:"vat_id_label",description:this.$t.__("The VAT ID label.",this.$tdPro)},{name:"tax_id_label",description:this.$t.__("The Tax ID label.",this.$tdPro)},{name:"phone_label",description:this.$t.__("The phone label.",this.$tdPro)},{name:"fax_label",description:this.$t.__("The fax label.",this.$tdPro)},{name:"email_label",description:this.$t.__("The email label.",this.$tdPro)}]}}};function Cs(a,t,_,e,s,b){const p=n("core-attributes-list"),d=n("core-display-info");return u(),g(d,{label:_.label,options:_.displayOptions},{shortcodeAdvanced:l(()=>[o(p,{description:s.strings.shortcodeAttributesDescription,attributes:s.attributes},null,8,["description","attributes"])]),phpAdvanced:l(()=>[o(p,{description:s.strings.phpArgumentsDescription,attributes:s.attributes},null,8,["description","attributes"])]),_:1},8,["label","options"])}const ks=$(ws,[["render",Cs]]),xs={setup(){return{licenseStore:U(),optionsStore:T(),rootStore:V()}},components:{BaseCheckbox:Z,BaseRadioToggle:M,CoreCard:w,CoreSettingsRow:C,CoreAlert:O},data(){return{strings:{advancedLocationsSettings:this.$t.__("Advanced Locations Settings",this.$tdPro),locationsPermalink:this.$t.__("Locations Permalink",this.$tdPro),useCustomSlug:this.$t.__("Use custom slug",this.$tdPro),invalidCustomSlug:this.$t.__("Slug is empty or is already taken. Please enter a different one.",this.$tdPro),locationsCategoryPermalink:this.$t.__("Locations Category Permalink",this.$tdPro),useCustomCategorySlug:this.$t.__("Use custom category slug",this.$tdPro),enhancedSearch:this.$t.__("Enhanced Search",this.$tdPro),enhancedSearchDesc:this.$t.__("Include business locations in site-wide search results. Users searching for street name, zip code or city will now also get your business location(s) in their search results.",this.$tdPro),enhancedSearchError:this.$t.sprintf(this.$t.__("Enhanced Search cannot be enabled on your website because there is a search query conflict. To learn more about this, %1$sclick here%2$s.",this.$tdPro),`<a href="${this.$links.getDocUrl("localSeoSearchQueryConflict")}" target="_blank">`,"</a>"),enhancedSearchExcerpt:this.$t.__("Enhanced Search - Excerpt",this.$tdPro),enhancedSearchExcerptDesc:this.$t.__("Shows the location address appended to the search result.",this.$tdPro),customAdminLabels:this.$t.__("Custom Admin Labels",this.$tdPro),customAdminLabelsDesc:this.$t.__("With multiple locations, you will have a new menu item in your admin sidebar. By default, this menu item is labeled using the plural term of locations with each single item being called a location. If you like, you may enter custom labels to better match your business.",this.$tdPro),singleLabel:this.$t.__("Single label",this.$tdPro),pluralLabel:this.$t.__("Plural label",this.$tdPro)},validCustomSlug:!0,validCustomCategorySlug:!0}},computed:{currentPostTypeSlug(){return this.optionsStore.options.localBusiness.locations.general.useCustomSlug&&this.optionsStore.options.localBusiness.locations.general.customSlug?this.optionsStore.options.localBusiness.locations.general.customSlug:this.rootStore.aioseo.localBusiness.postTypeDefaultSlug},currentTaxonomySlug(){return this.optionsStore.options.localBusiness.locations.general.useCustomCategorySlug&&this.optionsStore.options.localBusiness.locations.general.customCategorySlug?this.optionsStore.options.localBusiness.locations.general.customCategorySlug:this.rootStore.aioseo.localBusiness.taxonomyDefaultSlug}},methods:{validateCustomSlug(a){this.validCustomSlug=!0,a=a.replace(/^\/+/,"").replace(/\/+$/,"").replace(/\s+/g,"-"),this.optionsStore.options.localBusiness.locations.general.customSlug=a,(0>=a.length||0<this.rootStore.aioseo.postData.postTypes.filter(t=>t.name!==this.rootStore.aioseo.localBusiness.postTypeName&&t.slug===a).length)&&(this.validCustomSlug=!1)},validateCustomCategorySlug(a){this.validCustomCategorySlug=!0,a=a.replace(/^\/+/g,"").replace(/\/+$/g,"").replace(/\s+/g,"-"),this.optionsStore.options.localBusiness.locations.general.customCategorySlug=a,(0>=a.length||0<this.rootStore.aioseo.postData.taxonomies.filter(t=>t.name!==this.rootStore.aioseo.localBusiness.taxonomyName&&t.slug===a).length)&&(this.validCustomCategorySlug=!1)}}},Is={class:"aioseo-locations aioseo-locations-multiple-locations-settings"},Ts={class:"location-permalink-preview"},As={class:"baseurl"},Ds={key:1,class:"aioseo-description aioseo-error"},Us={class:"location-permalink-preview location-category-permalink-preview"},Vs={class:"baseurl"},Ms={key:1,class:"aioseo-description aioseo-error"},Os={class:"aioseo-description"},Es={class:"aioseo-description"},Gs={class:"admin-labels-description"},Ns={class:"aioseo-columns"},Rs={class:"aioseo-col col-xs-12 col-md-6 text-xs-left"},zs={class:"label-description"},Hs={class:"aioseo-col col-xs-12 col-md-6 text-xs-left"},Ws={class:"label-description"};function Fs(a,t,_,e,s,b){const p=n("base-checkbox"),d=n("base-input"),h=n("core-settings-row"),S=n("base-radio-toggle"),y=n("core-alert"),L=n("core-card");return u(),f("div",Is,[e.optionsStore.options.localBusiness.locations.general.multiple&&e.licenseStore.license.isActive?(u(),g(L,{key:0,slug:"advancedLocationsSettings","header-text":s.strings.advancedLocationsSettings},{default:l(()=>[o(h,{class:"location-permalink",name:s.strings.locationsPermalink},{content:l(()=>[i("div",Ts,[i("span",As,r(e.rootStore.aioseo.urls.mainSiteUrl)+"/",1),(u(!0),f(A,null,D(e.rootStore.aioseo.localBusiness.postTypePermalinkStructure,(c,v)=>(u(),f("span",{key:v,class:P(c=="{slug}"?"slug":"")},r(c=="{slug}"?b.currentPostTypeSlug:c),3))),128))]),o(p,{size:"medium",modelValue:e.optionsStore.options.localBusiness.locations.general.useCustomSlug,"onUpdate:modelValue":t[0]||(t[0]=c=>e.optionsStore.options.localBusiness.locations.general.useCustomSlug=c)},{default:l(()=>[B(r(s.strings.useCustomSlug),1)]),_:1},8,["modelValue"]),e.optionsStore.options.localBusiness.locations.general.useCustomSlug?(u(),g(d,{key:0,modelValue:e.optionsStore.options.localBusiness.locations.general.customSlug,"onUpdate:modelValue":[t[1]||(t[1]=c=>e.optionsStore.options.localBusiness.locations.general.customSlug=c),t[2]||(t[2]=c=>b.validateCustomSlug(c))],class:P(["custom-slug",{"aioseo-error":!s.validCustomSlug}]),size:"medium",spellcheck:!1},null,8,["modelValue","class"])):m("",!0),e.optionsStore.options.localBusiness.locations.general.useCustomSlug&&!s.validCustomSlug?(u(),f("div",Ds,r(s.strings.invalidCustomSlug),1)):m("",!0)]),_:1},8,["name"]),o(h,{class:"location-category-permalink",name:s.strings.locationsCategoryPermalink},{content:l(()=>[i("div",Us,[i("span",Vs,r(e.rootStore.aioseo.urls.mainSiteUrl)+"/",1),(u(!0),f(A,null,D(e.rootStore.aioseo.localBusiness.taxonomyPermalinkStructure,(c,v)=>(u(),f("span",{key:v,class:P(c=="{slug}"?"slug":"")},r(c=="{slug}"?b.currentTaxonomySlug:c),3))),128))]),o(p,{size:"medium",modelValue:e.optionsStore.options.localBusiness.locations.general.useCustomCategorySlug,"onUpdate:modelValue":t[3]||(t[3]=c=>e.optionsStore.options.localBusiness.locations.general.useCustomCategorySlug=c)},{default:l(()=>[B(r(s.strings.useCustomCategorySlug),1)]),_:1},8,["modelValue"]),e.optionsStore.options.localBusiness.locations.general.useCustomCategorySlug?(u(),g(d,{key:0,modelValue:e.optionsStore.options.localBusiness.locations.general.customCategorySlug,"onUpdate:modelValue":[t[4]||(t[4]=c=>e.optionsStore.options.localBusiness.locations.general.customCategorySlug=c),t[5]||(t[5]=c=>b.validateCustomCategorySlug(c))],class:P(["custom-slug",{"aioseo-error":!s.validCustomCategorySlug}]),size:"medium",spellcheck:!1},null,8,["modelValue","class"])):m("",!0),e.optionsStore.options.localBusiness.locations.general.useCustomCategorySlug&&!s.validCustomCategorySlug?(u(),f("div",Ms,r(s.strings.invalidCustomSlug),1)):m("",!0)]),_:1},8,["name"]),o(h,{class:"location-enhanced-search",name:s.strings.enhancedSearch},{content:l(()=>[o(S,{name:"enhancedSearch",modelValue:e.optionsStore.options.localBusiness.locations.general.enhancedSearch,"onUpdate:modelValue":t[6]||(t[6]=c=>e.optionsStore.options.localBusiness.locations.general.enhancedSearch=c),disabled:!e.rootStore.aioseo.localBusiness.enhancedSearchTest,options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","disabled","options"]),i("div",Os,r(s.strings.enhancedSearchDesc),1),e.rootStore.aioseo.localBusiness.enhancedSearchTest?m("",!0):(u(),g(y,{key:0,innerHTML:s.strings.enhancedSearchError,type:"yellow"},null,8,["innerHTML"]))]),_:1},8,["name"]),e.optionsStore.options.localBusiness.locations.general.enhancedSearch?(u(),g(h,{key:0,class:"location-enhanced-search",name:s.strings.enhancedSearchExcerpt},{content:l(()=>[o(S,{name:"enhancedSearchExcerpt",modelValue:e.optionsStore.options.localBusiness.locations.general.enhancedSearchExcerpt,"onUpdate:modelValue":t[7]||(t[7]=c=>e.optionsStore.options.localBusiness.locations.general.enhancedSearchExcerpt=c),options:[{label:a.$constants.GLOBAL_STRINGS.off,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.on,value:!0}]},null,8,["modelValue","options"]),i("div",Es,r(s.strings.enhancedSearchExcerptDesc),1)]),_:1},8,["name"])):m("",!0),o(h,{class:"location-admin-labels",name:s.strings.customAdminLabels},{content:l(()=>[i("p",Gs,r(s.strings.customAdminLabelsDesc),1),i("div",Ns,[i("div",Rs,[i("span",zs,r(s.strings.singleLabel),1),o(d,{type:"text",size:"medium",modelValue:e.optionsStore.options.localBusiness.locations.general.singleLabel,"onUpdate:modelValue":t[8]||(t[8]=c=>e.optionsStore.options.localBusiness.locations.general.singleLabel=c)},null,8,["modelValue"])]),i("div",Hs,[i("span",Ws,r(s.strings.pluralLabel),1),o(d,{type:"text",size:"medium",modelValue:e.optionsStore.options.localBusiness.locations.general.pluralLabel,"onUpdate:modelValue":t[9]||(t[9]=c=>e.optionsStore.options.localBusiness.locations.general.pluralLabel=c)},null,8,["modelValue"])])])]),_:1},8,["name"])]),_:1},8,["header-text"])):m("",!0)])}const qs=$(xs,[["render",Fs]]);const Ys={setup(){const{strings:a}=R({name:"localBusinessInfo"});return{licenseStore:U(),optionsStore:T(),rootStore:V(),composableStrings:a}},components:{BaseRadioToggle:M,BusinessInfo:Ps,CoreAlert:O,CoreCard:w,CoreProBadge:E,CoreSettingsRow:C,LocalBusinessLocationsDisplayInfo:ks,MultipleLocationsSettings:qs,SvgDesktop:ss,SvgMobile:os},data(){return{canShowMultipleLink:!1,displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Business Info" block.',this.$tdPro),"AIOSEO")},shortcode:{copy:"[aioseo_local_business_info]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location info. %1$s",this.$tdPro),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeBusinessInfo",!0))},widget:{copy:"",desc:this.composableStrings.visitWidgetsPage},php:{copy:"<?php if( function_exists( 'aioseo_local_business_info' ) ) aioseo_local_business_info(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location info. %1$s",this.$tdPro),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionBusinessInfo",!0))}},strings:{locationsSettings:this.$t.__("Locations Settings",this.$tdPro),description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$tdPro),"AIOSEO"),multipleLocations:this.$t.__("Multiple Locations",this.$tdPro),multipleLocationsLink:this.$t.sprintf(this.$t.__("Use the %1$sLocations%2$s Post Type in the menu on the left to start adding your locations.",this.$tdPro),`<a href="${this.rootStore.aioseo.localBusiness.postTypeEditLink}">`,"</a>"),multipleLocationsFree:this.$t.sprintf(this.$t.__("Multiple Locations feature is available only for %1$s Pro users. Upgrade to Pro and unlock all %2$s features!",this.$tdPro),"AIOSEO","AIOSEO"),displayLocationInfo:this.$t.__("Display Location Info",this.$tdPro),widget:this.$t.__("Widget",this.$tdPro),shortcode:this.$t.__("Shortcode",this.$tdPro),gutenbergBlock:this.$t.__("Gutenberg Block",this.$tdPro),phpCode:this.$t.__("PHP Code",this.$tdPro)}}},computed:{isMultipleLocation:{get(){return this.licenseStore.isUnlicensed?!1:this.optionsStore.options.localBusiness.locations.general.multiple},set(a){this.optionsStore.options.localBusiness.locations.general.multiple=a}}},methods:{handlePostTypeMenu(){const a=this.optionsStore.options.localBusiness.locations.general.multiple,t=document.getElementById("menu-posts-aioseo-location");if(a&&!t){const _=document.querySelectorAll("#adminmenu .wp-menu-separator"),e=document.createElement("div");e.setAttribute("id","aioseo-locations"),_[1]&&(_[1].parentNode.insertBefore(e,_[1].previousSibling),G({...Ss,name:"Pages/LocationsMenu"},{strings:{locations:this.$t.__("Locations",this.$tdPro),allLocations:this.$t.__("All Locations",this.$tdPro),addNew:this.$t.__("Add New",this.$tdPro),locationCategories:this.$t.__("Location Categories",this.$tdPro)}}).mount(`#${e.getAttribute("id")}`))}!a&&t&&t.parentElement.removeChild(t),this.canShowMultipleLink=a}},mounted(){this.canShowMultipleLink=this.optionsStore.options.localBusiness.locations.general.multiple,window.aioseoBus.$on("changes-saved",this.handlePostTypeMenu)}},js={class:"aioseo-locations"},Ks={class:"aioseo-settings-row"},Js=["innerHTML"],Qs=["innerHTML"];function Xs(a,t,_,e,s,b){const p=n("core-pro-badge"),d=n("svg-desktop"),h=n("svg-mobile"),S=n("base-radio-toggle"),y=n("core-alert"),L=n("core-settings-row"),c=n("local-business-locations-display-info"),v=n("core-card"),k=n("business-info"),x=n("multiple-locations-settings");return u(),f("div",js,[o(v,{slug:"locationsSettings","header-text":s.strings.locationsSettings},{default:l(()=>[i("div",Ks,r(s.strings.description),1),o(L,{class:"multiple-locations"},{name:l(()=>[B(r(s.strings.multipleLocations)+" ",1),e.licenseStore.isUnlicensed?(u(),g(p,{key:0})):m("",!0)]),content:l(()=>[o(S,{name:"multipleLocations",modelValue:b.isMultipleLocation,"onUpdate:modelValue":t[0]||(t[0]=I=>b.isMultipleLocation=I),disabled:e.licenseStore.isUnlicensed,options:[{label:a.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:a.$constants.GLOBAL_STRINGS.yes,value:!0}]},{desktop:l(()=>[o(d)]),mobile:l(()=>[o(h)]),_:1},8,["modelValue","disabled","options"]),e.licenseStore.license.isActive&&s.canShowMultipleLink?(u(),g(y,{key:0,class:"locations-link",type:"blue"},{default:l(()=>[i("div",{innerHTML:s.strings.multipleLocationsLink},null,8,Js)]),_:1})):m("",!0),e.licenseStore.isUnlicensed?(u(),g(y,{key:1,class:"locations-link",type:"blue"},{default:l(()=>[i("div",{innerHTML:s.strings.multipleLocationsFree},null,8,Qs)]),_:1})):m("",!0)]),_:1}),o(c,{label:s.strings.displayLocationInfo,displayOptions:s.displayInfo},null,8,["label","displayOptions"])]),_:1},8,["header-text"]),e.optionsStore.options.localBusiness.locations.general.multiple?m("",!0):(u(),g(k,{key:0})),e.optionsStore.options.localBusiness.locations.general.multiple?(u(),g(x,{key:1})):m("",!0)])}const Zs=$(Ys,[["render",Xs]]);const so={components:{CoreBlur:ts,CoreSettingsRow:C,SvgCirclePlus:ns},data(){return{strings:{description:this.$t.sprintf(this.$t.__("Whether your business has multiple locations, or just one, %1$s makes it easy to configure and display relevant information about your local business. You can use the custom-built tools below, or you can use the Locations custom post type (multiple locations only) to generate relevant and necessary information for search engines or for your customers.",this.$td),"AIOSEO"),name:this.$t.__("name",this.$td),nameDesc:this.$t.__("Your name or company name.",this.$td),businessType:this.$t.__("Type",this.$td),urls:this.$t.__("URLs",this.$td),image:this.$t.__("Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td),websiteDesc:this.$t.__("Website URL:",this.$td),aboutDesc:this.$t.__("About Page URL:",this.$td),contactDesc:this.$t.__("Contact Page URL:",this.$td)},businessTypes:[{label:this.$t.__("default",this.$td),value:"LocalBusiness"},{label:this.$t.__("Animal Shelter",this.$td),value:"Animal Shelter"}]}}},oo={class:"aioseo-locations-blur"},eo={class:"aioseo-settings-row"},to={class:"aioseo-col col-xs-12 text-xs-left"},no={class:"field-description"},io={class:"image-upload"},ao={class:"aioseo-description"},lo={class:"aioseo-col col-xs-12 text-xs-left"},ro={class:"aioseo-col col-xs-12 text-xs-left"},co={class:"field-description"},uo={class:"aioseo-col col-xs-12 text-xs-left"},po={class:"field-description mt-8"},_o={class:"aioseo-col col-xs-12 text-xs-left"},mo={class:"field-description mt-8"};function ho(a,t,_,e,s,b){const p=n("base-input"),d=n("core-settings-row"),h=n("svg-circle-plus"),S=n("base-button"),y=n("base-select"),L=n("core-blur");return u(),f("div",oo,[o(L,null,{default:l(()=>[i("div",eo,r(s.strings.description),1),o(d,{name:s.strings.name,class:"info-name-row",align:""},{content:l(()=>[i("div",to,[o(p,{type:"text",size:"medium"}),i("span",no,r(s.strings.nameDesc),1)])]),_:1},8,["name"]),o(d,{class:"info-business-image",name:s.strings.image},{content:l(()=>[i("div",io,[o(p,{size:"medium",placeholder:s.strings.pasteYourImageUrl},null,8,["placeholder"]),o(S,{class:"insert-image",size:"medium",type:"black"},{default:l(()=>[o(h),B(" "+r(s.strings.uploadOrSelectImage),1)]),_:1}),o(S,{class:"remove-image",size:"medium",type:"gray"},{default:l(()=>[B(r(s.strings.remove),1)]),_:1})]),i("div",ao,r(s.strings.minimumSize),1)]),_:1},8,["name"]),o(d,{name:s.strings.businessType,class:"info-business-type",align:""},{content:l(()=>[o(y,{size:"large",options:s.businessTypes,modelValue:"default"},null,8,["options"])]),_:1},8,["name"]),o(d,{name:s.strings.urls,class:"info-urls-row",align:""},{content:l(()=>[i("div",lo,[i("div",ro,[i("span",co,r(s.strings.websiteDesc),1),o(p,{type:"text",size:"medium"})]),i("div",uo,[i("span",po,r(s.strings.aboutDesc),1),o(p,{type:"text",size:"medium"})]),i("div",_o,[i("span",mo,r(s.strings.contactDesc),1),o(p,{type:"text",size:"medium"})])])]),_:1},8,["name"])]),_:1})])}const go=$(so,[["render",ho]]);const bo={components:{Blur:go,RequiredPlans:is,CoreCard:w,CoreProBadge:E,Cta:as},data(){return{features:[this.$t.__("Local Business Schema",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Business Info and Location blocks, widgets and shortcodes",this.$td),this.$t.__("Detailed Address, Contact and Payment Info",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),businessInfo:this.$t.__("Business Info",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},fo={class:"aioseo-locations-lite"};function So(a,t,_,e,s,b){const p=n("core-pro-badge"),d=n("blur"),h=n("required-plans"),S=n("cta"),y=n("core-card");return u(),f("div",fo,[o(y,{slug:"localBusinessInfo",class:"aioseo-locations-card",noSlide:!0},{header:l(()=>[i("span",null,r(s.strings.businessInfo),1),o(p)]),default:l(()=>[o(d),o(S,{"cta-link":a.$links.getPricingUrl("local-seo","local-seo-upsell","locations"),"button-text":s.strings.ctaButtonText,"learn-more-link":a.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},{"header-text":l(()=>[B(r(s.strings.ctaHeader),1)]),description:l(()=>[o(h,{addon:"aioseo-local-business"}),B(" "+r(s.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list"])]),_:1})])}const yo=$(bo,[["render",So]]),$o={mixins:[ls],components:{Locations:Zs,Cta:es,Lite:yo},data(){return{addonSlug:"aioseo-local-business",strings:{businessInfo:this.$t.__("Business Info",this.$td)}}}},Lo={class:"aioseo-locations"};function vo(a,t,_,e,s,b){const p=n("locations",!0),d=n("cta"),h=n("lite");return u(),f("div",Lo,[a.shouldShowMain?(u(),g(p,{key:0})):m("",!0),a.shouldShowUpdate||a.shouldShowActivate?(u(),g(d,{key:1,"card-slug":"localBusinessInfo","header-text":s.strings.businessInfo,"align-top":""},null,8,["header-text"])):m("",!0),a.shouldShowLite?(u(),g(h,{key:2})):m("",!0)])}const Le=$($o,[["render",vo]]);export{Le as default};