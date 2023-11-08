import{n as o,u as x,k as t,m as d,r as c,S as f,j as s,p as l}from"./index-b95de052.js";import{D as g}from"./DrinksList-7325013b.js";import{d as h,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-1b5dfafc.js";import{H as b,F as y}from"./Header-7700d461.js";import"./PopularDrinks.styled-efa4e1fe.js";import{P as L}from"./PageTitle-7ae4cfb5.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-d0c30f00.js";import"./getThemeProps-2a914071.js";import"./ButtonBase-511597fc.js";import"./assertThisInitialized-936174d1.js";import"./useTheme-cbb17c0a.js";import"./index.esm-68303dfb.js";const O=o.div`
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
