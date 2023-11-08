import{n as r,u as n,k as t,m as p,r as d,a0 as x,j as s,p as f}from"./index-d7c8db6e.js";import{D as m}from"./DrinksList-3db733bf.js";import{g as c,h}from"./selectors-3f3e92cd.js";import{H as g,F as l}from"./Header-9ddb242d.js";import{P as j}from"./PageTitle-1b1052cd.js";import{N as u}from"./NotFound-465fdd67.js";import"./dummyDrinkThumb-d0bd605f.js";import"./index.esm-3760f045.js";const w=r.div`
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
`;r.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const P=()=>{const e=n(),o=t(c),a=t(h),i=t(p);return d.useEffect(()=>{e(x())},[e]),s.jsxs(s.Fragment,{children:[s.jsx(g,{}),s.jsxs(w,{children:[s.jsx(j,{title:"Favorites",theme:i}),o&&!a&&s.jsx(f,{}),a&&s.jsx(u,{message:"Something went wrong"}),s.jsx(m,{})]}),s.jsx(l,{})]})};export{P as default};
