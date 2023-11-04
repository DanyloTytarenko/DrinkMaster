import{s as r,V as i,W as a,j as s,u as c}from"./index-72197f4a.js";import{c as o}from"./Header-6d50434c.js";import{u as l}from"./index.esm-2d91678b.js";import{h as p,i as h}from"./selectors-7a8fcb39.js";const x=r.ul`
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
`,m=r.li`
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
`,u=r.img`
width: 100%;
height: auto;
border-radius: 8px;
background: linear-gradient(180deg, rgba(10, 10, 17, 0.02) 51.18%, rgba(10, 10, 17, 0.77) 97.66%), url(<path-to-image>), lightgray 50% / cover no-repeat;
`,g=r.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.33;
margin-bottom: 0;
@media only screen and (min-width: 704px) {
font-size: 24px;
}
`,f=r.p`
font-size: 14px;
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,k=r.span`
font-size: 14px;
color: ${o.disabled};
@media only screen and (min-width: 704px) {
font-size: 16px;
}
`,w=r.div`
display: flex;
flex-direction: column;
gap: 4px;
`,y=r.div`
display: flex;
gap: 8px;
`,D=r.button`
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
`,j=r.button`
color: ${o.light};
padding: 18px 44px;
border-radius: 42px;
background: ${o.secondaryDark};
font-weight: 600;
border:none;
`;i.defaults.baseURL="https://drinks-whm4.onrender.com";a("drinks/fetchOwn",async(t,n)=>{try{return(await i.get("/drinks/own")).data}catch(e){return n.rejectWithValue(e.message)}});a("drinks/fetchFavorite",async(t,n)=>{try{return(await i.get("/drinks/favorite")).data}catch(e){return n.rejectWithValue(e.message)}});a("drinks/addOwnDrink",async(t,n)=>{try{return(await i.post("/drinks/own/add",t)).data}catch(e){return n.rejectWithValue(e.message)}});a("drinks/addFavoriteDrink",async(t,n)=>{try{return(await i.post("/drinks/favorite/add",t)).data}catch(e){return n.rejectWithValue(e.message)}});const v=a("drinks/deleteOwnDrink",async(t,n)=>{try{return(await i.delete(`/drinks/own/remove/${t}`)).data}catch(e){return n.rejectWithValue(e.message)}}),b=a("drinks/deleteFavoriteDrink",async(t,n)=>{try{return(await i.delete(`/drinks/favorite/remove/${t}`)).data}catch(e){return n.rejectWithValue(e.message)}}),F="/DrinkMaster/assets/sprite-4ab4835d.svg",W=({id:t,drink:n})=>{const e=l(),d=()=>{location.pathname==="/my"?e(v(t)):location.pathname==="/favorites"&&e(b(t))};return s.jsxs(m,{children:[s.jsx(u,{src:n.photo,alt:"Photo of cocktail"}),s.jsxs(w,{children:[s.jsx(g,{children:n.name}),s.jsx(k,{children:n.alco})]}),s.jsx(f,{children:n.desc}),s.jsxs(y,{children:[s.jsx(j,{children:"See more"}),s.jsx(D,{onClick:d,children:s.jsx("svg",{width:"24px",height:"24px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${F}#icon-trash`})})})]})]})},L=()=>{let t;return console.log(location.pathname),location.pathname==="/DrinkMaster/my"?(t=c(p),console.log(t)):location.pathname==="/DrinkMaster/favorites"&&(t=c(h),console.log(t)),s.jsx(x,{children:t.map((n,e)=>s.jsx(W,{drink:n},e))})};export{L as D};
