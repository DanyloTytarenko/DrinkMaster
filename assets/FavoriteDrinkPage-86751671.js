import{n as t,o as e,r as i,W as f,j as s}from"./index-3bd5e235.js";import{D as n}from"./DrinksList-ad2d5ea2.js";import{e as c,f as p}from"./selectors-6ace5bbf.js";import{H as x,F as d}from"./Footer-39f6f2c2.js";import{u as m}from"./useDispatch-c31e1ece.js";const l=t.div`
padding: 100px;
`,h=t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,v=()=>{const r=m(),o=e(c),a=e(p);return i.useEffect(()=>{r(f())},[r]),s.jsxs(s.Fragment,{children:[s.jsx(x,{}),s.jsxs(l,{children:[s.jsx(h,{children:"FavoriteDrinkPage"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(n,{})]}),s.jsx(d,{})]})};export{v as default};
