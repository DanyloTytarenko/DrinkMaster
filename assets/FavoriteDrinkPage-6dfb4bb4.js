import{n as o,u as x,k as s,m as c,r as d,U as f,j as t,p as l}from"./index-12e0d522.js";import{D as g}from"./DrinksList-66622d8a.js";import{i as h,j,k as F,l as u}from"./selectors-3a823e9a.js";import{c as w,N as v,P as k}from"./Paginator-9399ea2c.js";import{H as D,F as P}from"./Header-3023b052.js";import{P as b}from"./PageTitle-bc82c659.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-b6514f4e.js";import"./getThemeProps-19cdf186.js";import"./ButtonBase-c99e1397.js";import"./assertThisInitialized-1933fa20.js";import"./useTheme-be33183c.js";import"./index.esm-aa62406f.js";const L=o.div`
  padding: 80px 0;
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
`;o.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const A=()=>{const i=x(),r=s(h),e=s(j),n=s(F),p=s(u),a=s(w),m=s(c);return d.useEffect(()=>{i(f(a))},[a]),t.jsxs(t.Fragment,{children:[t.jsx(D,{}),t.jsxs(L,{children:[t.jsx(b,{title:"Favorites",theme:m}),r&&!e&&t.jsx(l,{}),e&&t.jsx(v,{message:"Something went wrong"}),t.jsx(g,{}),t.jsx(k,{limit:p,totalItems:n})]}),t.jsx(P,{})]})};export{A as default};
