import{s as n,c as o,L as r,j as e}from"./index-b5be8991.js";import{W as t,T as s,a,S as c,b as l}from"./WelcomePage.styled-5adceb10.js";const d=n.div`
  display: flex;
  z-index: 2;
`,i=n(r)`
  margin-right: 14px;
  padding: 14px 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  color: ${o.secondaryDark};
  border-radius: 42px;
  background: ${o.light};

  &:hover {
    color: ${o.light};
    background: ${o.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    color: #161f37;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,x=n(i)`
  margin-right: 0;

  color: ${o.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${o.secondaryDark};
    background: ${o.light};
  }
`,g=()=>e.jsxs(d,{children:[e.jsx(i,{to:"/signup",children:"Sign Up"}),e.jsx(x,{to:"/signin",children:"Sign In"})]});function u(){return e.jsxs(t,{children:[e.jsx(s,{children:"Welcome to the app!"}),e.jsx(a,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(g,{})]})}export{u as default};
