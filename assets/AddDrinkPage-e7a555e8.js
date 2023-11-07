import{n as r,j as e,k as w,z as ie,r as S,A as v,u as V,B as ne,C as te,D as oe,E as re,F as P,G as q,H as ae,I as le,J as se}from"./index-b5be8991.js";import{s as ce,a as de,b as E,c as pe,d as he,e as xe}from"./selectors-3f3e92cd.js";import{S as ge}from"./react-select.esm-59851a97.js";import{D as ee}from"./dummyDrinkThumb-d0bd605f.js";import{c as U,a as j,d as fe,F as me,e as ue}from"./index.esm-1396b9e3.js";import{H as be,a as ye,F as we}from"./Header-6f0cd0a1.js";import{P as je}from"./PageTitle-1428f6a7.js";import{P as ve,a as ke,L as De,b as ze,D as Ae,c as Te,d as Se,e as Ie,f as $e}from"./PopularDrinks.styled-d6919d26.js";import"./assertThisInitialized-87b36c5c.js";const Ce=r.div`
  width: 100%;
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 20px;
  @media only screen and (min-width: 768px) {
    padding: 140px 32px;
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      padding: 160px 100px;
      max-width: 1240px;
    }
  }
`,Ne=r.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    @media only screen and (min-width: 1440px) {
      flex-direction: row;
    }
  }
`,Ee=r.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Oe=r.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Pe=r.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,qe=r.button`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 107px;
  height: 46px;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
    width: 118px;
    height: 54px;
  }

  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
  }
  &:active {
    color: #161f37;
    border: 2px solid #4070cd50;
    background-color: #f3f3f3;
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`,Fe=r.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 40px;

  @media only screen and (min-width: 768px) {
    column-gap: 32px;
    @media only screen and (min-width: 1440px) {
      column-gap: 40px;
      width: 833px;
    }
  }
`,Re=r.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
  background-image: ${({uri:i})=>i?`url(${i})`:"none"};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`,Le=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,He=r.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,B=r.label`
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
  :hover {
    text-shadow:
      1px 1px 2px #161f37,
      0 0 1em #bce6d2,
      0 0 0.2em #4070cd;
  }
`,Ue=r.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: #f3f3f3;
  color: #161f37;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #161f37;
    color: #f3f3f3;
    border: 1px solid #f3f3f350;
  }
  &:active {
    color: #161f37;
    border: 2px solid #4070cd50;
    background-color: #f3f3f3;
  }
`,W=r.input`
  display: none;
`,Be=r.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`,We=r.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  letter-spacing: -0.02em;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 352px;
    @media only screen and (min-width: 1440px) {
      width: 393px;
      gap: 40px;
    }
  }
`,M=r.div``,G=r.input`
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover {
    ::-webkit-input-placeholder {
      color: #f3f3f380;
    }
  }
`,N=r.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid #f3f3f350;
  border-bottom: ${({errors:i,value:a})=>a&&i?"1px solid #3cbc8150":i?"1px solid #da141450":"1px solid #f3f3f350"};
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`,Y=r.span`
  position: relative;
  bottom: 22px;
  left: 105px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: '#da1414';
  border: 2px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    left: 100px;
    width: 20px;
    height: 20px;
    @media only screen and (min-width: 1440px) {
      left: 140px;
    }
  }
`,_=r.div`
  background-color: inherit;
  color: #f3f3f3;
`,J=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,K=r.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Me=r.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ge=r.label`
  opacity: ${({isAlcoholic:i})=>i==="Alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Ye=r.label`
  opacity: ${({isAlcoholic:i})=>i==="Non alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Q=r.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: #f3f3f3;
    border: 3px solid black;
    outline: 1.3px ridge #f3f3f3;
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid black;
      outline: 2px ridge #f3f3f3;
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid rgba(243, 243, 243, 0.5);
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,_e=r.div`
  margin-bottom: 20px;
  position: relative;
`,Je=r.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`,Ke=r.div`
  position: relative;
`,Qe=r.textarea`
  font-family: 'Manrope', sans-serif;
  position: relative;
  padding: 16px 18px;
  width: 100%;
  height: 184px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
  border: ${({errors:i,value:a})=>a&&i?"1px solid #3cbc8150":i?"1px solid #da141450":"1px solid rgba(243, 243, 243, 0.5)"};
  border-radius: 14px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding: 14px 24px;
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid rgba(243, 243, 243, 1);
  }
`,Xe=r.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    top: 46px;
    margin-left: 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,Ze=r.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    margin-left: 24px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,R=r.span`
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 10px;
  height: 10px;
  border: 1px solid #da1414;
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`,F=i=>Date.now()-new Date(i).getTime()>1e3*31556926*18,L=({name:i,options:a,value:o,onChangeIngredientHandler:s,setFieldValue:m,errors:p,wrongIngredient:k})=>{const n={dropdownIndicator:(t,x)=>({...t,transform:x.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,{isFocused:x})=>({...t,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:t=>({...t,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:"#161f37",borderRadius:"12px"}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:0}),singleValue:t=>({...t,color:"#f3f3f3"}),option:(t,{isFocused:x,isSelected:u})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:x?"rgba(243, 243, 243, 0.75)":u?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})},b={dropdownIndicator:(t,x)=>({...t,paddingRight:"18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:x.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,x)=>({...t,width:"200px",height:"50px",background:"inherit",border:o&&p?"1px solid #3cbc8150":p||k?"1px solid #da141450":"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...x["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:t=>({...t,marginTop:"2px",padding:"0px 12px",backgroundColor:"#161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:"0px 18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:t=>({...t,color:"#f3f3f3"}),placeholder:t=>({...t,"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(t,{isFocused:x,isSelected:u})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:x?"rgba(243, 243, 243, 0.75)":u?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})};return e.jsx(ge,{styles:i==="title"?b:n,name:i,options:a,value:o,onChange:t=>{s(t.value,i,m)}})},Ve=({setFile:i,onChangeHandler:a,setFieldValue:o,errors:s})=>{const m=w(ce),p=w(de),n=w(E).form,b=w(ie);F(b.birthday)===!1&&n.alcoholic==="Alcoholic"&&a("Non alcoholic","alcoholic",o);const[t,x]=S.useState(),u=l=>l.map(D=>({value:D,label:D})),d=l=>{if(!l.target.files[0].type.startsWith("image/"))return v.Notify.failure("Please, upload image-type file, e.g. '.jpeg', '.png'");i(l.target.files[0]),x(URL.createObjectURL(l.target.files[0]))};return e.jsxs(Fe,{children:[e.jsx(Re,{uri:t,children:t?e.jsxs(He,{children:[e.jsx(B,{onClick:()=>{i(),x(ee)},children:"Without image"}),e.jsxs(B,{children:["Change",e.jsx(W,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>d(l)})]})]}):e.jsxs(Le,{children:[e.jsxs(Ue,{children:["+",e.jsx(W,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>d(l)})]}),e.jsx(Be,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(We,{children:[e.jsxs(M,{children:[e.jsx(G,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:n.drink,onChange:l=>{a(l.target.value,l.target.name,o)}}),e.jsxs(N,{errors:s.drink,value:n.drink,children:[!n.drink&&s.drink,!n.drink&&s.drink&&e.jsx(R,{children:"!"})]})]}),e.jsxs(M,{children:[e.jsx(G,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:n.description,onChange:l=>{a(l.target.value,l.target.name,o)}}),e.jsxs(N,{errors:s.description,value:n.description,children:[!n.description&&s.description,!n.description&&s.description&&e.jsx(R,{children:"!"})]})]}),e.jsxs(_,{children:[e.jsxs(J,{children:[e.jsx(K,{children:"Category"}),e.jsx(L,{name:"category",options:u(m),value:n.category===""?null:{value:n.category,label:n.category},onChangeIngredientHandler:a,setFieldValue:o})]}),e.jsxs(N,{errors:s.category,value:n.category,children:[!n.category&&s.category,!n.category&&s.category&&e.jsx(Y,{children:s.category&&"!"})]})]}),e.jsxs(_,{children:[e.jsxs(J,{children:[e.jsx(K,{children:"Glass"}),e.jsx(L,{name:"glass",options:u(p),value:n.glass===""?null:{value:n.glass,label:n.glass},onChangeIngredientHandler:a,setFieldValue:o})]}),e.jsxs(N,{errors:s.glass,value:n.glass,children:[!n.glass&&s.glass,!n.glass&&s.glass&&e.jsx(Y,{children:"!"})]})]})]}),e.jsxs(Me,{children:[e.jsxs(Ge,{isAlcoholic:n.alcoholic,children:[e.jsx(Q,{type:"radio",value:"Alcoholic",name:"alcoholic",checked:n.alcoholic==="Alcoholic",onChange:l=>{a(l.target.value,"alcoholic",o)},disabled:!F(b.birthday)}),"Alcoholic"]}),e.jsxs(Ye,{isAlcoholic:n.alcoholic,children:[e.jsx(Q,{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:F(b.birthday)===!1||n.alcoholic==="Non alcoholic",onChange:l=>{a(l.target.value,"alcoholic",o)}}),"Non-alcoholic"]})]})]})]})},ei=r.div`
  margin-bottom: 80px;
`,ii=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,ni=r.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,ti=r.div`
  box-sizing: border-box;
  padding: 0px 12px;
  width: 104px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  line-height: calc(18 / 14);
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 44px;
    padding: 0px 10px;
  }
`,oi=r.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
  :hover {
    color: #f3f3f380;
    scale: 1.25;
  }
`,ri=r.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
  :hover {
    color: #f3f3f380;
    scale: 1.45;
  }
`,ai=r.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,li=r.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,si=r.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,ci=r.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: ${({errors:i,value:a})=>a&&i?"1px solid #3cbc8150":i?"1px solid #da141450":"1px solid rgba(243, 243, 243, 0.5)"};
  border-radius: 200px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    width: 150px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
  :focus {
    outline: none;
  }
  :hover {
    border: 1px solid rgba(243, 243, 243, 1);
  }
`,di=r.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  background-color: inherit;
  color: #f3f3f3;
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  :hover {
    color: #f3f3f380;
    scale: 1.25;
  }
  &:active {
    scale: 0.85;
  }
`,X=r.p`
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 50px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 58px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,Z=r.span`
  position: absolute;
  top: -35px;
  right: ${({measure:i,value:a})=>i==="measure"?"-12px":a?"-134px":"-24px"};
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: ${({measure:i,value:a})=>!i&&a?"#3cbc81":"#da1414"};
  border: ${({measure:i,value:a})=>!i&&a?"2px solid #3cbc81":"2px solid #da1414"};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: -42px;
    right: ${({measure:i,value:a})=>i==="measure"?"-46px":a?"-256px":"-124px"};
    width: 20px;
    height: 20px;
  }
`,pi=({chosenIngredients:i,ingredients:a,index:o,onChangeHandler:s,setFieldValue:m,deleteIngredient:p,chosenIngredientSelect:k,errors:n,wrongIngredients:b})=>{var x,u,d,l,D,I,h,g,y,c,f,A,z,T;const t=($,O)=>{let C=[...i];const H=O==="title"?{[O]:$,alcohol:a[o].alcohol}:{[O]:$};C[o]=C[o]?Object.assign({},C[o],H):H,s(C,"ingredients",m)};return e.jsxs(si,{children:[e.jsx(L,{name:"title",options:a,value:i[o].title===""?null:k,onChangeIngredientHandler:t,setFieldValue:m,errors:n==null?void 0:n.ingredients,wrongIngredient:b?(x=b[o])==null?void 0:x.title:null}),e.jsxs(X,{children:[!((u=i[o])!=null&&u.title)&&((d=n==null?void 0:n.ingredients)==null?void 0:d.length)>0&&((l=n.ingredients[o])==null?void 0:l.title),b&&((D=i[o])==null?void 0:D.alcohol)==="Yes"&&"That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink",((I=n==null?void 0:n.ingredients)==null?void 0:I.length)>0&&((h=n.ingredients[o])==null?void 0:h.title)&&e.jsx(Z,{value:i[o].title,children:(g=i[o])!=null&&g.title?"✔":"!"})]}),e.jsxs("div",{children:[e.jsx(ci,{errors:n.ingredients,type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:i[o].measure===""?"":i[o].measure,onChange:$=>{t($.target.value,"measure")}}),e.jsxs(X,{children:[!((y=i[o])!=null&&y.measure)&&((c=n==null?void 0:n.ingredients)==null?void 0:c.length)>0&&((f=n.ingredients[o])==null?void 0:f.measure),!((A=i[o])!=null&&A.measure)&&((z=n==null?void 0:n.ingredients)==null?void 0:z.length)>0&&((T=n.ingredients[o])==null?void 0:T.measure)&&e.jsx(Z,{measure:"measure",children:n.ingredients?"!":"✔"})]})]}),e.jsx(di,{type:"button",title:"Remove ungridient",onClick:()=>p(o),children:"+"})]})},hi=({onChangeHandler:i,setFieldValue:a,errors:o,wrongIngredients:s})=>{const p=w(E).form,t=w(pe).filter(d=>p.alcoholic==="Alcoholic"?d.alcohol:d.alcohol==="No").filter(d=>d.title).map(d=>({value:d.title,label:d.title,alcohol:d.alcohol})),x=()=>{const d=[...p.ingredients];d.push({title:"",measure:"",alcohol:""}),i(d,"ingredients",a)},u=d=>{if(p.ingredients.length!==1)if(d||d===0){const l=[...p.ingredients];l.splice(d,1),i(l,"ingredients",a)}else{const l=[...p.ingredients];l.pop(),i(l,"ingredients",a)}};return e.jsxs(ei,{children:[e.jsxs(ii,{children:[e.jsx(ni,{children:"Ingredients"}),e.jsxs(ti,{children:[e.jsx(oi,{type:"button",onClick:()=>u(),children:"---"}),e.jsx(ai,{children:p.ingredients.length}),e.jsx(ri,{type:"button",onClick:()=>x(),children:"+"})]})]}),e.jsx(li,{children:p.ingredients.map((d,l)=>e.jsx("li",{children:e.jsx(pi,{chosenIngredients:p.ingredients,onChangeHandler:i,setFieldValue:a,ingredients:t,deleteIngredient:u,index:l,chosenIngredientSelect:{value:p.ingredients[l].title,label:p.ingredients[l].title},errors:o,wrongIngredients:s})},l))})]})},xi=({onChangeHandler:i,setFieldValue:a,errors:o})=>{const m=w(E).form;return e.jsxs(_e,{children:[e.jsx(Je,{children:"Recipe Preparation"}),e.jsx(Ke,{}),m.instructions?e.jsx(Xe,{children:"Enter the recipe"}):e.jsxs(Ze,{children:[!m.instructions&&o.instructions,!m.instructions&&o.instructions&&e.jsx(R,{children:"!"})]}),e.jsx(Qe,{errors:o.instructions,name:"instructions",placeholder:"Enter the recipe",rows:6,value:m.instructions,onChange:p=>{i(p.target.value,p.target.name,a)}})]})},gi=U({drink:j().trim().required("This field is required"),description:j().required("This field is required"),category:j().required("This field is required"),glass:j().required("This field is required"),alcoholic:j().matches(/(Alcoholic|Non alcoholic)/).required("This field is required"),ingredients:fe().of(U({title:j().required("This field is required"),measure:j().required("Required")})),instructions:j().required("This field is required")}),fi=()=>{const i=V();let a=ne();S.useEffect(()=>{i(te("categories")),i(oe("glasses")),i(re("ingredients"))},[i]);const o=w(E);o!=null&&o.form||i(P(q));const s=o.form,m=w(he),[p,k]=S.useState(),[n,b]=S.useState(),t=h=>{if(s.alcoholic==="Alcoholic")return!0;if(s.alcoholic==="Non alcoholic")return s.ingredients.filter(y=>y.alcohol==="Yes").length===0?(b(null),!0):(h&&v.Notify.failure("The drink is labeled non-alcoholic but contains alcohol"),b(!0),!1)},x=h=>s.alcoholic==="Non alcoholic"||s.ingredients.some(g=>g.alcohol==="Yes")?!0:(h&&v.Notify.failure("The drink is labeled as alcoholic, but it doesn't contain alcohol"),!1),u=(h,g)=>{if(!I())return v.Notify.failure("Duplicate ingredients are not allowed");if(!t(!0)||!x(!0))return;if(!p){const c={...s};c!=null&&c.form&&delete c.form;let f=[];c.ingredients.filter(z=>f.push({title:z.title,measure:z.measure})),delete c.ingredients,c.ingredients=f,Object.assign(c,{drinkThumb:"src/images/dummyDrinkThumb.png"}),l(c,h,g);return}const y=new FormData;y.append("cocktail",p),i(ae(y)).then(c=>{if(typeof c.payload=="string"&&c.payload.startsWith("https://res.cloudinary.com")){const f={...s};f!=null&&f.form&&delete f.form;let A=[];f.ingredients.filter(T=>A.push({title:T.title,measure:T.measure})),delete f.ingredients,f.ingredients=A;const z={drinkThumb:c.payload};Object.assign(f,z),l(f,h,g)}else v.Notify.failure('Format "webp" not allowed. Try upload .jpeg or .png');console.log(c.payload.message)}).catch(c=>{console.log(c)})};function d(h,g,y){const c={...s},f={[g]:h};Object.assign(c,f),y(g,h),i(P(c)),n&&t()}const l=(h,g,y)=>{console.log(o,"persistedForm"),i(le(h,g)).then(c=>{if(c.type==="drinks/addOwnDrink/fulfilled"){v.Notify.success("You added new cocktail!"),a("/my"),i(P(q)),y.resetForm({values:q});return}console.log(c.payload.message),D(c.payload.message)})},D=h=>{h&&(h.includes("length must be at least")&&v.Notify.failure("All field must be at least 2 symbols long"),h.includes("duplicate")&&v.Notify.failure("Drink with that title already exist"))},I=()=>{const g=s.ingredients.flatMap(c=>c.title);return!(g.filter((c,f)=>g.indexOf(c)!==f).length>0)};return e.jsx(Pe,{children:e.jsx(me,{initialValues:s,validationSchema:gi,validateOnChange:!1,validateOnBlur:!1,onSubmit:u,children:({setFieldValue:h,errors:g})=>e.jsxs(ue,{children:[e.jsx(Ve,{setFile:k,onChangeHandler:d,setFieldValue:h,errors:g}),e.jsx(hi,{onChangeHandler:d,setFieldValue:h,errors:g,wrongIngredients:n}),e.jsx(xi,{onChangeHandler:d,setFieldValue:h,errors:g}),e.jsx(qe,{type:"submit",disabled:m===!0,title:"Add",children:"Add"})]})})})},mi=()=>{const i=V();S.useEffect(()=>{i(se())},[i]);let a=w(xe);return e.jsx(ve,{children:e.jsxs("div",{children:[e.jsx(ke,{children:"Popular drinks"}),e.jsx(De,{children:a.map(o=>e.jsx(ze,{children:e.jsxs(Ae,{to:`/drink/${o._id}`,children:[e.jsx(Te,{src:o.drinkThumb,alt:o.drink,onError:s=>{s.currentTarget.src=ee}}),e.jsxs(Se,{children:[e.jsx(Ie,{children:o.drink}),e.jsx($e,{children:o.description})]})]})},o._id))})]})})},Ai=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsxs(Ce,{children:[e.jsx(je,{title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),e.jsxs(Ne,{children:[e.jsx(fi,{}),e.jsxs("div",{children:[e.jsxs(Ee,{children:[e.jsx(Oe,{children:"Follow Us"}),e.jsx(ye,{})]}),e.jsx(mi,{})]})]})]}),e.jsx(we,{})]});export{Ai as default};
