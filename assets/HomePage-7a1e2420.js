import{n as h,c as n,s as e,L as c,j as i,i as p,r as x,u,k as y}from"./index-db25bba1.js";import{H as b,F as k}from"./Header-d020e426.js";import{P as j}from"./PageTitle-12f74430.js";import{D}from"./dummyDrinkThumb-d0bd605f.js";import{u as l}from"./useMediaQuery-87add838.js";import{M as $}from"./MainAppContainer-8e21f3ce.js";import"./index.esm-51e55257.js";import"./getThemeProps-76be36da.js";const v=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 80px 20px; */
  padding-top: 80px;
  padding-bottom: 80px;
  /* background-color: ${n.primaryDark}; */
  @media only screen and (min-width: 768px) {
    /* padding: 120px 32px; */
    padding-top: 120px;
    padding-bottom: 120px;
  }
  /* @media only screen and (min-width: 1440px) {
    padding: 0px 100px;
  } */
`,z=h.div`
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
`,T=e.div`
margin-bottom: 112px;
@media only screen and (min-width: 768px) {
margin-bottom: 123px;
};
@media only screen and (min-width: 1440px) {
display: flex;
gap: 130px;
margin-bottom: 160px;
}
`,L=e.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;
  
  margin-bottom: 47px;
  @media only screen and (min-width: 768px) {
  max-width: 619px;
  margin-bottom: 54px;
  };
  @media only screen and (min-width: 1440px) {
  max-width: 500px;
  margin-bottom: 0px;
  }
`,P=e.div`
display: flex;
flex-direction: column;

@media only screen and (min-width: 1440px) {
margin-top: 185px;
}
`,S=e.p`
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
`,M=e(c)`
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
};

@media only screen and (min-width: 1440px) {
width: 160px;
};

&:active {
  border: 2px solid rgba(64, 112, 205, 0.50);
};

&:hover {
  color: ${n.light};
  background-color: ${n.secondaryDark}; 
}
`,_=e.div`
display: flex;
justify-content: center;
flex-shrink: 0; 
@media only screen and (min-width: 1440px) {
margin-top: 128px;
`,m="/DrinkMaster/assets/asr_blue_iced_tea_mobile-363d6adb.png",E="/DrinkMaster/assets/asr_blue_iced_tea_tablet-6f81fa1d.png",C=()=>i.jsxs(T,{children:[i.jsxs(P,{children:[i.jsx(j,{title:"Craft Your Perfect Drink with Drink Master",theme:"dark",marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),i.jsxs(L,{children:[i.jsx(S,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),i.jsx(M,{to:"/add",children:"Add drinks"})]})]}),i.jsx(_,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width: 768px)",srcSet:`${E}`,width:"359",height:"445"}),i.jsx("source",{media:"(min-width: 375px)",srcSet:`${m}`,width:"252",height:"313"}),i.jsx("img",{src:m,alt:"Coctail image",width:"252",height:"313"})]})})]}),H=t=>t.newDrinks.items,A=t=>t.newDrinks.isLoading,N=t=>t.newDrinks.error,F=e.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,I=e.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  color: ${n.light};
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,W=e.li`
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
`,B=e.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,G=e.div`
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
`,O=e.img`
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
  @media only screen and (min-width: 768px) {
    height: 360px;
  }
  @media only screen and (min-width: 1440px) {
    height: 400px;
  }
`,Q=e.div`
  display: flex;
  justify-content: space-between;
`,R=e.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,U=e(c)`
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
`,Y=e(c)`
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
  @media only screen and (min-width: 1440px) {
    margin-bottom: 140px;
  }
  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: ${n.light};
    background-color: ${n.secondaryDark};
  }
`,q=()=>{const t=p(H),a=l("(max-width: 767px)"),o=l("(min-width: 768px) and (max-width: 1439px)"),[g,f]=x.useState(t);return x.useEffect(()=>{const s=a?1:o?2:3,r=t.map(d=>({...d,drinks:d.drinks.slice(0,s)}));f(r)},[a,o,t]),i.jsxs(i.Fragment,{children:[i.jsx(F,{children:g.map(s=>i.jsxs(W,{children:[i.jsx(I,{children:s.category}),i.jsx(B,{children:s.drinks.map((r,d)=>i.jsxs(G,{children:[i.jsx(O,{src:r.drinkThumb,alt:`Photo of ${r.drink}`,onError:w=>{w.currentTarget.src=D}}),i.jsxs(Q,{children:[i.jsx(R,{children:r.drink}),i.jsx(U,{to:`/drink/${r._id}`,children:"See more"})]})]},d))})]},s.category))}),i.jsx(Y,{to:"/drinks",children:"Other drinks"})]})},ti=()=>{const t=u(),a=p(A),o=p(N);return x.useEffect(()=>{t(y())},[t]),a?i.jsx("p",{children:"Loading..."}):o?i.jsxs("p",{children:["Error: ",o.message]}):i.jsxs(i.Fragment,{children:[i.jsx(b,{}),i.jsxs($,{children:[i.jsxs(v,{children:[i.jsx(C,{}),i.jsx(q,{})]}),i.jsx(z,{})]}),i.jsx(k,{})]})};export{ti as default};
