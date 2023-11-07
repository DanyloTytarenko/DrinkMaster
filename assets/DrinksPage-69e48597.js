import{_ as f,r as m,j as o,s as b,c as h,L as pt,i as w,u as V,m as H,o as gt,p as F,q as ut,t as xt,v as ht,w as ft,x as mt}from"./index-99e39b88.js";import{S as bt}from"./react-select.esm-346b37f1.js";import{u as A}from"./useMediaQuery-844ea899.js";import{x as yt,y as vt,z as kt,A as q,D as W,E as Ct,k as $t,F as wt,c as O,b as Q,g as G,G as Z,e as N,f as U,a as at,h as T,B as Pt,j as R,i as D}from"./ButtonBase-ac98dde5.js";import{_ as E}from"./assertThisInitialized-cde68979.js";import{e as jt,u as St}from"./extendSxProp-69233ee0.js";import{u as Mt}from"./useTheme-f4aca3cc.js";import{C as zt,S as It,a as Lt,H as Rt,F as Nt}from"./Header-6179600c.js";import{P as _t}from"./PageTitle-cf131367.js";import"./getThemeProps-f53a3a7f.js";import"./index.esm-23a331f5.js";const Bt=yt(),Dt=Bt,Ft=["component","direction","spacing","divider","children","className","useFlexGap"],Ot=vt(),Tt=Dt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Et(t){return kt({props:t,name:"MuiStack",defaultTheme:Ot})}function Wt(t,e){const a=m.Children.toArray(t).filter(Boolean);return a.reduce((n,s,c)=>(n.push(s),c<a.length-1&&n.push(m.cloneElement(e,{key:`separator-${c}`})),n),[])}const Vt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],At=({ownerState:t,theme:e})=>{let a=f({display:"flex",flexDirection:"column"},q({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=Ct(e),s=Object.keys(e.breakpoints.values).reduce((i,r)=>((typeof t.spacing=="object"&&t.spacing[r]!=null||typeof t.direction=="object"&&t.direction[r]!=null)&&(i[r]=!0),i),{}),c=W({values:t.direction,base:s}),l=W({values:t.spacing,base:s});typeof c=="object"&&Object.keys(c).forEach((i,r,y)=>{if(!c[i]){const x=r>0?c[y[r-1]]:"column";c[i]=x}}),a=$t(a,q({theme:e},l,(i,r)=>t.useFlexGap?{gap:Z(n,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Vt(r?c[r]:t.direction)}`]:Z(n,i)}}))}return a=wt(e.breakpoints,a),a};function Qt(t={}){const{createStyledComponent:e=Tt,useThemeProps:a=Et,componentName:n="MuiStack"}=t,s=()=>Q({root:["root"]},i=>G(n,i),{}),c=e(At);return m.forwardRef(function(i,r){const y=a(i),d=jt(y),{component:x="div",direction:v="column",spacing:u=0,divider:S,children:P,className:k,useFlexGap:M=!1}=d,C=E(d,Ft),L={direction:v,spacing:u,useFlexGap:M},j=s();return o.jsx(c,f({as:x,ownerState:L,ref:r,className:O(j.root,k)},C,{children:S?Wt(P,S):P}))})}const Gt=Qt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>U({props:t,name:"MuiStack"})}),Ut=Gt;function Ht(t){return G("MuiPagination",t)}at("MuiPagination",["root","ul","outlined","text"]);const qt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:a="usePagination",count:n=1,defaultPage:s=1,disabled:c=!1,hideNextButton:l=!1,hidePrevButton:p=!1,onChange:i,page:r,showFirstButton:y=!1,showLastButton:d=!1,siblingCount:x=1}=t,v=E(t,qt),[u,S]=St({controlled:r,default:s,name:a,state:"page"}),P=(g,I)=>{r||S(I),i&&i(g,I)},k=(g,I)=>{const lt=I-g+1;return Array.from({length:lt},(Te,dt)=>g+dt)},M=k(1,Math.min(e,n)),C=k(Math.max(n-e+1,e+1),n),L=Math.max(Math.min(u-x,n-e-x*2-1),e+2),j=Math.min(Math.max(u+x,e+x*2+2),C.length>0?C[0]-2:n-1),_=[...y?["first"]:[],...p?[]:["previous"],...M,...L>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...k(L,j),...j<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...C,...l?[]:["next"],...d?["last"]:[]],B=g=>{switch(g){case"first":return 1;case"previous":return u-1;case"next":return u+1;case"last":return n;default:return null}},z=_.map(g=>typeof g=="number"?{onClick:I=>{P(I,g)},type:"page",page:g,selected:g===u,disabled:c,"aria-current":g===u?"true":void 0}:{onClick:I=>{P(I,B(g))},type:g,page:B(g),selected:!1,disabled:c||g.indexOf("ellipsis")===-1&&(g==="next"||g==="last"?u>=n:u<=1)});return f({items:z},v)}function Jt(t){return G("MuiPaginationItem",t)}const Kt=at("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),$=Kt,J=T(o.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),K=T(o.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),X=T(o.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Y=T(o.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Xt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],nt=(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`size${D(a.size)}`],a.variant==="text"&&e[`text${D(a.color)}`],a.variant==="outlined"&&e[`outlined${D(a.color)}`],a.shape==="rounded"&&e.rounded,a.type==="page"&&e.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&e.ellipsis,(a.type==="previous"||a.type==="next")&&e.previousNext,(a.type==="first"||a.type==="last")&&e.firstLast]},Yt=t=>{const{classes:e,color:a,disabled:n,selected:s,size:c,shape:l,type:p,variant:i}=t,r={root:["root",`size${D(c)}`,i,l,a!=="standard"&&`${i}${D(a)}`,n&&"disabled",s&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return Q(r,Jt,e)},te=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:nt})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ee=N(Pt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:nt})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${$.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>f({},e.variant==="text"&&{[`&.${$.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${$.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${$.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:R(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:R(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${$.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),oe=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>f({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),ae=m.forwardRef(function(e,a){const n=U({props:e,name:"MuiPaginationItem"}),{className:s,color:c="standard",component:l,components:p={},disabled:i=!1,page:r,selected:y=!1,shape:d="circular",size:x="medium",slots:v={},type:u="page",variant:S="text"}=n,P=E(n,Xt),k=f({},n,{color:c,disabled:i,selected:y,shape:d,size:x,type:u,variant:S}),M=Mt(),C=Yt(k),j=(M.direction==="rtl"?{previous:v.next||p.next||Y,next:v.previous||p.previous||X,last:v.first||p.first||J,first:v.last||p.last||K}:{previous:v.previous||p.previous||X,next:v.next||p.next||Y,first:v.first||p.first||J,last:v.last||p.last||K})[u];return u==="start-ellipsis"||u==="end-ellipsis"?o.jsx(te,{ref:a,ownerState:k,className:O(C.root,s),children:"…"}):o.jsxs(ee,f({ref:a,ownerState:k,component:l,disabled:i,className:O(C.root,s)},P,{children:[u==="page"&&r,j?o.jsx(oe,{as:j,ownerState:k,className:C.icon}):null]}))}),ne=ae,ie=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],se=t=>{const{classes:e,variant:a}=t;return Q({root:["root",a],ul:["ul"]},Ht,e)},re=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant]]}})({}),ce=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function le(t,e,a){return t==="page"?`${a?"":"Go to "}page ${e}`:`Go to ${t} page`}const de=m.forwardRef(function(e,a){const n=U({props:e,name:"MuiPagination"}),{boundaryCount:s=1,className:c,color:l="standard",count:p=1,defaultPage:i=1,disabled:r=!1,getItemAriaLabel:y=le,hideNextButton:d=!1,hidePrevButton:x=!1,renderItem:v=z=>o.jsx(ne,f({},z)),shape:u="circular",showFirstButton:S=!1,showLastButton:P=!1,siblingCount:k=1,size:M="medium",variant:C="text"}=n,L=E(n,ie),{items:j}=Zt(f({},n,{componentName:"Pagination"})),_=f({},n,{boundaryCount:s,color:l,count:p,defaultPage:i,disabled:r,getItemAriaLabel:y,hideNextButton:d,hidePrevButton:x,renderItem:v,shape:u,showFirstButton:S,showLastButton:P,siblingCount:k,size:M,variant:C}),B=se(_);return o.jsx(re,f({"aria-label":"pagination navigation",className:O(B.root,c),ownerState:_,ref:a},L,{children:o.jsx(ce,{className:B.ul,ownerState:_,children:j.map((z,g)=>o.jsx("li",{children:v(f({},z,{color:l,"aria-label":y(z.type,z.page,z.selected),shape:u,size:M,variant:C}))},g))})}))}),pe=de,ge=({children:t})=>o.jsxs(zt,{children:[t,o.jsx(It,{}),o.jsx(Lt,{})]}),ue="/DrinkMaster/assets/drink-image-fca35edf.jpg",xe=t=>t.drinks.searchQuery,it=t=>t.drinks.categories,st=t=>t.drinks.ingredients,rt=t=>t.drinks.page,ct=t=>t.drinks.searchResults,he=t=>t.drinks.isLoading,fe=b.ul`
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
`,me=b.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,be=b.img`
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
`,ye=b.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,ve=b.p`
  margin: 0;
  color: ${h.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,ke=b(pt)`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${h.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,Ce="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",$e="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",tt="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",we="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Pe=b.div`
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
`,je=b.p`
  margin-top: 32px;
  color: ${h.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,Se=({message:t})=>o.jsxs(Pe,{children:[o.jsxs("picture",{children:[o.jsx("source",{media:"(min-width: 768px)",srcSet:`${Ce} 1x, ${$e} 2x`,width:"261",height:"326"}),o.jsx("source",{media:"(min-width: 375px)",srcSet:`${tt} 1x, ${we} 2x`,width:"198",height:"247"}),o.jsx("img",{src:tt,alt:"not found",width:"198",height:"247"})]}),o.jsx(je,{children:t})]}),Me=()=>{const{drinks:t}=w(ct);return(t==null?void 0:t.length)!==0?o.jsx(fe,{children:t==null?void 0:t.map(e=>o.jsxs(me,{children:[o.jsx(be,{src:e.drinkThumb,alt:e.drink,onError:a=>{a.currentTarget.src=ue}}),o.jsxs(ye,{children:[o.jsx(ve,{children:e.drink}),o.jsx(ke,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))}):o.jsx(Se,{message:"No cocktails found for your request"})},ze=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),Ie=b.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,Le=b.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    justify-content: start;
  }
`,Re=b.label`
  position: relative;
  display: inline-block;
`,Ne=b.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${h.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    color: ${h.light}; //#f3f3f3
    opacity: 1;
  }

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.5);
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,_e=b.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    border: none;
    padding: 0;
    background-color: transparent;

    top: 18px;
    right: 24px;
    cursor: pointer;
  }
`,Be=b(ze)`
  display: block;
  stroke: ${h.light}; //#f3f3f3
`,et=b(bt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    color: ${h.light}; //#f3f3f3
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 229px;
      height: 56px;
      padding: 14px 24px 15px 24px;
      font-size: 17px;
      line-height: 1.56;
    }
  }

  .react-select__placeholder {
    color: ${h.light}; //#f3f3f3
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
    color: ${h.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${h.light}; //#f3f3f3
    padding: 0;
    position: absolute;
    /* transform: rotate(180deg); */

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select-container {
  }
  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    background: #161f37;
    padding: 14px 8px 14px 8px;
    margin-top: 4px;
    width: 335px;
    max-height: 360px;
    border-radius: 20px;
    @media (min-width: 768px) {
      /* width: 199px; //по макету*/
      width: 225px;
    }
  }

  .react-select__single-value {
    color: ${h.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${h.light}; //#f3f3f3
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${h.gray}; //#434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${h.gray}; //#434d67;
      border-radius: 20px;
    }
  }

  .react-select__option {
    background-color: transparent;
    text-overflow: ellipsis;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      color: ${h.light}; //#f3f3f3
      cursor: pointer;
    }
  }
`,ot={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?`${h.light}`:"rgba(243, 243, 243, 0.4)"})},De=()=>{const[t,e]=m.useState(""),a=w(it),n=w(st),s=V(),c=A("(max-width:767px)");m.useEffect(()=>{c&&s(H(t))},[s,c,t]);const l=(d,x="")=>{switch(d){case"searchQuery":e(x),s(F(1));break;case"category":s(ut(x)),s(F(1));break;case"ingredient":s(gt(x)),s(F(1));break}},p=d=>{l("searchQuery",d.target.value.trim())},i=d=>{l("category",d.value)},r=d=>{l("ingredient",d.value)},y=d=>{d.preventDefault(),s(H(t))};return o.jsx(Ie,{children:o.jsxs(Le,{onSubmit:y,children:[o.jsxs(Re,{children:[o.jsx(Ne,{type:"text",placeholder:"Enter the text",onChange:p}),o.jsx(_e,{type:"submit",children:o.jsx(Be,{})})]}),o.jsx(et,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:ot,options:a.map(d=>({label:d,value:d})),onChange:i}),o.jsx(et,{name:"ingredient",styles:ot,placeholder:"Ingredients",classNamePrefix:"react-select",options:n.map(d=>({label:d.title,value:d.title})),onChange:r})]})})},Fe=({limit:t,totalItems:e})=>{const a=w(rt),[n,s]=m.useState(1),[c,l]=m.useState(2),p=V(),i=A("(min-width:768px)"),r=Math.ceil(e/t);m.useEffect(()=>{if(!i&&r>5){s(1),l(0);return}if(i&&r>8){s(3),l(-2);return}s(1),l(2)},[r,i]);const y={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:i?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${h.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return o.jsx(Ut,{sx:y.stack,children:r>1&&o.jsx(pe,{count:r,page:a,boundaryCount:n,siblingCount:c,onChange:(d,x)=>p(F(x)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:y.pagination})})},Oe=b.div`
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
    padding-top: 60px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    /* padding-left: 100px;
    padding-right: 100px; */
    padding-top: 160px;
    max-width: 1440px;
  }
`,Ke=()=>{const t=w(it),e=w(st),a=w(ct),n=w(rt),s=w(xe),c=w(he),l=V(),i=A("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||l(xt())},[t,l]),m.useEffect(()=>{e.length||l(ht())},[l,e]),m.useEffect(()=>{l(ft({searchQuery:s,page:n,limit:i}))},[l,i,n,s]),o.jsxs(o.Fragment,{children:[o.jsx(Rt,{}),o.jsx(ge,{children:o.jsxs(Oe,{children:[o.jsx(_t,{title:"Drinks"}),o.jsx(De,{}),c?o.jsx(mt,{}):o.jsxs(o.Fragment,{children:[o.jsx(Me,{}),o.jsx(Fe,{totalItems:a.max_page,limit:i})]})]})}),o.jsx(Nt,{})]})};export{Ke as default};
