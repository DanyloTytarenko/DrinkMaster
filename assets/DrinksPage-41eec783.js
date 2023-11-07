import{_ as h,r as m,j as a,s as b,c as x,L as ut,k as w,u as A,o as H,p as q,q as O,t as Z,v as xt,w as ft,x as ht,y as mt}from"./index-b5ebd4eb.js";import{d as bt}from"./drink-image-da88a649.js";import{S as yt}from"./react-select.esm-590e7e2d.js";import{u as V}from"./useMediaQuery-5e043794.js";import{x as vt,y as kt,z as Ct,A as J,D as W,E as $t,k as wt,F as Pt,c as F,b as Q,g as U,G as K,e as R,f as G,a as it,h as T,B as jt,j as N,i as D}from"./ButtonBase-7e71b0f9.js";import{_ as E}from"./assertThisInitialized-73626897.js";import{e as St,u as Mt}from"./extendSxProp-f7ec49cd.js";import{u as zt}from"./useTheme-aee26840.js";import{H as It,F as Lt}from"./Header-0a47cfc7.js";import{P as Nt}from"./PageTitle-be2cd5a1.js";import{M as Rt}from"./MainAppContainer-6172af23.js";import"./getThemeProps-85c2e663.js";import"./index.esm-7afc1793.js";const _t=vt(),Bt=_t,Dt=["component","direction","spacing","divider","children","className","useFlexGap"],Ot=kt(),Ft=Bt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Tt(t){return Ct({props:t,name:"MuiStack",defaultTheme:Ot})}function Et(t,e){const o=m.Children.toArray(t).filter(Boolean);return o.reduce((n,p,c)=>(n.push(p),c<o.length-1&&n.push(m.cloneElement(e,{key:`separator-${c}`})),n),[])}const Wt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],At=({ownerState:t,theme:e})=>{let o=h({display:"flex",flexDirection:"column"},J({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=$t(e),p=Object.keys(e.breakpoints.values).reduce((i,l)=>((typeof t.spacing=="object"&&t.spacing[l]!=null||typeof t.direction=="object"&&t.direction[l]!=null)&&(i[l]=!0),i),{}),c=W({values:t.direction,base:p}),s=W({values:t.spacing,base:p});typeof c=="object"&&Object.keys(c).forEach((i,l,y)=>{if(!c[i]){const f=l>0?c[y[l-1]]:"column";c[i]=f}}),o=wt(o,J({theme:e},s,(i,l)=>t.useFlexGap?{gap:K(n,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Wt(l?c[l]:t.direction)}`]:K(n,i)}}))}return o=Pt(e.breakpoints,o),o};function Vt(t={}){const{createStyledComponent:e=Ft,useThemeProps:o=Tt,componentName:n="MuiStack"}=t,p=()=>Q({root:["root"]},i=>U(n,i),{}),c=e(At);return m.forwardRef(function(i,l){const y=o(i),v=St(y),{component:f="div",direction:r="column",spacing:d=0,divider:S,children:P,className:k,useFlexGap:M=!1}=v,C=E(v,Dt),L={direction:r,spacing:d,useFlexGap:M},j=p();return a.jsx(c,h({as:f,ownerState:L,ref:l,className:F(j.root,k)},C,{children:S?Et(P,S):P}))})}const Qt=Vt({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Ut=Qt;function Gt(t){return U("MuiPagination",t)}it("MuiPagination",["root","ul","outlined","text"]);const Ht=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function qt(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:n=1,defaultPage:p=1,disabled:c=!1,hideNextButton:s=!1,hidePrevButton:g=!1,onChange:i,page:l,showFirstButton:y=!1,showLastButton:v=!1,siblingCount:f=1}=t,r=E(t,Ht),[d,S]=Mt({controlled:l,default:p,name:o,state:"page"}),P=(u,I)=>{l||S(I),i&&i(u,I)},k=(u,I)=>{const pt=I-u+1;return Array.from({length:pt},(De,gt)=>u+gt)},M=k(1,Math.min(e,n)),C=k(Math.max(n-e+1,e+1),n),L=Math.max(Math.min(d-f,n-e-f*2-1),e+2),j=Math.min(Math.max(d+f,e+f*2+2),C.length>0?C[0]-2:n-1),_=[...y?["first"]:[],...g?[]:["previous"],...M,...L>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...k(L,j),...j<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...C,...s?[]:["next"],...v?["last"]:[]],B=u=>{switch(u){case"first":return 1;case"previous":return d-1;case"next":return d+1;case"last":return n;default:return null}},z=_.map(u=>typeof u=="number"?{onClick:I=>{P(I,u)},type:"page",page:u,selected:u===d,disabled:c,"aria-current":u===d?"true":void 0}:{onClick:I=>{P(I,B(u))},type:u,page:B(u),selected:!1,disabled:c||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?d>=n:d<=1)});return h({items:z},r)}function Zt(t){return U("MuiPaginationItem",t)}const Jt=it("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),$=Jt,X=T(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Y=T(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),tt=T(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),et=T(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Kt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],st=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${D(o.size)}`],o.variant==="text"&&e[`text${D(o.color)}`],o.variant==="outlined"&&e[`outlined${D(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},Xt=t=>{const{classes:e,color:o,disabled:n,selected:p,size:c,shape:s,type:g,variant:i}=t,l={root:["root",`size${D(c)}`,i,s,o!=="standard"&&`${i}${D(o)}`,n&&"disabled",p&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[g]],icon:["icon"]};return Q(l,Zt,e)},Yt=R("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),te=R(jt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${$.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${$.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>h({},e.variant==="text"&&{[`&.${$.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${$.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${$.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${$.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:N(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:N(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${$.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:N(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${$.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),ee=R("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>h({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),oe=m.forwardRef(function(e,o){const n=G({props:e,name:"MuiPaginationItem"}),{className:p,color:c="standard",component:s,components:g={},disabled:i=!1,page:l,selected:y=!1,shape:v="circular",size:f="medium",slots:r={},type:d="page",variant:S="text"}=n,P=E(n,Kt),k=h({},n,{color:c,disabled:i,selected:y,shape:v,size:f,type:d,variant:S}),M=zt(),C=Xt(k),j=(M.direction==="rtl"?{previous:r.next||g.next||et,next:r.previous||g.previous||tt,last:r.first||g.first||X,first:r.last||g.last||Y}:{previous:r.previous||g.previous||tt,next:r.next||g.next||et,first:r.first||g.first||X,last:r.last||g.last||Y})[d];return d==="start-ellipsis"||d==="end-ellipsis"?a.jsx(Yt,{ref:o,ownerState:k,className:F(C.root,p),children:"…"}):a.jsxs(te,h({ref:o,ownerState:k,component:s,disabled:i,className:F(C.root,p)},P,{children:[d==="page"&&l,j?a.jsx(ee,{as:j,ownerState:k,className:C.icon}):null]}))}),ae=oe,ne=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],ie=t=>{const{classes:e,variant:o}=t;return Q({root:["root",o],ul:["ul"]},Gt,e)},se=R("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),re=R("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function le(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const ce=m.forwardRef(function(e,o){const n=G({props:e,name:"MuiPagination"}),{boundaryCount:p=1,className:c,color:s="standard",count:g=1,defaultPage:i=1,disabled:l=!1,getItemAriaLabel:y=le,hideNextButton:v=!1,hidePrevButton:f=!1,renderItem:r=z=>a.jsx(ae,h({},z)),shape:d="circular",showFirstButton:S=!1,showLastButton:P=!1,siblingCount:k=1,size:M="medium",variant:C="text"}=n,L=E(n,ne),{items:j}=qt(h({},n,{componentName:"Pagination"})),_=h({},n,{boundaryCount:p,color:s,count:g,defaultPage:i,disabled:l,getItemAriaLabel:y,hideNextButton:v,hidePrevButton:f,renderItem:r,shape:d,showFirstButton:S,showLastButton:P,siblingCount:k,size:M,variant:C}),B=ie(_);return a.jsx(se,h({"aria-label":"pagination navigation",className:F(B.root,c),ownerState:_,ref:o},L,{children:a.jsx(re,{className:B.ul,ownerState:_,children:j.map((z,u)=>a.jsx("li",{children:r(h({},z,{color:s,"aria-label":y(z.type,z.page,z.selected),shape:d,size:M,variant:C}))},u))})}))}),de=ce,pe=t=>t.drinks.searchQuery,rt=t=>t.drinks.categories,lt=t=>t.drinks.ingredients,ct=t=>t.drinks.page,dt=t=>t.drinks.searchResults,ge=t=>t.drinks.isLoading,ue=b.ul`
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
`,xe=b.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,fe=b.img`
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
`,he=b.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,me=b.p`
  margin: 0;
  color: ${x.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,be=b(ut)`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${x.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,ye="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",ve="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",ot="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",ke="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Ce=b.div`
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
`,$e=b.p`
  margin-top: 32px;
  color: ${x.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,we=({message:t})=>a.jsxs(Ce,{children:[a.jsxs("picture",{children:[a.jsx("source",{media:"(min-width: 768px)",srcSet:`${ye} 1x, ${ve} 2x`,width:"261",height:"326"}),a.jsx("source",{media:"(min-width: 375px)",srcSet:`${ot} 1x, ${ke} 2x`,width:"198",height:"247"}),a.jsx("img",{src:ot,alt:"not found",width:"198",height:"247"})]}),a.jsx($e,{children:t})]}),Pe=()=>{const{drinks:t}=w(dt);return(t==null?void 0:t.length)!==0?a.jsx(ue,{children:t==null?void 0:t.map(e=>a.jsxs(xe,{children:[a.jsx(fe,{src:e.drinkThumb,alt:e.drink,onError:o=>{o.currentTarget.src=bt}}),a.jsxs(he,{children:[a.jsx(me,{children:e.drink}),a.jsx(be,{to:`/drink/${e._id}`,children:"See more"})]})]},e._id))}):a.jsx(we,{message:"No cocktails found for your request"})},je=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),Se=b.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,Me=b.form`
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
`,ze=b.label`
  position: relative;
  display: inline-block;
`,Ie=b.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${x.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    color: ${x.light}; //#f3f3f3
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
`,Le=b.button`
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
`,Ne=b(je)`
  display: block;
  stroke: ${x.light}; //#f3f3f3
`,at=b(yt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    color: ${x.light}; //#f3f3f3
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
    color: ${x.light}; //#f3f3f3
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
    color: ${x.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${x.light}; //#f3f3f3
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
    color: ${x.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${x.light}; //#f3f3f3
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${x.gray}; //#434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${x.gray}; //#434d67;
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
      color: ${x.light}; //#f3f3f3
      cursor: pointer;
    }
  }
`,nt={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?`${x.light}`:"rgba(243, 243, 243, 0.4)"})},Re=()=>{const[t,e]=m.useState(""),o=w(rt),n=w(lt),p=o.length!==0?["All categories",...o]:[],c=n.length!==0?[{title:"All ingredients"},...n]:[];console.log("allIngredients :>> ",c);const s=A(),g=V("(max-width:767px)");m.useEffect(()=>{g&&s(H(t))},[s,g,t]);const i=(r,d="")=>{switch(r){case"searchQuery":e(d),s(O(1));break;case"category":if(d==="All categories"){s(Z(""));return}s(Z(d)),s(O(1));break;case"ingredient":if(d==="All ingredients"){s(q(""));return}s(q(d)),s(O(1));break}},l=r=>{i("searchQuery",r.target.value.trim())},y=r=>{i("category",r.value)},v=r=>{i("ingredient",r.value)},f=r=>{r.preventDefault(),s(H(t))};return a.jsx(Se,{children:a.jsxs(Me,{onSubmit:f,children:[a.jsxs(ze,{children:[a.jsx(Ie,{type:"text",placeholder:"Enter the text",onChange:l}),a.jsx(Le,{type:"submit",children:a.jsx(Ne,{})})]}),a.jsx(at,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:nt,noOptionsMessage:()=>"No categories",options:p.map(r=>({label:r,value:r})),onChange:y}),a.jsx(at,{name:"ingredient",styles:nt,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:c.map(r=>({label:r.title,value:r.title})),onChange:v})]})})},_e=({limit:t,totalItems:e})=>{const o=w(ct),[n,p]=m.useState(1),[c,s]=m.useState(2),g=A(),i=V("(min-width:768px)"),l=Math.ceil(e/t);m.useEffect(()=>{if(!i&&l>5){p(1),s(0);return}if(i&&l>8){p(3),s(-2);return}p(1),s(2)},[l,i]);const y={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:i?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${x.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return a.jsx(Ut,{sx:y.stack,children:l>1&&a.jsx(de,{count:l,page:o,boundaryCount:n,siblingCount:c,onChange:(v,f)=>g(O(f)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:y.pagination})})},Be=b.div`
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
`,Je=()=>{const t=w(rt),e=w(lt),o=w(dt),n=w(ct),p=w(pe),c=w(ge),s=A(),i=V("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||s(xt())},[t,s]),m.useEffect(()=>{e.length||s(ft())},[s,e]),m.useEffect(()=>{s(ht({searchQuery:p,page:n,limit:i}))},[s,i,n,p]),a.jsxs(a.Fragment,{children:[a.jsx(It,{}),a.jsx(Rt,{children:a.jsxs(Be,{children:[a.jsx(Nt,{title:"Drinks"}),a.jsx(Re,{}),c?a.jsx(mt,{}):a.jsxs(a.Fragment,{children:[a.jsx(Pe,{}),a.jsx(_e,{totalItems:o.max_page,limit:i})]})]})}),a.jsx(Lt,{})]})};export{Je as default};
