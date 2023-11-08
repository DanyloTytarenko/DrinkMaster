import{n as i,u as x,k as s,m as c,r as d,U as f,j as t,p as l}from"./index-fe54c6f5.js";import{D as h}from"./DrinksList-7b8eaf5f.js";import{i as g,j,k as F,l as u}from"./selectors-3a823e9a.js";import{c as v,N as w,P as k}from"./Paginator-1cbd7d2e.js";import{H as D,F as P}from"./Header-35259c19.js";import{P as b}from"./PageTitle-2ac51c12.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-c235083b.js";import"./getThemeProps-38117a84.js";import"./ButtonBase-ca938c7b.js";import"./assertThisInitialized-8437fa46.js";import"./useTheme-270f8353.js";import"./index.esm-1c8c3902.js";const L=i.div`
  padding: 80px 0;
  min-height: 100hv;
  width: 335px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 160px 0 140px;
    width: 1240px;
  }
`;i.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const A=()=>{const o=x(),r=s(g),e=s(j),n=s(F),p=s(u),a=s(v),m=s(c);return d.useEffect(()=>{o(f(a))},[a]),t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(L,{children:[t.jsx(b,{title:"Favorites",theme:m}),r&&!e&&t.jsx(l,{}),e&&t.jsx(w,{message:"Something went wrong"}),t.jsx(h,{}),t.jsx(k,{limit:p,totalItems:n})]}),t.jsx(P,{})]})};export{A as default};
