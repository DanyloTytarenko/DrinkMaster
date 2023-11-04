import{_ as h,r as m,j as n,s as v,L as dt,u as P,h as H,i as pt,k as O,m as gt,o as ut,p as xt,q as ft,t as ht}from"./index-72197f4a.js";import{c as f,H as mt,F as bt}from"./Header-6d50434c.js";import{S as yt}from"./react-select.esm-46c8d611.js";import{u as V}from"./useMediaQuery-0ac8718e.js";import{u as Q}from"./index.esm-2d91678b.js";import{E as vt,F as kt,G as Ct,H as q,I as W,J as $t,z as Pt,K as wt,r as jt,j as T,c as U,g as A,L as J,s as R,e as G,a as at,m as St,f as F,B as zt,i as _,k as It,h as D}from"./ButtonBase-911bf562.js";import{_ as E}from"./assertThisInitialized-27db5820.js";const Lt=vt(),Mt=Lt,_t=["component","direction","spacing","divider","children","className","useFlexGap"],Rt=kt(),Nt=Mt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Bt(t){return Ct({props:t,name:"MuiStack",defaultTheme:Rt})}function Dt(t,e){const a=m.Children.toArray(t).filter(Boolean);return a.reduce((o,s,c)=>(o.push(s),c<a.length-1&&o.push(m.cloneElement(e,{key:`separator-${c}`})),o),[])}const Ot=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Tt=({ownerState:t,theme:e})=>{let a=h({display:"flex",flexDirection:"column"},q({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),o=>({flexDirection:o})));if(t.spacing){const o=$t(e),s=Object.keys(e.breakpoints.values).reduce((i,r)=>((typeof t.spacing=="object"&&t.spacing[r]!=null||typeof t.direction=="object"&&t.direction[r]!=null)&&(i[r]=!0),i),{}),c=W({values:t.direction,base:s}),l=W({values:t.spacing,base:s});typeof c=="object"&&Object.keys(c).forEach((i,r,b)=>{if(!c[i]){const x=r>0?c[b[r-1]]:"column";c[i]=x}}),a=Pt(a,q({theme:e},l,(i,r)=>t.useFlexGap?{gap:J(o,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ot(r?c[r]:t.direction)}`]:J(o,i)}}))}return a=wt(e.breakpoints,a),a};function Ft(t={}){const{createStyledComponent:e=Nt,useThemeProps:a=Bt,componentName:o="MuiStack"}=t,s=()=>U({root:["root"]},i=>A(o,i),{}),c=e(Tt);return m.forwardRef(function(i,r){const b=a(i),d=jt(b),{component:x="div",direction:y="column",spacing:u=0,divider:S,children:w,className:k,useFlexGap:z=!1}=d,C=E(d,_t),M={direction:y,spacing:u,useFlexGap:z},j=s();return n.jsx(c,h({as:x,ownerState:M,ref:r,className:T(j.root,k)},C,{children:S?Dt(w,S):w}))})}const Et=Ft({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Wt=Et;function Vt(t){return A("MuiPagination",t)}at("MuiPagination",["root","ul","outlined","text"]);const Qt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Ut(t={}){const{boundaryCount:e=1,componentName:a="usePagination",count:o=1,defaultPage:s=1,disabled:c=!1,hideNextButton:l=!1,hidePrevButton:p=!1,onChange:i,page:r,showFirstButton:b=!1,showLastButton:d=!1,siblingCount:x=1}=t,y=E(t,Qt),[u,S]=St({controlled:r,default:s,name:a,state:"page"}),w=(g,L)=>{r||S(L),i&&i(g,L)},k=(g,L)=>{const ct=L-g+1;return Array.from({length:ct},(ze,lt)=>g+lt)},z=k(1,Math.min(e,o)),C=k(Math.max(o-e+1,e+1),o),M=Math.max(Math.min(u-x,o-e-x*2-1),e+2),j=Math.min(Math.max(u+x,e+x*2+2),C.length>0?C[0]-2:o-1),N=[...b?["first"]:[],...p?[]:["previous"],...z,...M>e+2?["start-ellipsis"]:e+1<o-e?[e+1]:[],...k(M,j),...j<o-e-1?["end-ellipsis"]:o-e>e?[o-e]:[],...C,...l?[]:["next"],...d?["last"]:[]],B=g=>{switch(g){case"first":return 1;case"previous":return u-1;case"next":return u+1;case"last":return o;default:return null}},I=N.map(g=>typeof g=="number"?{onClick:L=>{w(L,g)},type:"page",page:g,selected:g===u,disabled:c,"aria-current":g===u?"true":void 0}:{onClick:L=>{w(L,B(g))},type:g,page:B(g),selected:!1,disabled:c||g.indexOf("ellipsis")===-1&&(g==="next"||g==="last"?u>=o:u<=1)});return h({items:I},y)}function At(t){return A("MuiPaginationItem",t)}const Gt=at("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),$=Gt,K=F(n.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Z=F(n.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),X=F(n.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Y=F(n.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Ht=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],ot=(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],e[`size${D(a.size)}`],a.variant==="text"&&e[`text${D(a.color)}`],a.variant==="outlined"&&e[`outlined${D(a.color)}`],a.shape==="rounded"&&e.rounded,a.type==="page"&&e.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&e.ellipsis,(a.type==="previous"||a.type==="next")&&e.previousNext,(a.type==="first"||a.type==="last")&&e.firstLast]},qt=t=>{const{classes:e,color:a,disabled:o,selected:s,size:c,shape:l,type:p,variant:i}=t,r={root:["root",`size${D(c)}`,i,l,a!=="standard"&&`${i}${D(a)}`,o&&"disabled",s&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return U(r,At,e)},Jt=R("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:ot})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),Kt=R(zt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:ot})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:_(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${$.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>h({},e.variant==="text"&&{[`&.${$.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${$.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${$.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:_(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:_(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:_(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${$.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),Zt=R("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>h({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),Xt=m.forwardRef(function(e,a){const o=G({props:e,name:"MuiPaginationItem"}),{className:s,color:c="standard",component:l,components:p={},disabled:i=!1,page:r,selected:b=!1,shape:d="circular",size:x="medium",slots:y={},type:u="page",variant:S="text"}=o,w=E(o,Ht),k=h({},o,{color:c,disabled:i,selected:b,shape:d,size:x,type:u,variant:S}),z=It(),C=qt(k),j=(z.direction==="rtl"?{previous:y.next||p.next||Y,next:y.previous||p.previous||X,last:y.first||p.first||K,first:y.last||p.last||Z}:{previous:y.previous||p.previous||X,next:y.next||p.next||Y,first:y.first||p.first||K,last:y.last||p.last||Z})[u];return u==="start-ellipsis"||u==="end-ellipsis"?n.jsx(Jt,{ref:a,ownerState:k,className:T(C.root,s),children:"…"}):n.jsxs(Kt,h({ref:a,ownerState:k,component:l,disabled:i,className:T(C.root,s)},w,{children:[u==="page"&&r,j?n.jsx(Zt,{as:j,ownerState:k,className:C.icon}):null]}))}),Yt=Xt,te=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],ee=t=>{const{classes:e,variant:a}=t;return U({root:["root",a],ul:["ul"]},Vt,e)},ae=R("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant]]}})({}),oe=R("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ne(t,e,a){return t==="page"?`${a?"":"Go to "}page ${e}`:`Go to ${t} page`}const ie=m.forwardRef(function(e,a){const o=G({props:e,name:"MuiPagination"}),{boundaryCount:s=1,className:c,color:l="standard",count:p=1,defaultPage:i=1,disabled:r=!1,getItemAriaLabel:b=ne,hideNextButton:d=!1,hidePrevButton:x=!1,renderItem:y=I=>n.jsx(Yt,h({},I)),shape:u="circular",showFirstButton:S=!1,showLastButton:w=!1,siblingCount:k=1,size:z="medium",variant:C="text"}=o,M=E(o,te),{items:j}=Ut(h({},o,{componentName:"Pagination"})),N=h({},o,{boundaryCount:s,color:l,count:p,defaultPage:i,disabled:r,getItemAriaLabel:b,hideNextButton:d,hidePrevButton:x,renderItem:y,shape:u,showFirstButton:S,showLastButton:w,siblingCount:k,size:z,variant:C}),B=ee(N);return n.jsx(ae,h({"aria-label":"pagination navigation",className:T(B.root,c),ownerState:N,ref:a},M,{children:n.jsx(oe,{className:B.ul,ownerState:N,children:j.map((I,g)=>n.jsx("li",{children:y(h({},I,{color:l,"aria-label":b(I.type,I.page,I.selected),shape:u,size:z,variant:C}))},g))})}))}),se=ie,re="/DrinkMaster/assets/drink-image-fca35edf.jpg",ce=t=>t.drinks.searchQuery,nt=t=>t.drinks.categories,it=t=>t.drinks.ingredients,st=t=>t.drinks.page,rt=t=>t.drinks.searchResults,le=t=>t.drinks.isLoading,de=v.ul`
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
`,pe=v.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,ge=v.img`
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
`,ue=v.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,xe=v.p`
  margin: 0;
  color: ${f.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,fe=v(dt)`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${f.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,he=()=>{const{drinks:t}=P(rt);return n.jsx(de,{children:t==null?void 0:t.map(e=>n.jsxs(pe,{children:[n.jsx(ge,{src:e.drinkThumb,alt:e.drink,onError:a=>{a.currentTarget.src=re}}),n.jsxs(ue,{children:[n.jsx(xe,{children:e.drink}),n.jsx(fe,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))})},me=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),be=v.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,ye=v.form`
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
`,ve=v.label`
  position: relative;
  display: inline-block;
`,ke=v.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  /* opacity: 0.8; */
  color: ${f.light}; //#f3f3f3
  /* text-align: center; */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    color: ${f.light}; //#f3f3f3
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
`,Ce=v.button`
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
`,$e=v(me)`
  display: block;
  stroke: ${f.light}; //#f3f3f3
`,tt=v(yt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* cursor: pointer; */
    color: ${f.light}; //#f3f3f3
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
    color: ${f.light}; //#f3f3f3
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
    color: ${f.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${f.light}; //#f3f3f3
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
    color: ${f.light}; //#f3f3f3
    &:focus-within {
      color: brown;
    }
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${f.light}; //#f3f3f3
  }

  .react-select__option--is-selected {
    color: ${f.light}; //#f3f3f3
  }

  .react-select__menu-list {
    color: ${f.light}; //#f3f3f3
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${f.gray}; //#434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${f.gray}; //#434d67;
      border-radius: 20px;
    }
  }

  .react-select__option--custom-selected {
    color: red;
  }

  .react-select__option {
    color: rgba(243, 243, 243, 0.4);
    background-color: transparent;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      color: ${f.light}; //#f3f3f3
      background-color: transparent;
    }
  }
`,et={dropdownIndicator:(t,e)=>({...t,transform:e.isFocused?"rotate(180deg)":"rotate(0deg)"})},Pe=()=>{const[t,e]=m.useState(""),a=P(nt),o=P(it),s=Q(),c=V("(max-width:767px)");m.useEffect(()=>{c&&s(H(t))},[s,c,t]);const l=(d,x="")=>{switch(d){case"searchQuery":e(x),s(O(1));break;case"category":s(gt(x)),s(O(1));break;case"ingredient":s(pt(x)),s(O(1));break}},p=d=>{l("searchQuery",d.target.value.trim())},i=d=>{l("category",d.value)},r=d=>{l("ingredient",d.value)},b=d=>{d.preventDefault(),s(H(t))};return n.jsx(be,{children:n.jsxs(ye,{onSubmit:b,children:[n.jsxs(ve,{children:[n.jsx(ke,{type:"text",placeholder:"Enter the text",onChange:p}),n.jsx(Ce,{type:"submit",children:n.jsx($e,{})})]}),n.jsx(tt,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:et,options:a.map(d=>({label:d,value:d})),onChange:i}),n.jsx(tt,{name:"ingredient",styles:et,placeholder:"Ingredients",classNamePrefix:"react-select",options:o.map(d=>({label:d.title,value:d.title})),onChange:r})]})})},we=({limit:t,totalItems:e})=>{const a=P(st),[o,s]=m.useState(1),[c,l]=m.useState(2),p=Q(),i=V("(min-width:768px)"),r=Math.ceil(e/t);m.useEffect(()=>{if(!i&&r>5){s(1),l(0);return}if(i&&r>8){s(3),l(-2);return}s(1),l(2)},[r,i]);const b={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:i?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${f.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return n.jsx(Wt,{sx:b.stack,children:r>1&&n.jsx(se,{count:r,page:a,boundaryCount:o,siblingCount:c,onChange:(d,x)=>p(O(x)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:b.pagination})})},je=v.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,Se=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #0a0a11; */
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 160px;
    max-width: 1440px;
  }
`,De=()=>{const t=P(nt),e=P(it),a=P(rt),o=P(st),s=P(ce),c=P(le),l=Q(),i=V("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||l(ut())},[t,l]),m.useEffect(()=>{e.length||l(xt())},[l,e]),m.useEffect(()=>{l(ft({searchQuery:s,page:o,limit:i}))},[l,i,o,s]),n.jsxs(n.Fragment,{children:[n.jsx(mt,{}),n.jsxs(Se,{children:[n.jsx(je,{children:"DrinksPage"}),n.jsx(Pe,{}),c?n.jsx(ht,{}):n.jsxs(n.Fragment,{children:[n.jsx(he,{}),n.jsx(we,{totalItems:a.max_page,limit:i})]})]}),n.jsx(bt,{})]})};export{De as default};
