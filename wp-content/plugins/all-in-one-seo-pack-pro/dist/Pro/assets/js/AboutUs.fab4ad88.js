import{b as P}from"./vuex.esm-bundler.f966fce5.js";import{e as b}from"./em.5c60dd9c.js";import{G as I,a as $}from"./Row.0ab5735c.js";import{S as A}from"./External.5324db54.js";import{_ as k,q as u,c,a,t as l,z as p,k as d,o,F as D,E as W,j as g,b as r,x as m}from"./_plugin-vue_export-helper.299eda55.js";import"./default-i18n.0e8bc810.js";import"./_commonjsHelpers.f84db168.js";import"./helpers.73050afe.js";const U=""+window.__aioseoDynamicImportPreload__("images/team.3ed1e959.jpg"),S=""+window.__aioseoDynamicImportPreload__("images/afwp.57d92ab4.png"),T=""+window.__aioseoDynamicImportPreload__("images/edd.c2984766.png"),C=""+window.__aioseoDynamicImportPreload__("images/ff.4f882f43.png"),F=""+window.__aioseoDynamicImportPreload__("images/if.4735a5da.png"),E=""+window.__aioseoDynamicImportPreload__("images/mi.b3a4b48a.png"),M=""+window.__aioseoDynamicImportPreload__("images/om.0afa29dd.png"),O=""+window.__aioseoDynamicImportPreload__("images/pe.3e9da367.png"),x=""+window.__aioseoDynamicImportPreload__("images/rafflepress.cda6b4e0.png"),B=""+window.__aioseoDynamicImportPreload__("images/sc.5c5e705b.png"),L=""+window.__aioseoDynamicImportPreload__("images/smtp.90e4ffc1.png"),z=""+window.__aioseoDynamicImportPreload__("images/sp.d75c9a95.png"),j=""+window.__aioseoDynamicImportPreload__("svg/swp.10222930.svg"),G=""+window.__aioseoDynamicImportPreload__("images/tf.75d64979.png"),R=""+window.__aioseoDynamicImportPreload__("images/tp.cb8065a4.png"),V=""+window.__aioseoDynamicImportPreload__("images/wpforms.e4bb2893.png"),Y=""+window.__aioseoDynamicImportPreload__("images/wpsp.100012d1.png"),q=""+window.__aioseoDynamicImportPreload__("images/yf.28cad2d7.png"),H=""+window.__aioseoDynamicImportPreload__("svg/wpcode.76a669fb.svg");const J={components:{GridColumn:I,GridRow:$,SvgExternal:A},data(){return{teamImg:U,localPlugins:[],networkActivated:[],strings:{welcome:{p1:this.$t.sprintf(this.$t.__("Welcome to %1$s, the original SEO plugin for WordPress. At %2$s, we build software that helps you rank your website in search results and gain organic traffic.",this.$td),"All in One SEO","All in One SEO"),p2:this.$t.__("Over the years, we found that most other WordPress SEO plugins were bloated, buggy, slow, and very hard to use. So we designed our plugin as an easy and powerful tool.",this.$td),p3:this.$t.__("Our goal is to take the pain out of optimizing your website for search engines.",this.$td),p4:this.$t.sprintf(this.$t.__("%1$s is brought to you by %2$s, the same team that’s behind the largest WordPress resource site, WPBeginner, the most popular lead-generation software, OptinMonster, the best WordPress analytics plugin, MonsterInsights and many more.",this.$td),"All in One SEO","Awesome Motive"),p5:this.$t.__("Yup, we know a thing or two about building awesome products that customers love.",this.$td),imageCaption:this.$t.sprintf(this.$t.__("The %1$s Team",this.$td),"Awesome Motive")},plugins:{actions:{install:this.$t.__("Install Plugin",this.$td),activate:this.$t.__("Activate",this.$td),manage:this.$t.__("Manage",this.$td)},status:this.$t.__("Status:",this.$td),statuses:{activated:this.$t.__("Activated",this.$td),deactivated:this.$t.__("Deactivated",this.$td),notInstalled:this.$t.__("Not Installed",this.$td)}}},pluginData:{optinMonster:{name:"OptinMonster",description:this.$t.__("Instantly get more subscribers, leads, and sales with the #1 conversion optimization toolkit. Create high converting popups, announcement bars, spin a wheel, and more with smart targeting and personalization.",this.$td),icon:this.$getAssetUrl(M),installed:!1,canInstall:!1,activated:!1,loading:!1},wpForms:{name:"WPForms",description:this.$t.__("The best drag & drop WordPress form builder. Easily create beautiful contact forms, surveys, payment forms, and more with our 100+ form templates. Trusted by over 4 million websites as the best forms plugin.",this.$td),icon:this.$getAssetUrl(V),installed:!1,canInstall:!1,activated:!1,loading:!1},wpFormsPro:{name:"WPForms Pro",free:"wpForms",installed:!1,canInstall:!1,activated:!1,loading:!1},miLite:{name:"MonsterInsights",description:this.$t.__("The leading WordPress analytics plugin that shows you how people find and use your website, so you can make data driven decisions to grow your business. Properly set up Google Analytics without writing code.",this.$td),icon:this.$getAssetUrl(E),installed:!1,canInstall:!1,activated:!1,loading:!1},miPro:{name:"MonsterInsights Pro",free:"miLite",installed:!1,canInstall:!1,activated:!1,loading:!1},emLite:{name:"ExactMetrics",description:this.$t.__("The ExactMetrics Google Analytics for WordPress plugin helps you properly setup all the powerful Google Analytics tracking features without writing any code or hiring a developer.",this.$td),icon:this.$getAssetUrl(b),installed:!1,canInstall:!1,activated:!1,loading:!1},emPro:{name:"ExactMetrics Pro",free:"emLite",installed:!1,canInstall:!1,activated:!1,loading:!1},wpMail:{name:"WP Mail SMTP",description:this.$t.__("Improve your WordPress email deliverability and make sure that your website emails reach user’s inbox with the #1 SMTP plugin for WordPress. Over 2 million websites use it to fix WordPress email issues.",this.$td),icon:this.$getAssetUrl(L),installed:!1,canInstall:!1,activated:!1,loading:!1},wpMailPro:{name:"WP Mail SMTP Pro",free:"wpMail",installed:!1,canInstall:!1,activated:!1,loading:!1},wpcode:{name:"WPCode",description:this.$t.__("Future proof your WordPress customizations with the most popular code snippet management plugin for WordPress. Trusted by over 1,500,000+ websites for easily adding code to WordPress right from the admin area.",this.$td),icon:this.$getAssetUrl(H),installed:!1,canInstall:!1,activated:!1,loading:!1},wpcodePro:{name:"WPCode Pro",free:"wpcode",installed:!1,canInstall:!1,activated:!1,loading:!1},seedProd:{name:"SeedProd Coming Soon",description:this.$t.__("The fastest drag & drop landing page builder for WordPress. Create custom landing pages without writing code, connect them with your CRM, collect subscribers, and grow your audience. Trusted by 1 million sites.",this.$td),icon:this.$getAssetUrl(z),installed:!1,canInstall:!1,activated:!1,loading:!1},seedProdPro:{name:"SeedProd Coming Soon Pro",free:"seedProd",installed:!1,canInstall:!1,activated:!1,loading:!1},trustPulse:{name:"TrustPulse",description:this.$t.__("Boost your sales and conversions by up to 15% with real-time social proof notifications. TrustPulse helps you show live user activity and purchases to help convince other users to purchase.",this.$td),icon:this.$getAssetUrl(R),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePress:{name:"RafflePress",description:this.$t.__("Turn your website visitors into brand ambassadors! Easily grow your email list, website traffic, and social media followers with the most powerful giveaways & contests plugin for WordPress.",this.$td),icon:this.$getAssetUrl(x),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePressPro:{name:"RafflePress Pro",free:"rafflePress",installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeed:{name:"Smash Balloon Facebook Feeds",description:this.$t.__("Easily display Facebook content on your WordPress site without writing any code. Comes with multiple templates, ability to embed albums, group content, reviews, live videos, comments, and reactions.",this.$td),icon:this.$getAssetUrl(C),installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeedPro:{name:"Smash Balloon Facebook Feeds Pro",free:"facebookFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeed:{name:"Smash Balloon Instagram Feeds",description:this.$t.__("Easily display Instagram content on your WordPress site without writing any code. Comes with multiple templates, ability to show content from multiple accounts, hashtags, and more. Trusted by 1 million websites.",this.$td),icon:this.$getAssetUrl(F),installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeedPro:{name:"Smash Balloon Instagram Feeds Pro",free:"instagramFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeed:{name:"Smash Balloon Twitter Feeds",description:this.$t.__("Easily display Twitter content in WordPress without writing any code. Comes with multiple layouts, ability to combine multiple Twitter feeds, Twitter card support, tweet moderation, and more.",this.$td),icon:this.$getAssetUrl(G),installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeedPro:{name:"Smash Balloon Twitter Feeds Pro",free:"twitterFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeed:{name:"Smash Balloon YouTube Feeds",description:this.$t.__("Easily display YouTube videos on your WordPress site without writing any code. Comes with multiple layouts, ability to embed live streams, video filtering, ability to combine multiple channel videos, and more.",this.$td),icon:this.$getAssetUrl(q),installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeedPro:{name:"Smash Balloon YouTube Feeds Pro",free:"youTubeFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},pushEngage:{name:"PushEngage",description:this.$t.__("Connect with your visitors after they leave your website with the leading web push notification software. Over 10,000+ businesses worldwide use PushEngage to send 9 billion notifications each month.",this.$td),icon:this.$getAssetUrl(O),installed:!1,canInstall:!1,activated:!1,loading:!1},searchWp:{name:"SearchWP",description:this.$t.__("The most advanced WordPress search plugin. Customize your WordPress search algorithm, reorder search results, track search metrics, and everything you need to leverage search to grow your business.",this.$td),icon:this.$getAssetUrl(j),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://searchwp.com/")},affiliateWp:{name:"AffiliateWP",description:this.$t.__("The #1 affiliate management plugin for WordPress. Easily create an affiliate program for your eCommerce store or membership site within minutes and start growing your sales with the power of referral marketing.",this.$td),icon:this.$getAssetUrl(S),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://affiliatewp.com/")},wpSimplePay:{name:"WP Simple Pay",description:this.$t.__("The #1 Stripe payments plugin for WordPress. Start accepting one-time and recurring payments on your WordPress site without setting up a shopping cart. No code required.",this.$td),icon:this.$getAssetUrl(Y),installed:!1,canInstall:!1,activated:!1,loading:!1},wpSimplePayPro:{name:"WP Simple Pay Pro",free:"wpSimplePay",installed:!1,canInstall:!1,activated:!1,loading:!1},easyDigitalDownloads:{name:"Easy Digital Downloads",description:this.$t.__("The best WordPress eCommerce plugin for selling digital downloads. Start selling eBooks, software, music, digital art, and more within minutes. Accept payments, manage subscriptions, advanced access control, and more.",this.$td),icon:this.$getAssetUrl(T),installed:!1,canInstall:!1,activated:!1,loading:!1},easyDigitalDownloadsPro:{name:"Easy Digital Downloads Pro",free:"easyDigitalDownloads",installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendar:{name:"Sugar Calendar",description:this.$t.__("A simple & powerful event calendar plugin for WordPress that comes with all the event management features including payments, scheduling, timezones, ticketing, recurring events, and more.",this.$td),icon:this.$getAssetUrl(B),installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendarPro:{name:"Sugar Calendar Pro",free:"sugarCalendar",installed:!1,canInstall:!1,activated:!1,loading:!1}}}},methods:{...P(["installPlugins"]),activate(e){if(!this.plugins[e].installed&&this.plugins[e].installUrl){window.open(this.plugins[e].installUrl,"_blank").focus();return}this.plugins[e].loading=!0,this.installPlugins([{plugin:e,type:"plugin"}]).then(n=>{if(this.plugins[e].loading=!1,Object.keys(n.body.completed).length)this.plugins[e].installed=!0,this.plugins[e].activated=!0,this.$aioseo.data.isNetworkAdmin&&this.networkActivated.push(e);else if(Object.keys(n.body.failed).length)throw new Error(n.body.failed)}).catch(n=>{this.plugins[e].loading=!1,console.error(`Unable to install ${e}: ${n}`)})},getPluginAdminUrl(e,n){return!this.$aioseo.data.isNetworkAdmin||!n.networkAdminUrl||!this.networkActivated.includes(e)?n.adminUrl:n.networkAdminUrl}},computed:{plugins(){return Object.keys(this.localPlugins).forEach(e=>{this.pluginData[e].free&&(this.pluginData[e].description=this.pluginData[this.pluginData[e].free].description,this.pluginData[e].icon=this.pluginData[this.pluginData[e].free].icon)}),this.pluginData}},mounted(){this.localPlugins={...this.$aioseo.plugins},Object.keys(this.localPlugins).forEach(e=>{this.pluginData[e].installed=this.localPlugins[e].installed,this.pluginData[e].canInstall=this.localPlugins[e].canInstall,this.pluginData[e].canActivate=this.localPlugins[e].canActivate,this.pluginData[e].activated=this.localPlugins[e].activated,this.plugins[e].free&&(this.localPlugins[e].installed?delete this.localPlugins[this.plugins[e].free]:delete this.localPlugins[e])})}},K={class:"aioseo-about-us"},Q={class:"aioseo-about-us-welcome"},X={class:"welcome-intro"},Z={class:"welcome-image"},N=["src","alt"],ee={class:"aioseo-about-us-plugins"},se={class:"plugin-main"},te=["alt","src"],ae={class:"main-name"},ie={class:"plugin-footer"},le={class:"footer-status"},ne={class:"footer-status-label"},oe={key:0,class:"footer-status footer-status-not-installed"},re={key:1,class:"footer-status footer-status-deactivated"},de={key:2,class:"footer-status footer-status-activated"},ce={class:"footer-action"};function ge(e,n,fe,ue,i,t){const f=u("base-button"),_=u("svg-external"),w=u("grid-column"),y=u("grid-row");return o(),c("div",K,[a("div",Q,[a("div",X,[a("div",null,l(i.strings.welcome.p1),1),a("div",null,l(i.strings.welcome.p2),1),a("div",null,l(i.strings.welcome.p3),1),a("div",null,l(i.strings.welcome.p4),1),a("div",null,l(i.strings.welcome.p5),1)]),a("div",Z,[a("figure",null,[a("img",{src:e.$getAssetUrl(i.teamImg),alt:i.strings.welcome.imageCaption},null,8,N),a("figcaption",null,l(i.strings.welcome.imageCaption),1)])])]),a("div",ee,[p(y,null,{default:d(()=>[(o(!0),c(D,null,W(i.localPlugins,(h,s)=>(o(),g(w,{sm:"12",md:"6",key:s,id:s,class:"plugin"},{default:d(()=>[a("div",se,[a("div",null,[a("img",{alt:t.plugins[s].name+" Plugin image",src:t.plugins[s].icon},null,8,te)]),a("div",null,[a("div",ae,l(t.plugins[s].name),1),a("div",null,l(t.plugins[s].description),1)])]),a("div",ie,[a("div",le,[a("div",ne,l(i.strings.plugins.status),1),t.plugins[s].installed?r("",!0):(o(),c("div",oe,l(i.strings.plugins.statuses.notInstalled),1)),t.plugins[s].installed&&!t.plugins[s].activated?(o(),c("div",re,l(i.strings.plugins.statuses.deactivated),1)):r("",!0),t.plugins[s].installed&&t.plugins[s].activated?(o(),c("div",de,l(i.strings.plugins.statuses.activated),1)):r("",!0)]),a("div",ce,[!t.plugins[s].installed&&t.plugins[s].canInstall?(o(),g(f,{key:0,type:"blue",onClick:v=>t.activate(s),loading:t.plugins[s].loading},{default:d(()=>[m(l(i.strings.plugins.actions.install),1)]),_:2},1032,["onClick","loading"])):r("",!0),!t.plugins[s].installed&&!t.plugins[s].canInstall?(o(),g(f,{key:1,type:"blue",tag:"a",target:"_blank",href:h.wpLink},{default:d(()=>[p(_),m(" "+l(i.strings.plugins.actions.install),1)]),_:2},1032,["href"])):r("",!0),t.plugins[s].installed&&!t.plugins[s].activated?(o(),g(f,{key:2,type:"green",disabled:!t.plugins[s].canActivate,onClick:v=>t.activate(s),loading:t.plugins[s].loading},{default:d(()=>[m(l(i.strings.plugins.actions.activate),1)]),_:2},1032,["disabled","onClick","loading"])):r("",!0),t.plugins[s].installed&&t.plugins[s].activated&&t.getPluginAdminUrl(s,h).length!==0?(o(),g(f,{key:3,type:"gray",tag:"a",href:t.getPluginAdminUrl(s,h)},{default:d(()=>[m(l(i.strings.plugins.actions.manage),1)]),_:2},1032,["href"])):r("",!0)])])]),_:2},1032,["id"]))),128))]),_:1})])])}const be=k(J,[["render",ge]]);export{be as default};
