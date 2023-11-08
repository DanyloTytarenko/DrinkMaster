import{_ as f,r as m,j as a,s as b,c as i,L as xt,k as P,m as it,u as A,q as H,t as q,v as O,w as Z,x as ht,y as ft,z as mt,p as bt}from"./index-cb9bc0bc.js";import{d as yt}from"./drink-image-da88a649.js";import{S as vt}from"./react-select.esm-cfba865b.js";import{u as V}from"./useMediaQuery-fcbda793.js";import{x as kt,y as $t,z as Ct,A as J,D as W,E as wt,k as Pt,F as jt,c as F,b as Q,g as U,G as K,e as N,f as G,a as rt,h as T,B as St,j as L,i as B}from"./ButtonBase-09e5e3bb.js";import{_ as E}from"./assertThisInitialized-29267481.js";import{e as Mt,u as zt}from"./extendSxProp-f452fb60.js";import{u as It}from"./useTheme-bff116cc.js";import{H as Dt,F as Lt}from"./Header-4b60884e.js";import{P as Nt}from"./PageTitle-a02ff9a8.js";import{M as Rt}from"./MainAppContainer-ac0ffa67.js";import"./getThemeProps-68331ea1.js";import"./index.esm-25587af0.js";const _t=kt(),Bt=_t,Ot=["component","direction","spacing","divider","children","className","useFlexGap"],Ft=$t(),Tt=Bt("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function Et(t){return Ct({props:t,name:"MuiStack",defaultTheme:Ft})}function Wt(t,e){const o=m.Children.toArray(t).filter(Boolean);return o.reduce((n,d,p)=>(n.push(d),p<o.length-1&&n.push(m.cloneElement(e,{key:`separator-${p}`})),n),[])}const At=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],Vt=({ownerState:t,theme:e})=>{let o=f({display:"flex",flexDirection:"column"},J({theme:e},W({values:t.direction,breakpoints:e.breakpoints.values}),n=>({flexDirection:n})));if(t.spacing){const n=wt(e),d=Object.keys(e.breakpoints.values).reduce((r,c)=>((typeof t.spacing=="object"&&t.spacing[c]!=null||typeof t.direction=="object"&&t.direction[c]!=null)&&(r[c]=!0),r),{}),p=W({values:t.direction,base:d}),g=W({values:t.spacing,base:d});typeof p=="object"&&Object.keys(p).forEach((r,c,y)=>{if(!p[r]){const h=c>0?p[y[c-1]]:"column";p[r]=h}}),o=Pt(o,J({theme:e},g,(r,c)=>t.useFlexGap?{gap:K(n,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${At(c?p[c]:t.direction)}`]:K(n,r)}}))}return o=jt(e.breakpoints,o),o};function Qt(t={}){const{createStyledComponent:e=Tt,useThemeProps:o=Et,componentName:n="MuiStack"}=t,d=()=>Q({root:["root"]},r=>U(n,r),{}),p=e(Vt);return m.forwardRef(function(r,c){const y=o(r),k=Mt(y),{component:h="div",direction:x="column",spacing:s=0,divider:v,children:j,className:$,useFlexGap:M=!1}=k,C=E(k,Ot),D={direction:x,spacing:s,useFlexGap:M},S=d();return a.jsx(p,f({as:h,ownerState:D,ref:c,className:F(S.root,$)},C,{children:v?Wt(j,v):j}))})}const Ut=Qt({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>G({props:t,name:"MuiStack"})}),Gt=Ut;function Ht(t){return U("MuiPagination",t)}rt("MuiPagination",["root","ul","outlined","text"]);const qt=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Zt(t={}){const{boundaryCount:e=1,componentName:o="usePagination",count:n=1,defaultPage:d=1,disabled:p=!1,hideNextButton:g=!1,hidePrevButton:l=!1,onChange:r,page:c,showFirstButton:y=!1,showLastButton:k=!1,siblingCount:h=1}=t,x=E(t,qt),[s,v]=zt({controlled:c,default:d,name:o,state:"page"}),j=(u,I)=>{c||v(I),r&&r(u,I)},$=(u,I)=>{const gt=I-u+1;return Array.from({length:gt},(Fe,ut)=>u+ut)},M=$(1,Math.min(e,n)),C=$(Math.max(n-e+1,e+1),n),D=Math.max(Math.min(s-h,n-e-h*2-1),e+2),S=Math.min(Math.max(s+h,e+h*2+2),C.length>0?C[0]-2:n-1),R=[...y?["first"]:[],...l?[]:["previous"],...M,...D>e+2?["start-ellipsis"]:e+1<n-e?[e+1]:[],...$(D,S),...S<n-e-1?["end-ellipsis"]:n-e>e?[n-e]:[],...C,...g?[]:["next"],...k?["last"]:[]],_=u=>{switch(u){case"first":return 1;case"previous":return s-1;case"next":return s+1;case"last":return n;default:return null}},z=R.map(u=>typeof u=="number"?{onClick:I=>{j(I,u)},type:"page",page:u,selected:u===s,disabled:p,"aria-current":u===s?"true":void 0}:{onClick:I=>{j(I,_(u))},type:u,page:_(u),selected:!1,disabled:p||u.indexOf("ellipsis")===-1&&(u==="next"||u==="last"?s>=n:s<=1)});return f({items:z},x)}function Jt(t){return U("MuiPaginationItem",t)}const Kt=rt("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),w=Kt,X=T(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Y=T(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),tt=T(a.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),et=T(a.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Xt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],st=(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],e[`size${B(o.size)}`],o.variant==="text"&&e[`text${B(o.color)}`],o.variant==="outlined"&&e[`outlined${B(o.color)}`],o.shape==="rounded"&&e.rounded,o.type==="page"&&e.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&e.ellipsis,(o.type==="previous"||o.type==="next")&&e.previousNext,(o.type==="first"||o.type==="last")&&e.firstLast]},Yt=t=>{const{classes:e,color:o,disabled:n,selected:d,size:p,shape:g,type:l,variant:r}=t,c={root:["root",`size${B(p)}`,r,g,o!=="standard"&&`${r}${B(o)}`,n&&"disabled",d&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return Q(c,Jt,e)},te=N("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",[`&.${w.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)})),ee=N(St,{name:"MuiPaginationItem",slot:"Root",overridesResolver:st})(({theme:t,ownerState:e})=>f({},t.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,[`&.${w.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${w.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.selected}`]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:L(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},[`&.${w.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},[`&.${w.disabled}`]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},e.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},e.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:t.typography.pxToRem(15)},e.shape==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius}),({theme:t,ownerState:e})=>f({},e.variant==="text"&&{[`&.${w.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}},[`&.${w.focusVisible}`]:{backgroundColor:(t.vars||t).palette[e.color].dark}},{[`&.${w.disabled}`]:{color:(t.vars||t).palette.action.disabled}})},e.variant==="outlined"&&{border:t.vars?`1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${t.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${w.selected}`]:f({},e.color!=="standard"&&{color:(t.vars||t).palette[e.color].main,border:`1px solid ${t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:L(t.palette[e.color].main,.5)}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.activatedOpacity})`:L(t.palette[e.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${w.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / calc(${t.vars.palette.action.activatedOpacity} + ${t.vars.palette.action.focusOpacity}))`:L(t.palette[e.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{[`&.${w.disabled}`]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})),oe=N("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(t,e)=>e.icon})(({theme:t,ownerState:e})=>f({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},e.size==="small"&&{fontSize:t.typography.pxToRem(18)},e.size==="large"&&{fontSize:t.typography.pxToRem(22)})),ae=m.forwardRef(function(e,o){const n=G({props:e,name:"MuiPaginationItem"}),{className:d,color:p="standard",component:g,components:l={},disabled:r=!1,page:c,selected:y=!1,shape:k="circular",size:h="medium",slots:x={},type:s="page",variant:v="text"}=n,j=E(n,Xt),$=f({},n,{color:p,disabled:r,selected:y,shape:k,size:h,type:s,variant:v}),M=It(),C=Yt($),S=(M.direction==="rtl"?{previous:x.next||l.next||et,next:x.previous||l.previous||tt,last:x.first||l.first||X,first:x.last||l.last||Y}:{previous:x.previous||l.previous||tt,next:x.next||l.next||et,first:x.first||l.first||X,last:x.last||l.last||Y})[s];return s==="start-ellipsis"||s==="end-ellipsis"?a.jsx(te,{ref:o,ownerState:$,className:F(C.root,d),children:"…"}):a.jsxs(ee,f({ref:o,ownerState:$,component:g,disabled:r,className:F(C.root,d)},j,{children:[s==="page"&&c,S?a.jsx(oe,{as:S,ownerState:$,className:C.icon}):null]}))}),ne=ae,ie=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],re=t=>{const{classes:e,variant:o}=t;return Q({root:["root",o],ul:["ul"]},Ht,e)},se=N("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant]]}})({}),le=N("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(t,e)=>e.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ce(t,e,o){return t==="page"?`${o?"":"Go to "}page ${e}`:`Go to ${t} page`}const de=m.forwardRef(function(e,o){const n=G({props:e,name:"MuiPagination"}),{boundaryCount:d=1,className:p,color:g="standard",count:l=1,defaultPage:r=1,disabled:c=!1,getItemAriaLabel:y=ce,hideNextButton:k=!1,hidePrevButton:h=!1,renderItem:x=z=>a.jsx(ne,f({},z)),shape:s="circular",showFirstButton:v=!1,showLastButton:j=!1,siblingCount:$=1,size:M="medium",variant:C="text"}=n,D=E(n,ie),{items:S}=Zt(f({},n,{componentName:"Pagination"})),R=f({},n,{boundaryCount:d,color:g,count:l,defaultPage:r,disabled:c,getItemAriaLabel:y,hideNextButton:k,hidePrevButton:h,renderItem:x,shape:s,showFirstButton:v,showLastButton:j,siblingCount:$,size:M,variant:C}),_=re(R);return a.jsx(se,f({"aria-label":"pagination navigation",className:F(_.root,p),ownerState:R,ref:o},D,{children:a.jsx(le,{className:_.ul,ownerState:R,children:S.map((z,u)=>a.jsx("li",{children:x(f({},z,{color:g,"aria-label":y(z.type,z.page,z.selected),shape:s,size:M,variant:C}))},u))})}))}),pe=de,ge=t=>t.drinks.searchQuery,lt=t=>t.drinks.categories,ct=t=>t.drinks.ingredients,dt=t=>t.drinks.page,pt=t=>t.drinks.searchResults,ue=t=>t.drinks.isLoading,xe=b.ul`
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
`,he=b.li`
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
`,me=b.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,be=b.p`
  margin: 0;
  /* color: ${i.light}; //#f3f3f3 */
  color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,ye=b(xt)`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:t})=>t==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.5)"};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${i.light}; //#f3f3f3; */
    color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,ve="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",ke="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",ot="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",$e="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",Ce=b.div`
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
`,we=b.p`
  margin-top: 32px;
  color: ${i.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,Pe=({message:t})=>a.jsxs(Ce,{children:[a.jsxs("picture",{children:[a.jsx("source",{media:"(min-width: 768px)",srcSet:`${ve} 1x, ${ke} 2x`,width:"261",height:"326"}),a.jsx("source",{media:"(min-width: 375px)",srcSet:`${ot} 1x, ${$e} 2x`,width:"198",height:"247"}),a.jsx("img",{src:ot,alt:"not found",width:"198",height:"247"})]}),a.jsx(we,{children:t})]}),je=()=>{const{drinks:t}=P(pt),e=P(it);return(t==null?void 0:t.length)!==0?a.jsx(xe,{children:t==null?void 0:t.map(o=>a.jsxs(he,{children:[a.jsx(fe,{src:o.drinkThumb,alt:o.drink,onError:n=>{n.currentTarget.src=yt}}),a.jsxs(me,{children:[a.jsx(be,{theme:e,children:o.drink}),a.jsx(ye,{theme:e,to:`/drink/${o._id}`,children:"See more"})]})]},o._id))}):a.jsx(Pe,{message:"No cocktails found for your request"})},Se=t=>m.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},m.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),m.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),Me=b.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,ze=b.form`
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
`,Ie=b.label`
  position: relative;
  display: inline-block;
`,De=b.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  /* border: 1px solid rgba(243, 243, 243, 0.2); */
  border: ${({theme:t})=>t==="dark"?"1px solid rgba(243, 243, 243, 0.2)":"1px solid rgba(10, 10, 17, 0.20)"};
  /* color: ${i.light}; //#f3f3f3 */
  color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    /* color: ${i.light}; //#f3f3f3 */
    color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
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
`,Ne=b(Se)`
  display: block;
  /* stroke: ${i.light}; //#f3f3f3 */
  stroke: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
`,at=b(vt)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background-color: ${i.secondaryDark}; //#161f37
    /* background-color: ${({theme:t})=>t==="dark"?i.secondaryDark:i.secondaryDark}; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* color: ${i.light}; //#f3f3f3 */
    color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
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
    color: ${i.light}; //#f3f3f3
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
    color: ${i.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${i.light}; //#f3f3f3
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
    /* background-color:${i.secondaryDark}; //#161f37; */
    background-color: ${({theme:t})=>t==="dark"?i.secondaryDark:i.white};
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
    color: ${i.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    /* background-color: ${i.light}; //#f3f3f3 */
    background-color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      /* background-color: ${i.gray}; //#434d67; */
      background-color: ${({theme:t})=>t==="dark"?i.gray:i.light};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      /* background-color: ${i.gray}; //#434d67; */
      background-color: ${({theme:t})=>t==="dark"?i.gray:i.light};
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
      /* color: ${i.light}; //#f3f3f3 */
      color: ${({theme:t})=>t==="dark"?i.light:i.primaryDark};
      cursor: pointer;
    }
  }
`,nt={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?i.light:"rgba(243, 243, 243, 0.4)"})},Re={dropdownIndicator:(t,e)=>({...t,transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,e)=>({...t,color:e.isSelected||e.isFocused?i.primaryDark:"rgba(10, 10, 17, 0.4)"})},_e=()=>{const[t,e]=m.useState(""),o=P(lt),n=P(ct),d=P(it),p=o.length!==0?["All categories",...o]:[],g=n.length!==0?[{title:"All ingredients"},...n]:[],l=A(),r=V("(max-width:767px)");m.useEffect(()=>{r&&l(H(t))},[l,r,t]);const c=(s,v="")=>{switch(s){case"searchQuery":e(v),l(O(1));break;case"category":if(v==="All categories"){l(Z(""));return}l(Z(v)),l(O(1));break;case"ingredient":if(v==="All ingredients"){l(q(""));return}l(q(v)),l(O(1));break}},y=s=>{c("searchQuery",s.target.value.trim())},k=s=>{c("category",s.value)},h=s=>{c("ingredient",s.value)},x=s=>{s.preventDefault(),l(H(t))};return a.jsx(Me,{children:a.jsxs(ze,{onSubmit:x,children:[a.jsxs(Ie,{children:[a.jsx(De,{type:"text",placeholder:"Enter the text",onChange:y,theme:d}),a.jsx(Le,{type:"submit",children:a.jsx(Ne,{theme:d})})]}),a.jsx(at,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:d==="dark"?nt:Re,theme:d,noOptionsMessage:()=>"No categories",options:p.map(s=>({label:s,value:s})),onChange:k}),a.jsx(at,{name:"ingredient",styles:nt,theme:d,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:g.map(s=>({label:s.title,value:s.title})),onChange:h})]})})},Be=({limit:t,totalItems:e})=>{const o=P(dt),[n,d]=m.useState(1),[p,g]=m.useState(2),l=A(),r=V("(min-width:768px)"),c=Math.ceil(e/t);m.useEffect(()=>{if(!r&&c>5){d(1),g(0);return}if(r&&c>8){d(3),g(-2);return}d(1),g(2)},[c,r]);const y={stack:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:r?"436px":"320px",height:"55px",marginLeft:"auto",marginRight:"auto"},pagination:{".MuiPaginationItem-root":{marginLeft:"7px",marginRight:"7px",padding:"0",minWidth:"27px",height:"27px",fontSize:"12px",fontWeight:"500",color:`${i.light}`,transition:"background 250ms ease","&:hover":{background:"rgba(64, 112, 205, 0.4)"}},".MuiPaginationItem-page.Mui-selected":{background:"rgba(64, 112, 205, 0.5)"},"ul.MuiPagination-ul":{flexWrap:"nowrap","& > :first-of-type":{marginRight:"16px"},"& > :last-of-type":{marginLeft:"16px"}}}};return a.jsx(Gt,{sx:y.stack,children:c>1&&a.jsx(pe,{count:c,page:o,boundaryCount:n,siblingCount:p,onChange:(k,h)=>l(O(h)),onClick:()=>window.scrollTo({top:200,behavior:"smooth"}),sx:y.pagination})})},Oe=b.div`
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
`,Xe=()=>{const t=P(lt),e=P(ct),o=P(pt),n=P(dt),d=P(ge),p=P(ue),g=A(),r=V("(min-width:769px)")?9:10;return m.useEffect(()=>{t.length||g(ht())},[t,g]),m.useEffect(()=>{e.length||g(ft())},[g,e]),m.useEffect(()=>{g(mt({searchQuery:d,page:n,limit:r}))},[g,r,n,d]),a.jsxs(a.Fragment,{children:[a.jsx(Dt,{}),a.jsx(Rt,{children:a.jsxs(Oe,{children:[a.jsx(Nt,{title:"Drinks"}),a.jsx(_e,{}),p?a.jsx(bt,{}):a.jsxs(a.Fragment,{children:[a.jsx(je,{}),a.jsx(Be,{totalItems:o.max_page,limit:r})]})]})}),a.jsx(Lt,{})]})};export{Xe as default};
