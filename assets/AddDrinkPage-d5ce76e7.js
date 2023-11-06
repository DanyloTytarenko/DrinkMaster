import{n as r,j as e,i as w,y as ie,r as T,u as Z,z as ne,A as te,B as oe,C as re,D as E,E as N,F as ae,G as le,H as I,I as se}from"./index-fc9bbdc4.js";import{s as ce,a as de,b as C,c as pe,d as he,e as xe}from"./selectors-3ec32ffc.js";import{S as ge}from"./react-select.esm-08871638.js";import{c as H,a as j,d as me,F as fe,e as ue}from"./index.esm-1505d28e.js";import{H as be,a as ye,F as we}from"./Header-eca8d2b4.js";import{P as je}from"./PageTitle-a51981b3.js";import{P as ve,a as ke,L as De,b as ze,D as Ae,c as Te,d as Se,e as Ie,f as $e}from"./PopularDrinks.styled-c7207f0f.js";import"./assertThisInitialized-dd058191.js";const Ce=r.div`
  width: 100%;
  max-width: 335px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 20px;
  background-image: linear-gradient(
    to top left,
    #000 45%,
    rgb(22, 31, 55),
    rgba(64, 112, 205, 0.5)
  );
  @media only screen and (min-width: 768px) {
    padding: 140px 32px;
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      padding: 160px 100px;
      max-width: 1240px;
    }
  }
`,Pe=r.div`
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
`,Ne=r.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Oe=r.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,Fe=r.button`
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
`,qe=r.div`
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
`,Be=r.label`
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
`,U=r.input`
  display: none;
`,Ue=r.span`
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
`,W=r.div``,M=r.input`
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
`,$=r.div`
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
`,G=r.span`
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
`,Y=r.div`
  background-color: inherit;
  color: #f3f3f3;
`,_=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,J=r.span`
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
`,K=r.input`
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
`,F=r.span`
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
`,O=i=>Date.now()-new Date(i).getTime()>1e3*31556926*18,q=({name:i,options:a,value:o,onChangeIngredientHandler:s,setFieldValue:f,errors:d,wrongIngredient:v})=>{const n={dropdownIndicator:(t,h)=>({...t,transform:h.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,{isFocused:h})=>({...t,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:t=>({...t,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:"#161f37",borderRadius:"12px"}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:0}),singleValue:t=>({...t,color:"#f3f3f3"}),option:(t,{isFocused:h,isSelected:u})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:h?"rgba(243, 243, 243, 0.75)":u?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})},b={dropdownIndicator:(t,h)=>({...t,paddingRight:"18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:h.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,h)=>({...t,width:"200px",height:"50px",background:"inherit",border:o&&d?"1px solid #3cbc8150":d||v?"1px solid #da141450":"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...h["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:t=>({...t,marginTop:"2px",padding:"0px 12px",backgroundColor:"#161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:"0px 18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:t=>({...t,color:"#f3f3f3"}),placeholder:t=>({...t,"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(t,{isFocused:h,isSelected:u})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:h?"rgba(243, 243, 243, 0.75)":u?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})};return e.jsx(ge,{styles:i==="title"?b:n,name:i,options:a,value:o,onChange:t=>{s(t.value,i,f)}})},V="/DrinkMaster/assets/dummyDrinkThumb-2c11fe96.png",Ve=({setFile:i,onChangeHandler:a,setFieldValue:o,errors:s})=>{const f=w(ce),d=w(de),n=w(C).form,b=w(ie);O(b.birthday)===!1&&n.alcoholic==="Alcoholic"&&a("Non alcoholic","alcoholic",o);const[t,h]=T.useState(),u=l=>l.map(k=>({value:k,label:k})),c=l=>{if(!l.target.files[0].type.startsWith("image/")){console.log("Please, upload image-type file, e.g. '.jpeg', '.png'");return}i(l.target.files[0]),h(URL.createObjectURL(l.target.files[0]))};return e.jsxs(qe,{children:[e.jsx(Re,{uri:t,children:t?e.jsxs(He,{children:[e.jsx(B,{onClick:()=>{i(),h(V)},children:"Without image"}),e.jsxs(B,{children:["Change",e.jsx(U,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>c(l)})]})]}):e.jsxs(Le,{children:[e.jsxs(Be,{children:["+",e.jsx(U,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>c(l)})]}),e.jsx(Ue,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(We,{children:[e.jsxs(W,{children:[e.jsx(M,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:n.drink,onChange:l=>{a(l.target.value,l.target.name,o)}}),e.jsxs($,{errors:s.drink,value:n.drink,children:[!n.drink&&s.drink,!n.drink&&s.drink&&e.jsx(F,{children:"!"})]})]}),e.jsxs(W,{children:[e.jsx(M,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:n.description,onChange:l=>{a(l.target.value,l.target.name,o)}}),e.jsxs($,{errors:s.description,value:n.description,children:[!n.description&&s.description,!n.description&&s.description&&e.jsx(F,{children:"!"})]})]}),e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsx(J,{children:"Category"}),e.jsx(q,{name:"category",options:u(f),value:n.category===""?null:{value:n.category,label:n.category},onChangeIngredientHandler:a,setFieldValue:o})]}),e.jsxs($,{errors:s.category,value:n.category,children:[!n.category&&s.category,!n.category&&s.category&&e.jsx(G,{children:s.category&&"!"})]})]}),e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsx(J,{children:"Glass"}),e.jsx(q,{name:"glass",options:u(d),value:n.glass===""?null:{value:n.glass,label:n.glass},onChangeIngredientHandler:a,setFieldValue:o})]}),e.jsxs($,{errors:s.glass,value:n.glass,children:[!n.glass&&s.glass,!n.glass&&s.glass&&e.jsx(G,{children:"!"})]})]})]}),e.jsxs(Me,{children:[e.jsxs(Ge,{isAlcoholic:n.alcoholic,children:[e.jsx(K,{type:"radio",value:"Alcoholic",name:"alcoholic",checked:n.alcoholic==="Alcoholic",onChange:l=>{a(l.target.value,"alcoholic",o)},disabled:!O(b.birthday)}),"Alcoholic"]}),e.jsxs(Ye,{isAlcoholic:n.alcoholic,children:[e.jsx(K,{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:O(b.birthday)===!1||n.alcoholic==="Non alcoholic",onChange:l=>{a(l.target.value,"alcoholic",o)}}),"Non-alcoholic"]})]})]})]})},ei=r.div`
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
`,Q=r.p`
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
`,X=r.span`
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
`,pi=({chosenIngredients:i,ingredients:a,index:o,onChangeHandler:s,setFieldValue:f,deleteIngredient:d,chosenIngredientSelect:v,errors:n,wrongIngredients:b})=>{var h,u,c,l,k,x,g,y,p,m,z,D,A,R;const t=(P,ee)=>{let S=[...i];const L={[ee]:P,alcohol:a[o].alcohol};S[o]=S[o]?Object.assign({},S[o],L):L,s(S,"ingredients",f)};return e.jsxs(si,{children:[e.jsx(q,{name:"title",options:a,value:i[o].title===""?null:v,onChangeIngredientHandler:t,setFieldValue:f,errors:n==null?void 0:n.ingredients,wrongIngredient:b?(h=b[o])==null?void 0:h.title:null}),e.jsxs(Q,{children:[!((u=i[o])!=null&&u.title)&&((c=n==null?void 0:n.ingredients)==null?void 0:c.length)>0&&((l=n.ingredients[o])==null?void 0:l.title),b&&((k=i[o])==null?void 0:k.alcohol)==="Yes"&&"That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink",((x=n==null?void 0:n.ingredients)==null?void 0:x.length)>0&&((g=n.ingredients[o])==null?void 0:g.title)&&e.jsx(X,{value:i[o].title,children:(y=i[o])!=null&&y.title?"✔":"!"})]}),e.jsxs("div",{children:[e.jsx(ci,{errors:n.ingredients,type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:i[o].measure===""?"":i[o].measure,onChange:P=>{t(P.target.value,"measure")}}),e.jsxs(Q,{children:[!((p=i[o])!=null&&p.measure)&&((m=n==null?void 0:n.ingredients)==null?void 0:m.length)>0&&((z=n.ingredients[o])==null?void 0:z.measure),!((D=i[o])!=null&&D.measure)&&((A=n==null?void 0:n.ingredients)==null?void 0:A.length)>0&&((R=n.ingredients[o])==null?void 0:R.measure)&&e.jsx(X,{measure:"measure",children:n.ingredients?"!":"✔"})]})]}),e.jsx(di,{type:"button",title:"Remove ungridient",onClick:()=>d(o),children:"+"})]})},hi=({onChangeHandler:i,setFieldValue:a,errors:o,wrongIngredients:s})=>{const d=w(C).form,n=w(pe).filter(c=>d.alcoholic==="Alcoholic"?c.alcohol:c.alcohol==="No"),t=n.filter(c=>c.title).map(c=>({value:c.title,label:c.title,alcohol:c.alcohol})),h=()=>{if(d.ingredients.length>=n.length)return;const c=[...d.ingredients];c.push({title:"",measure:"",alcohol:""}),i(c,"ingredients",a)},u=c=>{if(d.ingredients.length!==1)if(c||c===0){const l=[...d.ingredients];l.splice(c,1),i(l,"ingredients",a)}else{const l=[...d.ingredients];l.pop(),i(l,"ingredients",a)}};return e.jsxs(ei,{children:[e.jsxs(ii,{children:[e.jsx(ni,{children:"Ingredients"}),e.jsxs(ti,{children:[e.jsx(oi,{type:"button",onClick:()=>u(),children:"---"}),e.jsx(ai,{children:d.ingredients.length}),e.jsx(ri,{type:"button",onClick:()=>h(),children:"+"})]})]}),e.jsx(li,{children:d.ingredients.map((c,l)=>e.jsx("li",{children:e.jsx(pi,{chosenIngredients:d.ingredients,onChangeHandler:i,setFieldValue:a,ingredients:t,deleteIngredient:u,index:l,chosenIngredientSelect:{value:d.ingredients[l].title,label:d.ingredients[l].title},errors:o,wrongIngredients:s})},l))})]})},xi=({onChangeHandler:i,setFieldValue:a,errors:o})=>{const f=w(C).form;return e.jsxs(_e,{children:[e.jsx(Je,{children:"Recipe Preparation"}),e.jsx(Ke,{}),f.instructions?e.jsx(Xe,{children:"Enter the recipe"}):e.jsxs(Ze,{children:[!f.instructions&&o.instructions,!f.instructions&&o.instructions&&e.jsx(F,{children:"!"})]}),e.jsx(Qe,{errors:o.instructions,name:"instructions",placeholder:"Enter the recipe",rows:6,value:f.instructions,onChange:d=>{i(d.target.value,d.target.name,a)}})]})},gi=H({drink:j().trim().required("This field is required"),description:j().required("This field is required"),category:j().required("This field is required"),glass:j().required("This field is required"),alcoholic:j().matches(/(Alcoholic|Non alcoholic)/).required("This field is required"),ingredients:me().of(H({title:j().required("This field is required"),measure:j().required("Required")})),instructions:j().required("This field is required")}),mi=()=>{const i=Z();let a=ne();T.useEffect(()=>{i(te("categories")),i(oe("glasses")),i(re("ingredients"))},[i]);const o=w(C);o!=null&&o.form||i(E(N));const s=o.form,f=w(he),[d,v]=T.useState(),[n,b]=T.useState(),t=x=>{if(s.alcoholic==="Alcoholic")return!0;if(s.alcoholic==="Non alcoholic")return s.ingredients.filter(y=>y.alcohol==="Yes").length===0?(b(null),!0):(x&&I.Notify.failure("The drink is labeled non-alcoholic but contains alcohol"),b(!0),!1)},h=x=>s.alcoholic==="Non alcoholic"||s.ingredients.some(g=>g.alcohol==="Yes")?!0:(x&&I.Notify.failure("The drink is labeled as alcoholic, but it doesn't contain alcohol"),!1),u=(x,g)=>{if(!t(!0)||!h(!0))return;if(!d){const p={...s};p!=null&&p.form&&delete p.form;let m=[];p.ingredients.filter(D=>m.push({title:D.title,measure:D.measure})),delete p.ingredients,p.ingredients=m,Object.assign(p,{drinkThumb:"src/images/dummyDrinkThumb.png"}),l(p,x,g);return}const y=new FormData;y.append("cocktail",d),i(ae(y)).then(p=>{if(typeof p.payload=="string"&&p.payload.startsWith("https://res.cloudinary.com")){const m={...s};m!=null&&m.form&&delete m.form;let z=[];m.ingredients.filter(A=>z.push({title:A.title,measure:A.measure})),delete m.ingredients,m.ingredients=z;const D={drinkThumb:p.payload};Object.assign(m,D),l(m,x,g)}else console.log("Something get wront. Please, try upload image-type file, e.g. '.jpeg', '.png'");console.log(p.payload.message)})};function c(x,g,y){const p={...s},m={[g]:x};Object.assign(p,m),y(g,x),i(E(p)),n&&t()}const l=(x,g,y)=>{console.log(o,"persistedForm"),i(le(x,g)).then(p=>{if(p.payload.message==="drink added"){I.Notify.success("You added new cocktail!"),a("/my"),i(E(N)),y.resetForm({values:N});return}console.log(p.payload.message),k(p.payload.message)})},k=x=>{x==="Image file format webp not allowed"&&I.Notify.failure('Format "webp" not allowed. Try upload .jpeg or .png')};return e.jsx(Oe,{children:e.jsx(fe,{initialValues:s,validationSchema:gi,validateOnChange:!1,validateOnBlur:!1,onSubmit:u,children:({setFieldValue:x,errors:g})=>e.jsxs(ue,{children:[e.jsx(Ve,{setFile:v,onChangeHandler:c,setFieldValue:x,errors:g}),e.jsx(hi,{onChangeHandler:c,setFieldValue:x,errors:g,wrongIngredients:n}),e.jsx(xi,{onChangeHandler:c,setFieldValue:x,errors:g}),e.jsx(Fe,{type:"submit",disabled:f===!0,title:"Add",children:"Add"})]})})})},fi=()=>{const i=Z();T.useEffect(()=>{i(se())},[i]);let a=w(xe);return e.jsx(ve,{children:e.jsxs("div",{children:[e.jsx(ke,{children:"Popular drinks"}),e.jsx(De,{children:a.map(o=>e.jsx(ze,{children:e.jsxs(Ae,{to:`/drink/${o._id}`,children:[e.jsx(Te,{src:o.drinkThumb,alt:o.drink,onError:s=>{s.currentTarget.src=V}}),e.jsxs(Se,{children:[e.jsx(Ie,{children:o.drink}),e.jsx($e,{children:o.description})]})]})},o._id))})]})})},zi=()=>e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsxs(Ce,{children:[e.jsx(je,{title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),e.jsxs(Pe,{children:[e.jsx(mi,{}),e.jsxs("div",{children:[e.jsxs(Ee,{children:[e.jsx(Ne,{children:"Follow Us"}),e.jsx(ye,{})]}),e.jsx(fi,{})]})]})]}),e.jsx(we,{})]});export{zi as default};
