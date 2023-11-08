import{n as f,i as k,s as t,c as n,L as x,k as a,m,j as i,r as p,u as b,o as $,p as j}from"./index-8f8d316c.js";import{H as D,F as v}from"./Header-f2e971b8.js";import{P as T}from"./PageTitle-ed7093c1.js";import{D as z}from"./dummyDrinkThumb-d0bd605f.js";import{u as h}from"./useMediaQuery-2ef5126f.js";import{M as L}from"./MainAppContainer-3a1866ba.js";import"./index.esm-82c10a10.js";import"./getThemeProps-cce05e8a.js";const P=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  @media only screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 140px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 0px;
  }
`,S=f.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    /* background-color: rgba(188, 230, 210, 0.3); */
    background-color: ${({theme:e})=>e==="dark"?"rgba(188, 230, 210, 0.3)":"rgba(188, 230, 210, 0.4)"};
    filter: blur(105px);
    z-index: -10;
    width: 387px;
    height: 381px;
    top: 343px;
    right: 193px;
  }
`,M=k`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,_=k`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,E=t.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=t.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;

  margin-bottom: 47px;
  @media only screen and (min-width: 768px) {
    max-width: 619px;
    margin-bottom: 54px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 500px;
    margin-bottom: 0px;
  }
`,H=t.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    margin-top: 185px;
  }
  animation: ${M} 1s forwards;
`,A=t.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
margin-bottom: 32px;
${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,N=t(x)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};`:`color: ${n.light};`};
  ${({theme:e})=>e==="dark"?`background-color: ${n.light};`:`background-color: ${n.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 169px;
    height: 54px;
    font-size: 16px;
  }

  @media only screen and (min-width: 1440px) {
    width: 160px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${n.secondaryDark};`:`background-color: ${n.light};`}
  }
`,F=t.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  animation: ${_} 1s forwards;
  @media only screen and (min-width: 1440px) {
    margin-top: 128px;
  }
`,g="/DrinkMaster/assets/asr_blue_iced_tea_mobile-363d6adb.png",I="/DrinkMaster/assets/asr_blue_iced_tea_tablet-6f81fa1d.png",W=()=>{const e=a(m);return i.jsxs(E,{children:[i.jsxs(H,{children:[i.jsx(T,{title:"Craft Your Perfect Drink with Drink Master",theme:"dark",marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(C,{children:[i.jsx(A,{theme:e,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(N,{to:"/add",theme:e,children:"Add drinks"})]})]}),i.jsx(F,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${I}`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${g}`,width:"252",height:"313"}),i.jsx("img",{src:g,alt:"Coctail image",width:"252",height:"313"})]})})]})},Y=e=>e.newDrinks.items,X=e=>e.newDrinks.isLoading,B=e=>e.newDrinks.error,G=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,O=t.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,Q=t.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,R=t.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,U=t.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;

  @media only screen and (min-width: 768px) {
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,q=t.img`
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`,J=t.div`
  display: flex;
  justify-content: space-between;
`,K=t.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,V=t(x)`
  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`};
  }
`,Z=t(x)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;
  ${({theme:e})=>e==="dark"?`color: ${n.secondaryDark};`:`color: ${n.light};`};
${({theme:e})=>e==="dark"?`background-color: ${n.light};`:`background-color: ${n.secondaryDark};`}

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    ${({theme:e})=>e==="dark"?`color: ${n.light};`:`color: ${n.secondaryDark};`}
    ${({theme:e})=>e==="dark"?`background-color: ${n.secondaryDark};`:`background-color: ${n.light};`}
  }
`,ee=()=>{const e=a(Y),c=h("(max-width: 767px)"),s=h("(min-width: 768px) and (max-width: 1439px)"),r=a(m),[w,u]=p.useState(e);return p.useEffect(()=>{const d=c?1:s?2:3,o=e.map(l=>({...l,drinks:l.drinks.slice(0,d)}));u(o)},[c,s,e]),i.jsxs(i.Fragment,{children:[i.jsx(G,{children:w.map(d=>i.jsxs(Q,{children:[i.jsx(O,{theme:r,children:d.category}),i.jsx(R,{children:d.drinks.map((o,l)=>i.jsxs(U,{children:[i.jsx(q,{src:o.drinkThumb,alt:`Photo of ${o.drink}`,onError:y=>{y.currentTarget.src=z}}),i.jsxs(J,{children:[i.jsx(K,{theme:r,children:o.drink}),i.jsx(V,{to:`/drink/${o._id}`,theme:r,children:"See more"})]})]},l))})]},d.category))}),i.jsx(Z,{to:"/drinks",children:"Other drinks"})]})},ce=()=>{const e=b(),c=a(X),s=a(B),r=a(m);return p.useEffect(()=>{e($())},[e]),c?i.jsx(j,{}):s?i.jsxs("p",{children:["Error: ",s.message]}):i.jsxs(i.Fragment,{children:[i.jsx(D,{}),i.jsxs(L,{children:[i.jsxs(P,{theme:r,children:[i.jsx(W,{}),i.jsx(ee,{})]}),i.jsx(S,{theme:r})]}),i.jsx(v,{})]})};export{ce as default};