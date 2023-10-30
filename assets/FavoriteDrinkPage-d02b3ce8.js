import{n as r,o as e,r as i,C as n,j as s}from"./index-6f8a97c3.js";import{D as f}from"./DrinksList-0b2129ee.js";import{c,d as p}from"./selectors-93f1b7ea.js";import{u as x}from"./useDispatch-c7c83ba6.js";const d=r.div`
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
`,j=()=>{const t=x(),o=e(c),a=e(p);return i.useEffect(()=>{t(n())},[t]),s.jsxs(d,{children:[s.jsx(l,{children:"FavoriteDrinkPage"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(f,{})]})};export{j as default};
