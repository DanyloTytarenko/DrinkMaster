import{n as e,u as o,i,r as n,P as p,j as t,x as d}from"./index-fc9bbdc4.js";import{A as x,D as f}from"./DrinksList-0b36241c.js";import{d as m,f as c}from"./selectors-3ec32ffc.js";import{H as l,F as h}from"./Header-eca8d2b4.js";import"./PopularDrinks.styled-c7207f0f.js";import{P as j}from"./PageTitle-a51981b3.js";import"./assertThisInitialized-dd058191.js";import"./ButtonBase-ddedb9c1.js";import"./getThemeProps-c5c0aa06.js";import"./Paper-ac8f5241.js";import"./IconButton-50a97b05.js";import"./index.esm-1505d28e.js";const u=e.div`
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
`;const A=()=>{const r=o(),a=i(m),s=i(c);return n.useEffect(()=>{r(p())},[r]),t.jsxs(t.Fragment,{children:[t.jsx(l,{}),t.jsxs(u,{children:[t.jsx(j,{title:"My drinks",theme:"dark"}),a&&!s&&t.jsx(d,{}),s&&t.jsx(x,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),t.jsx(f,{})]}),t.jsx(h,{})]})};export{A as default};