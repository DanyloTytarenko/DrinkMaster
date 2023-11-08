import{s as i,c as n,N as p,u as l,j as t,V as c,W as d,k as o,m as x}from"./index-11e8ff03.js";import{D as h}from"./dummyDrinkThumb-d0bd605f.js";import{m,n as g}from"./selectors-3a823e9a.js";import{N as f}from"./Paginator-db961606.js";const u=i.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
  ${({theme:e})=>e==="dark"?` color: ${n.light};`:`color: ${n.primaryDark};`}
margin: 40px 0 51px;
@media only screen and (min-width: 768px) {
row-gap: 80px;
column-gap: 20px;   
margin: 60px 0 80px;
}
`,D=i.li`
width: 335px;
height: 676px;
display: flex;
flex-direction: column;
gap: 18px;
@media only screen and (min-width: 768px) {
width: 342px;
gap: 24px;   
};
@media only screen and (min-width: 1140px) {
width: 400px; 
}
`,k=i.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,w=i.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 768px) {
font-size: 24px;
}
`,y=i.p`
font-size: 14px;
height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,j=i.span`
font-size: 14px;
color: ${n.disabled};
@media only screen and (min-width: 768px) {
font-size: 16px;
}
`,b=i.div`
display: flex;
flex-direction: column;
gap: 4px;
`,v=i.div`
display: flex;
gap: 8px;
`,$=i.button`
display: flex;
width: 46px;
height:46px;
justify-content: center;
align-items: center;
border:none;
border-radius: 40px;
background: #161F37;
@media only screen and (min-width: 768px) {
width: 56px;
height:56px;
}
`,F=i(p)`
color: ${n.light};
padding: 18px 44px;
border-radius: 42px;
background: ${n.secondaryDark};
font-weight: 600;
border:none;
`,z="/DrinkMaster/assets/sprite-6b675af9.svg",M=({drink:e})=>{const s=l(),r=()=>{location.pathname==="/DrinkMaster/my"?s(c(e._id)):location.pathname==="/DrinkMaster/favorites"&&s(d(e._id))};return t.jsxs(D,{children:[t.jsx(k,{src:e.drinkThumb,alt:` Photo of cocktail ${e.drink} `,onError:a=>{a.currentTarget.src=h}}),t.jsxs(b,{children:[t.jsx(w,{children:e.drink}),t.jsx(j,{children:e.alcoholic})]}),t.jsx(y,{children:e.description}),t.jsxs(v,{children:[t.jsx(F,{to:`/drink/${e._id}`,children:"See more"}),t.jsx($,{type:"button",onClick:r,children:t.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:t.jsx("use",{href:`${z}#icon-trash`})})})]})]})},B=()=>{let e;location.pathname==="/DrinkMaster/my"?e=o(m):location.pathname==="/DrinkMaster/favorites"&&(e=o(g));const s=o(x);return e.length>0?t.jsx(u,{theme:s,children:e.map(r=>t.jsx(M,{drink:r},r._id))}):t.jsx(f,{message:"Your drinks list is empty"})};export{B as D};
