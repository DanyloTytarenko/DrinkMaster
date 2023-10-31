import{n as e,o as t,r as n,B as f,j as s}from"./index-e69e596c.js";import{D as i}from"./DrinksList-cb91a996.js";import{a as c,b as p}from"./selectors-93f1b7ea.js";import{u as x}from"./useDispatch-824904df.js";const d=e.div`
  padding-top: 100px;
`,l=e.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,g=()=>{const r=x(),o=t(c),a=t(p);return n.useEffect(()=>{r(f())},[r]),s.jsxs(d,{children:[s.jsx(l,{children:"DrinksPage Page"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(i,{})]})};export{g as default};
