import{B as x}from"./Caret.833cbb47.js";import{B as I}from"./Img.ce944fbf.js";import{B as b,S as V}from"./index.63c9ec9d.js";import{S as w}from"./Plus.cf4682aa.js";import{I as C,r as a,o as d,c as z,a as p,g as i,w as c,d as B,f as _,b as M,C as P,y as U,n as k}from"./vue.runtime.esm-bundler.a2ae84e1.js";import{_ as N}from"./_plugin-vue_export-helper.d7c6d548.js";let o={};const m={components:{BaseButton:x,BaseImg:I,BaseInput:b,SvgCirclePlus:w,SvgTrash:V},emits:["update:modelValue"],methods:{setImgSrc(e){this.$emit("update:modelValue",e)},openUploadModal(){o=window.wp.media({title:this.$t.__("Choose Image",this.$td),button:{text:this.$t.__("Choose Image",this.$td)},multiple:!1}),o.on("select",()=>{const e=o.state().get("selection").first().toJSON();this.setImgSrc((e==null?void 0:e.url)||null)}),o.on("close",()=>{o.detach()}),this.$nextTick(()=>{o.open()})}},props:{baseSize:{type:String,default:"medium"},imgPreviewMaxHeight:{type:String,default:"525px"},imgPreviewMaxWidth:{type:String,default:"525px"},description:String,modelValue:{type:String,default:""}},data(){return{strings:{description:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),remove:this.$t.__("Remove",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td)}}},computed:{iconWidth(){return this.baseSize==="small"?"16":"20"}}},g=()=>{C(e=>({60602498:e.imgPreviewMaxHeight,a69ae8ce:e.imgPreviewMaxWidth}))},h=m.setup;m.setup=h?(e,t)=>(g(),h(e,t)):g;const T={class:"image-upload"},L=["innerHTML"];function W(e,t,s,$,r,n){const f=a("svg-trash"),u=a("base-button"),S=a("base-input"),v=a("svg-circle-plus"),y=a("base-img");return d(),z("div",{class:k(["aioseo-image-uploader",{"aioseo-image-uploader--has-image":!!s.modelValue}])},[p("div",T,[i(S,{size:s.baseSize,modelValue:s.modelValue,placeholder:r.strings.pasteYourImageUrl,onChange:t[1]||(t[1]=l=>n.setImgSrc(l))},{"append-icon":c(()=>[s.modelValue?(d(),B(u,{key:0,size:s.baseSize,class:"remove-image",type:"gray",onClick:t[0]||(t[0]=_(l=>n.setImgSrc(null),["prevent"]))},{default:c(()=>[i(f,{width:n.iconWidth},null,8,["width"])]),_:1},8,["size"])):M("",!0)]),_:1},8,["size","modelValue","placeholder"]),i(u,{size:s.baseSize,class:"insert-image",type:"black",onClick:t[2]||(t[2]=_(l=>n.openUploadModal(),["prevent"]))},{default:c(()=>[i(v,{width:"14"}),P(" "+U(r.strings.uploadOrSelectImage),1)]),_:1},8,["size"])]),p("div",{class:"aioseo-description",innerHTML:s.description||r.strings.description},null,8,L),i(y,{class:"image-preview",src:s.modelValue},null,8,["src"])],2)}const J=N(m,[["render",W],["__scopeId","data-v-8f427e02"]]);export{J as C};
