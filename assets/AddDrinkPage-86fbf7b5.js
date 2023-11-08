import{n as a,c as n,j as i,k as $,A as te,r as I,B as D,u as ie,C as oe,D as re,E as ae,F as le,G as F,H as R,I as se,J as de,K as ce,m as pe}from"./index-ef4c7a4a.js";import{s as he,a as xe,b as P,c as ge,d as me,e as fe}from"./selectors-3f3e92cd.js";import{S as ue}from"./react-select.esm-41f9b54a.js";import{D as ne}from"./dummyDrinkThumb-d0bd605f.js";import{c as M,a as v,d as ye,F as be,e as ke}from"./index.esm-df34f3a2.js";import{H as we,a as je,F as $e}from"./Header-92c75de0.js";import{M as ve}from"./MainAppContainer-0266e8c5.js";import{P as De}from"./PageTitle-34c7e920.js";import{P as Ae,a as ze,L as Te,b as Se,D as Ie,c as Ce,d as Ne,e as Ee,f as Oe}from"./PopularDrinks.styled-481e5eb0.js";import"./assertThisInitialized-94d0043f.js";import"./MainAppContainer.styled-cd4a5dc5.js";const Pe=a.div`
  width: 100%;
  margin: 80px 0;
  @media only screen and (min-width: 768px) {
    margin: 140px 0;
    @media only screen and (min-width: 1440px) {
      margin: 160px 0;
    }
  }
`,qe=a.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  column-gap: 94px;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,Fe=a.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Re=a.h3`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,Le=a.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,He=a.button`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 107px;
  height: 46px;
  color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(18 / 16);
    width: 118px;
    height: 54px;
  }

  &:hover {
    background-color: #161f37;
    background-color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
    color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  }
  &:active {
    color: ${({theme:e})=>e==="dark"?`${n.secondaryDark}`:`${n.light}`};
    border: 2px solid #4070cd50;
    background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.secondaryDark}`};
  }
  &:disabled {
    color: #f3f3f320;
    background-color: #434d67;
  }
`,Ue=a.div`
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
`,Be=a.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: ${({theme:e})=>e==="dark"?"#161F3750":`${n.secondaryDark}`};
  background-size: cover;
  background-image: ${({uri:e})=>e?`url(${e})`:"none"};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`,Me=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,We=a.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,W=a.label`
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
`,Ge=a.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: ${n.light};
  color: #161f37;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: ${n.secondaryDark};
    color: ${n.light};
    border: 1px solid #f3f3f350;
  }
  &:active {
    color: ${n.secondaryDark};
    border: 2px solid #4070cd50;
    background-color: ${n.light};
  }
`,G=a.input`
  display: none;
`,Ye=a.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: ${n.light};
`,_e=a.div`
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
`,Y=a.div``,_=a.input`
  width: 100%;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:"#0A0A1150"};
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover {
    ::-webkit-input-placeholder {
      color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    }
  }
`,O=a.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid #f3f3f350;
  border-bottom: ${({errors:e,value:o})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":"1px solid #f3f3f350"};
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`,J=a.span`
  position: relative;
  bottom: 22px;
  left: 105px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
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
`,K=a.div`
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:"#0A0A1150"};
`,Q=a.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,X=a.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Je=a.div`
  display: flex;
  gap: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ke=a.label`
  opacity: ${({isAlcoholic:e})=>e==="Alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Qe=a.label`
  opacity: ${({isAlcoholic:e})=>e==="Non alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Z=a.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    border: 3px solid ${({theme:e})=>e==="dark"?"black":"white"};
    outline: 1.3px ridge
      ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid ${({theme:e})=>e==="dark"?"black":"white"};
      outline: 2px ridge
        ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid
    ${({theme:e})=>e==="dark"?"#f3f3f350":"#636366"};
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`,Xe=a.div`
  margin-bottom: 20px;
  position: relative;
`,Ze=a.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
`,Ve=a.div`
  position: relative;
`,ei=a.textarea`
  font-family: 'Manrope', sans-serif;
  position: relative;
  padding: 16px 18px;
  width: 100%;
  height: 184px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  border: ${({errors:e,value:o,theme:r})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":`1px solid ${({theme:c})=>c==="dark"?`${n.light}`:`${n.primaryDark}`}`};
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
    border: 1px solid
      ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  }
`,ii=a.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?"#f3f3f350":"#0A0A1150"};
  @media only screen and (min-width: 768px) {
    top: 46px;
    margin-left: 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,ni=a.p`
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
`,H=a.span`
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
`,L=e=>Date.now()-new Date(e).getTime()>1e3*31556926*18,U=({theme:e,name:o,options:r,value:c,onChangeIngredientHandler:d,setFieldValue:k,errors:g,wrongIngredient:h})=>{const s={dropdownIndicator:(t,f)=>({...t,transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,{isFocused:f})=>({...t,top:"-6px",minHeight:"22px",height:"22px",background:"inherit",border:"none",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:t=>({...t,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:e==="dark"?n.secondaryDark:"white",borderRadius:"12px"}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:0}),singleValue:t=>({...t,color:e==="dark"?n.light:n.primaryDark}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...t["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:f?e==="dark"?"#f3f3f375":"#0A0A1175":b?"#f3f3f3":e==="dark"?"#f3f3f340":"#0A0A1140",cursor:"pointer"})},w={dropdownIndicator:(t,f)=>({...t,paddingRight:"18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],paddingRight:"24px"},transform:f.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,f)=>({...t,width:"200px",height:"50px",background:"inherit",border:c&&g?"1px solid #3cbc8150":g||h?"1px solid #da141450":"1px solid #f3f3f350",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...f["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:t=>({...t,marginTop:"2px",padding:"0px 12px",backgroundColor:n.secondaryDark,borderRadius:"12px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:t=>({...t,display:"none"}),valueContainer:t=>({...t,padding:"0px 18px","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:t=>({...t,color:e==="dark"?n.light:n.primaryDark}),placeholder:t=>({...t,"@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(t,{isFocused:f,isSelected:b})=>({...t,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...t["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:f?"#f3f3f375":b?"#f3f3f3":"#f3f3f340",cursor:"pointer"})};return i.jsx(ue,{styles:o==="title"?w:s,name:o,options:r,value:c,onChange:t=>{d(t.value,o,k)}})},ti=({setFile:e,onChangeHandler:o,setFieldValue:r,errors:c,theme:d})=>{const k=$(he),g=$(xe),s=$(P).form,w=$(te);L(w.birthday)===!1&&s.alcoholic==="Alcoholic"&&o("Non alcoholic","alcoholic",r);const[t,f]=I.useState(),b=l=>l.map(A=>({value:A,label:A})),x=l=>{if(!l.target.files[0].type.startsWith("image/"))return D.Notify.failure("Please, upload image-type file, e.g. '.jpeg', '.png'");e(l.target.files[0]),f(URL.createObjectURL(l.target.files[0]))};return i.jsxs(Ue,{children:[i.jsx(Be,{uri:t,theme:d,children:t?i.jsxs(We,{children:[i.jsx(W,{onClick:()=>{e(),f(ne)},children:"Without image"}),i.jsxs(W,{children:["Change",i.jsx(G,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>x(l)})]})]}):i.jsxs(Me,{children:[i.jsxs(Ge,{theme:d,children:["+",i.jsx(G,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:l=>x(l)})]}),i.jsx(Ye,{children:"Add image"})]})}),i.jsxs("div",{children:[i.jsxs(_e,{children:[i.jsxs(Y,{children:[i.jsx(_,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:s.drink,onChange:l=>{o(l.target.value,l.target.name,r)},theme:d}),i.jsxs(O,{errors:c.drink,value:s.drink,children:[!s.drink&&c.drink,!s.drink&&c.drink&&i.jsx(H,{children:"!"})]})]}),i.jsxs(Y,{children:[i.jsx(_,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:s.description,onChange:l=>{o(l.target.value,l.target.name,r)}}),i.jsxs(O,{errors:c.description,value:s.description,children:[!s.description&&c.description,!s.description&&c.description&&i.jsx(H,{children:"!"})]})]}),i.jsxs(K,{theme:d,children:[i.jsxs(Q,{children:[i.jsx(X,{theme:d,children:"Category"}),i.jsx(U,{theme:d,name:"category",options:b(k),value:s.category===""?null:{value:s.category,label:s.category},onChangeIngredientHandler:o,setFieldValue:r})]}),i.jsxs(O,{errors:c.category,value:s.category,children:[!s.category&&c.category,!s.category&&c.category&&i.jsx(J,{children:c.category&&"!"})]})]}),i.jsxs(K,{children:[i.jsxs(Q,{children:[i.jsx(X,{theme:d,children:"Glass"}),i.jsx(U,{theme:d,name:"glass",options:b(g),value:s.glass===""?null:{value:s.glass,label:s.glass},onChangeIngredientHandler:o,setFieldValue:r})]}),i.jsxs(O,{errors:c.glass,value:s.glass,children:[!s.glass&&c.glass,!s.glass&&c.glass&&i.jsx(J,{children:"!"})]})]})]}),i.jsxs(Je,{theme:d,children:[i.jsxs(Ke,{isAlcoholic:s.alcoholic,children:[i.jsx(Z,{theme:d,type:"radio",value:"Alcoholic",name:"alcoholic",checked:s.alcoholic==="Alcoholic",onChange:l=>{o(l.target.value,"alcoholic",r)},disabled:!L(w.birthday)}),"Alcoholic"]}),i.jsxs(Qe,{isAlcoholic:s.alcoholic,children:[i.jsx(Z,{theme:d,type:"radio",value:"Non alcoholic",name:"alcoholic",checked:L(w.birthday)===!1||s.alcoholic==="Non alcoholic",onChange:l=>{o(l.target.value,"alcoholic",r)}}),"Non-alcoholic"]})]})]})]})},oi=a.div`
  margin-bottom: 80px;
`,ri=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,ai=a.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
`,li=a.div`
  box-sizing: border-box;
  padding: 0px 12px;
  width: 104px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  line-height: calc(18 / 14);
  align-items: center;
  border: ${({theme:e})=>e==="dark"?"1px solid #f3f3f350":"1px solid #0A0A1150"};
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    width: 114px;
    height: 44px;
    padding: 0px 10px;
  }
`,si=a.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: #f3f3f330;
  color: ${({theme:e})=>e==="dark"?"#f3f3f330":"#0A0A1130"};
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
`,di=a.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.45;
  }
`,ci=a.span`
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,pi=a.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,hi=a.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,xi=a.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: ${({theme:e})=>e==="dark"?`${n.light}`:`${n.primaryDark}`};
  letter-spacing: -0.02em;
  outline: none;
  border: ${({errors:e,value:o,theme:r})=>o&&e?"1px solid #3cbc8150":e?"1px solid #da141450":"1px solid #f3f3f350"};
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
`,gi=a.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  background-color: inherit;
  color: ${n.light};
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
  :hover {
    color: ${({theme:e})=>e==="dark"?"#f3f3f380":`${n.primaryDark}`};
    scale: 1.25;
  }
  &:active {
    scale: 0.85;
  }
`,V=a.p`
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
`,ee=a.span`
  position: absolute;
  top: -35px;
  right: ${({measure:e,value:o})=>e==="measure"?"-12px":o?"-134px":"-24px"};
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 18px;
  height: 18px;
  color: ${({measure:e,value:o})=>!e&&o?"#3cbc81":"#da1414"};
  border: ${({measure:e,value:o})=>!e&&o?"2px solid #3cbc81":"2px solid #da1414"};
  border-radius: 50%;
  @media only screen and (min-width: 768px) {
    top: -42px;
    right: ${({measure:e,value:o})=>e==="measure"?"-46px":o?"-256px":"-124px"};
    width: 20px;
    height: 20px;
  }
`,mi=({chosenIngredients:e,ingredients:o,index:r,onChangeHandler:c,setFieldValue:d,deleteIngredient:k,chosenIngredientSelect:g,errors:h,wrongIngredients:s,theme:w})=>{var f,b,x,l,A,C,m,u,j,p,y,T,z,S;const t=(N,q)=>{let E=[...e];const B=q==="title"?{[q]:N,alcohol:o[r].alcohol}:{[q]:N};E[r]=E[r]?Object.assign({},E[r],B):B,c(E,"ingredients",d)};return i.jsxs(hi,{children:[i.jsx(U,{theme:w,name:"title",options:o,value:e[r].title===""?null:g,onChangeIngredientHandler:t,setFieldValue:d,errors:h==null?void 0:h.ingredients,wrongIngredient:s?(f=s[r])==null?void 0:f.title:null}),i.jsxs(V,{children:[!((b=e[r])!=null&&b.title)&&((x=h==null?void 0:h.ingredients)==null?void 0:x.length)>0&&((l=h.ingredients[r])==null?void 0:l.title),s&&((A=e[r])==null?void 0:A.alcohol)==="Yes"&&"That ingredient is not fit the chosen type Alcoholic/Non alcoholic drink",((C=h==null?void 0:h.ingredients)==null?void 0:C.length)>0&&((m=h.ingredients[r])==null?void 0:m.title)&&i.jsx(ee,{value:e[r].title,children:(u=e[r])!=null&&u.title?"✔":"!"})]}),i.jsxs("div",{children:[i.jsx(xi,{theme:w,errors:h.ingredients,type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:e[r].measure===""?"":e[r].measure,onChange:N=>{t(N.target.value,"measure")}}),i.jsxs(V,{children:[!((j=e[r])!=null&&j.measure)&&((p=h==null?void 0:h.ingredients)==null?void 0:p.length)>0&&((y=h.ingredients[r])==null?void 0:y.measure),!((T=e[r])!=null&&T.measure)&&((z=h==null?void 0:h.ingredients)==null?void 0:z.length)>0&&((S=h.ingredients[r])==null?void 0:S.measure)&&i.jsx(ee,{measure:"measure",children:h.ingredients?"!":"✔"})]})]}),i.jsx(gi,{theme:w,type:"button",title:"Remove ungridient",onClick:()=>k(r),children:"+"})]})},fi=({onChangeHandler:e,setFieldValue:o,errors:r,wrongIngredients:c,theme:d})=>{const g=$(P).form,t=$(ge).filter(x=>g.alcoholic==="Alcoholic"?x.alcohol:x.alcohol==="No").filter(x=>x.title).map(x=>({value:x.title,label:x.title,alcohol:x.alcohol})),f=()=>{const x=[...g.ingredients];x.push({title:"",measure:"",alcohol:""}),e(x,"ingredients",o)},b=x=>{if(g.ingredients.length!==1)if(x||x===0){const l=[...g.ingredients];l.splice(x,1),e(l,"ingredients",o)}else{const l=[...g.ingredients];l.pop(),e(l,"ingredients",o)}};return i.jsxs(oi,{children:[i.jsxs(ri,{children:[i.jsx(ai,{theme:d,children:"Ingredients"}),i.jsxs(li,{theme:d,children:[i.jsx(si,{type:"button",onClick:()=>b(),theme:d,children:"---"}),i.jsx(ci,{theme:d,children:g.ingredients.length}),i.jsx(di,{type:"button",onClick:()=>f(),theme:d,children:"+"})]})]}),i.jsx(pi,{children:g.ingredients.map((x,l)=>i.jsx("li",{children:i.jsx(mi,{chosenIngredients:g.ingredients,onChangeHandler:e,setFieldValue:o,ingredients:t,deleteIngredient:b,index:l,chosenIngredientSelect:{value:g.ingredients[l].title,label:g.ingredients[l].title},errors:r,wrongIngredients:c})},l))})]})},ui=({onChangeHandler:e,setFieldValue:o,errors:r,theme:c})=>{const k=$(P).form;return i.jsxs(Xe,{children:[i.jsx(Ze,{theme:c,children:"Recipe Preparation"}),i.jsx(Ve,{}),k.instructions?i.jsx(ii,{children:"Enter the recipe"}):i.jsxs(ni,{children:[!k.instructions&&r.instructions,!k.instructions&&r.instructions&&i.jsx(H,{children:"!"})]}),i.jsx(ei,{theme:c,errors:r.instructions,name:"instructions",placeholder:"Enter the recipe",rows:6,value:k.instructions,onChange:g=>{e(g.target.value,g.target.name,o)}})]})},yi=M({drink:v().trim().required("This field is required"),description:v().required("This field is required"),category:v().required("This field is required"),glass:v().required("This field is required"),alcoholic:v().matches(/(Alcoholic|Non alcoholic)/).required("This field is required"),ingredients:ye().of(M({title:v().required("This field is required"),measure:v().required("Required")})),instructions:v().required("This field is required")}),bi=({theme:e})=>{const o=ie();let r=oe();I.useEffect(()=>{o(re("categories")),o(ae("glasses")),o(le("ingredients"))},[o]);const c=$(P);c!=null&&c.form||o(F(R));const d=c.form,k=$(me),[g,h]=I.useState(),[s,w]=I.useState(),t=m=>{if(d.alcoholic==="Alcoholic")return!0;if(d.alcoholic==="Non alcoholic")return d.ingredients.filter(j=>j.alcohol==="Yes").length===0?(w(null),!0):(m&&D.Notify.failure("The drink is labeled non-alcoholic but contains alcohol"),w(!0),!1)},f=m=>d.alcoholic==="Non alcoholic"||d.ingredients.some(u=>u.alcohol==="Yes")?!0:(m&&D.Notify.failure("The drink is labeled as alcoholic, but it doesn't contain alcohol"),!1),b=(m,u)=>{if(!C())return D.Notify.failure("Duplicate ingredients are not allowed");if(!t(!0)||!f(!0))return;if(!g){const p={...d};p!=null&&p.form&&delete p.form;let y=[];p.ingredients.filter(z=>y.push({title:z.title,measure:z.measure})),delete p.ingredients,p.ingredients=y,Object.assign(p,{drinkThumb:"src/images/dummyDrinkThumb.png"}),l(p,m,u);return}const j=new FormData;j.append("cocktail",g),o(se(j)).then(p=>{if(typeof p.payload=="string"&&p.payload.startsWith("https://res.cloudinary.com")){const y={...d};y!=null&&y.form&&delete y.form;let T=[];y.ingredients.filter(S=>T.push({title:S.title,measure:S.measure})),delete y.ingredients,y.ingredients=T;const z={drinkThumb:p.payload};Object.assign(y,z),l(y,m,u)}else D.Notify.failure('Format "webp" not allowed. Try upload .jpeg or .png')}).catch(p=>{console.log(p)})};function x(m,u,j){const p={...d},y={[u]:m};Object.assign(p,y),j(u,m),o(F(p)),s&&t()}const l=(m,u,j)=>{o(de(m,u)).then(p=>{if(p.type==="drinks/addOwnDrink/fulfilled"){D.Notify.success("You added new cocktail!"),r("/my"),o(F(R)),j.resetForm({values:R});return}A(p.payload.message)})},A=m=>{m&&(m.includes("length must be at least")&&D.Notify.failure("All field must be at least 2 symbols long"),m.includes("duplicate")&&D.Notify.failure("Drink with that title already exist"))},C=()=>{const u=d.ingredients.flatMap(p=>p.title);return!(u.filter((p,y)=>u.indexOf(p)!==y).length>0)};return i.jsx(Le,{children:i.jsx(be,{initialValues:d,validationSchema:yi,validateOnChange:!1,validateOnBlur:!1,onSubmit:b,children:({setFieldValue:m,errors:u})=>i.jsxs(ke,{children:[i.jsx(ti,{setFile:h,onChangeHandler:x,setFieldValue:m,errors:u,theme:e}),i.jsx(fi,{onChangeHandler:x,setFieldValue:m,errors:u,wrongIngredients:s,theme:e}),i.jsx(ui,{onChangeHandler:x,setFieldValue:m,errors:u,theme:e}),i.jsx(He,{theme:e,type:"submit",disabled:k===!0,title:"Add",children:"Add"})]})})})},ki=()=>{const e=ie();I.useEffect(()=>{e(ce())},[e]);let o=$(fe);return i.jsx(Ae,{children:i.jsxs("div",{children:[i.jsx(ze,{children:"Popular drinks"}),i.jsx(Te,{children:o.map(r=>i.jsx(Se,{children:i.jsxs(Ie,{to:`/drink/${r._id}`,children:[i.jsx(Ce,{src:r.drinkThumb,alt:r.drink,onError:c=>{c.currentTarget.src=ne}}),i.jsxs(Ne,{children:[i.jsx(Ee,{children:r.drink}),i.jsx(Oe,{children:r.description})]})]})},r._id))})]})})},Ni=()=>{const e=$(pe);return i.jsxs(i.Fragment,{children:[i.jsx(we,{}),i.jsx(ve,{children:i.jsxs(Pe,{children:[i.jsx(De,{theme:e,title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),i.jsxs(qe,{children:[i.jsx(bi,{theme:e}),i.jsxs("div",{children:[i.jsxs(Fe,{children:[i.jsx(Re,{theme:e,children:"Follow Us"}),i.jsx(je,{})]}),i.jsx(ki,{})]})]})]})}),i.jsx($e,{})]})};export{Ni as default};
