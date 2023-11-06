import{_ as m,r as b,j as a,s as h,h as f,L as pt,i as w,u as V,m as H,o as gt,p as F,q as ut,t as xt,v as ft,w as ht,x as mt}from"./index-090450e0.js";import{S as bt}from"./react-select.esm-c4cff1ad.js";import{u as Q}from"./useMediaQuery-4bcc770a.js";import{w as yt,x as vt,y as kt,z as q,A as W,D as Ct,k as $t,E as wt,c as O,b as A,g as U,F as Z,e as N,f as G,a as at,h as T,B as Pt,j as R,i as B}from"./ButtonBase-f5f133df.js";import{_ as E}from"./assertThisInitialized-dc1f3b4e.js";import{e as jt,u as St}from"./extendSxProp-146eee5f.js";import{u as zt}from"./useTheme-89539a1c.js";import{H as Mt,F as It}from"./Header-bf099f61.js";import{P as Lt}from"./PageTitle-792f82d6.js";import"./getThemeProps-84c77821.js";import"./index.esm-353c9867.js";const Rt=yt(),Nt=Rt,_t=["component","direction","spacing","divider","children","className","useFlexGap"],Dt=vt(),Bt=Nt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Ft(t){return kt({props:t,name:"MuiStack",defaultTheme:Dt})}function Ot(t,e){const o=b.Children.toArray(t).filter(Boolean);return o.reduce((n,s,c)=>(n.push(s),c<o.length-1&&n.push(b.cloneElement(e,{key:`separator-${c}`})),n),[])}const Tt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Et=({ownerState:t,theme:e})=>{let o=m({display:"flex",flexDirection:"column"},q({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=Ct(e),s=Object.keys(e.breakpoints.values).reduce((i,r)=>((typeof t.spacing=="object"&&t.spacing[r]!=null||typeof t.direction=="object"&&t.direction[r]!=null)&&(i[r]=!0),i),{}),c=W({values:t.direction,base:s}),l=W({values:t.spacing,base:s});typeof c=="object"&&Object.keys(c).forEach((i,r,y)=>{if(!c[i]){const x=r>0?c[y[r-1]]:"column";c[i]=x}}),o=$t(o,q({theme:e},l,(i,r)=>t.useFlexGap?{gap:Z(n,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Tt(r?c[r]:t.direction)}`]:Z(n,i)}}))}return o=wt(e.breakpoints,o),o};function Wt(t={}){const{createStyledComponent:e=Bt,useThemeProps:o=Ft,componentName:n="MuiStack"}=t,s=()=>A({root:["root"]},i=>U(n,i),{}),c=e(Et);return b.forwardRef(function(i,r){const y=o(i),d=jt(y),{component:x="div",direction:v="column",spacing:u=0,divider:S,children:P,className:k,useFlexGap:z=!1}=d,C=E(d,_t),L={direction:v,spacing:u,useFlexGap:z},j=s();return a.jsx(c,m({as:x,ownerState:L,ref:r,className:O(j.root,k)},C,{children:S?Ot(P,S):P}))})}const Vt=Wt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Qt=Vt;function At(t){return U("MuiPagination",t)}at("MuiPagination",["root","ul","outlined","text"]);const Ut=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Gt(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:n=1,defaultPage:s=1,disabled:c=!1,hideNextButton:l=!1,hidePrevButton:p=!1,onChange:i,page:r,showFirstButton:y=!1,showLastButton:d=!1,siblingCount:x=1}=t,v=E(t,Ut),[u,S]=St({controlled:r,default:s,name:o,state:"page"}),P=(g,I)=>{r||S(I),i&&i(g,I)},k=(g,I)=>{const lt=I-g+1;return Array.from({length:lt},(De,dt)=>g+dt)},z=k(1,Math.min(e,n)),C=k(Math.max(n-e+1,e+1),n),L=Math.max(Math.min(u-x,n-e-x*2-1),e+2),j=Math.min(Math.max(u+x,e+x*2+2),C.length>0?C[0]-2:n-1),_=[...y?["first"]:[],...p?[]:["previous"],...z,...L>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...k(L,j),...j<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...C,...l?[]:["next"],...d?["last"]:[]],D=g=>{switch(g){case"first":return 1;case"previous":return u-1;case"next":return u+1;case"last":return n;default:return null}},M=_.map(g=>typeof g=="number"?{onClick:I=>{P(I,g)},type:"page",page:g,selected:g===u,disabled:c,"aria-current":g===u?"true":void 0}:{onClick:I=>{P(I,D(g))},type:g,page:D(g),selected:!1,disabled:c||g.indexOf("ellipsis")===-1&&(g==="next"||g==="last"?u>=n:u<=1)});return m({items:M},v)}function Ht(t){return U("MuiPaginationItem",t)}const qt=at("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),$=qt,J=T(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),K=T(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),X=T(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Y=T(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Zt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],nt=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${B(o.size)}`],o.variant==="text"&&e[`text${B(o.color)}`],o.variant==="outlined"&&e[`outlined${B(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},Jt=t=>{const{classes:e,color:o,disabled:n,selected:s,size:c,shape:l,type:p,variant:i}=t,r={root:["root",`size${B(c)}`,i,l,o!=="standard"&&`${i}${B(o)}`,n&&"disabled",s&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[p]],icon:["icon"]};return A(r,Ht,e)},Kt=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:nt})(({theme:t,ownerState:e})=>m({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),Xt=N(Pt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:nt})(({theme:t,ownerState:e})=>m({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${$.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>m({},e.variant==="text"&&{[`&.${$.selected}`]:m({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${$.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${$.selected}`]:m({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:R(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:R(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:R(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${$.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),Yt=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>m({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),te=b.forwardRef(function(e,o){const n=G({props:e,name:"MuiPaginationItem"}),{className:s,color:c="standard",component:l,components:p={},disabled:i=!1,page:r,selected:y=!1,shape:d="circular",size:x="medium",slots:v={},type:u="page",variant:S="text"}=n,P=E(n,Zt),k=m({},n,{color:c,disabled:i,selected:y,shape:d,size:x,type:u,variant:S}),z=zt(),C=Jt(k),j=(z.direction==="rtl"?{previous:v.next||p.next||Y,next:v.previous||p.previous||X,last:v.first||p.first||J,first:v.last||p.last||K}:{previous:v.previous||p.previous||X,next:v.next||p.next||Y,first:v.first||p.first||J,last:v.last||p.last||K})[u];return u==="start-ellipsis"||u==="end-ellipsis"?a.jsx(Kt,{ref:o,ownerState:k,className:O(C.root,s),children:"…"}):a.jsxs(Xt,m({ref:o,ownerState:k,component:l,disabled:i,className:O(C.root,s)},P,{children:[u==="page"&&r,j?a.jsx(Yt,{as:j,ownerState:k,className:C.icon}):null]}))}),ee=te,oe=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],ae=t=>{const{classes:e,variant:o}=t;return A({root:["root",o],ul:["ul"]},At,e)},ne=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),ie=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function se(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const re=b.forwardRef(function(e,o){const n=G({props:e,name:"MuiPagination"}),{boundaryCount:s=1,className:c,color:l="standard",count:p=1,defaultPage:i=1,disabled:r=!1,getItemAriaLabel:y=se,hideNextButton:d=!1,hidePrevButton:x=!1,renderItem:v=M=>a.jsx(ee,m({},M)),shape:u="circular",showFirstButton:S=!1,showLastButton:P=!1,siblingCount:k=1,size:z="medium",variant:C="text"}=n,L=E(n,oe),{items:j}=Gt(m({},n,{componentName:"Pagination"})),_=m({},n,{boundaryCount:s,color:l,count:p,defaultPage:i,disabled:r,getItemAriaLabel:y,hideNextButton:d,hidePrevButton:x,renderItem:v,shape:u,showFirstButton:S,showLastButton:P,siblingCount:k,size:z,variant:C}),D=ae(_);return a.jsx(ne,m({"aria-label":"pagination navigation",className:O(D.root,c),ownerState:_,ref:o},L,{children:a.jsx(ie,{className:D.ul,ownerState:_,children:j.map((M,g)=>a.jsx("li",{children:v(m({},M,{color:l,"aria-label":y(M.type,M.page,M.selected),shape:u,size:z,variant:C}))},g))})}))}),ce=re,le="/DrinkMaster/assets/drink-image-fca35edf.jpg",de=t=>t.drinks.searchQuery,it=t=>t.drinks.categories,st=t=>t.drinks.ingredients,rt=t=>t.drinks.page,ct=t=>t.drinks.searchResults,pe=t=>t.drinks.isLoading,ge=h.ul`
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
`,ue=h.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,xe=h.img`
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
`,fe=h.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,he=h.p`
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
`,me=h(pt)`
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
`,be="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",ye="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",tt="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",ve="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",ke=h.div`
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
`,Ce=h.p`
  margin-top: 32px;
  color: ${f.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,$e=({message:t})=>a.jsxs(ke,{children:[a.jsxs("picture",{children:[a.jsx("source",{media:"(min-width: 768px)",srcSet:`${be} 1x, ${ye} 2x`,width:"261",height:"326"}),a.jsx("source",{media:"(min-width: 375px)",srcSet:`${tt} 1x, ${ve} 2x`,width:"198",height:"247"}),a.jsx("img",{src:tt,alt:"not found",width:"198",height:"247"})]}),a.jsx(Ce,{children:t})]}),we=()=>{const{drinks:t}=w(ct);return(t==null?void 0:t.length)!==0?a.jsx(ge,{children:t==null?void 0:t.map(e=>a.jsxs(ue,{children:[a.jsx(xe,{src:e.drinkThumb,alt:e.drink,onError:o=>{o.currentTarget.src=le}}),a.jsxs(fe,{children:[a.jsx(he,{children:e.drink}),a.jsx(me,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))}):a.jsx($e,{message:"No cocktails found for your request"})},Pe=t=>b.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},b.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),b.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),je=h.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,Se=h.form`
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
`,ze=h.label`
  position: relative;
  display: inline-block;
`,Me=h.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${f.light}; //#f3f3f3
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
`,Ie=h.button`
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
`,Le=h(Pe)`
  display: block;
  stroke: ${f.light}; //#f3f3f3
`,et=h(bt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
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
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${f.light}; //#f3f3f3
  }

  .react-select__menu-list {
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

  .react-select__option {
    background-color: transparent;
    text-overflow: ellipsis;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      color: ${f.light}; //#f3f3f3
      cursor: pointer;
    }
  }
`,ot={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?`${f.light}`:"rgba(243, 243, 243, 0.4)"})},Re=()=>{const[t,e]=b.useState(""),o=w(it),n=w(st),s=V(),c=Q("(max-width:767px)");b.useEffect(()=>{c&&s(H(t))},[s,c,t]);const l=(d,x="")=>{switch(d){case"searchQuery":e(x),s(F(1));break;case"category":s(ut(x)),s(F(1));break;case"ingredient":s(gt(x)),s(F(1));break}},p=d=>{l("searchQuery",d.target.value.trim())},i=d=>{l("category",d.value)},r=d=>{l("ingredient",d.value)},y=d=>{d.preventDefault(),s(H(t))};return a.jsx(je,{children:a.jsxs(Se,{onSubmit:y,children:[a.jsxs(ze,{children:[a.jsx(Me,{type:"text",placeholder:"Enter the text",onChange:p}),a.jsx(Ie,{type:"submit",children:a.jsx(Le,{})})]}),a.jsx(et,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:ot,options:o.map(d=>({label:d,value:d})),onChange:i}),a.jsx(et,{name:"ingredient",styles:ot,placeholder:"Ingredients",classNamePrefix:"react-select",options:n.map(d=>({label:d.title,value:d.title})),onChange:r})]})})},Ne=({limit:t,totalItems:e})=>{const o=w(rt),[n,s]=b.useState(1),[c,l]=b.useState(2),p=V(),i=Q("(min-width:768px)"),r=Math.ceil(e/t);b.useEffect(()=>{if(!i&&r>5){s(1),l(0);return}if(i&&r>8){s(3),l(-2);return}s(1),l(2)},[r,i]);const y={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:i?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${f.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return a.jsx(Qt,{sx:y.stack,children:r>1&&a.jsx(ce,{count:r,page:o,boundaryCount:n,siblingCount:c,onChange:(d,x)=>p(F(x)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:y.pagination})})};h.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const _e=h.div`
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
`,He=()=>{const t=w(it),e=w(st),o=w(ct),n=w(rt),s=w(de),c=w(pe),l=V(),i=Q("(min-width:769px)")?9:10;return b.useEffect(()=>{t.length||l(xt())},[t,l]),b.useEffect(()=>{e.length||l(ft())},[l,e]),b.useEffect(()=>{l(ht({searchQuery:s,page:n,limit:i}))},[l,i,n,s]),a.jsxs(a.Fragment,{children:[a.jsx(Mt,{}),a.jsxs(_e,{children:[a.jsx(Lt,{title:"Drinks"}),a.jsx(Re,{}),c?a.jsx(mt,{}):a.jsxs(a.Fragment,{children:[a.jsx(we,{}),a.jsx(Ne,{totalItems:o.max_page,limit:i})]})]}),a.jsx(It,{})]})};export{He as default};
