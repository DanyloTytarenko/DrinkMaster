import{n,u as h,r as j,j as e,t as z,v as A,w as D,x as k,y as C}from"./index-21836d55.js";import{S as y}from"./react-select.esm-bf535a7e.js";import{s as $,a as R,b as m}from"./selectors-6ace5bbf.js";import{u as T,F as O,e as _}from"./index.esm-626fefcd.js";import{H as E,F as L}from"./Header-12b1000d.js";import"./assertThisInitialized-0aa154e7.js";const P=n.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  padding-top: 80px;
  padding-right: 20px;
  padding-left: 20px;
  background-image: linear-gradient(
    to top left,
    #000 45%,
    rgb(22, 31, 55),
    rgba(64, 112, 205, 0.5)
  );
`,W=n.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,B=n.div`
  margin-bottom: 80px;
`,N=n.button`
  padding: 14px 40px;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  border: 0 solid transparent;
  border-radius: 42px;
  background-color: #f3f3f3;
`,U=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 80px;
`,F=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
`;n.img`
  width: 100%;
  height: 100%;
`;const G=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`,Y=n.label`
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
`,q=n.input`
  display: none;
`,H=n.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`,M=n.div`
  display: flex;
  flex-direction: column;
  letter-spacing: -0.02em;
  gap: 30px;
  width: 100%;
`,w=n.input`
  padding-bottom: 14px;
  background-color: inherit;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  text-transform: capitalize;
`,S=n.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  background-color: inherit;
  color: #f3f3f3;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
`,I=n.span`
  font-size: 14px;
  font-weight: regular;
  line-height: auto;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
`,J=n.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
`,K=({isAlcoholic:c,setIsAlcoholic:d,onChangeHandler:a,setFieldValue:o})=>{const f=h($),u=h(R),s=h(m),[i,p]=j.useState();console.log(i);const r=t=>t.map(g=>({value:g,label:g})),l=t=>{d(t==="Alcoholic")},b=t=>{console.log(t.target.files);const g=[];g.push(t.target.files);const x=URL.createObjectURL(new Blob(g,{type:"application/zip"}));console.log(x.toString().split("blob:")[1]);const v=x.toString().split("blob:")[1];p(URL.createObjectURL(t.target.files[0])),o("drinkThumb",v),a(v,"drinkThumb")};return e.jsxs(U,{children:[e.jsx(F,{style:{backgroundImage:`url(${i})`},children:e.jsxs(G,{children:[e.jsxs(Y,{children:["+",e.jsx(q,{type:"file",id:"input",name:"drinkThumb",accept:"image/*",onChange:t=>b(t)})]}),e.jsx(H,{children:"Add image"})]})}),e.jsxs(M,{children:[e.jsx(w,{type:"text",name:"drink",placeholder:"Enter item title",title:"Enter item title",value:s.drink,onChange:t=>{o("drink",t.target.value),a(t.target.value,t.target.name)}}),e.jsx(w,{type:"text",name:"description",placeholder:"Enter about recipe",title:"Enter about recipe",value:s.description,onChange:t=>{o("description",t.target.value),a(t.target.value,t.target.name)}}),e.jsxs(S,{children:[e.jsx(I,{children:"Category"}),e.jsx(y,{styles:{dropdownIndicator:(t,g)=>({...t,transform:g.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,g)=>({...t,background:"inherit",border:"none",fontSize:"14px",fontWeight:"regular",color:"#f3f3f3"}),menu:t=>({...t,width:"233px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderColor:"red",borderRadius:"12px",padding:10}),indicatorSeparator:t=>({...t,display:"none"}),option:(t,{isFocused:g,isSelected:x})=>({...t,fontSize:"14px",lineHeight:"1.33",background:"transparent",zIndex:1,color:g?"rgba(243, 243, 243, 0.75)":x?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"category",options:r(f),value:s.category===""?null:{value:s.category,label:s.category},defaultValue:r(f)[1],onChange:t=>{o("category",t.value),a(t.value,"category")}})]}),e.jsxs(S,{children:[e.jsx(I,{children:"Glass"}),e.jsx(y,{styles:{dropdownIndicator:(t,g)=>({...t,transform:g.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(t,g)=>({...t,background:"inherit",border:"none",fontSize:"14px",fontWeight:"regular",color:"#f3f3f3"}),menu:t=>({...t,width:"133px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderColor:"red",borderRadius:"12px",padding:10}),indicatorSeparator:t=>({...t,display:"none"}),option:(t,{isFocused:g,isSelected:x})=>({...t,fontSize:"14px",lineHeight:"1.33",background:"transparent",color:g?"rgba(243, 243, 243, 0.75)":x?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"glass",options:r(u),value:s.glass===""?null:{value:s.glass,label:s.glass},defaultValue:r(u)[0],onChange:t=>{o("glass",t.value),a(t.value,"glass")}})]})]}),e.jsxs(J,{children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"Alcoholic",name:"alcoholic",checked:c===!0,onChange:t=>{o("alcoholic",t.target.value),l(t.target.value),a(t.target.value,"alcoholic")}}),"Alcoholic"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"Non alcoholic",name:"alcoholic",checked:c===!1,onChange:t=>{o("alcoholic",t.target.value),l(t.target.value),a(t.target.value,"alcoholic")}}),"Non-alcoholic"]})]})]})},Q=n.div`
  margin-bottom: 80px;
`,X=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,Z=n.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,V=n.div`
  padding: 10px 16px;
  display: flex;
  gap: 16px;
  line-height: calc(18 / 14);
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`,ee=n.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`,te=n.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`,re=n.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
`,ne=n.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
`,oe=n.div`
  display: flex;
  gap: 8px;
`,ie=n.input`
  padding: 16px 18px;
  width: 100px;
  background-color: inherit;
  font-weight: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`,ae=n.button`
  margin-left: auto;
  font-size: 28px;
  border: none;
  background-color: inherit;
  color: #f3f3f3;
  transform: rotate(45deg);
`,se=({chosenIngredients:c,ingredients:d,index:a,onChangeHandler:o,deleteIngredient:f,chosenIngredientSelect:u})=>{const s=(i,p,r)=>{let l=[...c];const b=r?{[p]:i,_id:r}:{[p]:i};l[a]=l[a]?Object.assign({},l[a],b):b,o(l,"ingredients")};return e.jsxs(oe,{style:{display:"flex",gap:"8px"},children:[e.jsx(y,{styles:{dropdownIndicator:(i,p)=>({...i,transform:p.selectProps.menuIsOpen&&"rotate(180deg)"}),control:(i,p)=>({...i,width:"200px",height:"50px",background:"inherit",border:"1px solid rgba(243, 243, 243, 0.5)",borderRadius:"200px",fontSize:"14px",fontWeight:"regular",color:"#f3f3f3"}),menu:i=>({...i,width:"133px",right:"0px",backgroundColor:"#161f37",border:"0px solid transparent",borderColor:"red",borderRadius:"12px",padding:10}),indicatorSeparator:i=>({...i,display:"none"}),option:(i,{isFocused:p,isSelected:r})=>({...i,fontSize:"14px",lineHeight:"1.33",background:"transparent",color:p?"rgba(243, 243, 243, 0.75)":r?"#f3f3f3":"rgba(243, 243, 243, 0.4)"})},name:"title",options:d,value:c[a].title===""?null:u,onChange:i=>{s(i.value,"title",i.id)}}),e.jsx(ie,{type:"text",name:"measure",placeholder:"1 cl",title:"measure",value:c[a].measure===""?"":c[a].measure,onChange:i=>{s(i.target.value,"measure")}}),e.jsx(ae,{type:"button",title:"Remove ungridient",onClick:()=>f(a),children:"+"})]})},le=[{_id:{$oid:"64aebb7f82d96cc69e0eb4a4"},title:"Light rum",alcohol:"Yes"},{_id:{$oid:"64aebb7f82d96cc69e0eb4a5"},title:"Applejack",alcohol:"Yes"},{_id:{$oid:"64aebb7f82d96cc69e0eb4a6"},title:"Gin",alcohol:"Yes"},{_id:{$oid:"64aebb7f82d96cc69e0eb4a7"},title:"Dark rum",alcohol:"Yes"},{_id:{$oid:"64f1d5c969d8333cf130fbec"},type:"fruity juice",alcohol:"No"},{_id:{$oid:"64f1d5ca69d8333cf130fbfa"},title:"Cinnamon",alcohol:"No"}],ce=({isAlcoholic:c,onChangeHandler:d,setFieldValue:a})=>{const o=h(m),f=le.filter(r=>c===!0?r.alcohol:r.alcohol==="No"),s=f.map(r=>(r.title===void 0&&(r.title=r.type),r)).map(r=>({value:r.title,label:r.title,id:r._id})),i=()=>{if(o.ingredients.length>=f.length)return;const r=[...o.ingredients];r.push({title:"",measure:"",_id:{$oid:""}}),d(r,"ingredients"),a("ingredients",r)},p=r=>{if(o.ingredients.length!==1)if(r||r===0){const l=[...o.ingredients];l.splice(r,1),d(l,"ingredients")}else{const l=[...o.ingredients];l.pop(),a("ingredients",l),d(l,"ingredients")}};return e.jsxs(Q,{children:[e.jsxs(X,{children:[e.jsx(Z,{children:"Ingredients"}),e.jsxs(V,{children:[e.jsx(ee,{type:"button",onClick:()=>p(),children:"--"}),e.jsx(re,{children:o.ingredients.length}),e.jsx(te,{type:"button",onClick:()=>i(),children:"+"})]})]}),e.jsx(ne,{children:o.ingredients.map((r,l)=>e.jsx("li",{children:e.jsx(se,{chosenIngredients:o.ingredients,onChangeHandler:d,ingredients:s,deleteIngredient:p,index:l,chosenIngredientSelect:{value:o.ingredients[l].title,label:o.ingredients[l].title}})},l))})]})},de=n.div`
  margin-bottom: 20px;
`,pe=n.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`,ge=n.textarea`
  padding: 16px 18px;
  width: 90%;
  text-transform: capitalize;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.5);
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
`,fe=({onChangeHandler:c,setFieldValue:d})=>{const a=h(m);return e.jsxs(de,{children:[e.jsx(pe,{children:"Recipe Preparation"}),e.jsx(ge,{name:"instructions",placeholder:"Enter the recipe",rows:7,required:!0,value:a.instructions,onChange:o=>{d("instructions",o.target.value),c(o.target.value,o.target.name)}})]})},ue=()=>{const c=T();j.useEffect(()=>{c(z("categories")),c(A("glasses")),c(D("ingredients"))},[c]);const d=h(m),[a,o]=j.useState(!0),f=(s,i)=>{console.log(d),console.log(s),c(k(C))},u=(s,i)=>{const p={...d},r={[i]:s};Object.assign(p,r),c(k(p))};return e.jsx(B,{children:e.jsx(O,{initialValues:d,onSubmit:f,children:({setFieldValue:s})=>e.jsxs(_,{children:[e.jsx(K,{isAlcoholic:a,setIsAlcoholic:o,onChangeHandler:u,setFieldValue:s}),e.jsx(ce,{isAlcoholic:a,onChangeHandler:u,setFieldValue:s}),e.jsx(fe,{onChangeHandler:u,setFieldValue:s}),e.jsx(N,{type:"submit",title:"Add",children:"Add"})]})})})},ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsxs(P,{children:[e.jsx(W,{children:"AddDrinkPage"}),e.jsx(ue,{}),e.jsx("div",{children:"Follow us"})]}),e.jsx(L,{})]});export{ve as default};
