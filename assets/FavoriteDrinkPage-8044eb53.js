import{n as e,u as o,k as s,r as n,S as p,j as t,y as d}from"./index-cd111e7f.js";import{A as x,D as f}from"./DrinksList-bf6d5ba5.js";import{g as m,h as c}from"./selectors-3f3e92cd.js";import{H as l,F as h}from"./Header-eb70c8b0.js";import{P as g}from"./PageTitle-4a169bee.js";import"./dummyDrinkThumb-d0bd605f.js";import"./assertThisInitialized-4e7cc64e.js";import"./ButtonBase-cd498e99.js";import"./getThemeProps-625fac8d.js";import"./Paper-3d0279cb.js";import"./IconButton-c9f4389e.js";import"./index.esm-508a2217.js";const j=e.div`
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
`;const A=()=>{const r=o(),a=s(m),i=s(c);return n.useEffect(()=>{r(p())},[r]),t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsxs(j,{children:[t.jsx(g,{title:"Favorites",theme:"dark"}),a&&!i&&t.jsx(d,{}),i&&t.jsx(x,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),t.jsx(f,{})]}),t.jsx(h,{})]})};export{A as default};