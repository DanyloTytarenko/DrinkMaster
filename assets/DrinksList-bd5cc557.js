import{j as s,_ as c,r as Y,s as r,h as x,N as q,M as a,O as d,u as D}from"./index-c3927ce1.js";import{u as G}from"./index.esm-6605603c.js";import{h as J,i as K}from"./PageTitle-07c977b7.js";import{_ as Q}from"./assertThisInitialized-6d15e9d8.js";import{a as X,g as ee,f as u,s as h,h as P,M as z,N as S,e as te,j as oe,c as se}from"./ButtonBase-e6dbbdf9.js";import{M as ne,I as re}from"./IconButton-d6f262e0.js";function ae(e){return ee("MuiAlert",e)}const ie=X("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=ie,le=u(s.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),ce=u(s.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),de=u(s.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),pe=u(s.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ue=u(s.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ge=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],xe=e=>{const{variant:t,color:o,severity:i,classes:n}=e,g={root:["root",`${t}${P(o||i)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return se(g,ae,n)},he=h(ne,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${P(o.color||o.severity)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?z:S,i=e.palette.mode==="light"?S:z,n=t.color||t.severity;return c({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},n&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:o(e.palette[n].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${n}StandardBg`]:i(e.palette[n].light,.9),[`& .${L.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${n}Color`]:o(e.palette[n].light,.6),border:`1px solid ${(e.vars||e).palette[n].light}`,[`& .${L.icon}`]:e.vars?{color:e.vars.palette.Alert[`${n}IconColor`]}:{color:e.palette[n].main}},n&&t.variant==="filled"&&c({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${n}FilledColor`],backgroundColor:e.vars.palette.Alert[`${n}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[n].dark:e.palette[n].main,color:e.palette.getContrastText(e.palette[n].main)}))}),fe=h("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),me=h("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),B=h("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),O={success:s.jsx(le,{fontSize:"inherit"}),warning:s.jsx(ce,{fontSize:"inherit"}),error:s.jsx(de,{fontSize:"inherit"}),info:s.jsx(pe,{fontSize:"inherit"})},ve=Y.forwardRef(function(t,o){var i,n,g,y,k,j;const f=te({props:t,name:"MuiAlert"}),{action:m,children:W,className:R,closeText:w="Close",color:_,components:A={},componentsProps:C={},icon:M,iconMapping:F=O,onClose:I,role:N="alert",severity:v="success",slotProps:$={},slots:b={},variant:V="standard"}=f,T=Q(f,ge),l=c({},f,{color:_,severity:v,variant:V}),p=xe(l),E=(i=(n=b.closeButton)!=null?n:A.CloseButton)!=null?i:re,H=(g=(y=b.closeIcon)!=null?y:A.CloseIcon)!=null?g:ue,U=(k=$.closeButton)!=null?k:C.closeButton,Z=(j=$.closeIcon)!=null?j:C.closeIcon;return s.jsxs(he,c({role:N,elevation:0,ownerState:l,className:oe(p.root,R),ref:o},T,{children:[M!==!1?s.jsx(fe,{ownerState:l,className:p.icon,children:M||F[v]||O[v]}):null,s.jsx(me,{ownerState:l,className:p.message,children:W}),m!=null?s.jsx(B,{ownerState:l,className:p.action,children:m}):null,m==null&&I?s.jsx(B,{ownerState:l,className:p.action,children:s.jsx(E,c({size:"small","aria-label":w,title:w,color:"inherit",onClick:I},U,{children:s.jsx(H,c({fontSize:"small"},Z))}))}):null]}))}),ye=ve,ke=r.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${x.light};
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`,je=r.li`
width: 335px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 704px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,we=r.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,Ae=r.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`,Ce=r.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,Me=r.span`
font-size: 14px;
color: ${x.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,Ie=r.div`
display: flex;
flex-direction: column;
gap: 4px;
`,$e=r.div`
display: flex;
gap: 8px;
`,be=r.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 704px) {
width: 56px;
height:56px;
}
`,De=r(q)`
color: ${x.light};
padding: 18px 44px;
border-radius: 42px;
background: ${x.secondaryDark};
font-weight: 600;
border:none;
`;a.defaults.baseURL="https://drinks-whm4.onrender.com";d("drinks/fetchOwn",async(e,t)=>{try{return(await a.get("/drinks/own")).data}catch(o){return t.rejectWithValue(o.message)}});d("drinks/fetchFavorite",async(e,t)=>{try{return(await a.get("/drinks/favorite")).data}catch(o){return t.rejectWithValue(o.message)}});d("drinks/addOwnDrink",async(e,t)=>{try{return(await a.post("/drinks/own/add",e)).data}catch(o){return t.rejectWithValue(o.message)}});d("drinks/addFavoriteDrink",async(e,t)=>{try{return(await a.post("/drinks/favorite/add",e)).data}catch(o){return t.rejectWithValue(o.message)}});const ze=d("drinks/deleteOwnDrink",async(e,t)=>{try{return(await a.delete(`/drinks/own/remove/${e}`)).data}catch(o){return t.rejectWithValue(o.message)}}),Se=d("drinks/deleteFavoriteDrink",async(e,t)=>{try{return(await a.delete(`/drinks/favorite/remove/${e}`)).data}catch(o){return t.rejectWithValue(o.message)}}),Le="/DrinkMaster/assets/sprite-4ab4835d.svg",Be=({drink:e})=>{const t=G(),o=()=>{location.pathname==="/my"?t(ze(e.id)):location.pathname==="/favorites"&&t(Se(e.id))};return s.jsxs(je,{children:[s.jsx(we,{src:e.drinkThumb,alt:"Photo of cocktail"}),s.jsxs(Ie,{children:[s.jsx(Ae,{children:e.drink}),s.jsx(Me,{children:e.alcoholic})]}),s.jsx(Ce,{children:e.desc}),s.jsxs($e,{children:[s.jsx(De,{to:`/drink/${e.id}`,children:"See more"}),s.jsx(be,{onClick:o,children:s.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${Le}#icon-trash`})})})]})]})},Ne=()=>{let e;return console.log(location.pathname),location.pathname==="/DrinkMaster/my"?(e=D(J),console.log(e)):location.pathname==="/DrinkMaster/favorites"&&(e=D(K),console.log(e)),e.length>0?s.jsx(ke,{children:e.map(t=>s.jsx(Be,{drink:t},t.id))}):s.jsx(ye,{severity:"info",variant:"outlined",children:"Your drink list is empty"})};export{ye as A,Ne as D};
