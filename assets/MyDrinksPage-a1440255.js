import{n as o,u as x,k as t,m as d,r as c,S as f,j as s,p as l}from"./index-af8e33ec.js";import{D as g}from"./DrinksList-21e6e63e.js";import{d as h,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-0519d884.js";import{H as b,F as y}from"./Header-2733b7aa.js";import"./PopularDrinks.styled-f528b998.js";import{P as L}from"./PageTitle-b78da405.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-d10cabbf.js";import"./getThemeProps-1ed5a1bf.js";import"./ButtonBase-28045ec3.js";import"./assertThisInitialized-69eca55a.js";import"./useTheme-f89c957e.js";import"./index.esm-b9c65629.js";const O=o.div`
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
