import{j as t,_ as a,r as V,s as r,c as u,N as Z,u as J,U as K,V as Y,k as $}from"./index-75562b89.js";import{D as q}from"./dummyDrinkThumb-d0bd605f.js";import{i as G,j as Q}from"./selectors-3f3e92cd.js";import{_ as X}from"./assertThisInitialized-bcd87294.js";import{a as oo,g as to,h as d,e as x,i as B,J as w,K as D,f as eo,c as so,b as no}from"./ButtonBase-881f4914.js";import{M as ro}from"./Paper-9e5dbd82.js";import{I as lo}from"./IconButton-3460f8fc.js";function io(o){return to("MuiAlert",o)}const ao=oo("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),z=ao,co=d(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),po=d(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),uo=d(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),xo=d(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),go=d(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),ho=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],fo=o=>{const{variant:e,color:n,severity:l,classes:s}=o,p={root:["root",`${e}${B(n||l)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return no(p,io,s)},mo=x(ro,{name:"MuiAlert",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:n}=o;return[e.root,e[n.variant],e[`${n.variant}${B(n.color||n.severity)}`]]}})(({theme:o,ownerState:e})=>{const n=o.palette.mode==="light"?w:D,l=o.palette.mode==="light"?D:w,s=e.color||e.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&e.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:n(o.palette[s].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${s}StandardBg`]:l(o.palette[s].light,.9),[`& .${z.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&e.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${s}Color`]:n(o.palette[s].light,.6),border:`1px solid ${(o.vars||o).palette[s].light}`,[`& .${z.icon}`]:o.vars?{color:o.vars.palette.Alert[`${s}IconColor`]}:{color:o.palette[s].main}},s&&e.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${s}FilledColor`],backgroundColor:o.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[s].dark:o.palette[s].main,color:o.palette.getContrastText(o.palette[s].main)}))}),vo=x("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,e)=>e.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),yo=x("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,e)=>e.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),S=x("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,e)=>e.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),L={success:t.jsx(co,{fontSize:"inherit"}),warning:t.jsx(po,{fontSize:"inherit"}),error:t.jsx(uo,{fontSize:"inherit"}),info:t.jsx(xo,{fontSize:"inherit"})},Ao=V.forwardRef(function(e,n){var l,s,p,m,v,y;const g=eo({props:e,name:"MuiAlert"}),{action:h,children:P,className:_,closeText:A="Close",color:R,components:C={},componentsProps:j={},icon:k,iconMapping:O=L,onClose:M,role:N="alert",severity:f="success",slotProps:I={},slots:b={},variant:T="standard"}=g,W=X(g,ho),i=a({},g,{color:R,severity:f,variant:T}),c=fo(i),E=(l=(s=b.closeButton)!=null?s:C.CloseButton)!=null?l:lo,F=(p=(m=b.closeIcon)!=null?m:C.CloseIcon)!=null?p:go,H=(v=I.closeButton)!=null?v:j.closeButton,U=(y=I.closeIcon)!=null?y:j.closeIcon;return t.jsxs(mo,a({role:N,elevation:0,ownerState:i,className:so(c.root,_),ref:n},W,{children:[k!==!1?t.jsx(vo,{ownerState:i,className:c.icon,children:k||O[f]||L[f]}):null,t.jsx(yo,{ownerState:i,className:c.message,children:P}),h!=null?t.jsx(S,{ownerState:i,className:c.action,children:h}):null,h==null&&M?t.jsx(S,{ownerState:i,className:c.action,children:t.jsx(E,a({size:"small","aria-label":A,title:A,color:"inherit",onClick:M},H,{children:t.jsx(F,a({fontSize:"small"},U))}))}):null]}))}),Co=Ao,jo=r.ul`
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
`,ko=r.li`
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
`,Io=r.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 768px) {
font-size: 24px;
}
`,bo=r.p`
font-size: 14px;
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,$o=r.span`
font-size: 14px;
color: ${u.disabled};
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,wo=r.div`
display: flex;
flex-direction: column;
gap: 4px;
`,Do=r.div`
display: flex;
gap: 8px;
`,zo=r.button`
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
`,So=r(Z)`
color: ${u.light};
padding: 18px 44px;
border-radius: 42px;
background: ${u.secondaryDark};
font-weight: 600;
border:none;
`,Lo="/DrinkMaster/assets/sprite-0b90ff8c.svg",Bo=({drink:o})=>{const e=J(),n=()=>{location.pathname==="/DrinkMaster/my"?e(K(o._id)):location.pathname==="/DrinkMaster/favorites"&&e(Y(o._id))};return t.jsxs(ko,{children:[t.jsx(Mo,{src:o.drinkThumb,alt:` Photo of cocktail ${o.drink} `,onError:l=>{l.currentTarget.src=q}}),t.jsxs(wo,{children:[t.jsx(Io,{children:o.drink}),t.jsx($o,{children:o.alcoholic})]}),t.jsx(bo,{children:o.desc}),t.jsxs(Do,{children:[t.jsx(So,{to:`/drink/${o._id}`,children:"See more"}),t.jsx(zo,{type:"button",onClick:n,children:t.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:t.jsx("use",{href:`${Lo}#icon-trash`})})})]})]})},Eo=()=>{let o;return location.pathname==="/DrinkMaster/my"?o=$(G):location.pathname==="/DrinkMaster/favorites"&&(o=$(Q)),o.length>0?t.jsx(jo,{children:o.map(e=>t.jsx(Bo,{drink:e},e._id))}):t.jsx(Co,{severity:"info",variant:"outlined",children:"Your drink list is empty"})};export{Co as A,Eo as D};
