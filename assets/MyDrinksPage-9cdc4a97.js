import{n as r,u as t,r as i,f as o,j as s}from"./index-7dd10edf.js";import{u as f,s as c,a as p}from"./selectors-689bf8f2.js";const x=r.div`
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
`,h=()=>{const e=f(),n=t(c),a=t(p);return i.useEffect(()=>{e(o("/drinks/own"))},[e]),s.jsxs(x,{children:[s.jsx(d,{children:"DrinksPage Page"}),n&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(DrinksList,{apiPath:"/drinks/own"})]})};export{h as default};
