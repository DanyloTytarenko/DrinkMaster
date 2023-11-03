import{n,u as y,v as _,r as W,j as e,w as G,x as M,y as H,z as J,A as $,B as q}from"./index-1badded8.js";import{S as D}from"./react-select.esm-c1be07be.js";import{s as K,a as Q,b as I,c as X}from"./selectors-7a8fcb39.js";import{c as R,a as b,e as Y,u as Z,F as V,f as ee}from"./index.esm-75b44977.js";import{H as ie,F as te}from"./Header-7ad04be5.js";import"./assertThisInitialized-a5971490.js";const ne=n.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-right: 20px;
  padding-left: 20px;
  background-image: linear-gradient(
    to top left,
    #000 45%,
    rgb(22, 31, 55),
    rgba(64, 112, 205, 0.5)
  );
`,oe=n.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,re=n.div`
  margin-bottom: 80px;
  width: 100%;
  max-width: 335px;
  @media only screen and (min-width: 768px) {
    max-width: 704px;
    @media only screen and (min-width: 1440px) {
      max-width: 833px;
    }
  }
`,ae=n.button`
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
`,se=n.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  column-gap: 32px;
  margin-bottom: 80px;
  @media only screen and (min-width: 768px) {
    @media only screen and (min-width: 1440px) {
      column-gap: 40px;
    }
  }
`,le=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`;n.img`
  width: 100%;
  height: auto;
`;const ce=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,de=n.label`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
  height: 80%;
  font-size: 20px;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`,pe=n.label`
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
`,O=n.input`
  display: none;
`,ge=n.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`,xe=n.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  // gap: 30px;
  letter-spacing: -0.02em;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 352px;
  }
`,F=n.input`
  padding-top: 30px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  text-transform: capitalize;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,S=n.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    // margin-bottom: 31px;
    height: 18px;
    font-size: 14px;
  }
`,L=n.div`
  background-color: inherit;
  color: #f3f3f3;
`,N=n.span`
  position: relative;
  display: flex;
  justify-content: space-between;
`,U=n.span`
  padding-top: 30px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`,he=n.div`
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
`,fe=n.div`
  margin-bottom: 20px;
  position: relative;
`,me=n.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(44 / 40);
  }
  letter-spacing: 0;
  color: #f3f3f3;
`,ue=n.textarea`
  padding: 16px 18px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 480px;
  }
  height: 184px;
  font-size: 17px;
  line-height: 1.59;
  letter-spacing: 0;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
  box-sizing: border-box;
`,be=n.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: rgba(243, 243, 243, 0.5);
`,ye=n.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
`,j=n.span`
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 10px;
  height: 10px;
  border: 1px solid #da1414;
  border-radius: 50%;
`,T=r=>Date.now()-new Date("01/11/2000").getTime()>1e3*31556926*18,je=({onChangeHandler:r,setFieldValue:c,errors:o})=>{const g=y(K),a=y(Q),t=y(I).form,x=y(_);console.log(x),T(x.birthday)===!1&&t.alcoholic==="Alcoholic"&&r("Non alcoholic","alcoholic");const[h,w]=W.useState(),f=i=>i.map(p=>({value:p,label:p})),l=i=>{console.log(i.target.files[0]);const p=[];p.push(i.target.files);const m=URL.createObjectURL(new Blob(p,{type:"application/zip"}));console.log(m.toString().split("blob:")[1]);const v=m.toString().split("blob:")[1];w(URL.createObjectURL(i.target.files[0])),c("drinkThumb",v),r(v,"drinkThumb")};return e.jsxs(se,{children:[e.jsx(le,{uri:h,style:{backgroundImage:`url(${h})`},children:h?e.jsxs(de,{children:["Change",e.jsx(O,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:i=>l(i)})]}):e.jsxs(ce,{children:[e.jsxs(pe,{children:["+",e.jsx(O,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:i=>l(i)})]}),e.jsx(ge,{children:"Add image"})]})}),e.jsxs("div",{children:[e.jsxs(xe,{children:[e.jsx(F,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:t.drink,onChange:i=>{c("drink",i.target.value),r(i.target.value,i.target.name)}}),e.jsxs(S,{children:[o.drink,o.drink&&e.jsx(j,{children:"!"})]}),e.jsx(F,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:t.description,onChange:i=>{c("description",i.target.value),r(i.target.value,i.target.name)}}),e.jsxs(S,{children:[o.description," ",o.description&&e.jsx(j,{children:"!"})]}),e.jsxs(L,{children:[e.jsxs(N,{children:[e.jsx(U,{children:"Category"}),e.jsx(D,{styles:{dropdownIndicator:(i,p)=>({...i,transform:p.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,p)=>({...i,background:"inherit",border:"none",fontSize:"14px",fontWeight:"regular",color:"#f3f3f3",position:"relative",top:20,cursor:"pointer"}),menu:i=>({...i,width:"131px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),option:(i,{isFocused:p,isSelected:m})=>({...i,fontSize:"14px",lineHeight:"1.33",background:"transparent",zIndex:1,color:p?"rgba(243, 243, 243, 0.75)":m?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"category",options:f(g),value:t.category===""?null:{value:t.category,label:t.category},defaultValue:f(g)[1],onChange:i=>{c("category",i.value),r(i.value,"category")}})]}),e.jsxs(S,{children:[o.category,o.category&&e.jsx(j,{children:"!"})]})]}),e.jsxs(L,{children:[e.jsxs(N,{children:[e.jsx(U,{children:"Glass"}),e.jsx(D,{styles:{dropdownIndicator:(i,p)=>({...i,transform:p.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,p)=>({...i,background:"inherit",border:"none",fontSize:"14px",fontWeight:"400",color:"#f3f3f3",position:"relative",top:20,cursor:"pointer"}),menu:i=>({...i,width:"131px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderRadius:"12px"}),indicatorSeparator:i=>({...i,display:"none"}),option:(i,{isFocused:p,isSelected:m})=>({...i,fontSize:"14px",lineHeight:"1.33",background:"transparent",color:p?"rgba(243, 243, 243, 0.75)":m?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"glass",options:f(a),value:t.glass===""?null:{value:t.glass,label:t.glass},defaultValue:f(a)[0],onChange:i=>{c("glass",i.value),r(i.value,"glass")}})]}),e.jsxs(S,{children:[o.glass,o.glass&&e.jsx(j,{children:"!"})]})]})]}),e.jsxs(he,{children:[e.jsxs("label",{style:{opacity:t.alcoholic==="Alcoholic"?"1":"0.5",cursor:"pointer"},children:[e.jsx(B,{type:"radio",value:"Alcoholic",name:"alcoholic",checked:t.alcoholic==="Alcoholic",onChange:i=>{c("alcoholic",i.target.value),r(i.target.value,"alcoholic")},disabled:!T(x.birthday)}),"Alcoholic"]}),e.jsxs("label",{style:{opacity:t.alcoholic==="Non alcoholic"?"1":"0.5",cursor:"pointer"},children:[e.jsx(B,{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:T(x.birthday)===!1||t.alcoholic==="Non alcoholic",onChange:i=>{c("alcoholic",i.target.value),r(i.target.value,"alcoholic")}}),"Non-alcoholic"]})]})]})]})},we=n.div`
  margin-bottom: 80px;
`,ve=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,ke=n.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,ze=n.div`
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
`,Se=n.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`,Ie=n.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 1);
`,Te=n.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`,De=n.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
  @media only screen and (min-width: 768px) {
    gap: 24px;
  }
`,Ae=n.div`
  position: relative;
  display: flex;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`,Ce=n.input`
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
`,Ee=n.button`
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
`,P=n.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 54px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
`,$e=({styles:r,name:c,options:o,value:g,onChangeIngredientHandler:a})=>e.jsx(D,{styles:r,name:c,options:o,value:g,onChange:d=>{a(d.value,"title",d.id)}}),qe=({chosenIngredients:r,ingredients:c,index:o,onChangeHandler:g,deleteIngredient:a,chosenIngredientSelect:d,errors:t,setFieldValue:x})=>{var f,l,i,p,m,v,A,C;const h=(s,u,z)=>{let k=[...r];const E=z?{[u]:s,_id:{$oid:z}}:{[u]:s};k[o]=k[o]?Object.assign({},k[o],E):E,g(k,"ingredients"),x("ingredients",k)},w={dropdownIndicator:(s,u)=>({...s,transform:u.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(s,u)=>({...s,width:"200px",height:"50px",background:"inherit",border:"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",fontWeight:"400",lineHeight:"calc(18 / 14)",cursor:"pointer","@media only screen and (min-width: 768px)":{...u["@media only screen and (min-width: 768px)"],width:"332px",height:"56px",fontSize:"17px",lineHeight:"1.56"}}),menu:s=>({...s,padding:"0px 12px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderColor:"red",borderRadius:"12px","@media only screen and (min-width: 768px)":{...s["@media only screen and (min-width: 768px)"],padding:"0px 18px"}}),indicatorSeparator:s=>({...s,display:"none"}),valueContainer:s=>({...s,padding:"0px 18px","@media only screen and (min-width: 768px)":{...s["@media only screen and (min-width: 768px)"],padding:"0px 24px"}}),singleValue:s=>({...s,color:"#f3f3f3"}),placeholder:s=>({...s,fontSize:t?"12px":"14px","@media only screen and (min-width: 768px)":{...s["@media only screen and (min-width: 768px)"],fontSize:"17px",lineHeight:"1.56"}}),option:(s,{isFocused:u,isSelected:z})=>({...s,fontSize:"14px","@media only screen and (min-width: 768px)":{...s["@media only screen and (min-width: 768px)"],fontSize:"17px"},lineHeight:"1.33",background:"transparent",color:u?"rgba(243, 243, 243, 0.75)":z?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})};return e.jsxs(Ae,{children:[e.jsx($e,{styles:w,name:"title",options:c,value:r[o].title===""?null:d,index:o,errors:t,onChangeIngredientHandler:h}),e.jsxs(P,{children:[((f=t==null?void 0:t.ingredients)==null?void 0:f.length)>0&&((l=t.ingredients[o])==null?void 0:l.title),((i=t==null?void 0:t.ingredients)==null?void 0:i.length)>0&&((p=t.ingredients[o])==null?void 0:p.title)&&e.jsx(j,{children:"!"})]}),e.jsxs("div",{children:[e.jsx(Ce,{type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:r[o].measure===""?"":r[o].measure,onChange:s=>{h(s.target.value,"measure")}}),e.jsxs(P,{children:[((m=t==null?void 0:t.ingredients)==null?void 0:m.length)>0&&((v=t.ingredients[o])==null?void 0:v.measure),((A=t==null?void 0:t.ingredients)==null?void 0:A.length)>0&&((C=t.ingredients[o])==null?void 0:C.measure)&&e.jsx(j,{children:"!"})]})]}),e.jsx(Ee,{type:"button",title:"Remove ungridient",onClick:()=>a(o),children:"+"})]})},Re=({onChangeHandler:r,setFieldValue:c,errors:o})=>{const a=y(I).form,t=y(X).filter(l=>a.alcoholic==="Alcoholic"?l.alcohol:l.alcohol==="No"),h=t.filter(l=>l.title).map(l=>({value:l.title,label:l.title,id:l._id})),w=()=>{if(a.ingredients.length>=t.length)return;const l=[...a.ingredients];l.push({title:"",measure:"",_id:{$oid:""}}),r(l,"ingredients"),c("ingredients",l)},f=l=>{if(a.ingredients.length!==1)if(l||l===0){const i=[...a.ingredients];i.splice(l,1),r(i,"ingredients")}else{const i=[...a.ingredients];i.pop(),c("ingredients",i),r(i,"ingredients")}};return e.jsxs(we,{children:[e.jsxs(ve,{children:[e.jsx(ke,{children:"Ingredients"}),e.jsxs(ze,{children:[e.jsx(Se,{type:"button",onClick:()=>f(),children:"---"}),e.jsx(Te,{children:a.ingredients.length}),e.jsx(Ie,{type:"button",onClick:()=>w(),children:"+"})]})]}),e.jsx(De,{children:a.ingredients.map((l,i)=>e.jsx("li",{children:e.jsx(qe,{chosenIngredients:a.ingredients,onChangeHandler:r,ingredients:h,deleteIngredient:f,index:i,chosenIngredientSelect:{value:a.ingredients[i].title,label:a.ingredients[i].title},errors:o,setFieldValue:c})},i))})]})},Oe=({onChangeHandler:r,setFieldValue:c,errors:o})=>{const g=y(I);console.log(g,"form");const a=g.form;return e.jsxs(fe,{children:[e.jsx(me,{children:"Recipe Preparation"}),a.instructions?e.jsx(be,{children:"Enter the recipe"}):e.jsxs(ye,{children:[o.instructions,o.instructions&&e.jsx(j,{children:"!"})]}),e.jsx(ue,{name:"instructions",placeholder:"Enter the recipe",rows:6,value:a.instructions,onChange:d=>{c("instructions",d.target.value),r(d.target.value,d.target.name)}})]})},Fe=R({drink:b().trim().required("This field is required"),description:b().required("This field is required"),category:b().required("This field is required"),glass:b().required("This field is required"),alcoholic:b().required("This field is required"),ingredients:Y().min(1,"Must be at least one ingredient").of(R({title:b().required("This field is required"),measure:b().required("This field is required")})),instructions:b().required("This field is required")}),Le=()=>{const r=Z();W.useEffect(()=>{r(G("categories")),r(M("glasses")),r(H("ingredients"))},[r]);const o=y(I).form,g=(d,t)=>{console.log(o),console.log(d),r(J(o)),r($(q)),t.resetForm({values:q})},a=(d,t)=>{const x={...o},h={[t]:d};Object.assign(x,h),r($(x))};return e.jsx(re,{children:e.jsx(V,{initialValues:o,validationSchema:Fe,validateOnChange:!1,validateOnBlur:!1,onSubmit:g,children:({setFieldValue:d,errors:t,values:x,resetForm:h})=>e.jsxs(ee,{children:[e.jsx(je,{onChangeHandler:a,setFieldValue:d,errors:t}),e.jsx(Re,{onChangeHandler:a,setFieldValue:d,errors:t}),e.jsx("p",{children:console.log(t)}),e.jsx(Oe,{onChangeHandler:a,setFieldValue:d,errors:t}),e.jsx(ae,{type:"submit",title:"Add",children:"Add"})]})})})},Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(ie,{}),e.jsxs(ne,{children:[e.jsx(oe,{children:"AddDrinkPage"}),e.jsx(Le,{})]}),e.jsx(te,{})]});export{Ge as default};
