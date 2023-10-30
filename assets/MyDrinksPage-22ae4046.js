import{n as r,o as t,r as o,B as i,j as s}from"./index-6f8a97c3.js";import{D as f}from"./DrinksList-0b2129ee.js";import{a as c,b as p}from"./selectors-93f1b7ea.js";import{u as x}from"./useDispatch-c7c83ba6.js";const d=r.div`
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
`,b=()=>{const e=x(),n=t(c),a=t(p);return o.useEffect(()=>{e(i())},[e]),s.jsxs(d,{children:[s.jsx(l,{children:"DrinksPage Page"}),n&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(f,{})]})};export{b as default};
