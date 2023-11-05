import{n as e,u as i,r as o,K as n,j as s,v as p}from"./index-13341ded.js";import{A as d,D as f}from"./DrinksList-da0af43e.js";import{d as x,f as m}from"./selectors-3ec32ffc.js";import{H as c,F as l}from"./Header-83706755.js";import"./PopularDrinks.styled-e55044df.js";import{P as h}from"./PageTitle-72531680.js";import{u}from"./index.esm-44a95f77.js";import"./assertThisInitialized-6d02add4.js";import"./ButtonBase-3de64063.js";import"./IconButton-c473c226.js";const j=e.div`
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
`;const O=()=>{const r=u(),a=i(x),t=i(m);return o.useEffect(()=>{r(n())},[r]),s.jsxs(s.Fragment,{children:[s.jsx(c,{}),s.jsxs(j,{children:[s.jsx(h,{title:"My drinks",theme:"dark"}),a&&!t&&s.jsx(p,{}),t&&s.jsx(d,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),s.jsx(f,{})]}),s.jsx(l,{})]})};export{O as default};
