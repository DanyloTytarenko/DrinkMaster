import{s as n,c as o,L as r,j as e}from"./index-cb9bc0bc.js";import{W as t,T as s,a,S as c,b as l,c as d}from"./WelcomePage.styled-252a40d3.js";const x=n.div`
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
`,g=n(i)`
  margin-right: 0;

  color: ${o.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${o.secondaryDark};
    background: ${o.light};
  }
`,p=()=>e.jsxs(x,{children:[e.jsx(i,{to:"/signup",children:"Sign Up"}),e.jsx(g,{to:"/signin",children:"Sign In"})]});function u(){return e.jsxs(t,{children:[e.jsx(s,{children:"Welcome to the app!"}),e.jsx(a,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(c,{}),e.jsx(l,{}),e.jsx(d,{}),e.jsx(p,{})]})}export{u as default};
