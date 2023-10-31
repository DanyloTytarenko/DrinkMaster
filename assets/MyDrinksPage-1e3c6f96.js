import{n as e,o as t,r as n,G as f,j as s}from"./index-0a814fc1.js";import{D as i}from"./DrinksList-17c6fc57.js";import{c,d as p}from"./selectors-ff4fddd9.js";import{u as x}from"./useDispatch-2386bad7.js";const d=e.div`
  padding-top: 100px;
`,l=e.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,b=()=>{const r=x(),o=t(c),a=t(p);return n.useEffect(()=>{r(f())},[r]),s.jsxs(d,{children:[s.jsx(l,{children:"DrinksPage Page"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(i,{})]})};export{b as default};
