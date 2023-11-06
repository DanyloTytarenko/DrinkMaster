import{n as e,u as i,r as o,M as n,j as r,w as p}from"./index-30995329.js";import{A as d,D as f}from"./DrinksList-1f43a4d6.js";import{d as x,f as m}from"./selectors-3ec32ffc.js";import{H as c,F as l}from"./Header-d5e5fc60.js";import"./PopularDrinks.styled-0553d3a7.js";import{P as h}from"./PageTitle-d823a65b.js";import{u}from"./index.esm-159577c4.js";import"./assertThisInitialized-b45dd5e4.js";import"./ButtonBase-8ac89a34.js";import"./getThemeProps-5b1f9c8a.js";import"./IconButton-9b2dbe73.js";const w=e.div`
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
`;const O=()=>{const s=u(),a=i(x),t=i(m);return o.useEffect(()=>{s(n())},[s]),r.jsxs(r.Fragment,{children:[r.jsx(c,{}),r.jsxs(w,{children:[r.jsx(h,{title:"My drinks",theme:"dark"}),a&&!t&&r.jsx(p,{}),t&&r.jsx(d,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),r.jsx(f,{})]}),r.jsx(l,{})]})};export{O as default};
