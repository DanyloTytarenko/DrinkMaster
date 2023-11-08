import{n as e,u as o,k as i,r as n,S as p,j as t,p as d}from"./index-a4f04460.js";import{A as f,D as m}from"./DrinksList-7f4442f9.js";import{d as x,f as c}from"./selectors-3f3e92cd.js";import{H as l,F as h}from"./Header-b3d8d267.js";import"./PopularDrinks.styled-f38ab1fa.js";import{P as j}from"./PageTitle-3e56bad9.js";import"./dummyDrinkThumb-d0bd605f.js";import"./assertThisInitialized-3a65b47a.js";import"./ButtonBase-99f43650.js";import"./getThemeProps-9ef34a0f.js";import"./Paper-9e14f5f9.js";import"./IconButton-f1f742dc.js";import"./index.esm-acb07e7c.js";const u=e.div`
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
`;e.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const A=()=>{const r=o(),a=i(x),s=i(c);return n.useEffect(()=>{r(p())},[r]),t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsxs(u,{children:[t.jsx(j,{title:"My drinks",theme:"dark"}),a&&!s&&t.jsx(d,{}),s&&t.jsx(f,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),t.jsx(m,{})]}),t.jsx(h,{})]})};export{A as default};
