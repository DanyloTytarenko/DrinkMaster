import{n,j as e,u as f,w as G,r as k,x as _,y as J,z as K,A as Q,B as X,C,D as Y,E as P,F as Z}from"./index-13341ded.js";import{s as V,a as ee,b as D,c as ie,d as ne,e as te}from"./selectors-3ec32ffc.js";import{S as oe}from"./react-select.esm-c786d810.js";import{c as $,a as b,e as re,u as B,F as ae,f as se}from"./index.esm-44a95f77.js";import{H as le,a as de,F as ce}from"./Header-83706755.js";import{P as pe}from"./PageTitle-72531680.js";import{P as xe,a as he,L as ge,b as me,D as fe,c as ue,d as be,e as ye,f as we}from"./PopularDrinks.styled-e55044df.js";import"./assertThisInitialized-6d02add4.js";const je=n.div`
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
`,ve=n.div`
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
`,ke=n.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,De=n.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,ze=n.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,Te=n.button`
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
`,Ie=n.div`
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
`,Se=n.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
  background-image: ${({uri:t})=>t?`url(${t})`:"none"};
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`,Ae=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,Ce=n.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,O=n.label`
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
`,Pe=n.label`
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
`,F=n.input`
  display: none;
`,$e=n.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`,Oe=n.div`
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
`,q=n.div``,E=n.input`
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
`,v=n.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    height: 18px;
    font-size: 14px;
  }
`,L=n.div`
  background-color: inherit;
  color: #f3f3f3;
`,R=n.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,U=n.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Fe=n.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,qe=n.label`
  opacity: ${({isAlcoholic:t})=>t==="Alcoholic"?"1":"0.5"};
  cursor: pointer;
`,Ee=n.label`
  opacity: ${({isAlcoholic:t})=>t==="Non alcoholic"?"1":"0.5"};
  cursor: pointer;
`,W=n.input`
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
`,Le=n.div`
  margin-bottom: 20px;
  position: relative;
`,Re=n.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`,Ue=n.div`
  position: relative;
`,We=n.textarea`
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
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding: 14px 24px;
    width: 480px;
    font-size: 17px;
    line-height: 1.56;
  }
`,Ne=n.span`
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
`,Be=n.p`
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
`,y=n.span`
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
`,T=t=>Date.now()-new Date(t).getTime()>1e3*31556926*18,I=({name:t,options:c,value:r,onChangeIngredientHandler:p,setFieldValue:l})=>{const g={dropdownIndicator:(i,s)=>({...i,transform:s.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,{isFocused:s})=>({...i,background:"inherit",border:s?"0.5px solid #4070cd50":"none",borderRadius:"20px",fontSize:"14px",boxShadow:"none",cursor:"pointer"}),menu:i=>({...i,width:"131px",right:"0px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"4px",width:"139px","@media only screen and (min-width: 1440px)":{...i["@media only screen and (min-width: 1440px)"],width:"154px",right:"-23px"}},backgroundColor:"#161f37",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),singleValue:i=>({...i,color:"#f3f3f3"}),option:(i,{isFocused:s,isSelected:h})=>({...i,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 1440px)":{...i["@media only screen and (min-width: 1440px)"],fontSize:"14px",lineHeight:"calc(18 / 14)"},color:s?"rgba(243, 243, 243, 0.75)":h?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})},u={dropdownIndicator:(i,s)=>({...i,transform:s.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,s)=>({...i,width:"200px",height:"50px",background:"inherit",border:"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...s["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:i=>({...i,padding:"0px 12px",backgroundColor:"#161f37",borderRadius:"12px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:i=>({...i,display:"none"}),valueContainer:i=>({...i,padding:"0px 18px","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:i=>({...i,color:"#f3f3f3"}),placeholder:i=>({...i,"@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(i,{isFocused:s,isSelected:h})=>({...i,padding:"3px 0 3px 10px",fontSize:"12px",lineHeight:"calc(16 / 12)",background:"transparent","@media only screen and (min-width: 768px)":{...i["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"},color:s?"rgba(243, 243, 243, 0.75)":h?"#f3f3f3":"rgba(243, 243, 243, 0.4)",cursor:"pointer"})};return e.jsx(oe,{styles:t==="title"?u:g,name:t,options:c,value:r,onChange:i=>{p(i.value,t,l)}})},H="/DrinkMaster/assets/dummyDrinkThumb-2c11fe96.png",He=({setFile:t,onChangeHandler:c,setFieldValue:r,errors:p})=>{const l=f(V),g=f(ee),i=f(D).form,s=f(G);T(s.birthday)===!1&&i.alcoholic==="Alcoholic"&&c("Non alcoholic","alcoholic",r);const[h,x]=k.useState(),a=o=>o.map(m=>({value:m,label:m})),d=o=>{if(!o.target.files[0].type.startsWith("image/")){console.log("Please, upload image-type file, e.g. '.jpeg', '.png'");return}t(o.target.files[0]),x(URL.createObjectURL(o.target.files[0]))};return e.jsxs(Ie,{children:[e.jsx(Se,{uri:h,children:h?e.jsxs(Ce,{children:[e.jsx(O,{onClick:()=>{t(),x(H)},children:"Without image"}),e.jsxs(O,{children:["Change",e.jsx(F,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:o=>d(o)})]})]}):e.jsxs(Ae,{children:[e.jsxs(Pe,{children:["+",e.jsx(F,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:o=>d(o)})]}),e.jsx($e,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(Oe,{children:[e.jsxs(q,{children:[e.jsx(E,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:i.drink,onChange:o=>{c(o.target.value,o.target.name,r)}}),e.jsxs(v,{children:[p.drink,p.drink&&e.jsx(y,{children:"!"})]})]}),e.jsxs(q,{children:[e.jsx(E,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:i.description,onChange:o=>{c(o.target.value,o.target.name,r)}}),e.jsxs(v,{children:[p.description,p.description&&e.jsx(y,{children:"!"})]})]}),e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsx(U,{children:"Category"}),e.jsx(I,{name:"category",options:a(l),value:i.category===""?null:{value:i.category,label:i.category},onChangeIngredientHandler:c,setFieldValue:r})]}),e.jsxs(v,{children:[p.category,p.category&&e.jsx(y,{children:"!"})]})]}),e.jsxs(L,{children:[e.jsxs(R,{children:[e.jsx(U,{children:"Glass"}),e.jsx(I,{name:"glass",options:a(g),value:i.glass===""?null:{value:i.glass,label:i.glass},onChangeIngredientHandler:c,setFieldValue:r})]}),e.jsxs(v,{children:[p.glass,p.glass&&e.jsx(y,{children:"!"})]})]})]}),e.jsxs(Fe,{children:[e.jsxs(qe,{isAlcoholic:i.alcoholic,children:[e.jsx(W,{type:"radio",value:"Alcoholic",name:"alcoholic",checked:i.alcoholic==="Alcoholic",onChange:o=>{c(o.target.value,"alcoholic",r)},disabled:!T(s.birthday)}),"Alcoholic"]}),e.jsxs(Ee,{isAlcoholic:i.alcoholic,children:[e.jsx(W,{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:T(s.birthday)===!1||i.alcoholic==="Non alcoholic",onChange:o=>{c(o.target.value,"alcoholic",r)}}),"Non-alcoholic"]})]})]})]})},Me=n.div`
  margin-bottom: 80px;
`,Ge=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,_e=n.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,Je=n.div`
  padding: 0px 12px;
  height: 38px;
  display: flex;
  gap: 12px;
  line-height: calc(18 / 14);
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  @media only screen and (min-width: 768px) {
    height: 44px;
    padding: 0px 10px;
    gap: 18px;
  }
`,Ke=n.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`,Qe=n.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
`,Xe=n.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,Ye=n.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,Ze=n.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,Ve=n.input`
  padding: 0 18px;
  height: 50px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
  box-sizing: border-box;
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    width: 150px;
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
`,ei=n.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border: none;
  background-color: inherit;
  color: #f3f3f3;
  transform: rotate(45deg);
  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }
`,N=n.p`
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 54px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  @media only screen and (min-width: 768px) {
    top: 64px;
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,ii=({chosenIngredients:t,ingredients:c,index:r,onChangeHandler:p,setFieldValue:l,deleteIngredient:g,chosenIngredientSelect:u,errors:i})=>{var h,x,a,d,o,m,w,S;const s=(z,M)=>{let j=[...t];const A={[M]:z};j[r]=j[r]?Object.assign({},j[r],A):A,p(j,"ingredients",l)};return e.jsxs(Ze,{children:[e.jsx(I,{name:"title",options:c,value:t[r].title===""?null:u,onChangeIngredientHandler:s,setFieldValue:l}),e.jsxs(N,{children:[((h=i==null?void 0:i.ingredients)==null?void 0:h.length)>0&&((x=i.ingredients[r])==null?void 0:x.title),((a=i==null?void 0:i.ingredients)==null?void 0:a.length)>0&&((d=i.ingredients[r])==null?void 0:d.title)&&e.jsx(y,{children:"!"})]}),e.jsxs("div",{children:[e.jsx(Ve,{type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:t[r].measure===""?"":t[r].measure,onChange:z=>{s(z.target.value,"measure")}}),e.jsxs(N,{children:[((o=i==null?void 0:i.ingredients)==null?void 0:o.length)>0&&((m=i.ingredients[r])==null?void 0:m.measure),((w=i==null?void 0:i.ingredients)==null?void 0:w.length)>0&&((S=i.ingredients[r])==null?void 0:S.measure)&&e.jsx(y,{children:"!"})]})]}),e.jsx(ei,{type:"button",title:"Remove ungridient",onClick:()=>g(r),children:"+"})]})},ni=({onChangeHandler:t,setFieldValue:c,errors:r})=>{const l=f(D).form,u=f(ie).filter(a=>l.alcoholic==="Alcoholic"?a.alcohol:a.alcohol==="No"),s=u.filter(a=>a.title).map(a=>({value:a.title,label:a.title})),h=()=>{if(l.ingredients.length>=u.length)return;const a=[...l.ingredients];a.push({title:"",measure:""}),t(a,"ingredients",c)},x=a=>{if(l.ingredients.length!==1)if(a||a===0){const d=[...l.ingredients];d.splice(a,1),t(d,"ingredients",c)}else{const d=[...l.ingredients];d.pop(),t(d,"ingredients",c)}};return e.jsxs(Me,{children:[e.jsxs(Ge,{children:[e.jsx(_e,{children:"Ingredients"}),e.jsxs(Je,{children:[e.jsx(Ke,{type:"button",onClick:()=>x(),children:"---"}),e.jsx(Xe,{children:l.ingredients.length}),e.jsx(Qe,{type:"button",onClick:()=>h(),children:"+"})]})]}),e.jsx(Ye,{children:l.ingredients.map((a,d)=>e.jsx("li",{children:e.jsx(ii,{chosenIngredients:l.ingredients,onChangeHandler:t,setFieldValue:c,ingredients:s,deleteIngredient:x,index:d,chosenIngredientSelect:{value:l.ingredients[d].title,label:l.ingredients[d].title},errors:r})},d))})]})},ti=({onChangeHandler:t,setFieldValue:c,errors:r})=>{const l=f(D).form;return e.jsxs(Le,{children:[e.jsx(Re,{children:"Recipe Preparation"}),e.jsx(Ue,{}),l.instructions?e.jsx(Ne,{children:"Enter the recipe"}):e.jsxs(Be,{children:[r.instructions,r.instructions&&e.jsx(y,{children:"!"})]}),e.jsx(We,{name:"instructions",placeholder:"Enter the recipe",rows:6,value:l.instructions,onChange:g=>{t(g.target.value,g.target.name,c)}})]})},oi=$({drink:b().trim().required("This field is required"),description:b().required("This field is required"),category:b().required("This field is required"),glass:b().required("This field is required"),alcoholic:b().required("This field is required"),ingredients:re().of($({title:b().required("This field is required"),measure:b().required("This field is required")})),instructions:b().required("This field is required")}),ri=()=>{const t=B();let c=_();k.useEffect(()=>{t(J("categories")),t(K("glasses")),t(Q("ingredients"))},[t]);const p=f(D).form,l=f(ne),[g,u]=k.useState(),i=(x,a)=>{if(!g){const o={...p};Object.assign(o,{drinkThumb:"src/images/dummyDrinkThumb.png"}),h(o,x,a);return}const d=new FormData;d.append("cocktail",g),t(X(d)).then(o=>{if(console.log(o,"from backend"),typeof o.payload=="string"&&o.payload.startsWith("https://res.cloudinary.com")){const m={...p},w={drinkThumb:o.payload};Object.assign(m,w),h(m,x,a)}else console.log("Something get wront. Please, try upload image-type file, e.g. '.jpeg', '.png'");console.log(o.payload.message)})};function s(x,a,d){const o={...p},m={[a]:x};Object.assign(o,m),d(a,x),t(C(o))}const h=(x,a,d)=>{t(Y(x,a)).then(o=>{if(o.payload.message==="drink added"){c("/my"),t(C(P)),d.resetForm({values:P});return}console.log(o.payload.message)})};return e.jsx(ze,{children:e.jsx(ae,{initialValues:p,validationSchema:oi,validateOnChange:!1,validateOnBlur:!1,onSubmit:i,children:({setFieldValue:x,errors:a})=>e.jsxs(se,{children:[e.jsx(He,{setFile:u,onChangeHandler:s,setFieldValue:x,errors:a}),e.jsx(ni,{onChangeHandler:s,setFieldValue:x,errors:a}),e.jsx(ti,{onChangeHandler:s,setFieldValue:x,errors:a}),e.jsx(Te,{type:"submit",disabled:l===!0,title:"Add",children:"Add"})]})})})},ai=()=>{const t=B();k.useEffect(()=>{t(Z())},[t]);let c=f(te);return e.jsx(xe,{children:e.jsxs("div",{children:[e.jsx(he,{children:"Popular drinks"}),e.jsx(ge,{children:c.map(r=>e.jsx(me,{children:e.jsxs(fe,{to:`/drink/${r._id}`,children:[e.jsx(ue,{src:r.drinkThumb,alt:r.drink,onError:p=>{p.currentTarget.src=H}}),e.jsxs(be,{children:[e.jsx(ye,{children:r.drink}),e.jsx(we,{children:r.description})]})]})},r._id))})]})})},mi=()=>e.jsxs(e.Fragment,{children:[e.jsx(le,{}),e.jsxs(je,{children:[e.jsx(pe,{title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),e.jsxs(ve,{children:[e.jsx(ri,{}),e.jsxs("div",{children:[e.jsxs(ke,{children:[e.jsx(De,{children:"Follow Us"}),e.jsx(de,{})]}),e.jsx(ai,{})]})]})]}),e.jsx(ce,{})]});export{mi as default};
