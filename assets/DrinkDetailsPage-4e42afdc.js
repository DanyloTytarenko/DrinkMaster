import{n as t,Z as c,r as p,$ as x,u as l,a0 as b,j as f}from"./index-13341ded.js";import{u as h}from"./index.esm-44a95f77.js";import{H as u,F as j}from"./Header-83706755.js";const g=t.div`
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
`,y=()=>{const{drinkId:o}=c(),s=h();p.useEffect(()=>{s(x(o))},[s]);const a=l(b),{drink:r,glass:e,alcoholic:i,description:n,drinkThumb:d}=a;return f.jsxs("div",{children:[f.jsx(k,{children:r}),f.jsxs(m,{children:[e," / ",i]}),f.jsx(D,{children:n}),f.jsx(v,{type:"button",onClick:()=>handleAddToFavorite(id),children:"Add to favorite drinks"}),f.jsx("div",{children:f.jsx("img",{src:d,alt:"picture Cocktail",height:400})})]})},C=()=>f.jsxs(f.Fragment,{children:[f.jsx(u,{}),f.jsx(g,{children:f.jsx(y,{})}),f.jsx(j,{})]});export{C as default};
