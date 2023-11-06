import{n as g,s as i,h as t,L as l,j as e,i as x,r as p,u as f,k as w}from"./index-fc9bbdc4.js";import{H as y,F as u}from"./Header-eca8d2b4.js";import{P as k}from"./PageTitle-a51981b3.js";import{u as c}from"./useMediaQuery-e50ab029.js";import"./index.esm-1505d28e.js";import"./getThemeProps-c5c0aa06.js";const j=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  @media only screen and (min-width: 768px) {
  padding: 120px 32px;
  };
  @media only screen and (min-width: 1440px) {
    padding: 128px 100px;
  }
`,b=i.div`
@media only screen and (min-width: 1440px) {
display: flex;
gap: 130px;
`,D=i.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
  max-width: 619px;
  };
`,L=i.div`
display: flex;
flex-direction: column;
`,z=i.p`
line-height: 20px;
color: ${t.light};
margin-bottom: 32px;
@media only screen and (min-width: 768px) {
font-size: 18px;
line-height: 24px;
margin-bottom: 48px;
}
@media only screen and (min-width: 1440px) {
width: 500px;
margin-bottom: 40px;
`,v=i(l)`
display: flex;
width: 151px;
height: 46px;
justify-content: center;
align-items: center;
color: ${t.secondaryDark};
background-color: ${t.light};
border-radius: 42px;
margin-bottom: 47px;
font-size: 14px;
font-weight: 600;

@media only screen and (min-width: 768px) {
width: 169px;
height: 54px;
font-size: 16px;
margin-bottom: 54px;
};

@media only screen and (min-width: 1440px) {
width: 160px;
};

&:active {
  border: 2px solid rgba(64, 112, 205, 0.50);
}
`,P=i.img`
  width: 252px;
  height: 313px;
  flex-shrink: 0;
  margin: auto;
  margin-bottom: 112px;
  @media only screen and (min-width: 768px) {
  width: 359px;
  height: 445px;
  }
`,T=()=>e.jsxs(b,{children:[e.jsxs(L,{children:[e.jsx(k,{title:"Craft Your Perfect Drink with Drink Master",theme:"dark",marginMobile:"16px",marginTablet:"28px",marginDesktop:"28px"}),e.jsxs(D,{children:[e.jsx(z,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the worlds finest beverages."}),e.jsx(v,{to:"/add",children:"Add drinks"})]})]}),e.jsx(P,{src:"../../../public/homepage.jpg",alt:"Coctail photo"})]}),$=n=>n.newDrinks.items,S=n=>n.newDrinks.isLoading,E=n=>n.newDrinks.error,C=i.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media only screen and (min-width: 768px) {
    gap: 80px;
  }
`,M=i.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 0;
  color: ${t.light};
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`,N=i.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${t.light};
  @media only screen and (min-width: 768px) {
    gap: 40px;
  }
`,A=i.ul`
display: inline-flex;
// flex-wrap: wrap;
gap: 20px;
`,F=i.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    gap: 20px;
  }
`,H=i.img`
  max-width: 335px;
  height: auto;
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
    max-width: 342px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 400px;
  }
`,I=i.div`
  display: flex;
  justify-content: space-between;
`,W=i.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`,O=i(l)`
  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-weight: 500;
  line-height: 18px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Q=i(l)`
  display: flex;
  width: 163px;
  height: 46px;
  justify-content: center;
  align-items: center;
  color: ${t.secondaryDark};
  background: ${t.light};
  border-radius: 42px;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    width: 183px;
    height: 54px;
    font-size: 16px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
`,R=()=>{const n=x($),s=c("(max-width: 767px)"),r=c("(min-width: 768px) and (max-width: 1439px)"),[h,a]=p.useState(n);return p.useEffect(()=>{a(s?n.slice(0,1):r?n.slice(0,2):n.slice(0,3))},[s,r,n]),e.jsxs(e.Fragment,{children:[e.jsx(C,{children:h.map(d=>e.jsxs(N,{children:[e.jsx(M,{children:d.category}),d.drinks.map((o,m)=>e.jsx(A,{children:e.jsxs(F,{children:[e.jsx(H,{src:o.drinkThumb,alt:`Photo of ${o.drink}`}),e.jsxs(I,{children:[e.jsx(W,{children:o.drink}),e.jsx(O,{to:`/drink/${o._id}`,children:"See more"})]})]})},m))]},d.category))}),e.jsx(Q,{to:"/drinks",children:"Other drinks"})]})},J=()=>{const n=f(),s=x(S),r=x(E);return p.useEffect(()=>{n(w())},[n]),s?e.jsx("p",{children:"Loading..."}):r?e.jsxs("p",{children:["Error: ",r.message]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsxs(j,{children:[e.jsx(T,{}),e.jsx(R,{})]}),e.jsx(u,{})]})};export{J as default};
