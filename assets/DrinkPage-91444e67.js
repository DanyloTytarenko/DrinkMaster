import{s as m,n as t,c as s,r as c,u as g,j as i,P as u,O as y,i as x,Q as k,S as v,x as D}from"./index-43083e3e.js";import{S as I,d as f,M as z}from"./DrinksSearch.styled-ddbe4738.js";import{P as w}from"./PageTitle-43ec9d28.js";import{H as F,F as S}from"./Header-b4d02f1c.js";import{k as C,l as M,m as T}from"./selectors-3f3e92cd.js";import"./react-select.esm-d9bfaa4c.js";import"./assertThisInitialized-c1abf05a.js";import"./index.esm-d7032b0d.js";const P=m.div`
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
    // padding-left: 100px;
    // padding-right: 100px;
    padding-top: 158px;
    padding-bottom: 140px;
    max-width: 1440px;
  }
`;m.h1`
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
`;const $=t.p`
  color: rgba(243, 243, 243, 0.5);
  margin-top: -32px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.29;

  @media (min-width: 768px) {
    margin-top: -42px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media (min-width: 1440px) {
    margin-top: -62px;
    // width: 400px;
    // height: 400px;
  }
`,E=t.p`
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
  // color: #000000;
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
    margin-top: -160px;
    margin-right: 0px;
    margin-left: 300px;
  }
`,R=t.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,L=t.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`,h=t.button`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  color: ${s.secondaryDark};

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;
    border-radius: 42px;
    padding: 18px 44px;
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
    // width: 400px;
    // height: 400px;
  }
`,B=({drinkId:o,favoriteStatus:n})=>{const[r,e]=c.useState(!0),a=g(),p=()=>{a(u(o)),e(!0)},d=()=>{a(y(o)),e(!1)};return c.useEffect(()=>{e(n)},[n]),i.jsx(i.Fragment,{children:r?i.jsx(h,{type:"button",onClick:()=>d(),children:"Remove from favorites"}):i.jsx(h,{type:"button",onClick:()=>p(),children:"Add to favorite drinks"})})},H=({drinkDetails:o})=>{const{_id:n,drink:r,glass:e,alcoholic:a,description:p,drinkThumb:d,favorite:j}=o;return i.jsx(I,{children:i.jsxs(L,{children:[i.jsxs("div",{children:[i.jsx(w,{children:r}),i.jsxs($,{children:[e," / ",a]}),i.jsx(E,{children:p}),i.jsx(B,{drinkId:n,favoriteStatus:j})]}),i.jsx(R,{children:i.jsx(A,{src:d,alt:"picture Cocktail",onError:b=>{b.currentTarget.src=f}})})]})})},G=t.h2`
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
`,O=t.ul`
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 21px;
  // justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    // flex-direction: row;
    // flex-wrap: wrap;
    // column-gap: 20px;
  }
`,Q=t.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,W=t.img`
  width: 157px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 220px;
  }
  @media (min-width: 1440px) {
    // width: 400px;
    // height: 400px;
  }
`,_=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,q=t.p`
  margin: 0;
  color: ${s.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.13;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }

  @media (min-width: 1440px) {
    // width: 400px;
    // height: 400px;
  }
`,J=t.p`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${s.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,K=({drinkDetails:o})=>{const{ingredients:n}=o;return i.jsxs(i.Fragment,{children:[i.jsx(G,{children:"Ingredient"}),i.jsx(O,{children:n==null?void 0:n.map(({ingredientId:r,title:e,measure:a,ingredientThumb:p})=>i.jsxs(Q,{children:[i.jsx(W,{src:p,alt:e,onError:d=>{d.currentTarget.src=f}}),i.jsxs(_,{children:[i.jsx(q,{children:e}),i.jsx(J,{children:a})]})]},r))})]})},N=t.h2`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`,l=t.p`
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
    // height: 400px;
  }
`,U=t.img`
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
    width: 704px;
    height: 430px;
    margin-top: 20px;
  }
`,V=t.div`
  @media (min-width: 1440px) {
    display: flex;

    // flex-direction: column;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
  }
`,X="/DrinkMaster/assets/any-cocktail-a45fb631.jpg",Y=({drinkDetails:o})=>{const{description:n,instructions:r}=o;return i.jsxs(i.Fragment,{children:[i.jsx(N,{children:"Recipe Preparation"}),i.jsxs(V,{children:[i.jsxs("div",{children:[i.jsx(l,{children:n}),i.jsx(l,{children:r})]}),i.jsx(U,{src:X,alt:"Any Cocktail"})]})]})},si=()=>{const o=x(C);x(M);const{drinkId:n}=k(),r=g(),e=x(T),{drink:a}=e;return c.useEffect(()=>{r(v(n))},[r]),i.jsxs(i.Fragment,{children:[i.jsx(F,{}),i.jsx(z,{children:i.jsx(P,{children:o?i.jsx(D,{}):i.jsxs(i.Fragment,{children:[i.jsx(w,{title:a}),i.jsx(H,{drinkDetails:e}),i.jsx(K,{drinkDetails:e}),i.jsx(Y,{drinkDetails:e})]})})}),i.jsx(S,{})]})};export{si as default};
