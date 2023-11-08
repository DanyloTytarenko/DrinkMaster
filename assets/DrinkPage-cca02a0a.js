import{s as f,n,c as e,r as h,u as k,k as d,m as l,j as i,a3 as j,W as y,a4 as $,a5 as D,p as v}from"./index-646d2af3.js";import{d as u}from"./defolt-8-6ec9d6b1.js";import{P as I}from"./PageTitle-152e623c.js";import{H as z,F}from"./Header-c9fca309.js";import{o as T,p as M,q as P}from"./selectors-3a823e9a.js";import{M as C}from"./MainAppContainer-707e2b36.js";import"./index.esm-8db04231.js";const L=f.div`
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
`;f.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const E=n.p`
  ${({theme:t})=>t==="dark"?`color: ${e.halfLight};`:`color: ${e.halfSecondaryDark};`}
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,A=n.p`
  ${({theme:t})=>t==="dark"?`color: ${e.light};`:`color: ${e.primaryDark};`}
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
`;n.button`
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
`;const R=n.img`
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
`,S=n.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,m=n.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  ${({theme:t})=>t==="dark"?` color: ${e.secondaryDark};`:`color: ${e.light};`}
  ${({theme:t})=>t==="dark"?` background-color: ${e.light};`:`background-color: ${e.secondaryDark};`}
  transition:
    color 250ms ease,
    background-color 250ms ease;

  &:hover {
    ${({theme:t})=>t==="dark"?` background-color: ${e.secondaryDark};`:`background-color: ${e.light};`}
    ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.secondaryDark};`}
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 80px;
  }
`,B=({drinkId:t,favoriteStatus:r})=>{const[a,o]=h.useState(!0),s=k(),p=d(l),c=()=>{s(j(t)),o(!0)},x=()=>{s(y(t)),o(!1)};return h.useEffect(()=>{o(r)},[r]),i.jsx(i.Fragment,{children:a?i.jsx(m,{theme:p,type:"button",onClick:()=>x(),children:"Remove from favorites"}):i.jsx(m,{theme:p,type:"button",onClick:()=>c(),children:"Add to favorite drinks"})})},H=({drinkDetails:t})=>{const r=d(l),{_id:a,drink:o,glass:s,alcoholic:p,description:c,drinkThumb:x,favorite:w}=t;return i.jsxs(S,{children:[i.jsxs("div",{children:[i.jsx(I,{title:o}),i.jsxs(E,{theme:r,children:[s," / ",p]}),i.jsx(A,{theme:r,children:c}),i.jsx(B,{drinkId:a,favoriteStatus:w})]}),i.jsx(R,{src:x,alt:"picture Cocktail",onError:b=>{b.currentTarget.src=u}})]})},q=n.h2`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}
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
`,G=n.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;

  @media (min-width: 1440px) {
    column-gap: 35px;
  }
`,W=n.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,_=n.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
`,J=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,K=n.p`
  margin: 0;
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.13;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,N=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.halfLight};`:`color: ${e.halfPrimaryDark};`}
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,O=({drinkDetails:t})=>{const{ingredients:r}=t,a=d(l);return i.jsxs(i.Fragment,{children:[i.jsx(q,{theme:a,children:"Ingredient"}),i.jsx(G,{children:r==null?void 0:r.map(({ingredientId:o,title:s,measure:p,ingredientThumb:c})=>i.jsxs(W,{children:[i.jsx(_,{src:c,alt:s,onError:x=>{x.currentTarget.src=u}}),i.jsxs(J,{children:[i.jsx(K,{theme:a,children:s}),i.jsx(N,{theme:a,children:p})]})]},o))})]})},Q=n.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}

  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 60px;
  }
`,g=n.p`
  ${({theme:t})=>t==="dark"?` color: ${e.light};`:`color: ${e.primaryDark};`}
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
`,U=n.img`
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
`,V=n.div`
  @media (min-width: 1440px) {
    display: flex;
    gap: 60px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-start;
  }
`,X="/DrinkMaster/assets/any-cocktail-a45fb631.jpg",Y=({drinkDetails:t})=>{const{description:r,instructions:a}=t,o=d(l);return i.jsxs(i.Fragment,{children:[i.jsx(Q,{theme:o,children:"Recipe Preparation"}),i.jsxs(V,{children:[i.jsxs("div",{children:[i.jsx(g,{theme:o,children:r}),i.jsx(g,{theme:o,children:a})]}),i.jsx(U,{src:X,alt:"Any Cocktail"})]})]})},ai=()=>{const t=d(T),r=d(M),{drinkId:a}=$(),o=k(),s=d(P);return h.useEffect(()=>{o(D(a))},[o]),i.jsxs(i.Fragment,{children:[i.jsx(z,{}),i.jsx(C,{children:i.jsx(L,{children:t&&!r?i.jsx(v,{}):i.jsxs(i.Fragment,{children:[i.jsx(H,{drinkDetails:s}),i.jsx(O,{drinkDetails:s}),i.jsx(Y,{drinkDetails:s})]})})}),i.jsx(F,{})]})};export{ai as default};
