import{n as t,o as e,r as i,H as f,j as s}from"./index-0a814fc1.js";import{D as n}from"./DrinksList-17c6fc57.js";import{e as c,f as p}from"./selectors-ff4fddd9.js";import{u as x}from"./useDispatch-2386bad7.js";const d=t.div`
padding: 100px;
`,l=t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,g=()=>{const r=x(),o=e(c),a=e(p);return i.useEffect(()=>{r(f())},[r]),s.jsxs(d,{children:[s.jsx(l,{children:"FavoriteDrinkPage"}),o&&!a&&s.jsx("b",{children:"Request in progress..."}),s.jsx(n,{})]})};export{g as default};
