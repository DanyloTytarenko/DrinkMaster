import{j as t,_ as a,r as V,s as r,c as u,N as Z,u as J,M as K,O as Y,i as w}from"./index-396fa773.js";import{i as q,j as G}from"./selectors-3f3e92cd.js";import{_ as Q}from"./assertThisInitialized-f99c443c.js";import{a as X,g as oo,h as d,e as x,i as B,J as $,K as D,f as to,c as eo,b as so}from"./ButtonBase-e300143a.js";import{M as no}from"./Paper-d803e607.js";import{I as ro}from"./IconButton-c85187a1.js";function lo(o){return oo("MuiAlert",o)}const io=X("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),z=io,ao=d(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),co=d(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),po=d(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),uo=d(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),xo=d(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),go=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],ho=o=>{const{variant:e,color:n,severity:l,classes:s}=o,p={root:["root",`${e}${B(n||l)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return so(p,lo,s)},fo=x(no,{name:"MuiAlert",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[n.variant],e[`${n.variant}${B(n.color||n.severity)}`]]}})(({theme:o,ownerState:e})=>{const n=o.palette.mode==="light"?$:D,l=o.palette.mode==="light"?D:$,s=e.color||e.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&e.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:n(o.palette[s].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${s}StandardBg`]:l(o.palette[s].light,.9),[`& .${z.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&e.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:n(o.palette[s].light,.6),border:`1px solid ${(o.vars||o).palette[s].light}`,[`& .${z.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&e.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${s}FilledColor`],backgroundColor:o.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[s].dark:o.palette[s].main,color:o.palette.getContrastText(o.palette[s].main)}))}),mo=x("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),vo=x("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),S=x("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),L={success:t.jsx(ao,{fontSize:"inherit"}),warning:t.jsx(co,{fontSize:"inherit"}),error:t.jsx(po,{fontSize:"inherit"}),info:t.jsx(uo,{fontSize:"inherit"})},yo=V.forwardRef(function(e,n){var l,s,p,m,v,y;const g=to({props:e,name:"MuiAlert"}),{action:h,children:P,className:_,closeText:A="Close",color:O,components:C={},componentsProps:j={},icon:M,iconMapping:R=L,onClose:k,role:N="alert",severity:f="success",slotProps:I={},slots:b={},variant:W="standard"}=g,F=Q(g,go),i=a({},g,{color:O,severity:f,variant:W}),c=ho(i),E=(l=(s=b.closeButton)!=null?s:C.CloseButton)!=null?l:ro,T=(p=(m=b.closeIcon)!=null?m:C.CloseIcon)!=null?p:xo,H=(v=I.closeButton)!=null?v:j.closeButton,U=(y=I.closeIcon)!=null?y:j.closeIcon;return t.jsxs(fo,a({role:N,elevation:0,ownerState:i,className:eo(c.root,_),ref:n},F,{children:[M!==!1?t.jsx(mo,{ownerState:i,className:c.icon,children:M||R[f]||L[f]}):null,t.jsx(vo,{ownerState:i,className:c.message,children:P}),h!=null?t.jsx(S,{ownerState:i,className:c.action,children:h}):null,h==null&&k?t.jsx(S,{ownerState:i,className:c.action,children:t.jsx(E,a({size:"small","aria-label":A,title:A,color:"inherit",onClick:k},H,{children:t.jsx(T,a({fontSize:"small"},U))}))}):null]}))}),Ao=yo,Co=r.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${u.light};
margin-top: 40px;
@media only screen and (min-width: 768px) {
row-gap: 80px;
column-gap: 20px;   
margin-top: 60px;
}
`,jo=r.li`
width: 335px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 768px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,Mo=r.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,ko=r.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 768px) {
font-size: 24px;
}
`,Io=r.p`
font-size: 14px;
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,bo=r.span`
font-size: 14px;
color: ${u.disabled};
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,wo=r.div`
display: flex;
flex-direction: column;
gap: 4px;
`,$o=r.div`
display: flex;
gap: 8px;
`,Do=r.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 768px) {
width: 56px;
height:56px;
}
`,zo=r(Z)`
color: ${u.light};
padding: 18px 44px;
border-radius: 42px;
background: ${u.secondaryDark};
font-weight: 600;
border:none;
`,So="/DrinkMaster/assets/sprite-4ab4835d.svg",Lo=({drink:o})=>{const e=J(),n=()=>{location.pathname==="/DrinkMaster/my"?e(K(o._id)):location.pathname==="/DrinkMaster/favorites"&&e(Y(o._id))};return t.jsxs(jo,{children:[t.jsx(Mo,{src:o.drinkThumb,alt:"Photo of cocktail"}),t.jsxs(wo,{children:[t.jsx(ko,{children:o.drink}),t.jsx(bo,{children:o.alcoholic})]}),t.jsx(Io,{children:o.desc}),t.jsxs($o,{children:[t.jsx(zo,{to:`/drink/${o._id}`,children:"See more"}),t.jsx(Do,{type:"button",onClick:n,children:t.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:t.jsx("use",{href:`${So}#icon-trash`})})})]})]})},Wo=()=>{let o;return location.pathname==="/DrinkMaster/my"?o=w(q):location.pathname==="/DrinkMaster/favorites"&&(o=w(G)),o.length>0?t.jsx(Co,{children:o.map(e=>t.jsx(Lo,{drink:e},e._id))}):t.jsx(Ao,{severity:"info",variant:"outlined",children:"Your drink list is empty"})};export{Ao as A,Wo as D};
