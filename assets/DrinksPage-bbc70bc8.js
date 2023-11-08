import{_ as f,r as m,j as i,s as v,c as n,L as ut,k,m as W,u as V,q,t as Z,v as O,w as J,x as xt,y as ht,z as ft,p as mt}from"./index-ad5f1700.js";import{d as bt}from"./drink-image-da88a649.js";import{N as yt}from"./NotFound-086ab48a.js";import{S as vt}from"./react-select.esm-fa2f5a5c.js";import{u as Q}from"./useMediaQuery-7afd20ee.js";import{z as kt,A as $t,D as Ct,E as K,F as A,G as Pt,k as wt,H as jt,v as St,c as T,d as U,g as G,I as X,s as N,u as H,a as it,m as It,i as F,B as zt,b as D,j as B}from"./ButtonBase-ad71f18e.js";import{_ as E}from"./assertThisInitialized-ef796fcd.js";import{u as Mt}from"./useTheme-7f777a1d.js";import{H as Lt,F as Dt}from"./Header-f7a046d5.js";import{P as Nt}from"./PageTitle-db0be4b2.js";import{M as Rt}from"./MainAppContainer-3238025e.js";import"./getThemeProps-38618347.js";import"./index.esm-8860c4e9.js";const _t=kt(),Bt=_t,Ot=["component","direction","spacing","divider","children","className","useFlexGap"],Tt=$t(),Ft=Bt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Et(t){return Ct({props:t,name:"MuiStack",defaultTheme:Tt})}function At(t,e){const o=m.Children.toArray(t).filter(Boolean);return o.reduce((a,d,p)=>(a.push(d),p<o.length-1&&a.push(m.cloneElement(e,{key:`separator-${p}`})),a),[])}const Wt=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Vt=({ownerState:t,theme:e})=>{let o=f({display:"flex",flexDirection:"column"},K({theme:e},A({values:t.direction,breakpoints:e.breakpoints.values}),a=>({flexDirection:a})));if(t.spacing){const a=Pt(e),d=Object.keys(e.breakpoints.values).reduce((c,l)=>((typeof t.spacing=="object"&&t.spacing[l]!=null||typeof t.direction=="object"&&t.direction[l]!=null)&&(c[l]=!0),c),{}),p=A({values:t.direction,base:d}),u=A({values:t.spacing,base:d});typeof p=="object"&&Object.keys(p).forEach((c,l,b)=>{if(!p[c]){const h=l>0?p[b[l-1]]:"column";p[c]=h}}),o=wt(o,K({theme:e},u,(c,l)=>t.useFlexGap?{gap:X(a,c)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Wt(l?p[l]:t.direction)}`]:X(a,c)}}))}return o=jt(e.breakpoints,o),o};function Qt(t={}){const{createStyledComponent:e=Ft,useThemeProps:o=Et,componentName:a="MuiStack"}=t,d=()=>U({root:["root"]},c=>G(a,c),{}),p=e(Vt);return m.forwardRef(function(c,l){const b=o(c),$=St(b),{component:h="div",direction:x="column",spacing:s=0,divider:y,children:j,className:C,useFlexGap:I=!1}=$,P=E($,Ot),L={direction:x,spacing:s,useFlexGap:I},S=d();return i.jsx(p,f({as:h,ownerState:L,ref:l,className:T(S.root,C)},P,{children:y?At(j,y):j}))})}const Ut=Qt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>H({props:t,name:"MuiStack"})}),Gt=Ut;function Ht(t){return G("MuiPagination",t)}it("MuiPagination",["root","ul","outlined","text"]);const qt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:a=1,defaultPage:d=1,disabled:p=!1,hideNextButton:u=!1,hidePrevButton:r=!1,onChange:c,page:l,showFirstButton:b=!1,showLastButton:$=!1,siblingCount:h=1}=t,x=E(t,qt),[s,y]=It({controlled:l,default:d,name:o,state:"page"}),j=(g,M)=>{l||y(M),c&&c(g,M)},C=(g,M)=>{const pt=M-g+1;return Array.from({length:pt},(De,gt)=>g+gt)},I=C(1,Math.min(e,a)),P=C(Math.max(a-e+1,e+1),a),L=Math.max(Math.min(s-h,a-e-h*2-1),e+2),S=Math.min(Math.max(s+h,e+h*2+2),P.length>0?P[0]-2:a-1),R=[...b?["first"]:[],...r?[]:["previous"],...I,...L>e+2?["start-ellipsis"]:e+1<a-e?[e+1]:[],...C(L,S),...S<a-e-1?["end-ellipsis"]:a-e>e?[a-e]:[],...P,...u?[]:["next"],...$?["last"]:[]],_=g=>{switch(g){case"first":return 1;case"previous":return s-1;case"next":return s+1;case"last":return a;default:return null}},z=R.map(g=>typeof g=="number"?{onClick:M=>{j(M,g)},type:"page",page:g,selected:g===s,disabled:p,"aria-current":g===s?"true":void 0}:{onClick:M=>{j(M,_(g))},type:g,page:_(g),selected:!1,disabled:p||g.indexOf("ellipsis")===-1&&(g==="next"||g==="last"?s>=a:s<=1)});return f({items:z},x)}function Jt(t){return G("MuiPaginationItem",t)}const Kt=it("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),w=Kt,Y=F(i.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),tt=F(i.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),et=F(i.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),ot=F(i.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Xt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],rt=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${B(o.size)}`],o.variant==="text"&&e[`text${B(o.color)}`],o.variant==="outlined"&&e[`outlined${B(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},Yt=t=>{const{classes:e,color:o,disabled:a,selected:d,size:p,shape:u,type:r,variant:c}=t,l={root:["root",`size${B(p)}`,c,u,o!=="standard"&&`${c}${B(o)}`,a&&"disabled",d&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return U(l,Jt,e)},te=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${w.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ee=N(zt,{name:"MuiPaginationItem",slot:"Root",overridesResolver:rt})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${w.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${w.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:D(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${w.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${w.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>f({},e.variant==="text"&&{[`&.${w.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${w.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${w.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${w.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:D(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:D(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:D(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${w.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),oe=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>f({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),ae=m.forwardRef(function(e,o){const a=H({props:e,name:"MuiPaginationItem"}),{className:d,color:p="standard",component:u,components:r={},disabled:c=!1,page:l,selected:b=!1,shape:$="circular",size:h="medium",slots:x={},type:s="page",variant:y="text"}=a,j=E(a,Xt),C=f({},a,{color:p,disabled:c,selected:b,shape:$,size:h,type:s,variant:y}),I=Mt(),P=Yt(C),S=(I.direction==="rtl"?{previous:x.next||r.next||ot,next:x.previous||r.previous||et,last:x.first||r.first||Y,first:x.last||r.last||tt}:{previous:x.previous||r.previous||et,next:x.next||r.next||ot,first:x.first||r.first||Y,last:x.last||r.last||tt})[s];return s==="start-ellipsis"||s==="end-ellipsis"?i.jsx(te,{ref:o,ownerState:C,className:T(P.root,d),children:"…"}):i.jsxs(ee,f({ref:o,ownerState:C,component:u,disabled:c,className:T(P.root,d)},j,{children:[s==="page"&&l,S?i.jsx(oe,{as:S,ownerState:C,className:P.icon}):null]}))}),ne=ae,ie=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],re=t=>{const{classes:e,variant:o}=t;return U({root:["root",o],ul:["ul"]},Ht,e)},se=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),le=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ce(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const de=m.forwardRef(function(e,o){const a=H({props:e,name:"MuiPagination"}),{boundaryCount:d=1,className:p,color:u="standard",count:r=1,defaultPage:c=1,disabled:l=!1,getItemAriaLabel:b=ce,hideNextButton:$=!1,hidePrevButton:h=!1,renderItem:x=z=>i.jsx(ne,f({},z)),shape:s="circular",showFirstButton:y=!1,showLastButton:j=!1,siblingCount:C=1,size:I="medium",variant:P="text"}=a,L=E(a,ie),{items:S}=Zt(f({},a,{componentName:"Pagination"})),R=f({},a,{boundaryCount:d,color:u,count:r,defaultPage:c,disabled:l,getItemAriaLabel:b,hideNextButton:$,hidePrevButton:h,renderItem:x,shape:s,showFirstButton:y,showLastButton:j,siblingCount:C,size:I,variant:P}),_=re(R);return i.jsx(se,f({"aria-label":"pagination navigation",className:T(_.root,p),ownerState:R,ref:o},L,{children:i.jsx(le,{className:_.ul,ownerState:R,children:S.map((z,g)=>i.jsx("li",{children:x(f({},z,{color:u,"aria-label":b(z.type,z.page,z.selected),shape:s,size:I,variant:P}))},g))})}))}),pe=de,ge=t=>t.drinks.searchQuery,st=t=>t.drinks.categories,lt=t=>t.drinks.ingredients,ct=t=>t.drinks.page,dt=t=>t.drinks.searchResults,ue=t=>t.drinks.isLoading,xe=v.ul`
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
`,he=v.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,fe=v.img`
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
`,ve=()=>{const{drinks:t}=k(dt),e=k(W);return(t==null?void 0:t.length)!==0?i.jsx(xe,{children:t==null?void 0:t.map(o=>i.jsxs(he,{children:[i.jsx(fe,{src:o.drinkThumb,alt:o.drink,onError:a=>{a.currentTarget.src=bt}}),i.jsxs(me,{children:[i.jsx(be,{theme:e,children:o.drink}),i.jsx(ye,{theme:e,to:`/drink/${o._id}`,children:"See more"})]})]},o._id))}):i.jsx(yt,{message:"No cocktails found for your request"})},ke=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),$e=v.div`
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
`,at=v(vt)`
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
`,nt={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?n.light:"rgba(243, 243, 243, 0.4)"})},Ie={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?n.primaryDark:"rgba(10, 10, 17, 0.4)"})},ze=()=>{const[t,e]=m.useState(""),o=k(st),a=k(lt),d=k(W),p=o.length!==0?["All categories",...o]:[],u=a.length!==0?[{title:"All ingredients"},...a]:[],r=V(),c=Q("(max-width:767px)");m.useEffect(()=>{c&&r(q(t))},[r,c,t]);const l=(s,y="")=>{switch(s){case"searchQuery":e(y),r(O(1));break;case"category":if(y==="All categories"){r(J(""));return}r(J(y)),r(O(1));break;case"ingredient":if(y==="All ingredients"){r(Z(""));return}r(Z(y)),r(O(1));break}},b=s=>{l("searchQuery",s.target.value.trim())},$=s=>{l("category",s.value)},h=s=>{l("ingredient",s.value)},x=s=>{s.preventDefault(),r(q(t))};return i.jsx($e,{children:i.jsxs(Ce,{onSubmit:x,children:[i.jsxs(Pe,{children:[i.jsx(we,{type:"text",placeholder:"Enter the text",onChange:b,theme:d}),i.jsx(je,{type:"submit",children:i.jsx(Se,{theme:d})})]}),i.jsx(at,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:d==="dark"?nt:Ie,theme:d,noOptionsMessage:()=>"No categories",options:p.map(s=>({label:s,value:s})),onChange:$}),i.jsx(at,{name:"ingredient",styles:nt,theme:d,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:u.map(s=>({label:s.title,value:s.title})),onChange:h})]})})},Me=({limit:t,totalItems:e})=>{const o=k(ct),[a,d]=m.useState(1),[p,u]=m.useState(2),r=V(),c=Q("(min-width:768px)"),l=Math.ceil(e/t);m.useEffect(()=>{if(!c&&l>5){d(1),u(0);return}if(c&&l>8){d(3),u(-2);return}d(1),u(2)},[l,c]);const b={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:c?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${n.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return i.jsx(Gt,{sx:b.stack,children:l>1&&i.jsx(pe,{count:l,page:o,boundaryCount:a,siblingCount:p,onChange:($,h)=>r(O(h)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:b.pagination})})},Le=v.div`
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
`,Ge=()=>{const t=k(st),e=k(lt),o=k(dt),a=k(ct),d=k(ge),p=k(ue),u=k(W),r=V(),l=Q("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||r(xt())},[t,r]),m.useEffect(()=>{e.length||r(ht())},[r,e]),m.useEffect(()=>{r(ft({searchQuery:d,page:a,limit:l}))},[r,l,a,d]),i.jsxs(i.Fragment,{children:[i.jsx(Lt,{}),i.jsx(Rt,{children:i.jsxs(Le,{children:[i.jsx(Nt,{title:"Drinks",theme:u}),i.jsx(ze,{}),p?i.jsx(mt,{}):i.jsxs(i.Fragment,{children:[i.jsx(ve,{}),i.jsx(Me,{totalItems:o.max_page,limit:l})]})]})}),i.jsx(Dt,{})]})};export{Ge as default};
