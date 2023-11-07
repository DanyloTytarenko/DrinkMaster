import{s as h,n as t,c as s,r as c,u as g,j as i,a2 as j,V as u,k as x,a3 as k,a4 as y,y as D}from"./index-87b5424f.js";import{d as f}from"./drink-image-da88a649.js";import{P as v}from"./PageTitle-cd7c8ca8.js";import{H as I,F as z}from"./Header-ad563988.js";import{k as F,l as $,m as M}from"./selectors-3f3e92cd.js";import{M as T}from"./MainAppContainer-fb794ba0.js";import"./index.esm-5f8ddc00.js";const C=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media (min-width: 1440px) {
    padding-top: 158px;
    padding-bottom: 140px;
    max-width: 1440px;
  }
`;h.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;t.h1`
  color: ${s.light};
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const E=t.p`
  color: rgba(243, 243, 243, 0.5);
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,P=t.p`
  color: ${s.light};
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media (min-width: 1440px) {
    width: 593px;
  }
`;t.button`
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
`;const A=t.img`
  width: 335px;
  height: 400px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: none;
    object-position: 50% 20%;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
    object-fit: contain;
    object-position: 50% 50%;
    margin-right: 0px;
  }
`,R=t.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,l=t.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  color: ${s.secondaryDark};
  transition:
    color 250ms ease,
    background-color 250ms ease;

  &:hover {
    background-color: ${s.secondaryDark};
    color: ${s.light};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 80px;
  }
`,L=({drinkId:o,favoriteStatus:e})=>{const[a,n]=c.useState(!0),r=g(),p=()=>{r(j(o)),n(!0)},d=()=>{r(u(o)),n(!1)};return c.useEffect(()=>{n(e)},[e]),i.jsx(i.Fragment,{children:a?i.jsx(l,{type:"button",onClick:()=>d(),children:"Remove from favorites"}):i.jsx(l,{type:"button",onClick:()=>p(),children:"Add to favorite drinks"})})},S=({drinkDetails:o})=>{const{_id:e,drink:a,glass:n,alcoholic:r,description:p,drinkThumb:d,favorite:b}=o;return i.jsxs(R,{children:[i.jsxs("div",{children:[i.jsx(v,{title:a}),i.jsxs(E,{children:[n," / ",r]}),i.jsx(P,{children:p}),i.jsx(L,{drinkId:e,favoriteStatus:b})]}),i.jsx(A,{src:d,alt:"picture Cocktail",onError:w=>{w.currentTarget.src=f}})]})},B=t.h2`
  color: ${s.light};
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: color 250ms ease;
  margin-top: 18px;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`,H=t.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;

  @media (min-width: 1440px) {
    column-gap: 35px;
  }
`,G=t.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,V=t.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`,_=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,q=t.p`
  margin: 0;
  color: ${s.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.13;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,J=t.p`
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,K=({drinkDetails:o})=>{const{ingredients:e}=o;return i.jsxs(i.Fragment,{children:[i.jsx(B,{children:"Ingredient"}),i.jsx(H,{children:e==null?void 0:e.map(({ingredientId:a,title:n,measure:r,ingredientThumb:p})=>i.jsxs(G,{children:[i.jsx(V,{src:p,alt:n,onError:d=>{d.currentTarget.src=f}}),i.jsxs(_,{children:[i.jsx(q,{children:n}),i.jsx(J,{children:r})]})]},a))})]})},N=t.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: ${s.light};

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 60px;
  }
`,m=t.p`
  color: ${s.light};
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.28;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media (min-width: 1440px) {
    width: 549px;
  }
`,O=t.img`
  width: 335px;
  height: 430px;
  border-radius: 8px;
  object-fit: none;

  @media (min-width: 768px) {
    width: 704px;
    height: 430px;
    margin-top: 20px;
  }
  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
    margin-top: 0px;
  }
`,Q=t.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`,U="/DrinkMaster/assets/any-cocktail-a45fb631.jpg",W=({drinkDetails:o})=>{const{description:e,instructions:a}=o;return i.jsxs(i.Fragment,{children:[i.jsx(N,{children:"Recipe Preparation"}),i.jsxs(Q,{children:[i.jsxs("div",{children:[i.jsx(m,{children:e}),i.jsx(m,{children:a})]}),i.jsx(O,{src:U,alt:"Any Cocktail"})]})]})},oi=()=>{const o=x(F),e=x($),{drinkId:a}=k(),n=g(),r=x(M);return c.useEffect(()=>{n(y(a))},[n]),i.jsxs(i.Fragment,{children:[i.jsx(I,{}),i.jsx(T,{children:i.jsx(C,{children:o&&!e?i.jsx(D,{}):i.jsxs(i.Fragment,{children:[i.jsx(S,{drinkDetails:r}),i.jsx(K,{drinkDetails:r}),i.jsx(W,{drinkDetails:r})]})})}),i.jsx(z,{})]})};export{oi as default};
