import{n as h,i as g,s as i,c as n,L as l,j as e,k as p,r as c,u as y,m as b}from"./index-75562b89.js";import{H as k,F as j}from"./Header-aa71f01d.js";import{P as D}from"./PageTitle-5da29739.js";import{D as $}from"./dummyDrinkThumb-d0bd605f.js";import{u as x}from"./useMediaQuery-b10167a9.js";import{M as v}from"./MainAppContainer-e5fa2b3a.js";import"./index.esm-7059fc77.js";import"./getThemeProps-7642b604.js";const z=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  @media only screen and (min-width: 768px) {
  padding-top: 120px;
  padding-bottom: 140px;
  };
  @media only screen and (min-width: 1440px) {
  padding-top: 0px;
  } 
`,L=h.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    background-color: rgba(188, 230, 210, 0.3);
    filter: blur(105px);
    z-index: -10;
    width: 387px;
    height: 381px;
    top: 343px;
    right: 193px;
  }
`,T=g`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`,P=g`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`,S=i.div`
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 123px;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    gap: 130px;
    margin-bottom: 160px;
  }
`,M=i.div`
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
`,_=i.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    margin-top: 185px;
  }
  animation: ${T} 1s forwards;
`,E=i.p`
height: 60px;
font-size: 14px;
font-weight: 400px;
line-height: 20px;
color: ${n.light};
margin-bottom: 32px;
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,C=i(l)`
  display: flex;
  width: 151px;
  height: 46px;
  justify-content: center;
  align-items: center;
  color: ${n.secondaryDark};
  background-color: ${n.light};
  border-radius: 42px;
  font-size: 14px;
  font-weight: 600;
  transition: 250ms ease;

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
    color: ${n.light};
    background-color: ${n.secondaryDark};
  }
`,H=i.div`
display: flex;
justify-content: center;
flex-shrink: 0; 
animation: ${P} 1s forwards;
@media only screen and (min-width: 1440px) {
margin-top: 128px;
}
`,m="/DrinkMaster/assets/asr_blue_iced_tea_mobile-363d6adb.png",A="/DrinkMaster/assets/asr_blue_iced_tea_tablet-6f81fa1d.png",N=()=>e.jsxs(S,{children:[e.jsxs(_,{children:[e.jsx(D,{title:"Craft Your Perfect Drink with Drink Master",theme:"dark",marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),e.jsxs(M,{children:[e.jsx(E,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(C,{to:"/add",children:"Add drinks"})]})]}),e.jsx(H,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 768px)",srcSet:`${A}`,width:"359",height:"445"}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${m}`,width:"252",height:"313"}),e.jsx("img",{src:m,alt:"Coctail image",width:"252",height:"313"})]})})]}),F=t=>t.newDrinks.items,I=t=>t.newDrinks.isLoading,W=t=>t.newDrinks.error,Y=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,X=i.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  color: ${n.light};
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,B=i.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${n.light};
  width: 100%;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    margin-bottom: 80px;
  }
`,G=i.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,O=i.div`
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
`,Q=i.img`
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
`,R=i.div`
  display: flex;
  justify-content: space-between;
`,U=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,q=i(l)`
  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  transition: 250ms ease;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    color: ${n.light};
  }
`,J=i(l)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  color: ${n.secondaryDark};
  background: ${n.light};
  border-radius: 42px;
  font-weight: 600;
  transition: 250ms ease;

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: ${n.light};
    background-color: ${n.secondaryDark};
  }
`,K=()=>{const t=p(F),a=x("(max-width: 767px)"),o=x("(min-width: 768px) and (max-width: 1439px)"),[f,w]=c.useState(t);return c.useEffect(()=>{const s=a?1:o?2:3,r=t.map(d=>({...d,drinks:d.drinks.slice(0,s)}));w(r)},[a,o,t]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:f.map(s=>e.jsxs(B,{children:[e.jsx(X,{children:s.category}),e.jsx(G,{children:s.drinks.map((r,d)=>e.jsxs(O,{children:[e.jsx(Q,{src:r.drinkThumb,alt:`Photo of ${r.drink}`,onError:u=>{u.currentTarget.src=$}}),e.jsxs(R,{children:[e.jsx(U,{children:r.drink}),e.jsx(q,{to:`/drink/${r._id}`,children:"See more"})]})]},d))})]},s.category))}),e.jsx(J,{to:"/drinks",children:"Other drinks"})]})},se=()=>{const t=y(),a=p(I),o=p(W);return c.useEffect(()=>{t(b())},[t]),a?e.jsx("p",{children:"Loading..."}):o?e.jsxs("p",{children:["Error: ",o.message]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs(v,{children:[e.jsxs(z,{children:[e.jsx(N,{}),e.jsx(K,{})]}),e.jsx(L,{})]}),e.jsx(j,{})]})};export{se as default};
