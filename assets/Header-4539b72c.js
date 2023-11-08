import{s as i,c as n,N as b,k as c,m as w,j as e,u as F,r as l,a6 as G,a7 as _,A as H,a8 as q,a9 as J}from"./index-4ac4be86.js";import{c as K,a as Q,u as X}from"./index.esm-576060ce.js";const Y=i(b)`
  display: inline-flex;
  align-items: center;
`,ee=i.svg`
  width: 22px;
  height: 22px;
  margin-right: 8px;
${({theme:t})=>t==="dark"?` fill: ${n.light};`:` fill: ${n.secondaryDark};`}
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
`,ie=i.h3`
${({theme:t})=>t==="dark"?` color: ${n.light};`:`color: ${n.secondaryDark};`}

  font-size: 16px;
  font-weight: 600;
  line-height: 18px; 
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px; 
  }
`,W=()=>{const t=c(w);return e.jsxs(Y,{to:"/home",children:[e.jsx(ee,{theme:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",children:e.jsx("path",{d:"M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z"})}),e.jsx(ie,{theme:t,children:"Drink Master"})]})},te=i.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,m=i(b)`
  color: ${n.light};
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  } 
`,ne=()=>e.jsxs(te,{children:[e.jsx(m,{to:"/drinks",children:"Drinks"}),e.jsx(m,{to:"/add",children:"Add drink"}),e.jsx(m,{to:"/my",children:"My drinks"}),e.jsx(m,{to:"/favorites",children:"Favorites drinks"})]}),oe=i.ul`
  display: flex;
  column-gap: 14px;
  `,C=i.li``,y=i.a`
  display: inline-flex;
  padding: 7px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.20);
  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  } 
`,$=i.svg`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`,re=()=>e.jsxs(oe,{children:[e.jsx(C,{children:e.jsx(y,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:e.jsx($,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z",fill:"#F3F3F3"})})})}),e.jsx(C,{children:e.jsx(y,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:e.jsx($,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",children:e.jsxs("g",{opacity:"0.8",children:[e.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z",fill:"#F3F3F3"}),e.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z",fill:"#F3F3F3"})]})})})}),e.jsx(C,{children:e.jsx(y,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:e.jsx($,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("g",{opacity:"0.8",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z",fill:"#F3F3F3"})})})})})]}),se=i.form`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 309px;
  }
`,ae=i.input`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${n.light};

  font-size: 14px;
  font-weight: 400;
  line-height: 18px; 

  padding-top: 16px;
  padding-right: 0px;
  padding-bottom: 18px;
  margin-bottom: 17px;
  text-indent: 22px;

  transition: border-color 250ms ease;
  outline: none; 

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
  }

  &.error {
    margin-bottom: 0;
    border-color: rgba(218, 20, 20, 0.50);
    background-image: url('src/components/SubscribeForm/ic_baseline-error-outline.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  &.valid {
    margin-bottom: 0;
    border-color: rgba(60, 188, 129, 0.50);
    background-image: url('src/components/SubscribeForm/Done.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }
`,de=i.button`
  width: 100%;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${n.light};
  padding-top: 17px;
  padding-right: 127px;
  padding-bottom: 17px;
  padding-left: 128px;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;

  // transition: transform 250ms ease;

  // &:hover,
  // &:focus {
  //   transform: scale(1.05);
  // }

  &:disabled {
    color: ${n.disabled};
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
    padding-left: 113px;
  }
`,pe=i.h3`
  color: ${n.light};
  width: 335px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 209px;
  }
`,D=K().shape({email:Q().required("Email is required").email("This is an ERROR email")}),le=({message:t})=>e.jsx("div",{style:{color:"#DA1414",fontSize:"12px",lineHeight:"14px",marginTop:"2px",marginBottom:"2px",marginLeft:"24px"},children:t}),xe=()=>e.jsx("div",{style:{color:"#3CBC81",fontSize:"12px",lineHeight:"14px",marginTop:"2px",marginBottom:"2px",marginLeft:"24px"},children:"This is an CORRECT email"}),ce=()=>{const t=F(),[o,r]=l.useState(!1),s=X({initialValues:{email:""},validationSchema:D,onSubmit:(d,g)=>{t(G(d)),r(!1),g.resetForm()}}),x=s.touched.email&&s.errors.email;return e.jsxs(se,{onSubmit:s.handleSubmit,children:[e.jsx(pe,{children:"Subscribe up to our newsletter. Be in touch with the latest news and special offers, etc."}),e.jsx(ae,{id:"email",name:"email",type:"email",placeholder:"Enter the email",onChange:d=>{s.handleChange(d),D.isValidSync({email:d.target.value})?r(!0):r(!1)},value:s.values.email,onBlur:s.handleBlur,className:x?"error":o?"valid":""}),x?e.jsx(le,{message:s.errors.email}):o?e.jsx(xe,{}):null,e.jsx(de,{type:"submit",disabled:x,children:"Subscribe"})]})},he=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 153px;
    align-items: flex-end;
  }

  @media screen and (min-width: 1440px) {
    gap: 689px;
  }
`,ge=i.p`
color: rgba(243, 243, 243, 0.50);
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.24px;
margin-top: 80px;
margin-bottom: 8px; 

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-bottom: 0px;
  }
`,me=i.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`,B=i(b)`
  color: rgba(243, 243, 243, 0.50);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px; 
  letter-spacing: -0.24px;

  transition: color 250ms ease;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    color: ${n.light};
    transform: scale(1.05);
  }

  &.active {
    color: ${n.light};
  }
  
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`,ue=()=>e.jsxs(he,{children:[e.jsx(ge,{children:"©2023 Drink Master. All rights reserved."}),e.jsxs(me,{children:[e.jsx(B,{to:"/privacy",children:"Privacy Policy"}),e.jsx(B,{to:"/service",children:"Terms of Service"})]})]}),Ye=i.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  /* min-width: 375px; */

  /* @media screen and (max-width: 375px) {
    width: 375px;
  } */

  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
    overflow: visible;
  }
`,ei=i.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: -10;

  @media screen and (min-width: 768px) {
    width: 549px;
    height: 543px;
    top: 414px;
    left: 651px;
  }

  @media screen and (min-width: 1440px) {
    width: 549px;
    height: 543px;
    top: 374px;
    left: 1181px;
  }
`,ii=i.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: -10;
  width: 520px;
  height: 550px;
  top: -52px;
  right: 254px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: -65px;
    right: 607px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: -64px;
    right: 1346px;
  }
`,fe=i.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 18px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* min-width: 375px; */

  /* @media screen and (min-width: 375px) {
    max-width: 375px;
  } */
  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 80px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`,be=i.footer`
  /* padding-top: 40px;
  padding-bottom: 18px; */
  border-top: 1px solid rgba(243, 243, 243, 0.2);

  /* background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.6) 58.58%,
    rgba(0, 0, 0, 0.345172) 78.98%,
    rgba(0, 0, 0, 0) 100%
  ); */

  /* @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
  } */
`,we=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 230px;
  }
`,je=i.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`,ve=i.div`
  display: flex;
  gap: 90px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 411px;
  }
`,ke=i.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: -10;
  width: 784px;
  height: 849px;
  top: 457px;
  left: 205px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: 429px;
    left: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: 343px;
    left: 435px;
  }
`,Ce=i.div`
  position: absolute;
  background-color: rgba(188, 230, 210, 0.4);
  filter: blur(105px);
  z-index: -10;
  width: 774px;
  height: 762px;
  top: 450px;
  left: -372px;

  @media screen and (min-width: 768px) {
    top: 380px;
    left: -63px;
  }

  @media screen and (min-width: 1440px) {
    top: 341px;
    left: 193px;
  }
`,ti=()=>e.jsx(be,{children:e.jsxs(fe,{children:[e.jsxs(we,{children:[e.jsxs(ve,{children:[e.jsxs(je,{children:[e.jsx(W,{}),e.jsx(re,{})]}),e.jsx(ne,{})]}),e.jsx(ce,{})]}),e.jsx(ue,{}),e.jsx(ke,{}),e.jsx(Ce,{})]})}),ye=i.nav`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-left: 224px;
    margin-right: 191px;
  }
`,a=i(b)`
  color: ${n.light};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; 
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.20);
  background: ${n.primaryDark}; 
  transition: background 0.2s;
  overflow: hidden;

  &.active {
    background: ${n.secondaryDark};
    border: ${n.primaryDark};
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px; 
  }
`,$e=()=>e.jsxs(ye,{children:[e.jsx(a,{to:"/home",children:"Home"}),e.jsx(a,{to:"/drinks",children:"Drinks"}),e.jsx(a,{to:"/add",children:"Add drink"}),e.jsx(a,{to:"/my",children:"My drinks"}),e.jsx(a,{to:"/favorites",children:"Favorites"})]}),Fe=i.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset;
  ${({theme:t})=>t==="dark"?`background: ${n.light}`:` background: ${n.secondaryDark};`} 
`,Le=i.button`
  border-radius: 50%;
  position: absolute;
  width: 18px;
  height: 18px;
  translate: 0 -50%;
  top: 50%;
  cursor: pointer;
  transition: transform 300ms ease;
  border: none;
${({theme:t})=>t==="dark"?` right: 1px; background: ${n.secondaryDark};`:`left: 1px; background: ${n.light};`} }
`,E=()=>{const t=c(w),o=F();return e.jsx(Fe,{theme:t,children:e.jsx(Le,{onClick:()=>o(_()),theme:t})})},Se=i.div`
display:flex;
align-items: center;
justify-content: center;
gap: 7px
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
   @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,ze=i.div`
width: 32px;
height: 32px;
border-radius: 50%;
overflow: hidden;
  @media screen and (min-width: 768px) {
  width: 44px;
height:44px;
  } 
`;i.svg`
  @media screen and (min-width: 768px) {
  }
`;const De=i.p`
font-size: 14px;
font-weight: 500;
// margin-left: 8px; 
max-width: 104px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({theme:t})=>t==="dark"?` color: ${n.light};`:`color: ${n.secondaryDark};`}
@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 24px;
  // margin-left: 14px; 
  }
`,f="/DrinkMaster/assets/user-833bcaa2.jpg",Be=()=>{const t=c(w),o=c(H);return e.jsxs(Se,{children:[e.jsx(ze,{children:e.jsx("img",{width:"44",height:"44",src:o.avatar||f,alt:"User avatar",onError:r=>{r.currentTarget.src=f}})}),e.jsx(De,{theme:t,children:o.name})]})},Ee=i.div`
  position: relative;
  z-index: 100;
`,Me=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 32px;
  height: 32px;
  justify-content: space-evenly;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
`,u=i.div`
  width: 26px;
  height: 2px;
  border-radius: 10px;
  ${({theme:t})=>t==="dark"?` background: ${n.light};`:`background: ${n.secondaryDark};`}
  margin: 0;
  transition: 0.4s;

  @media screen and (min-width: 768px) {
    width: 30px;
  }
`,Te=i.ul`
  display: none;

  ${({open:t})=>t&&`
    display: block;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${n.primaryDark};
    z-index: 100;
  `}
  ${({theme:t})=>t==="dark"?` background: ${n.primaryDark};`:`background: ${n.light};`}
`,Ie=i.div`
  width: 257px;
  height: 247px;
  border-radius: 257px;
  background: rgba(188, 230, 210, 0.4);
  filter: blur(104.8543701171875px);
  position: absolute;
  top: 0;
  left: 10%;
`,He=i.svg`${({theme:t})=>t==="dark"?` fill: ${n.light};`:`fill: ${n.primaryDark};`}`,h="/DrinkMaster/assets/sprite-062e31f9.svg",We=({isOpen:t,toggleMenu:o})=>{const r=c(w);return e.jsxs(Ee,{children:[t===!1?e.jsxs(Me,{onClick:o,children:[e.jsx(u,{theme:r}),e.jsx(u,{theme:r}),e.jsx(u,{theme:r}),e.jsx(u,{theme:r})]}):e.jsx(He,{width:"24px",height:"24px",theme:r,onClick:o,children:e.jsx("use",{href:`${h}#icon-close`})}),e.jsxs(Te,{open:t,theme:r,children:[e.jsx(Ie,{}),e.jsx(a,{to:"/home",onClick:o,children:"Home"}),e.jsx(a,{to:"/drinks",onClick:o,children:"Drinks"}),e.jsx(a,{to:"/add",onClick:o,children:"Add drink"}),e.jsx(a,{to:"/my",onClick:o,children:"My drinks"}),e.jsx(a,{to:"/favorites",onClick:o,children:"Favorites"})]})]})},Re=i.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-right: 100px;
    padding-bottom: 28px;
    padding-left: 100px;
    align-items: center;
  }
`,Ve=i.div`
  display: none;
  z-index: 100;
  ${({open:t})=>t&&`
display: block;
border-radius: 8px;
background: #161F37;
padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: start;
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `}
`,Ne=i.div`
  color: ${n.light};
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  font-family: Manrope;
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`,j=`
border: none;
border-radius: 42px; 
padding: 12px 45px;
font-weight: 600;
font-size: 14px;
font-family: Manrope;
`,M=i.button`
  ${j}
  background-color: ${n.light};
  color: ${n.secondaryDark};
`,Oe=i.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`,Ue=i.button`
  ${j}
  background-color: ${n.disabled};
  color: ${n.light};
`,Ae=i.span`
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  color: ${n.light};
  line-height: 1.3;
  letter-spacing: -0.28px;
  margin: 0 auto 35px;
`,T=i.button`
  margin-bottom: 12px;
  position: relative;
  right: calc(-100% + 20px);
  background: none;
  border: none;
  top: -6px;
`,Pe=i.button`
  ${j}
  background-color: ${n.light};
  color: ${n.secondaryDark};
  width: 100%;
`,Ze=i.input`
  ${j}
  background-color: transparent;
  color: ${n.light};
  border: 1px solid rgba(243, 243, 243, 0.5);
  max-width: 100%;
  margin-bottom: 18px;
`,Ge=i.div`
  width: 100px;
  height: 100px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  overflow: hidden;
`,_e=i.label`
  width: 32px;
  height: 32px;
  margin: 0;
  border-radius: 50%;
  position: relative;
  left: 50%;
  display:block;
  transform: translate(-50%, -50%);
  cursor: pointer;
`,qe=i.div`
  // position: relative;
  // left: 50%;
  // transform: translate(-50%, 0);
  margin-bottom: 50px;
`,Je=i.form`
  position: relative;
  display: flex;
  flex-direction: column;
`,Ke=i.input`
  display: none;
`,I=()=>{const[t,o]=l.useState(!1),[r,s]=l.useState(!1),[x,d]=l.useState(!1),g=F(),L=c(H),[R,V]=l.useState(L.name),[N,O]=l.useState(L.avatar),U=()=>{o(!t)},A=()=>{d(!x)},S=()=>{s(!r)},z=()=>{s(!1),d(!1),o(!1)},P=p=>{p.preventDefault();const v=p.target.elements.name.value,k=p.target.elements.avatar.files[0];g(J({name:v,avatar:k}))},Z=p=>{const v=p.target.files[0],k=URL.createObjectURL(v);O(k)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:U,children:e.jsx(Be,{})}),e.jsx(Ve,{open:t,children:r?e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:z,children:e.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${h}#icon-close`})})}),e.jsx(Ae,{children:"Are you sure you want to log out?"}),e.jsxs(Oe,{children:[e.jsx(M,{type:"button",onClick:()=>g(q()),children:"Log out"}),e.jsx(Ue,{type:"button",onClick:S,children:"Cancel"})]})]}):x?e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:z,children:e.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${h}#icon-close`})})}),e.jsxs(Je,{onSubmit:P,children:[e.jsxs(qe,{children:[e.jsx(Ge,{children:e.jsx("img",{width:"100",height:"100",src:N||f,alt:"User avatar",onError:p=>{p.currentTarget.src=f}})}),e.jsxs(_e,{htmlFor:"avatar",children:[e.jsx("svg",{width:"34px",height:"34px",children:e.jsx("use",{href:`${h}#icon-add`})}),e.jsx(Ke,{type:"file",name:"avatar",id:"avatar",accept:".jpg, .jpeg, .png",onChange:Z})]})]}),e.jsx(Ze,{type:"text",name:"name",value:R,onChange:p=>V(p.target.value)}),e.jsx(Pe,{type:"submit",children:"Save changes"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Ne,{onClick:A,children:[e.jsx("span",{children:"Edit profile"}),e.jsx("svg",{width:"14px",height:"14px",stroke:"#F3F3F3",children:e.jsx("use",{href:`${h}#icon-edit`})})]}),e.jsx(M,{type:"button",onClick:S,children:"Log out"})]})})]})},ni=()=>{const[t,o]=l.useState(window.innerWidth),r=()=>{o(window.innerWidth)};l.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]);const[s,x]=l.useState(!1),d=()=>{x(!s)};return e.jsxs(Re,{children:[e.jsx(W,{}),t>=1440&&e.jsxs(e.Fragment,{children:[e.jsx($e,{}),e.jsx(E,{}),e.jsx(I,{})]}),t<1440&&e.jsxs(e.Fragment,{children:[s?e.jsx(E,{}):e.jsx(I,{}),e.jsx(We,{isOpen:s,toggleMenu:d})]})]})};export{Ye as C,ti as F,ni as H,ei as S,re as a,ii as b};
