import{n as w,c as n,s as i,L as p,j as e,i as c,r as x,u,k as y}from"./index-99e39b88.js";import{H as k,F as b}from"./Header-6179600c.js";import{P as j}from"./PageTitle-cf131367.js";import{D}from"./dummyDrinkThumb-d0bd605f.js";import{u as l}from"./useMediaQuery-844ea899.js";import"./index.esm-23a331f5.js";import"./getThemeProps-f53a3a7f.js";const $=w.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-color: ${n.primaryDark} @media only screen and
    (min-width: 768px) {
    padding: 120px 32px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 0px 100px;
  }
`,v=i.div`
margin-bottom: 112px;
@media only screen and (min-width: 768px) {
margin-bottom: 123px;
};
@media only screen and (min-width: 1440px) {
display: flex;
gap: 130px;
margin-bottom: 160px;
}
`,T=i.div`
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
`,z=i.div`
display: flex;
flex-direction: column;

@media only screen and (min-width: 1440px) {
margin-top: 185px;
}
`,L=i.p`
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
`,P=i(p)`
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
`,S=i.div`
display: flex;
justify-content: center;
flex-shrink: 0; 
@media only screen and (min-width: 1440px) {
margin-top: 128px;
`,m="/DrinkMaster/assets/asr_blue_iced_tea_mobile-363d6adb.png",_="/DrinkMaster/assets/asr_blue_iced_tea_tablet-6f81fa1d.png",M=()=>e.jsxs(v,{children:[e.jsxs(z,{children:[e.jsx(j,{title:"Craft Your Perfect Drink with Drink Master",theme:"dark",marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),e.jsxs(T,{children:[e.jsx(L,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(P,{to:"/add",children:"Add drinks"})]})]}),e.jsx(S,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 768px)",srcSet:`${_}`,width:"359",height:"445"}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${m}`,width:"252",height:"313"}),e.jsx("img",{src:m,alt:"Coctail image",width:"252",height:"313"})]})})]}),E=t=>t.newDrinks.items,C=t=>t.newDrinks.isLoading,H=t=>t.newDrinks.error,N=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,A=i.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  color: ${n.light};
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,F=i.li`
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
`,I=i.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,W=i.div`
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
`,O=i.img`
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
`,Q=i.div`
  display: flex;
  justify-content: space-between;
`,R=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,U=i(p)`
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
`,Y=i(p)`
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
`,q=()=>{const t=c(E),a=l("(max-width: 767px)"),o=l("(min-width: 768px) and (max-width: 1439px)"),[h,g]=x.useState(t);return x.useEffect(()=>{const s=a?1:o?2:3,r=t.map(d=>({...d,drinks:d.drinks.slice(0,s)}));g(r)},[a,o,t]),e.jsxs(e.Fragment,{children:[e.jsx(N,{children:h.map(s=>e.jsxs(F,{children:[e.jsx(A,{children:s.category}),e.jsx(I,{children:s.drinks.map((r,d)=>e.jsxs(W,{children:[e.jsx(O,{src:r.drinkThumb,alt:`Photo of ${r.drink}`,onError:f=>{f.currentTarget.src=D}}),e.jsxs(Q,{children:[e.jsx(R,{children:r.drink}),e.jsx(U,{to:`/drink/${r._id}`,children:"See more"})]})]},d))})]},s.category))}),e.jsx(Y,{to:"/drinks",children:"Other drinks"})]})},ee=()=>{const t=u(),a=c(C),o=c(H);return x.useEffect(()=>{t(y())},[t]),a?e.jsx("p",{children:"Loading..."}):o?e.jsxs("p",{children:["Error: ",o.message]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{}),e.jsxs($,{children:[e.jsx(M,{}),e.jsx(q,{})]}),e.jsx(b,{})]})};export{ee as default};
