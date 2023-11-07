import{n as e,u as o,k as i,r as n,Q as p,j as t,y as d}from"./index-4fb40229.js";import{A as f,D as m}from"./DrinksList-b5fed0a2.js";import{d as x,f as c}from"./selectors-3f3e92cd.js";import{H as l,F as h}from"./Header-285fb807.js";import"./PopularDrinks.styled-5773e6dc.js";import{P as j}from"./PageTitle-302e34ed.js";import"./dummyDrinkThumb-d0bd605f.js";import"./assertThisInitialized-03ce3969.js";import"./ButtonBase-397a3f86.js";import"./getThemeProps-c4effc41.js";import"./Paper-0fb5680a.js";import"./IconButton-d1a08d0d.js";import"./index.esm-2b4a9363.js";const u=e.div`
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
