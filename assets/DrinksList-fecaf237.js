import{s as t,M as s,j as e,O as l,P as c,t as r}from"./index-954ebb4f.js";import{u as p}from"./useDispatch-464cbf80.js";import{g as d,h as x}from"./selectors-6ace5bbf.js";const h=t.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${s.light};
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`,m=t.li`
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
`,g=t.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,f=t.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`,u=t.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,w=t.span`
font-size: 14px;
color: ${s.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,D=t.div`
display: flex;
flex-direction: column;
gap: 4px;
`,k=t.div`
display: flex;
gap: 8px;
`,y=t.button`
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
`,j=t.button`
color: ${s.light};
padding: 18px 44px;
border-radius: 42px;
background: ${s.secondaryDark};
font-weight: 600;
border:none;
`,b="/DrinkMaster/assets/sprite-4ab4835d.svg",v=({id:n,drink:i})=>{const o=p(),a=()=>{location.pathname==="/my"?o(l(n)):location.pathname==="/favorites"&&o(c(n))};return e.jsxs(m,{children:[e.jsx(g,{src:i.photo,alt:"Photo of cocktail"}),e.jsxs(D,{children:[e.jsx(f,{children:i.name}),e.jsx(w,{children:i.alco})]}),e.jsx(u,{children:i.desc}),e.jsxs(k,{children:[e.jsx(j,{children:"See more"}),e.jsx(y,{onClick:a,children:e.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${b}#icon-trash`})})})]})]})},$=()=>{let n;return console.log(location.pathname),location.pathname==="/DrinkMaster/my"?(n=r(d),console.log(n)):location.pathname==="/DrinkMaster/favorites"&&(n=r(x),console.log(n)),e.jsx(h,{children:n.map((i,o)=>e.jsx(v,{drink:i},o))})};export{$ as D};
