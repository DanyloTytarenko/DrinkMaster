import{s as i,c as n,j as t}from"./index-5ea7ff9a.js";const o="/DrinkMaster/assets/img-blue-iced-tea-desktop-a09c845f.png",a="/DrinkMaster/assets/img-blue-iced-tea-desktop@2x-16950817.png",e="/DrinkMaster/assets/img-blue-iced-tea-mobile-e64cabfc.png",r="/DrinkMaster/assets/img-blue-iced-tea-mobile@2x-b8c817dc.png",d=i.div`
  margin-top: 91px;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`,c=i.p`
  margin-top: 32px;
  color: ${n.light};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.38;
  }
`,m=({message:s})=>t.jsxs(d,{children:[t.jsxs("picture",{children:[t.jsx("source",{media:"(min-width: 768px)",srcSet:`${o} 1x, ${a} 2x`,width:"261",height:"326"}),t.jsx("source",{media:"(min-width: 375px)",srcSet:`${e} 1x, ${r} 2x`,width:"198",height:"247"}),t.jsx("img",{src:e,alt:"not found",width:"198",height:"247"})]}),t.jsx(c,{children:s})]});export{m as N};
