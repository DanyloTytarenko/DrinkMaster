import{n as e,u as o,k as i,r as n,Q as p,j as t,y as d}from"./index-cd111e7f.js";import{A as f,D as m}from"./DrinksList-bf6d5ba5.js";import{d as x,f as c}from"./selectors-3f3e92cd.js";import{H as l,F as h}from"./Header-eb70c8b0.js";import"./PopularDrinks.styled-12181474.js";import{P as j}from"./PageTitle-4a169bee.js";import"./dummyDrinkThumb-d0bd605f.js";import"./assertThisInitialized-4e7cc64e.js";import"./ButtonBase-cd498e99.js";import"./getThemeProps-625fac8d.js";import"./Paper-3d0279cb.js";import"./IconButton-c9f4389e.js";import"./index.esm-508a2217.js";const u=e.div`
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
`;const H=()=>{const r=o(),a=i(x),s=i(c);return n.useEffect(()=>{r(p())},[r]),t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsxs(u,{children:[t.jsx(j,{title:"My drinks",theme:"dark"}),a&&!s&&t.jsx(d,{}),s&&t.jsx(f,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),t.jsx(m,{})]}),t.jsx(h,{})]})};export{H as default};