import{n as e,o as t,r as i,C as f,j as s}from"./index-e69e596c.js";import{D as n}from"./DrinksList-cb91a996.js";import{c,d as p}from"./selectors-93f1b7ea.js";import{u as x}from"./useDispatch-824904df.js";const d=e.div`
padding: 100px;
`,l=e.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,g=()=>{const r=x(),o=t(c),a=t(p);return i.useEffect(()=>{r(f())},[r]),s.jsxs(d,{children:[s.jsx(l,{children:"FavoriteDrinkPage"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(n,{})]})};export{g as default};
