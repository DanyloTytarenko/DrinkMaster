import{_ as f,r as m,j as o,s as $,c as T,L as ut,i as C,u as V,m as H,o as q,p as O,q as J,t as xt,v as ft,w as ht,x as mt}from"./index-5631a1ce.js";import{d as bt,S as yt,a as vt,b as kt,c as Ct,e as Pt,f as jt,g as K,h as X}from"./DrinksSearch.styled-9a62fb77.js";import{u as _}from"./useMediaQuery-d229e1dd.js";import{x as $t,y as St,z as It,A as Y,D as W,E as Mt,k as zt,F as Lt,c as F,b as Q,g as U,G as Z,e as R,f as G,a as nt,h as A,B as Nt,j as N,i as B}from"./ButtonBase-9ce82ab0.js";import{_ as E}from"./assertThisInitialized-1e70281c.js";import{e as Rt,u as wt}from"./extendSxProp-b8625d04.js";import{u as Dt}from"./useTheme-13709547.js";import{H as Bt,F as Ot}from"./Header-49cf0926.js";import{P as Ft}from"./PageTitle-c62317ea.js";import{M as Tt}from"./MainAppContainer-73cb94f0.js";import"./react-select.esm-f68c5baa.js";import"./getThemeProps-afd1e9c2.js";import"./index.esm-105db11b.js";const At=$t(),Et=At,Wt=["component","direction","spacing","divider","children","className","useFlexGap"],Vt=St(),_t=Et("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Qt(t){return It({props:t,name:"MuiStack",defaultTheme:Vt})}function Ut(t,e){const a=m.Children.toArray(t).filter(Boolean);return a.reduce((s,p,c)=>(s.push(p),c<a.length-1&&s.push(m.cloneElement(e,{key:`separator-${c}`})),s),[])}const Gt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Ht=({ownerState:t,theme:e})=>{let a=f({display:"flex",flexDirection:"column"},Y({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),s=>({flexDirection:s})));if(t.spacing){const s=Mt(e),p=Object.keys(e.breakpoints.values).reduce((n,l)=>((typeof t.spacing=="object"&&t.spacing[l]!=null||typeof t.direction=="object"&&t.direction[l]!=null)&&(n[l]=!0),n),{}),c=W({values:t.direction,base:p}),i=W({values:t.spacing,base:p});typeof c=="object"&&Object.keys(c).forEach((n,l,h)=>{if(!c[n]){const x=l>0?c[h[l-1]]:"column";c[n]=x}}),a=zt(a,Y({theme:e},i,(n,l)=>t.useFlexGap?{gap:Z(s,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Gt(l?c[l]:t.direction)}`]:Z(s,n)}}))}return a=Lt(e.breakpoints,a),a};function qt(t={}){const{createStyledComponent:e=_t,useThemeProps:a=Qt,componentName:s="MuiStack"}=t,p=()=>Q({root:["root"]},n=>U(s,n),{}),c=e(Ht);return m.forwardRef(function(n,l){const h=a(n),b=Rt(h),{component:x="div",direction:r="column",spacing:d=0,divider:S,children:P,className:y,useFlexGap:I=!1}=b,v=E(b,Wt),L={direction:r,spacing:d,useFlexGap:I},j=p();return o.jsx(c,f({as:x,ownerState:L,ref:l,className:F(j.root,y)},v,{children:S?Ut(P,S):P}))})}const Jt=qt({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Kt=Jt;function Xt(t){return U("MuiPagination",t)}nt("MuiPagination",["root","ul","outlined","text"]);const Yt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:a="usePagination",count:s=1,defaultPage:p=1,disabled:c=!1,hideNextButton:i=!1,hidePrevButton:g=!1,onChange:n,page:l,showFirstButton:h=!1,showLastButton:b=!1,siblingCount:x=1}=t,r=E(t,Yt),[d,S]=wt({controlled:l,default:p,name:a,state:"page"}),P=(u,z)=>{l||S(z),n&&n(u,z)},y=(u,z)=>{const pt=z-u+1;return Array.from({length:pt},(De,gt)=>u+gt)},I=y(1,Math.min(e,s)),v=y(Math.max(s-e+1,e+1),s),L=Math.max(Math.min(d-x,s-e-x*2-1),e+2),j=Math.min(Math.max(d+x,e+x*2+2),v.length>0?v[0]-2:s-1),w=[...h?["first"]:[],...g?[]:["previous"],...I,...L>e+2?["start-ellipsis"]:e+1<s-e?[e+1]:[],...y(L,j),...j<s-e-1?["end-ellipsis"]:s-e>e?[s-e]:[],...v,...i?[]:["next"],...b?["last"]:[]],D=u=>{switch(u){case"first":return 1;case"previous":return d-1;case"next":return d+1;case"last":return s;default:return null}},M=w.map(u=>typeof u=="number"?{onClick:z=>{P(z,u)},type:"page",page:u,selected:u===d,disabled:c,"aria-current":u===d?"true":void 0}:{onClick:z=>{P(z,D(u))},type:u,page:D(u),selected:!1,disabled:c||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?d>=s:d<=1)});return f({items:M},r)}function te(t){return U("MuiPaginationItem",t)}const ee=nt("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),k=ee,tt=A(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),et=A(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),at=A(o.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),ot=A(o.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ae=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],it=(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`size${B(a.size)}`],a.variant==="text"&&e[`text${B(a.color)}`],a.variant==="outlined"&&e[`outlined${B(a.color)}`],a.shape==="rounded"&&e.rounded,a.type==="page"&&e.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&e.ellipsis,(a.type==="previous"||a.type==="next")&&e.previousNext,(a.type==="first"||a.type==="last")&&e.firstLast]},oe=t=>{const{classes:e,color:a,disabled:s,selected:p,size:c,shape:i,type:g,variant:n}=t,l={root:["root",`size${B(c)}`,n,i,a!=="standard"&&`${n}${B(a)}`,s&&"disabled",p&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[g]],icon:["icon"]};return Q(l,te,e)},se=R("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:it})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ne=R(Nt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:it})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${k.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>f({},e.variant==="text"&&{[`&.${k.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${k.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${k.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:N(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:N(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${k.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),ie=R("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>f({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),re=m.forwardRef(function(e,a){const s=G({props:e,name:"MuiPaginationItem"}),{className:p,color:c="standard",component:i,components:g={},disabled:n=!1,page:l,selected:h=!1,shape:b="circular",size:x="medium",slots:r={},type:d="page",variant:S="text"}=s,P=E(s,ae),y=f({},s,{color:c,disabled:n,selected:h,shape:b,size:x,type:d,variant:S}),I=Dt(),v=oe(y),j=(I.direction==="rtl"?{previous:r.next||g.next||ot,next:r.previous||g.previous||at,last:r.first||g.first||tt,first:r.last||g.last||et}:{previous:r.previous||g.previous||at,next:r.next||g.next||ot,first:r.first||g.first||tt,last:r.last||g.last||et})[d];return d==="start-ellipsis"||d==="end-ellipsis"?o.jsx(se,{ref:a,ownerState:y,className:F(v.root,p),children:"…"}):o.jsxs(ne,f({ref:a,ownerState:y,component:i,disabled:n,className:F(v.root,p)},P,{children:[d==="page"&&l,j?o.jsx(ie,{as:j,ownerState:y,className:v.icon}):null]}))}),le=re,ce=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],de=t=>{const{classes:e,variant:a}=t;return Q({root:["root",a],ul:["ul"]},Xt,e)},pe=R("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant]]}})({}),ge=R("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ue(t,e,a){return t==="page"?`${a?"":"Go to "}page ${e}`:`Go to ${t} page`}const xe=m.forwardRef(function(e,a){const s=G({props:e,name:"MuiPagination"}),{boundaryCount:p=1,className:c,color:i="standard",count:g=1,defaultPage:n=1,disabled:l=!1,getItemAriaLabel:h=ue,hideNextButton:b=!1,hidePrevButton:x=!1,renderItem:r=M=>o.jsx(le,f({},M)),shape:d="circular",showFirstButton:S=!1,showLastButton:P=!1,siblingCount:y=1,size:I="medium",variant:v="text"}=s,L=E(s,ce),{items:j}=Zt(f({},s,{componentName:"Pagination"})),w=f({},s,{boundaryCount:p,color:i,count:g,defaultPage:n,disabled:l,getItemAriaLabel:h,hideNextButton:b,hidePrevButton:x,renderItem:r,shape:d,showFirstButton:S,showLastButton:P,siblingCount:y,size:I,variant:v}),D=de(w);return o.jsx(pe,f({"aria-label":"pagination navigation",className:F(D.root,c),ownerState:w,ref:a},L,{children:o.jsx(ge,{className:D.ul,ownerState:w,children:j.map((M,u)=>o.jsx("li",{children:r(f({},M,{color:i,"aria-label":h(M.type,M.page,M.selected),shape:d,size:I,variant:v}))},u))})}))}),fe=xe,he=t=>t.drinks.searchQuery,rt=t=>t.drinks.categories,lt=t=>t.drinks.ingredients,ct=t=>t.drinks.page,dt=t=>t.drinks.searchResults,me=t=>t.drinks.isLoading,be=$.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`,ye=$.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,ve=$.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,ke=$.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,Ce=$.p`
  margin: 0;
  color: ${T.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,Pe=$(ut)`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${T.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,je="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",$e="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",st="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",Se="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Ie=$.div`
  margin-top: 91px;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`,Me=$.p`
  margin-top: 32px;
  color: ${T.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,ze=({message:t})=>o.jsxs(Ie,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:"(min-width: 768px)",srcSet:`${je} 1x, ${$e} 2x`,width:"261",height:"326"}),o.jsx("source",{media:"(min-width: 375px)",srcSet:`${st} 1x, ${Se} 2x`,width:"198",height:"247"}),o.jsx("img",{src:st,alt:"not found",width:"198",height:"247"})]}),o.jsx(Me,{children:t})]}),Le=()=>{const{drinks:t}=C(dt);return(t==null?void 0:t.length)!==0?o.jsx(be,{children:t==null?void 0:t.map(e=>o.jsxs(ye,{children:[o.jsx(ve,{src:e.drinkThumb,alt:e.drink,onError:a=>{a.currentTarget.src=bt}}),o.jsxs(ke,{children:[o.jsx(Ce,{children:e.drink}),o.jsx(Pe,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))}):o.jsx(ze,{message:"No cocktails found for your request"})},Ne=()=>{const[t,e]=m.useState(""),a=C(rt),s=C(lt),p=a.length!==0?["All categories",...a]:[],c=s.length!==0?[{title:"All ingredients"},...s]:[];console.log("allIngredients :>> ",c);const i=V(),g=_("(max-width:767px)");m.useEffect(()=>{g&&i(H(t))},[i,g,t]);const n=(r,d="")=>{switch(r){case"searchQuery":e(d),i(O(1));break;case"category":if(d==="All categories"){i(J(""));return}i(J(d)),i(O(1));break;case"ingredient":if(d==="All ingredients"){i(q(""));return}i(q(d)),i(O(1));break}},l=r=>{n("searchQuery",r.target.value.trim())},h=r=>{n("category",r.value)},b=r=>{n("ingredient",r.value)},x=r=>{r.preventDefault(),i(H(t))};return o.jsx(yt,{children:o.jsxs(vt,{onSubmit:x,children:[o.jsxs(kt,{children:[o.jsx(Ct,{type:"text",placeholder:"Enter the text",onChange:l}),o.jsx(Pt,{type:"submit",children:o.jsx(jt,{})})]}),o.jsx(K,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:X,noOptionsMessage:()=>"No categories",options:p.map(r=>({label:r,value:r})),onChange:h}),o.jsx(K,{name:"ingredient",styles:X,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:c.map(r=>({label:r.title,value:r.title})),onChange:b})]})})},Re=({limit:t,totalItems:e})=>{const a=C(ct),[s,p]=m.useState(1),[c,i]=m.useState(2),g=V(),n=_("(min-width:768px)"),l=Math.ceil(e/t);m.useEffect(()=>{if(!n&&l>5){p(1),i(0);return}if(n&&l>8){p(3),i(-2);return}p(1),i(2)},[l,n]);const h={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:n?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${T.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return o.jsx(Kt,{sx:h.stack,children:l>1&&o.jsx(fe,{count:l,page:a,boundaryCount:s,siblingCount:c,onChange:(b,x)=>g(O(x)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:h.pagination})})},we=$.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #0a0a11; */
  box-sizing: border-box;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    /* padding-left: 32px;
    padding-right: 32px; */
    padding-top: 140px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    /* padding-left: 100px;
    padding-right: 100px; */
    padding-top: 160px;
    max-width: 1440px;
  }
`,qe=()=>{const t=C(rt),e=C(lt),a=C(dt),s=C(ct),p=C(he),c=C(me),i=V(),n=_("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||i(xt())},[t,i]),m.useEffect(()=>{e.length||i(ft())},[i,e]),m.useEffect(()=>{i(ht({searchQuery:p,page:s,limit:n}))},[i,n,s,p]),o.jsxs(o.Fragment,{children:[o.jsx(Bt,{}),o.jsx(Tt,{children:o.jsxs(we,{children:[o.jsx(Ft,{title:"Drinks"}),o.jsx(Ne,{}),c?o.jsx(mt,{}):o.jsxs(o.Fragment,{children:[o.jsx(Le,{}),o.jsx(Re,{totalItems:a.max_page,limit:n})]})]})}),o.jsx(Ot,{})]})};export{qe as default};
