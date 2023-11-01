import{s as n,J as o,u as l,j as e,K as c,M as p,p as r}from"./index-63d0e82c.js";import{g as d,h as x}from"./selectors-6ace5bbf.js";const h=n.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${o.light};
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`,m=n.li`
width: 335px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 704px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,g=n.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,f=n.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`,u=n.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,w=n.span`
font-size: 14px;
color: ${o.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,D=n.div`
display: flex;
flex-direction: column;
gap: 4px;
`,k=n.div`
display: flex;
gap: 8px;
`,y=n.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 704px) {
width: 56px;
height:56px;
}
`,j=n.button`
color: ${o.light};
padding: 18px 44px;
border-radius: 42px;
background: ${o.secondaryDark};
font-weight: 600;
border:none;
`,b="/DrinkMaster/assets/sprite-4ab4835d.svg",v=({id:t,drink:i})=>{const s=l(),a=()=>{location.pathname==="/my"?s(c(t)):location.pathname==="/favorites"&&s(p(t))};return e.jsxs(m,{children:[e.jsx(g,{src:i.photo,alt:"Photo of cocktail"}),e.jsxs(D,{children:[e.jsx(f,{children:i.name}),e.jsx(w,{children:i.alco})]}),e.jsx(u,{children:i.desc}),e.jsxs(k,{children:[e.jsx(j,{children:"See more"}),e.jsx(y,{onClick:a,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${b}#icon-trash`})})})]})]})},M=()=>{let t;return console.log(location.pathname),location.pathname==="/DrinkMaster/my"?(t=r(d),console.log(t)):location.pathname==="/DrinkMaster/favorites"&&(t=r(x),console.log(t)),e.jsx(h,{children:t.map((i,s)=>e.jsx(v,{drink:i},s))})};export{M as D};
