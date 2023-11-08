import{n as a,u as n,k as t,m as p,r as d,$ as f,j as s,p as m}from"./index-ad5f1700.js";import{D as x}from"./DrinksList-5b33a17a.js";import{d as c,f as h}from"./selectors-3f3e92cd.js";import{H as l,F as g}from"./Header-f7a046d5.js";import"./PopularDrinks.styled-b1858879.js";import{P as w}from"./PageTitle-db0be4b2.js";import{N as j}from"./NotFound-086ab48a.js";import"./dummyDrinkThumb-d0bd605f.js";import"./index.esm-8860c4e9.js";const u=a.div`
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
`;a.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const S=()=>{const e=n(),o=t(c),r=t(h),i=t(p);return d.useEffect(()=>{e(f())},[e]),s.jsxs(s.Fragment,{children:[s.jsx(l,{}),s.jsxs(u,{children:[s.jsx(w,{title:"My drinks",theme:i}),o&&!r&&s.jsx(m,{}),r&&s.jsx(j,{message:"Something went wrong"}),s.jsx(x,{})]}),s.jsx(g,{})]})};export{S as default};
