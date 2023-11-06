import{n as t,a1 as c,u as p,r as x,a2 as l,i as b,a3 as h,j as f}from"./index-fc9bbdc4.js";import{H as u,F as j}from"./Header-eca8d2b4.js";import"./index.esm-1505d28e.js";const g=t.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 500px;
  background-color: #000000;
`;t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;t.p`
  color: #ffffff;
  // text-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`;t.div`
  color: #ffffff;
`;t.button`
  color: #000000;
  border-radius: 42px;
  padding: 14px 40px;
`;t.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 500px;
  background-color: #000000;
`;const k=t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,m=t.p`
  color: #ffffff;
  // text-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`,D=t.div`
  color: #ffffff;
`,v=t.button`
  color: #000000;
  border-radius: 42px;
  padding: 14px 40px;
`,y=()=>{const{drinkId:s}=c(),a=p();x.useEffect(()=>{a(l(s))},[a]);const o=b(h),{drink:r,glass:e,alcoholic:i,description:n,drinkThumb:d}=o;return f.jsxs("div",{children:[f.jsx(k,{children:r}),f.jsxs(m,{children:[e," / ",i]}),f.jsx(D,{children:n}),f.jsx(v,{type:"button",onClick:()=>handleAddToFavorite(id),children:"Add to favorite drinks"}),f.jsx("div",{children:f.jsx("img",{src:d,alt:"picture Cocktail",height:400})})]})},C=()=>f.jsxs(f.Fragment,{children:[f.jsx(u,{}),f.jsx(g,{children:f.jsx(y,{})}),f.jsx(j,{})]});export{C as default};
