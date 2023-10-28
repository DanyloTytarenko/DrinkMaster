import{n as r,u as t,r as i,f as o,j as s}from"./index-558dcb7d.js";import{u as f,s as c,a as p,D as x}from"./DrinksList-1df1195b.js";const d=r.div`
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
`,g=()=>{const e=f(),a=t(c),n=t(p);return i.useEffect(()=>{e(o("/drinks/own"))},[e]),s.jsxs(d,{children:[s.jsx(l,{children:"DrinksPage Page"}),a&&!n&&s.jsx("b",{children:"Request in progress..."}),s.jsx(x,{apiPath:"/drinks/own"})]})};export{g as default};
