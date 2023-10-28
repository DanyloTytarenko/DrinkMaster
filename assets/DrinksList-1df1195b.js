import{R as n,a as d,c as p,s as t,j as a,d as h}from"./index-558dcb7d.js";function c(i=n){const o=i===n?d:p(i);return function(){const{store:s}=o();return s}}const u=c();function m(i=n){const o=i===n?u:c(i);return function(){return o().dispatch}}const f=m(),r={primaryDark:"#0A0A11",secondaryDark:"#161F37",gray:"#434D67",blue:"#4070CD",green:"#BCE6D2",light:"#F3F3F3",disabled:"#F3F3F320"},w=t.ul`
display: flex;
flex-wrap: wrap; 
justify-content:center;
align-items: center;
gap: 40px;
color: ${r.light};
@media only screen and (min-width: 704px) {
row-gap: 80px;
column-gap: 20px;   
}
`,g=t.li`
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
`,x=t.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,k=t.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`,v=t.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,j=t.span`
font-size: 14px;
color: ${r.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,y=t.div`
display: flex;
flex-direction: column;
gap: 4px;
`,b=t.div`
display: flex;
gap: 8px;
`,P=t.button`
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
`,D=t.button`
color: ${r.light};
padding: 18px 44px;
border-radius: 42px;
background: ${r.secondaryDark};
font-weight: 600;
border:none;
`,A="/DrinkMaster/assets/sprite-4ab4835d.svg",I=({id:i,drink:o},e)=>{const s=f(),l=()=>s(h(i));return a.jsxs(g,{children:[a.jsx(x,{src:o.photo,alt:"Photo of cocktail"}),a.jsxs(y,{children:[a.jsx(k,{children:o.name}),a.jsx(j,{children:o.alco})]}),a.jsx(v,{children:o.desc}),a.jsxs(b,{children:[a.jsx(D,{children:"See more"}),a.jsx(P,{onClick:l,children:a.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:a.jsx("use",{href:`${A}#icon-trash`})})})]})]})},T=i=>i.drinks.isLoading,F=i=>i.drinks.error,C=i=>{const o=[{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "},{photo:"https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",name:"Pornstar Martini",alco:"Alcoholic ",desc:"The porn star martini is a passion-fruit-flavoured cocktail made with vanilla-flavoured vodka, Passoã, passion fruit juice, and lime juice. It is traditionally accompanied by a chilled shot glass of prosecco. "}];return a.jsx(w,{children:o.map((e,s)=>a.jsx(I,{drink:e,apiPath:i},s))})};export{C as D,F as a,T as s,f as u};
