import{s as o,c as e,L as i,j as t,r as a,a as s}from"./index-11e8ff03.js";import{W as c,T as l,a as d,S as h,b as m,c as p}from"./WelcomePage.styled-7f952ef5.js";const x=o.div`
  display: flex;
  z-index: 2;
`,r=o(i)`
  margin-right: 14px;
  padding: 14px 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  color: ${e.secondaryDark};
  border-radius: 42px;
  background: ${e.light};

  &:hover {
    color: ${e.light};
    background: ${e.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    color: #161f37;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,g=o(r)`
  margin-right: 0;

  color: ${e.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${e.secondaryDark};
    background: ${e.light};
  }
`,f=()=>t.jsxs(x,{children:[t.jsx(r,{to:"/signup",children:"Sign Up"}),t.jsx(g,{to:"/signin",children:"Sign In"})]}),k=n=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 26 26",...n},a.createElement("path",{d:"M23.812.678c-.054-.034-.107-.06-.16-.087a4.492 4.492 0 0 0-2.105-.516h-.008a4.602 4.602 0 0 0-3.965 2.278l-.012.022a4.429 4.429 0 0 0-.582 1.847l-.001.017h-9.6L6.305 1.65A2.664 2.664 0 0 0 3.229.071l.018-.004L.001.805l.201.886L3.448.953a1.76 1.76 0 0 1 2.014 1.035L5.466 2l.932 2.24H.302l10.193 10.193v7.463c-2.367.168-4 .952-4 1.925v.181h9.824v-.181c0-.972-1.636-1.76-4-1.925v-7.463l6.283-6.283c.197.167.417.322.649.458l.022.012A4.575 4.575 0 0 0 23.841.692L23.819.68zm.999 3.507-2.494.007 1.241-2.16a3.305 3.305 0 0 1 1.251 2.135zm-2.038-2.609-1.241 2.166-1.254-2.153a3.285 3.285 0 0 1 1.264-.248c.443 0 .866.086 1.253.243zm-4.111 1.429c.218-.379.496-.698.825-.955l.007-.005 1.254 2.153-2.488.007c.056-.449.198-.855.41-1.216l-.008.015zM3.359 5.506H6.92l.49 1.187H4.547zm14.894 1.188h-.813V6.7H8.387l-.49-1.187h11.534zm2.045 1.026 1.241-2.166 1.254 2.153c-.373.158-.807.25-1.262.25-.444 0-.868-.087-1.255-.246l.022.008zm4.111-1.422a3.297 3.297 0 0 1-.824.955l-.007.005-1.254-2.153 2.488-.006a3.35 3.35 0 0 1-.411 1.214l.009-.016z"})),u=s`
 0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
    25% {
    -webkit-transform: rotate(-25deg);
            transform: rotate(-25deg);
    opacity: 1;
  }
  75% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 0;
  }
`,b=o(k)`
  display: block;
  fill: ${e.disabled};
  stroke: ${e.light};

  animation: ${u} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`,y=()=>t.jsx("span",{children:t.jsx(b,{})});function w(){return t.jsxs(c,{children:[t.jsxs(l,{children:["Welcome to the app! ",t.jsx(y,{})]}),t.jsx(d,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),t.jsx(h,{}),t.jsx(m,{}),t.jsx(p,{}),t.jsx(f,{})]})}export{w as default};
