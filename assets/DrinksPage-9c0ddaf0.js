import{_ as f,r as b,j as o,s as $,c as T,L as pt,i as C,u as _,m as H,o as ut,p as F,q as gt,t as xt,v as ft,w as ht,x as mt}from"./index-57419fe0.js";import{d as bt,S as yt,a as vt,b as kt,c as Ct,e as Pt,f as jt,g as q,h as J,M as $t}from"./DrinksSearch.styled-05d87a36.js";import{u as A}from"./useMediaQuery-daf633a2.js";import{x as St,y as It,z as Mt,A as K,D as V,E as zt,k as Lt,F as Rt,c as O,b as Q,g as U,G as X,e as N,f as G,a as ot,h as E,B as Nt,j as R,i as B}from"./ButtonBase-8c4dfd3f.js";import{_ as W}from"./assertThisInitialized-87eb47d8.js";import{e as wt,u as Dt}from"./extendSxProp-2fed0a84.js";import{u as Bt}from"./useTheme-db50733c.js";import{H as Ft,F as Ot}from"./Header-cf7492c5.js";import{P as Tt}from"./PageTitle-5f8a6446.js";import"./react-select.esm-4b8b538a.js";import"./getThemeProps-c6edc7fd.js";import"./index.esm-70de8a09.js";const Et=St(),Wt=Et,Vt=["component","direction","spacing","divider","children","className","useFlexGap"],_t=It(),At=Wt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Qt(t){return Mt({props:t,name:"MuiStack",defaultTheme:_t})}function Ut(t,e){const a=b.Children.toArray(t).filter(Boolean);return a.reduce((s,i,c)=>(s.push(i),c<a.length-1&&s.push(b.cloneElement(e,{key:`separator-${c}`})),s),[])}const Gt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Ht=({ownerState:t,theme:e})=>{let a=f({display:"flex",flexDirection:"column"},K({theme:e},V({values:t.direction,breakpoints:e.breakpoints.values}),s=>({flexDirection:s})));if(t.spacing){const s=zt(e),i=Object.keys(e.breakpoints.values).reduce((n,r)=>((typeof t.spacing=="object"&&t.spacing[r]!=null||typeof t.direction=="object"&&t.direction[r]!=null)&&(n[r]=!0),n),{}),c=V({values:t.direction,base:i}),l=V({values:t.spacing,base:i});typeof c=="object"&&Object.keys(c).forEach((n,r,h)=>{if(!c[n]){const x=r>0?c[h[r-1]]:"column";c[n]=x}}),a=Lt(a,K({theme:e},l,(n,r)=>t.useFlexGap?{gap:X(s,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Gt(r?c[r]:t.direction)}`]:X(s,n)}}))}return a=Rt(e.breakpoints,a),a};function qt(t={}){const{createStyledComponent:e=At,useThemeProps:a=Qt,componentName:s="MuiStack"}=t,i=()=>Q({root:["root"]},n=>U(s,n),{}),c=e(Ht);return b.forwardRef(function(n,r){const h=a(n),d=wt(h),{component:x="div",direction:m="column",spacing:g=0,divider:S,children:P,className:y,useFlexGap:I=!1}=d,v=W(d,Vt),L={direction:m,spacing:g,useFlexGap:I},j=i();return o.jsx(c,f({as:x,ownerState:L,ref:r,className:O(j.root,y)},v,{children:S?Ut(P,S):P}))})}const Jt=qt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Kt=Jt;function Xt(t){return U("MuiPagination",t)}ot("MuiPagination",["root","ul","outlined","text"]);const Yt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:a="usePagination",count:s=1,defaultPage:i=1,disabled:c=!1,hideNextButton:l=!1,hidePrevButton:p=!1,onChange:n,page:r,showFirstButton:h=!1,showLastButton:d=!1,siblingCount:x=1}=t,m=W(t,Yt),[g,S]=Dt({controlled:r,default:i,name:a,state:"page"}),P=(u,z)=>{r||S(z),n&&n(u,z)},y=(u,z)=>{const lt=z-u+1;return Array.from({length:lt},(De,dt)=>u+dt)},I=y(1,Math.min(e,s)),v=y(Math.max(s-e+1,e+1),s),L=Math.max(Math.min(g-x,s-e-x*2-1),e+2),j=Math.min(Math.max(g+x,e+x*2+2),v.length>0?v[0]-2:s-1),w=[...h?["first"]:[],...p?[]:["previous"],...I,...L>e+2?["start-ellipsis"]:e+1<s-e?[e+1]:[],...y(L,j),...j<s-e-1?["end-ellipsis"]:s-e>e?[s-e]:[],...v,...l?[]:["next"],...d?["last"]:[]],D=u=>{switch(u){case"first":return 1;case"previous":return g-1;case"next":return g+1;case"last":return s;default:return null}},M=w.map(u=>typeof u=="number"?{onClick:z=>{P(z,u)},type:"page",page:u,selected:u===g,disabled:c,"aria-current":u===g?"true":void 0}:{onClick:z=>{P(z,D(u))},type:u,page:D(u),selected:!1,disabled:c||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?g>=s:g<=1)});return f({items:M},m)}function te(t){return U("MuiPaginationItem",t)}const ee=ot("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),k=ee,Y=E(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Z=E(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),tt=E(o.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),et=E(o.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ae=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],st=(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`size${B(a.size)}`],a.variant==="text"&&e[`text${B(a.color)}`],a.variant==="outlined"&&e[`outlined${B(a.color)}`],a.shape==="rounded"&&e.rounded,a.type==="page"&&e.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&e.ellipsis,(a.type==="previous"||a.type==="next")&&e.previousNext,(a.type==="first"||a.type==="last")&&e.firstLast]},oe=t=>{const{classes:e,color:a,disabled:s,selected:i,size:c,shape:l,type:p,variant:n}=t,r={root:["root",`size${B(c)}`,n,l,a!=="standard"&&`${n}${B(a)}`,s&&"disabled",i&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return Q(r,te,e)},se=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ne=N(Nt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${k.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${k.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>f({},e.variant==="text"&&{[`&.${k.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${k.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${k.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${k.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:R(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:R(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${k.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${k.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),ie=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>f({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),re=b.forwardRef(function(e,a){const s=G({props:e,name:"MuiPaginationItem"}),{className:i,color:c="standard",component:l,components:p={},disabled:n=!1,page:r,selected:h=!1,shape:d="circular",size:x="medium",slots:m={},type:g="page",variant:S="text"}=s,P=W(s,ae),y=f({},s,{color:c,disabled:n,selected:h,shape:d,size:x,type:g,variant:S}),I=Bt(),v=oe(y),j=(I.direction==="rtl"?{previous:m.next||p.next||et,next:m.previous||p.previous||tt,last:m.first||p.first||Y,first:m.last||p.last||Z}:{previous:m.previous||p.previous||tt,next:m.next||p.next||et,first:m.first||p.first||Y,last:m.last||p.last||Z})[g];return g==="start-ellipsis"||g==="end-ellipsis"?o.jsx(se,{ref:a,ownerState:y,className:O(v.root,i),children:"…"}):o.jsxs(ne,f({ref:a,ownerState:y,component:l,disabled:n,className:O(v.root,i)},P,{children:[g==="page"&&r,j?o.jsx(ie,{as:j,ownerState:y,className:v.icon}):null]}))}),ce=re,le=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],de=t=>{const{classes:e,variant:a}=t;return Q({root:["root",a],ul:["ul"]},Xt,e)},pe=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant]]}})({}),ue=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ge(t,e,a){return t==="page"?`${a?"":"Go to "}page ${e}`:`Go to ${t} page`}const xe=b.forwardRef(function(e,a){const s=G({props:e,name:"MuiPagination"}),{boundaryCount:i=1,className:c,color:l="standard",count:p=1,defaultPage:n=1,disabled:r=!1,getItemAriaLabel:h=ge,hideNextButton:d=!1,hidePrevButton:x=!1,renderItem:m=M=>o.jsx(ce,f({},M)),shape:g="circular",showFirstButton:S=!1,showLastButton:P=!1,siblingCount:y=1,size:I="medium",variant:v="text"}=s,L=W(s,le),{items:j}=Zt(f({},s,{componentName:"Pagination"})),w=f({},s,{boundaryCount:i,color:l,count:p,defaultPage:n,disabled:r,getItemAriaLabel:h,hideNextButton:d,hidePrevButton:x,renderItem:m,shape:g,showFirstButton:S,showLastButton:P,siblingCount:y,size:I,variant:v}),D=de(w);return o.jsx(pe,f({"aria-label":"pagination navigation",className:O(D.root,c),ownerState:w,ref:a},L,{children:o.jsx(ue,{className:D.ul,ownerState:w,children:j.map((M,u)=>o.jsx("li",{children:m(f({},M,{color:l,"aria-label":h(M.type,M.page,M.selected),shape:g,size:I,variant:v}))},u))})}))}),fe=xe,he=t=>t.drinks.searchQuery,nt=t=>t.drinks.categories,it=t=>t.drinks.ingredients,rt=t=>t.drinks.page,ct=t=>t.drinks.searchResults,me=t=>t.drinks.isLoading,be=$.ul`
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
`,Pe=$(pt)`
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
`,je="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",$e="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",at="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",Se="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Ie=$.div`
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
`,ze=({message:t})=>o.jsxs(Ie,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:"(min-width: 768px)",srcSet:`${je} 1x, ${$e} 2x`,width:"261",height:"326"}),o.jsx("source",{media:"(min-width: 375px)",srcSet:`${at} 1x, ${Se} 2x`,width:"198",height:"247"}),o.jsx("img",{src:at,alt:"not found",width:"198",height:"247"})]}),o.jsx(Me,{children:t})]}),Le=()=>{const{drinks:t}=C(ct);return(t==null?void 0:t.length)!==0?o.jsx(be,{children:t==null?void 0:t.map(e=>o.jsxs(ye,{children:[o.jsx(ve,{src:e.drinkThumb,alt:e.drink,onError:a=>{a.currentTarget.src=bt}}),o.jsxs(ke,{children:[o.jsx(Ce,{children:e.drink}),o.jsx(Pe,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))}):o.jsx(ze,{message:"No cocktails found for your request"})},Re=()=>{const[t,e]=b.useState(""),a=C(nt),s=C(it),i=_(),c=A("(max-width:767px)");b.useEffect(()=>{c&&i(H(t))},[i,c,t]);const l=(d,x="")=>{switch(d){case"searchQuery":e(x),i(F(1));break;case"category":i(gt(x)),i(F(1));break;case"ingredient":i(ut(x)),i(F(1));break}},p=d=>{l("searchQuery",d.target.value.trim())},n=d=>{l("category",d.value)},r=d=>{l("ingredient",d.value)},h=d=>{d.preventDefault(),i(H(t))};return o.jsx(yt,{children:o.jsxs(vt,{onSubmit:h,children:[o.jsxs(kt,{children:[o.jsx(Ct,{type:"text",placeholder:"Enter the text",onChange:p}),o.jsx(Pt,{type:"submit",children:o.jsx(jt,{})})]}),o.jsx(q,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:J,options:a.map(d=>({label:d,value:d})),onChange:n}),o.jsx(q,{name:"ingredient",styles:J,placeholder:"Ingredients",classNamePrefix:"react-select",options:s.map(d=>({label:d.title,value:d.title})),onChange:r})]})})},Ne=({limit:t,totalItems:e})=>{const a=C(rt),[s,i]=b.useState(1),[c,l]=b.useState(2),p=_(),n=A("(min-width:768px)"),r=Math.ceil(e/t);b.useEffect(()=>{if(!n&&r>5){i(1),l(0);return}if(n&&r>8){i(3),l(-2);return}i(1),l(2)},[r,n]);const h={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:n?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${T.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return o.jsx(Kt,{sx:h.stack,children:r>1&&o.jsx(fe,{count:r,page:a,boundaryCount:s,siblingCount:c,onChange:(d,x)=>p(F(x)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:h.pagination})})},we=$.div`
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
`,He=()=>{const t=C(nt),e=C(it),a=C(ct),s=C(rt),i=C(he),c=C(me),l=_(),n=A("(min-width:769px)")?9:10;return b.useEffect(()=>{t.length||l(xt())},[t,l]),b.useEffect(()=>{e.length||l(ft())},[l,e]),b.useEffect(()=>{l(ht({searchQuery:i,page:s,limit:n}))},[l,n,s,i]),o.jsxs(o.Fragment,{children:[o.jsx(Ft,{}),o.jsx($t,{children:o.jsxs(we,{children:[o.jsx(Tt,{title:"Drinks"}),o.jsx(Re,{}),c?o.jsx(mt,{}):o.jsxs(o.Fragment,{children:[o.jsx(Le,{}),o.jsx(Ne,{totalItems:a.max_page,limit:n})]})]})}),o.jsx(Ot,{})]})};export{He as default};
