import{n as r,u as t,r as o,l as i,j as s}from"./index-8608cee4.js";import{D as f}from"./DrinksList-2640d295.js";import{u as c,a as p,b as x}from"./selectors-9410902c.js";const l=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,d=r.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,m=()=>{const e=c(),n=t(p),a=t(x);return o.useEffect(()=>{e(i())},[e]),s.jsxs(l,{children:[s.jsx(d,{children:"DrinksPage Page"}),n&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(f,{})]})};export{m as default};
