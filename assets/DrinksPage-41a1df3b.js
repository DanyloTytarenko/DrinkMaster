import{_ as h,r as m,j as i,s as v,c as n,L as ut,k as w,m as nt,u as W,q as H,t as q,v as O,w as Z,x as xt,y as ft,z as ht,p as mt}from"./index-0642d773.js";import{d as bt}from"./drink-image-da88a649.js";import{N as yt}from"./NotFound-9ff9f250.js";import{S as vt}from"./react-select.esm-6de68430.js";import{u as V}from"./useMediaQuery-e839adac.js";import{z as kt,A as $t,D as Ct,E as J,F as A,G as Pt,k as wt,H as jt,v as St,c as T,d as Q,g as U,I as K,s as N,u as G,a as it,m as It,i as F,B as zt,b as D,j as B}from"./ButtonBase-f872e434.js";import{_ as E}from"./assertThisInitialized-620a8c80.js";import{u as Mt}from"./useTheme-41355d04.js";import{H as Lt,F as Dt}from"./Header-28144007.js";import{P as Nt}from"./PageTitle-7d0d0d86.js";import{M as Rt}from"./MainAppContainer-ef0982dd.js";import"./getThemeProps-cbcc88c1.js";import"./index.esm-760f798d.js";const _t=kt(),Bt=_t,Ot=["component","direction","spacing","divider","children","className","useFlexGap"],Tt=$t(),Ft=Bt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Et(t){return Ct({props:t,name:"MuiStack",defaultTheme:Tt})}function At(t,e){const o=m.Children.toArray(t).filter(Boolean);return o.reduce((a,d,p)=>(a.push(d),p<o.length-1&&a.push(m.cloneElement(e,{key:`separator-${p}`})),a),[])}const Wt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Vt=({ownerState:t,theme:e})=>{let o=h({display:"flex",flexDirection:"column"},J({theme:e},A({values:t.direction,breakpoints:e.breakpoints.values}),a=>({flexDirection:a})));if(t.spacing){const a=Pt(e),d=Object.keys(e.breakpoints.values).reduce((r,c)=>((typeof t.spacing=="object"&&t.spacing[c]!=null||typeof t.direction=="object"&&t.direction[c]!=null)&&(r[c]=!0),r),{}),p=A({values:t.direction,base:d}),g=A({values:t.spacing,base:d});typeof p=="object"&&Object.keys(p).forEach((r,c,b)=>{if(!p[r]){const f=c>0?p[b[c-1]]:"column";p[r]=f}}),o=wt(o,J({theme:e},g,(r,c)=>t.useFlexGap?{gap:K(a,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Wt(c?p[c]:t.direction)}`]:K(a,r)}}))}return o=jt(e.breakpoints,o),o};function Qt(t={}){const{createStyledComponent:e=Ft,useThemeProps:o=Et,componentName:a="MuiStack"}=t,d=()=>Q({root:["root"]},r=>U(a,r),{}),p=e(Vt);return m.forwardRef(function(r,c){const b=o(r),k=St(b),{component:f="div",direction:x="column",spacing:s=0,divider:y,children:j,className:$,useFlexGap:I=!1}=k,C=E(k,Ot),L={direction:x,spacing:s,useFlexGap:I},S=d();return i.jsx(p,h({as:f,ownerState:L,ref:c,className:T(S.root,$)},C,{children:y?At(j,y):j}))})}const Ut=Qt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Gt=Ut;function Ht(t){return U("MuiPagination",t)}it("MuiPagination",["root","ul","outlined","text"]);const qt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:a=1,defaultPage:d=1,disabled:p=!1,hideNextButton:g=!1,hidePrevButton:l=!1,onChange:r,page:c,showFirstButton:b=!1,showLastButton:k=!1,siblingCount:f=1}=t,x=E(t,qt),[s,y]=It({controlled:c,default:d,name:o,state:"page"}),j=(u,M)=>{c||y(M),r&&r(u,M)},$=(u,M)=>{const pt=M-u+1;return Array.from({length:pt},(De,gt)=>u+gt)},I=$(1,Math.min(e,a)),C=$(Math.max(a-e+1,e+1),a),L=Math.max(Math.min(s-f,a-e-f*2-1),e+2),S=Math.min(Math.max(s+f,e+f*2+2),C.length>0?C[0]-2:a-1),R=[...b?["first"]:[],...l?[]:["previous"],...I,...L>e+2?["start-ellipsis"]:e+1<a-e?[e+1]:[],...$(L,S),...S<a-e-1?["end-ellipsis"]:a-e>e?[a-e]:[],...C,...g?[]:["next"],...k?["last"]:[]],_=u=>{switch(u){case"first":return 1;case"previous":return s-1;case"next":return s+1;case"last":return a;default:return null}},z=R.map(u=>typeof u=="number"?{onClick:M=>{j(M,u)},type:"page",page:u,selected:u===s,disabled:p,"aria-current":u===s?"true":void 0}:{onClick:M=>{j(M,_(u))},type:u,page:_(u),selected:!1,disabled:p||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?s>=a:s<=1)});return h({items:z},x)}function Jt(t){return U("MuiPaginationItem",t)}const Kt=it("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),P=Kt,X=F(i.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Y=F(i.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),tt=F(i.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),et=F(i.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Xt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],rt=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${B(o.size)}`],o.variant==="text"&&e[`text${B(o.color)}`],o.variant==="outlined"&&e[`outlined${B(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},Yt=t=>{const{classes:e,color:o,disabled:a,selected:d,size:p,shape:g,type:l,variant:r}=t,c={root:["root",`size${B(p)}`,r,g,o!=="standard"&&`${r}${B(o)}`,a&&"disabled",d&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return Q(c,Jt,e)},te=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ee=N(zt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>h({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:D(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${P.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>h({},e.variant==="text"&&{[`&.${P.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${P.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${P.selected}`]:h({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:D(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:D(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${P.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),oe=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>h({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),ae=m.forwardRef(function(e,o){const a=G({props:e,name:"MuiPaginationItem"}),{className:d,color:p="standard",component:g,components:l={},disabled:r=!1,page:c,selected:b=!1,shape:k="circular",size:f="medium",slots:x={},type:s="page",variant:y="text"}=a,j=E(a,Xt),$=h({},a,{color:p,disabled:r,selected:b,shape:k,size:f,type:s,variant:y}),I=Mt(),C=Yt($),S=(I.direction==="rtl"?{previous:x.next||l.next||et,next:x.previous||l.previous||tt,last:x.first||l.first||X,first:x.last||l.last||Y}:{previous:x.previous||l.previous||tt,next:x.next||l.next||et,first:x.first||l.first||X,last:x.last||l.last||Y})[s];return s==="start-ellipsis"||s==="end-ellipsis"?i.jsx(te,{ref:o,ownerState:$,className:T(C.root,d),children:"…"}):i.jsxs(ee,h({ref:o,ownerState:$,component:g,disabled:r,className:T(C.root,d)},j,{children:[s==="page"&&c,S?i.jsx(oe,{as:S,ownerState:$,className:C.icon}):null]}))}),ne=ae,ie=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],re=t=>{const{classes:e,variant:o}=t;return Q({root:["root",o],ul:["ul"]},Ht,e)},se=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),le=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ce(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const de=m.forwardRef(function(e,o){const a=G({props:e,name:"MuiPagination"}),{boundaryCount:d=1,className:p,color:g="standard",count:l=1,defaultPage:r=1,disabled:c=!1,getItemAriaLabel:b=ce,hideNextButton:k=!1,hidePrevButton:f=!1,renderItem:x=z=>i.jsx(ne,h({},z)),shape:s="circular",showFirstButton:y=!1,showLastButton:j=!1,siblingCount:$=1,size:I="medium",variant:C="text"}=a,L=E(a,ie),{items:S}=Zt(h({},a,{componentName:"Pagination"})),R=h({},a,{boundaryCount:d,color:g,count:l,defaultPage:r,disabled:c,getItemAriaLabel:b,hideNextButton:k,hidePrevButton:f,renderItem:x,shape:s,showFirstButton:y,showLastButton:j,siblingCount:$,size:I,variant:C}),_=re(R);return i.jsx(se,h({"aria-label":"pagination navigation",className:T(_.root,p),ownerState:R,ref:o},L,{children:i.jsx(le,{className:_.ul,ownerState:R,children:S.map((z,u)=>i.jsx("li",{children:x(h({},z,{color:g,"aria-label":b(z.type,z.page,z.selected),shape:s,size:I,variant:C}))},u))})}))}),pe=de,ge=t=>t.drinks.searchQuery,st=t=>t.drinks.categories,lt=t=>t.drinks.ingredients,ct=t=>t.drinks.page,dt=t=>t.drinks.searchResults,ue=t=>t.drinks.isLoading,xe=v.ul`
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
`,fe=v.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,he=v.img`
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
`,me=v.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,be=v.p`
  margin: 0;
  /* color: ${n.light}; //#f3f3f3 */
  color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,ye=v(ut)`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:t})=>t==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.5)"};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${n.light}; //#f3f3f3; */
    color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,ve=()=>{const{drinks:t}=w(dt),e=w(nt);return(t==null?void 0:t.length)!==0?i.jsx(xe,{children:t==null?void 0:t.map(o=>i.jsxs(fe,{children:[i.jsx(he,{src:o.drinkThumb,alt:o.drink,onError:a=>{a.currentTarget.src=bt}}),i.jsxs(me,{children:[i.jsx(be,{theme:e,children:o.drink}),i.jsx(ye,{theme:e,to:`/drink/${o._id}`,children:"See more"})]})]},o._id))}):i.jsx(yt,{message:"No cocktails found for your request"})},ke=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),$e=v.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,Ce=v.form`
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
`,Pe=v.label`
  position: relative;
  display: inline-block;
`,we=v.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  /* border: 1px solid rgba(243, 243, 243, 0.2); */
  border: ${({theme:t})=>t==="dark"?"1px solid rgba(243, 243, 243, 0.2)":"1px solid rgba(10, 10, 17, 0.20)"};
  /* color: ${n.light}; //#f3f3f3 */
  color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    /* color: ${n.light}; //#f3f3f3 */
    color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
    opacity: 1;
  }

  &:hover,
  &:focus {
    /* border-color: rgba(243, 243, 243, 0.5); */
    border-color: ${({theme:t})=>t==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.50)"};
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,je=v.button`
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
`,Se=v(ke)`
  display: block;
  /* stroke: ${n.light}; //#f3f3f3 */
  stroke: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
`,ot=v(vt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background-color: ${n.secondaryDark}; //#161f37
    /* background-color: ${({theme:t})=>t==="dark"?n.secondaryDark:n.secondaryDark}; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* color: ${n.light}; //#f3f3f3 */
    color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
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
    color: ${n.light}; //#f3f3f3
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
    color: ${n.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${n.light}; //#f3f3f3
    padding: 0;
    position: absolute;

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    /* background-color:${n.secondaryDark}; //#161f37; */
    background-color: ${({theme:t})=>t==="dark"?n.secondaryDark:n.white};
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
    color: ${n.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    /* background-color: ${n.light}; //#f3f3f3 */
    background-color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      /* background-color: ${n.gray}; //#434d67; */
      background-color: ${({theme:t})=>t==="dark"?n.gray:n.light};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      /* background-color: ${n.gray}; //#434d67; */
      background-color: ${({theme:t})=>t==="dark"?n.gray:n.light};
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
      /* color: ${n.light}; //#f3f3f3 */
      color: ${({theme:t})=>t==="dark"?n.light:n.primaryDark};
      cursor: pointer;
    }
  }
`,at={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?n.light:"rgba(243, 243, 243, 0.4)"})},Ie={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?n.primaryDark:"rgba(10, 10, 17, 0.4)"})},ze=()=>{const[t,e]=m.useState(""),o=w(st),a=w(lt),d=w(nt),p=o.length!==0?["All categories",...o]:[],g=a.length!==0?[{title:"All ingredients"},...a]:[],l=W(),r=V("(max-width:767px)");m.useEffect(()=>{r&&l(H(t))},[l,r,t]);const c=(s,y="")=>{switch(s){case"searchQuery":e(y),l(O(1));break;case"category":if(y==="All categories"){l(Z(""));return}l(Z(y)),l(O(1));break;case"ingredient":if(y==="All ingredients"){l(q(""));return}l(q(y)),l(O(1));break}},b=s=>{c("searchQuery",s.target.value.trim())},k=s=>{c("category",s.value)},f=s=>{c("ingredient",s.value)},x=s=>{s.preventDefault(),l(H(t))};return i.jsx($e,{children:i.jsxs(Ce,{onSubmit:x,children:[i.jsxs(Pe,{children:[i.jsx(we,{type:"text",placeholder:"Enter the text",onChange:b,theme:d}),i.jsx(je,{type:"submit",children:i.jsx(Se,{theme:d})})]}),i.jsx(ot,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:d==="dark"?at:Ie,theme:d,noOptionsMessage:()=>"No categories",options:p.map(s=>({label:s,value:s})),onChange:k}),i.jsx(ot,{name:"ingredient",styles:at,theme:d,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:g.map(s=>({label:s.title,value:s.title})),onChange:f})]})})},Me=({limit:t,totalItems:e})=>{const o=w(ct),[a,d]=m.useState(1),[p,g]=m.useState(2),l=W(),r=V("(min-width:768px)"),c=Math.ceil(e/t);m.useEffect(()=>{if(!r&&c>5){d(1),g(0);return}if(r&&c>8){d(3),g(-2);return}d(1),g(2)},[c,r]);const b={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:r?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${n.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return i.jsx(Gt,{sx:b.stack,children:c>1&&i.jsx(pe,{count:c,page:o,boundaryCount:a,siblingCount:p,onChange:(k,f)=>l(O(f)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:b.pagination})})},Le=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`,Ge=()=>{const t=w(st),e=w(lt),o=w(dt),a=w(ct),d=w(ge),p=w(ue),g=W(),r=V("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||g(xt())},[t,g]),m.useEffect(()=>{e.length||g(ft())},[g,e]),m.useEffect(()=>{g(ht({searchQuery:d,page:a,limit:r}))},[g,r,a,d]),i.jsxs(i.Fragment,{children:[i.jsx(Lt,{}),i.jsx(Rt,{children:i.jsxs(Le,{children:[i.jsx(Nt,{title:"Drinks"}),i.jsx(ze,{}),p?i.jsx(mt,{}):i.jsxs(i.Fragment,{children:[i.jsx(ve,{}),i.jsx(Me,{totalItems:o.max_page,limit:r})]})]})}),i.jsx(Dt,{})]})};export{Ge as default};
