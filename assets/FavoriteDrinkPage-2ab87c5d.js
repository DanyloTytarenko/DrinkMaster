import{n as r,u as t,r as i,m as n,j as s}from"./index-8608cee4.js";import{D as f}from"./DrinksList-2640d295.js";import{u as c,c as p,d as x}from"./selectors-9410902c.js";const d=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,l=r.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,g=()=>{const e=c(),a=t(p),o=t(x);return i.useEffect(()=>{e(n())},[e]),s.jsxs(d,{children:[s.jsx(l,{children:"FavoriteDrinkPage"}),a&&!o&&s.jsx("b",{children:"Request in progress..."}),s.jsx(f,{})]})};export{g as default};
