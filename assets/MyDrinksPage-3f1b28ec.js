import{n as o,s as e,h as t,N as d,u as s,r as p,J as x,j as i,v as l}from"./index-c3927ce1.js";import{A as h,D as m}from"./DrinksList-bd5cc557.js";import{d as f,e as c,P as w}from"./PageTitle-07c977b7.js";import{H as g,F as y}from"./Header-61562400.js";import{u}from"./index.esm-6605603c.js";import"./assertThisInitialized-6d15e9d8.js";import"./ButtonBase-e6dbbdf9.js";import"./IconButton-d6f262e0.js";const j=o.div`
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
`;e.div`
width: 100%;
display: flex;
flex-direction: column;
gap:40px;
@media only screen and (min-width: 768px) {
gap:80px;
}
@media only screen and (min-width: 1440px) {
width: 313px;
}
`;e.h2`
@media only screen and (max-width: 767.9px) {
font-size: 18px;
}
color: ${t.light};
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 1.33;
margin-bottom: 28px;
@media only screen and (min-width: 768px) {
margin-bottom: 40px;
}
`;e.ul`
display: flex;
width:100%;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 24px;
color: ${t.light};
@media only screen and (min-width: 768px) {
gap: 32px;
}
@media only screen and (min-width: 1440px) {
gap: 28px;
}
`;e.li`
width:100%; 
@media only screen and (min-width: 768px) {
width:336px;
}
@media only screen and (min-width: 1440px) {
width:100%; 
}
`;e.img`
width: 90px;
height: 90px;
border-radius: 12px;
`;e.p`
overflow: hidden;
color: ${t.disabled};
text-overflow: ellipsis;
white-space: nowrap;
font-size: 14px;
line-height: 1.3;
`;e.h3`
color: ${t.light};
font-size: 16px;
font-weight: 500;
line-height: 1.4;
`;e.div`
display:flex;
flex-direction: column;
gap: 8px;
`;e(d)`
width:100%;
height:100%;
display: flex;
justify-content:start;
align-items: center;
gap: 14px;
`;const F=()=>{const n=u(),r=s(f),a=s(c);return p.useEffect(()=>{n(x())},[n]),i.jsxs(i.Fragment,{children:[i.jsx(g,{}),i.jsxs(j,{children:[i.jsx(w,{title:"My drinks",theme:"dark"}),r&&!a&&i.jsx(l,{}),a&&i.jsx(h,{severity:"info",variant:"outlined",children:"Your drink list is empty"}),i.jsx(m,{})]}),i.jsx(y,{})]})};export{F as default};
