import{n,u as b,v as G,r as S,j as e,w as H,x as _,y as J,z as K,A as Q,B as F,C as X,D as E,s as Y}from"./index-72197f4a.js";import{S as I}from"./react-select.esm-46c8d611.js";import{s as Z,a as V,b as D,c as ee,d as ie}from"./selectors-7a8fcb39.js";import{c as O,a as w,e as ne,u as te,F as oe,f as re}from"./index.esm-2d91678b.js";import{H as ae,a as se,F as le}from"./Header-6d50434c.js";import"./assertThisInitialized-27db5820.js";const de=n.div`
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
`,ce=n.div`
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
`,pe=n.div`
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`,ge=n.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  letter-spacing: 0;
  color: #f3f3f3;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,xe=n.div`
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,he=n.button`
  padding: 14px 40px;
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
    padding: 18px 44px;
  }
`,me=n.div`
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
`,fe=n.div`
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
`,ue=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,be=n.div`
  position: relative;
  top: 40%;
  display: flex;
  gap: 170px;
  align-items: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,q=n.label`
  width: 70px;
  text-align: center;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
  cursor: pointer;
`,ye=n.label`
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
`,R=n.input`
  display: none;
`,we=n.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`,je=n.div`
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
`,U=n.div``,W=n.input`
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,z=n.div`
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
`,P=n.div`
  background-color: inherit;
  color: #f3f3f3;
`,N=n.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L=n.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ve=n.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,B=n.input`
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
`,ke=n.div`
  margin-bottom: 20px;
  position: relative;
`,ze=n.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`,De=n.div`
  position: relative;
`,Te=n.textarea`
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
`,Se=n.span`
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
`,Ie=n.p`
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
`,k=n.span`
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
`,T=t=>Date.now()-new Date(t).getTime()>1e3*31556926*18,Ae="/DrinkMaster/assets/dummyDrinkThumb-2c11fe96.png",$e=({setFile:t,onChangeHandler:c,setFieldValue:r,errors:p})=>{const a=b(Z),m=b(V),h=b(D).form,f=b(G);T(f.birthday)===!1&&h.alcoholic==="Alcoholic"&&c("Non alcoholic","alcoholic");const[u,g]=S.useState(),o=i=>i.map(x=>({value:x,label:x})),s=i=>{if(!i.target.files[0].type.startsWith("image/")){console.log("Please, upload image-type file, e.g. '.jpeg', '.png'");return}t(i.target.files[0]),g(URL.createObjectURL(i.target.files[0]))};return e.jsxs(me,{children:[e.jsx(fe,{uri:u,children:u?e.jsxs(be,{children:[e.jsx(q,{onClick:()=>{t(),g(Ae)},children:"Without image"}),e.jsxs(q,{children:["Change",e.jsx(R,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:i=>s(i)})]})]}):e.jsxs(ue,{children:[e.jsxs(ye,{children:["+",e.jsx(R,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:i=>s(i)})]}),e.jsx(we,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(je,{children:[e.jsxs(U,{children:[e.jsx(W,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:h.drink,onChange:i=>{r("drink",i.target.value),c(i.target.value,i.target.name)}}),e.jsxs(z,{children:[p.drink,p.drink&&e.jsx(k,{children:"!"})]})]}),e.jsxs(U,{children:[e.jsx(W,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:h.description,onChange:i=>{r("description",i.target.value),c(i.target.value,i.target.name)}}),e.jsxs(z,{children:[p.description,p.description&&e.jsx(k,{children:"!"})]})]}),e.jsxs(P,{children:[e.jsxs(N,{children:[e.jsx(L,{children:"Category"}),e.jsx(I,{styles:{dropdownIndicator:(i,x)=>({...i,transform:x.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,x)=>({...i,background:"inherit",border:"none",fontSize:"14px",fontWeight:"regular",color:"#f3f3f3",cursor:"pointer"}),menu:i=>({...i,width:"131px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),option:(i,{isFocused:x,isSelected:y})=>({...i,fontSize:"14px",lineHeight:"1.33",background:"transparent",zIndex:1,color:x?"rgba(243, 243, 243, 0.75)":y?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"category",options:o(a),value:h.category===""?null:{value:h.category,label:h.category},defaultValue:o(a)[1],onChange:i=>{r("category",i.value),c(i.value,"category")}})]}),e.jsxs(z,{children:[p.category,p.category&&e.jsx(k,{children:"!"})]})]}),e.jsxs(P,{children:[e.jsxs(N,{children:[e.jsx(L,{children:"Glass"}),e.jsx(I,{styles:{dropdownIndicator:(i,x)=>({...i,transform:x.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,x)=>({...i,background:"inherit",border:"none",fontSize:"14px",fontWeight:"400",color:"#f3f3f3",cursor:"pointer"}),menu:i=>({...i,width:"131px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),option:(i,{isFocused:x,isSelected:y})=>({...i,fontSize:"14px",lineHeight:"1.33",background:"transparent",color:x?"rgba(243, 243, 243, 0.75)":y?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"glass",options:o(m),value:h.glass===""?null:{value:h.glass,label:h.glass},defaultValue:o(m)[0],onChange:i=>{r("glass",i.value),c(i.value,"glass")}})]}),e.jsxs(z,{children:[p.glass,p.glass&&e.jsx(k,{children:"!"})]})]})]}),e.jsxs(ve,{children:[e.jsxs("label",{style:{opacity:h.alcoholic==="Alcoholic"?"1":"0.5",cursor:"pointer"},children:[e.jsx(B,{type:"radio",value:"Alcoholic",name:"alcoholic",checked:h.alcoholic==="Alcoholic",onChange:i=>{r("alcoholic",i.target.value),c(i.target.value,"alcoholic")},disabled:!T(f.birthday)}),"Alcoholic"]}),e.jsxs("label",{style:{opacity:h.alcoholic==="Non alcoholic"?"1":"0.5",cursor:"pointer"},children:[e.jsx(B,{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:T(f.birthday)===!1||h.alcoholic==="Non alcoholic",onChange:i=>{r("alcoholic",i.target.value),c(i.target.value,"alcoholic")}}),"Non-alcoholic"]})]})]})]})},Ce=n.div`
  margin-bottom: 80px;
`,Fe=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Ee=n.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,Oe=n.div`
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
`,qe=n.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`,Re=n.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
`,Ue=n.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,We=n.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,Pe=n.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,Ne=n.input`
  padding-left: 18px;
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
`,Le=n.button`
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
`,M=n.p`
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
`,Be=({styles:t,name:c,options:r,value:p,onChangeIngredientHandler:a})=>e.jsx(I,{styles:t,name:c,options:r,value:p,onChange:m=>{a(m.value,"title",m.id)}}),Me=({chosenIngredients:t,ingredients:c,index:r,onChangeHandler:p,deleteIngredient:a,chosenIngredientSelect:m,errors:l,setFieldValue:h})=>{var g,o,s,i,x,y,A,$;const f=(d,j)=>{let v=[...t];const C={[j]:d};v[r]=v[r]?Object.assign({},v[r],C):C,p(v,"ingredients"),h("ingredients",v)},u={dropdownIndicator:(d,j)=>({...d,transform:j.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(d,j)=>({...d,width:"200px",height:"50px",background:"inherit",border:"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",fontWeight:"400",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...j["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:d=>({...d,padding:"0px 12px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderColor:"red",borderRadius:"12px","@media only screen and (min-width: 768px)":{...d["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:d=>({...d,display:"none"}),valueContainer:d=>({...d,padding:"0px 18px","@media only screen and (min-width: 768px)":{...d["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:d=>({...d,color:"#f3f3f3"}),placeholder:d=>({...d,fontSize:l?"12px":"14px","@media only screen and (min-width: 768px)":{...d["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(d,{isFocused:j,isSelected:v})=>({...d,fontSize:"14px","@media only screen and (min-width: 768px)":{...d["@media only screen and (min-width: 768px)"],fontSize:"17px"},lineHeight:"1.33",background:"transparent",color:j?"rgba(243, 243, 243, 0.75)":v?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})};return e.jsxs(Pe,{children:[e.jsx(Be,{styles:u,name:"title",options:c,value:t[r].title===""?null:m,index:r,errors:l,onChangeIngredientHandler:f}),e.jsxs(M,{children:[((g=l==null?void 0:l.ingredients)==null?void 0:g.length)>0&&((o=l.ingredients[r])==null?void 0:o.title),((s=l==null?void 0:l.ingredients)==null?void 0:s.length)>0&&((i=l.ingredients[r])==null?void 0:i.title)&&e.jsx(k,{children:"!"})]}),e.jsxs("div",{children:[e.jsx(Ne,{type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:t[r].measure===""?"":t[r].measure,onChange:d=>{f(d.target.value,"measure")}}),e.jsxs(M,{children:[((x=l==null?void 0:l.ingredients)==null?void 0:x.length)>0&&((y=l.ingredients[r])==null?void 0:y.measure),((A=l==null?void 0:l.ingredients)==null?void 0:A.length)>0&&(($=l.ingredients[r])==null?void 0:$.measure)&&e.jsx(k,{children:"!"})]})]}),e.jsx(Le,{type:"button",title:"Remove ungridient",onClick:()=>a(r),children:"+"})]})},Ge=({onChangeHandler:t,setFieldValue:c,errors:r})=>{const a=b(D).form,l=b(ee).filter(o=>a.alcoholic==="Alcoholic"?o.alcohol:o.alcohol==="No"),f=l.filter(o=>o.title).map(o=>({value:o.title,label:o.title})),u=()=>{if(a.ingredients.length>=l.length)return;const o=[...a.ingredients];o.push({title:"",measure:""}),t(o,"ingredients"),c("ingredients",o)},g=o=>{if(a.ingredients.length!==1)if(o||o===0){const s=[...a.ingredients];s.splice(o,1),t(s,"ingredients")}else{const s=[...a.ingredients];s.pop(),c("ingredients",s),t(s,"ingredients")}};return e.jsxs(Ce,{children:[e.jsxs(Fe,{children:[e.jsx(Ee,{children:"Ingredients"}),e.jsxs(Oe,{children:[e.jsx(qe,{type:"button",onClick:()=>g(),children:"---"}),e.jsx(Ue,{children:a.ingredients.length}),e.jsx(Re,{type:"button",onClick:()=>u(),children:"+"})]})]}),e.jsx(We,{children:a.ingredients.map((o,s)=>e.jsx("li",{children:e.jsx(Me,{chosenIngredients:a.ingredients,onChangeHandler:t,ingredients:f,deleteIngredient:g,index:s,chosenIngredientSelect:{value:a.ingredients[s].title,label:a.ingredients[s].title},errors:r,setFieldValue:c})},s))})]})},He=({onChangeHandler:t,setFieldValue:c,errors:r})=>{const a=b(D).form;return e.jsxs(ke,{children:[e.jsx(ze,{children:"Recipe Preparation"}),e.jsx(De,{}),a.instructions?e.jsx(Se,{children:"Enter the recipe"}):e.jsxs(Ie,{children:[r.instructions,r.instructions&&e.jsx(k,{children:"!"})]}),e.jsx(Te,{name:"instructions",placeholder:"Enter the recipe",rows:6,value:a.instructions,onChange:m=>{c("instructions",m.target.value),t(m.target.value,m.target.name)}})]})},_e=O({drink:w().trim().required("This field is required"),description:w().required("This field is required"),category:w().required("This field is required"),glass:w().required("This field is required"),alcoholic:w().required("This field is required"),ingredients:ne().of(O({title:w().required("This field is required"),measure:w().required("This field is required")})),instructions:w().required("This field is required")}),Je=()=>{const t=te();let c=H();S.useEffect(()=>{t(_("categories")),t(J("glasses")),t(K("ingredients"))},[t]);const p=b(D).form,a=b(ie),[m,l]=S.useState(),h=(g,o)=>{if(!m){const i={...p};Object.assign(i,{drinkThumb:"src/images/dummyDrinkThumb.png"}),u(i,g,o);return}const s=new FormData;s.append("cocktail",m),t(Q(s)).then(i=>{if(typeof i.payload=="string"&&i.payload.startsWith("https://res.cloudinary.com")){const x={...p},y={drinkThumb:i.payload};Object.assign(x,y),u(x,g,o)}else console.log("Something get wront. Please, try upload image-type file, e.g. '.jpeg', '.png'");console.log(i.payload.message)})},f=(g,o)=>{const s={...p},i={[o]:g};Object.assign(s,i),t(F(s))},u=(g,o,s)=>{t(X(g,o)).then(i=>{if(i.payload.message==="drink added"){c("/my"),t(F(E)),s.resetForm({values:E});return}console.log(i.payload.message)})};return e.jsx(xe,{children:e.jsx(oe,{initialValues:p,validationSchema:_e,validateOnChange:!1,validateOnBlur:!1,onSubmit:h,children:({setFieldValue:g,errors:o})=>e.jsxs(re,{children:[e.jsx($e,{setFile:l,onChangeHandler:f,setFieldValue:g,errors:o}),e.jsx(Ge,{onChangeHandler:f,setFieldValue:g,errors:o}),e.jsx(He,{onChangeHandler:f,setFieldValue:g,errors:o}),e.jsx(he,{type:"submit",disabled:a===!0,title:"Add",children:"Add"})]})})})},Ke=Y.h1`
  margin-right: auto;
  margin-bottom: ${({$marginM:t})=>t};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  color: ${({theme:t})=>t==="light"?"#0A0A11":"#F3F3F3"};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({$marginT:t})=>t};
    font-size: 56px;
    line-height: calc(60 / 56);
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({$marginD:t})=>t};
    font-size: 64px;
    line-height: calc(68 / 64);
  }
`,Qe=({title:t,theme:c,marginMobile:r,marginTablet:p,marginDesktop:a})=>e.jsx(Ke,{theme:c,$marginM:r,$marginT:p,$marginD:a,children:t}),ni=()=>e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsxs(de,{children:[e.jsx(Qe,{title:"Add drink",marginMobile:"40px",marginTablet:"60px",marginDesktop:"60px"}),e.jsxs(ce,{children:[e.jsx(Je,{}),e.jsxs(pe,{children:[e.jsx(ge,{children:"Follow Us"}),e.jsx(se,{})]})]})]}),e.jsx(le,{})]});export{ni as default};
