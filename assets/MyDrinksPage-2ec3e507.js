import{n as e,u as o,k as i,r as n,S as p,j as t,p as d}from"./index-7ef278ba.js";import{A as f,D as m}from"./DrinksList-3bd90152.js";import{d as x,f as c}from"./selectors-3f3e92cd.js";import{H as l,F as h}from"./Header-c23a50d4.js";import"./PopularDrinks.styled-1a19cacb.js";import{P as j}from"./PageTitle-ea0a024a.js";import"./dummyDrinkThumb-d0bd605f.js";import"./assertThisInitialized-06479fc5.js";import"./ButtonBase-a36bea78.js";import"./getThemeProps-86017ce2.js";import"./Paper-6b97d156.js";import"./IconButton-4334b13b.js";import"./index.esm-1de41aeb.js";const u=e.div`
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
