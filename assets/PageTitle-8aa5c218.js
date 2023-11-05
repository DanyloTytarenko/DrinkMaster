import{s as o,j as r}from"./index-81700639.js";const l=s=>s.ownDrinks.items,g=s=>s.favoriteDrinks.items,m=s=>s.favoriteDrinks.isLoading,d=s=>s.ownDrinks.isLoading,h=s=>s.ownDrinks.error,f=s=>s.favoriteDrinks.error,w=s=>s.form,x=s=>s.category.items,D=s=>s.glass.items,k=s=>s.ingredient.items,a=o.h1`
  margin-right: auto;
  margin-bottom: ${({$marginM:s})=>s};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  color: ${({theme:s})=>s==="light"?"#0A0A11":"#F3F3F3"};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({$marginT:s})=>s};
    font-size: 56px;
    line-height: calc(60 / 56);
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({$marginD:s})=>s};
    font-size: 64px;
    line-height: calc(68 / 64);
  }
`,p=({title:s,theme:t,marginMobile:e,marginTablet:i,marginDesktop:n})=>r.jsx(a,{theme:t,$marginM:e,$marginT:i,$marginD:n,children:s});export{p as P,D as a,w as b,k as c,d,h as e,m as f,f as g,l as h,g as i,x as s};
