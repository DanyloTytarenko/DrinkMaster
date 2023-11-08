import{n as i,u as x,k as t,m as d,r as c,S as f,j as s,p as h}from"./index-fe54c6f5.js";import{D as l}from"./DrinksList-7b8eaf5f.js";import{d as g,f as w,g as j,h as u}from"./selectors-3a823e9a.js";import{c as k,N as D,P}from"./Paginator-1cbd7d2e.js";import{H as b,F as y}from"./Header-35259c19.js";import"./PopularDrinks.styled-7a8070d4.js";import{P as L}from"./PageTitle-2ac51c12.js";import"./dummyDrinkThumb-d0bd605f.js";import"./useMediaQuery-c235083b.js";import"./getThemeProps-38117a84.js";import"./ButtonBase-ca938c7b.js";import"./assertThisInitialized-8437fa46.js";import"./useTheme-270f8353.js";import"./index.esm-1c8c3902.js";const O=i.div`
  padding: 80px 0;
  width: 335px;
  min-height: 100hv;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding: 140px 0;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 160px 0 140px;
    width: 1240px;
  }
`;i.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;const B=()=>{const o=x(),r=t(g),e=t(w),n=t(d),p=t(j),m=t(u),a=t(k);return c.useEffect(()=>{o(f(a))},[a]),s.jsxs(s.Fragment,{children:[s.jsx(b,{}),s.jsxs(O,{children:[s.jsx(L,{title:"My drinks",theme:n}),r&&!e&&s.jsx(h,{}),e&&s.jsx(D,{message:"Something went wrong"}),s.jsx(l,{}),s.jsx(P,{limit:m,totalItems:p})]}),s.jsx(y,{})]})};export{B as default};
