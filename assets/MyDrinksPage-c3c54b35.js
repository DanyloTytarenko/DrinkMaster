import{n as o,u as x,k as t,m as d,r as c,S as f,j as s,p as l}from"./index-11e8ff03.js";import{D as g}from"./DrinksList-d1a5a2d3.js";import{d as h,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-db961606.js";import{H as b,F as y}from"./Header-02ead82a.js";import"./PopularDrinks.styled-c9e812b2.js";import{P as L}from"./PageTitle-ad63d6b6.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-55e67290.js";import"./getThemeProps-d5358e4c.js";import"./ButtonBase-b9498c57.js";import"./assertThisInitialized-d39903f8.js";import"./useTheme-4727eaaa.js";import"./index.esm-d743778a.js";const O=o.div`
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
`;o.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const B=()=>{const r=x(),i=t(h),e=t(w),n=t(d),p=t(j),m=t(u),a=t(k);return c.useEffect(()=>{r(f(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(b,{}),s.jsxs(O,{children:[s.jsx(L,{title:"My drinks",theme:n}),i&&!e&&s.jsx(l,{}),e&&s.jsx(D,{message:"Something went wrong"}),s.jsx(g,{}),s.jsx(P,{limit:m,totalItems:p})]}),s.jsx(y,{})]})};export{B as default};
