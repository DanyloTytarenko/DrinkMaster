import{s as i,c as o,L as n,j as e}from"./index-ce6eefe0.js";import{W as t,T as s,a}from"./WelcomePage.styled-dfa35c35.js";const c=i.div`
  display: flex;
`,r=i(n)`
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
  
`,l=i(r)`
  margin-right: 0;

  color: ${o.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${o.secondaryDark};
    background: ${o.light};
  }
`,d=()=>e.jsxs(c,{children:[e.jsx(r,{to:"/signup",children:"Sign Up"}),e.jsx(l,{to:"/signin",children:"Sign In"})]});function h(){return e.jsxs(t,{children:[e.jsx(s,{children:"Welcome to the app!"}),e.jsx(a,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(d,{})]})}export{h as default};
