import{s as a,c as t,L as E,k as s,m as k,j as r,r as l,u as $,q as b,t as y,v as u,w,x as P,y as F,z as Q,p as T}from"./index-646d2af3.js";import{d as N}from"./defolt-8-6ec9d6b1.js";import{s as D,N as A,a as _,b as v,c as O,d as W,e as R,P as q}from"./Paginator-a4d2c815.js";import{S as B}from"./react-select.esm-da37de0f.js";import{u as C}from"./useMediaQuery-4a14d224.js";import{H,F as Z}from"./Header-c9fca309.js";import{P as G}from"./PageTitle-152e623c.js";import{M as J}from"./MainAppContainer-707e2b36.js";import"./ButtonBase-b56f5d19.js";import"./assertThisInitialized-120be81d.js";import"./getThemeProps-a8afb496.js";import"./useTheme-16730ee7.js";import"./index.esm-8db04231.js";const K=a.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
`,U=a.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,V=a.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,X=a.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,Y=a.p`
  margin: 0;
  /* color: ${t.light}; //#f3f3f3 */
  color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,ee=a(E)`
  /* color: rgba(243, 243, 243, 0.5); */
  color: ${({theme:e})=>e==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.5)"};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    /* color: ${t.light}; //#f3f3f3; */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,te=()=>{const{drinks:e}=s(D),o=s(k);return(e==null?void 0:e.length)!==0?r.jsx(K,{children:e==null?void 0:e.map(c=>r.jsxs(U,{children:[r.jsx(V,{src:c.drinkThumb,alt:c.drink,onError:p=>{p.currentTarget.src=N}}),r.jsxs(X,{children:[r.jsx(Y,{theme:o,children:c.drink}),r.jsx(ee,{theme:o,to:`/drink/${c._id}`,children:"See more"})]})]},c._id))}):r.jsx(A,{message:"No cocktails found for your request"})},re=e=>l.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),oe=a.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,ie=a.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8px;
    justify-content: start;
  }
`,ne=a.label`
  position: relative;
  display: inline-block;
`,ae=a.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  /* border: 1px solid rgba(243, 243, 243, 0.2); */
  border: ${({theme:e})=>e==="dark"?"1px solid rgba(243, 243, 243, 0.2)":"1px solid rgba(10, 10, 17, 0.20)"};
  /* color: ${t.light}; //#f3f3f3 */
  color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    /* color: ${t.light}; //#f3f3f3 */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
    opacity: 1;
  }

  &:hover,
  &:focus {
    /* border-color: rgba(243, 243, 243, 0.5); */
    border-color: ${({theme:e})=>e==="dark"?"rgba(243, 243, 243, 0.5)":"rgba(10, 10, 17, 0.50)"};
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,se=a.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    border: none;
    padding: 0;
    background-color: transparent;

    top: 18px;
    right: 24px;
    cursor: pointer;
  }
`,ce=a(re)`
  display: block;
  /* stroke: ${t.light}; //#f3f3f3 */
  stroke: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
`,S=a(B)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background-color: ${t.secondaryDark}; //#161f37
    /* background-color: ${({theme:e})=>e==="dark"?t.secondaryDark:t.secondaryDark}; */
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* color: ${t.light}; //#f3f3f3 */
    color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      /* width: 199px; по макету*/
      width: 229px;
      height: 56px;
      padding: 14px 24px 15px 24px;
      font-size: 17px;
      line-height: 1.56;
    }
  }

  .react-select__placeholder {
    color: ${t.light}; //#f3f3f3
    font-size: 14px;
    font-family: Manrope;
    font-weight: 400;
    line-height: 1.29;
    @media (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
  .react-select__input-container {
    margin: 0;
    padding: 0;
    color: ${t.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${t.light}; //#f3f3f3
    padding: 0;
    position: absolute;

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    /* background-color:${t.secondaryDark}; //#161f37; */
    background-color: ${({theme:e})=>e==="dark"?t.secondaryDark:t.white};
    padding: 14px 8px 14px 8px;
    margin-top: 4px;
    width: 335px;
    max-height: 360px;
    border-radius: 20px;
    @media (min-width: 768px) {
      /* width: 199px; //по макету*/
      width: 225px;
    }
  }

  .react-select__single-value {
    color: ${t.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    /* background-color: ${t.light}; //#f3f3f3 */
    background-color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      /* background-color: ${t.gray}; //#434d67; */
      background-color: ${({theme:e})=>e==="dark"?t.gray:t.light};
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      /* background-color: ${t.gray}; //#434d67; */
      background-color: ${({theme:e})=>e==="dark"?t.gray:t.light};
      border-radius: 20px;
    }
  }

  .react-select__option {
    background-color: transparent;
    text-overflow: ellipsis;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      /* color: ${t.light}; //#f3f3f3 */
      color: ${({theme:e})=>e==="dark"?t.light:t.primaryDark};
      cursor: pointer;
    }
  }
`,j={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.light:"rgba(243, 243, 243, 0.4)"})},de={dropdownIndicator:(e,o)=>({...e,transform:o.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(e,o)=>({...e,color:o.isSelected||o.isFocused?t.primaryDark:"rgba(10, 10, 17, 0.4)"})},le=()=>{const[e,o]=l.useState(""),c=s(_),p=s(v),d=s(k),x=c.length!==0?["All categories",...c]:[],m=p.length!==0?[{title:"All ingredients"},...p]:[],i=$(),f=C("(max-width:767px)");l.useEffect(()=>{f&&i(b(e))},[i,f,e]);const g=(n,h="")=>{switch(n){case"searchQuery":o(h),i(u(1));break;case"category":if(h==="All categories"){i(w(""));return}i(w(h)),i(u(1));break;case"ingredient":if(h==="All ingredients"){i(y(""));return}i(y(h)),i(u(1));break}},I=n=>{g("searchQuery",n.target.value.trim())},L=n=>{g("category",n.value)},z=n=>{g("ingredient",n.value)},M=n=>{n.preventDefault(),i(b(e))};return r.jsx(oe,{children:r.jsxs(ie,{onSubmit:M,children:[r.jsxs(ne,{children:[r.jsx(ae,{type:"text",placeholder:"Enter the text",onChange:I,theme:d}),r.jsx(se,{type:"submit",children:r.jsx(ce,{theme:d})})]}),r.jsx(S,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:d==="dark"?j:de,theme:d,noOptionsMessage:()=>"No categories",options:x.map(n=>({label:n,value:n})),onChange:L}),r.jsx(S,{name:"ingredient",styles:j,theme:d,placeholder:"Ingredients",classNamePrefix:"react-select",noOptionsMessage:()=>"No ingredients",options:m.map(n=>({label:n.title,value:n.title})),onChange:z})]})})},pe=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    /* padding-left: 32px;
    padding-right: 32px; */
    padding-top: 140px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    /* padding-left: 100px;
    padding-right: 100px; */
    padding-top: 160px;
    max-width: 1440px;
  }
`,De=()=>{const e=s(_),o=s(v),c=s(D),p=s(O),d=s(W),x=s(R),m=s(k),i=$(),g=C("(min-width:769px)")?9:10;return l.useEffect(()=>{e.length||i(P())},[e,i]),l.useEffect(()=>{o.length||i(F())},[i,o]),l.useEffect(()=>{i(Q({searchQuery:d,page:p,limit:g}))},[i,g,p,d]),r.jsxs(r.Fragment,{children:[r.jsx(H,{}),r.jsx(J,{children:r.jsxs(pe,{children:[r.jsx(G,{title:"Drinks",theme:m}),r.jsx(le,{}),x?r.jsx(T,{}):r.jsxs(r.Fragment,{children:[r.jsx(te,{}),r.jsx(q,{totalItems:c.max_page,limit:g})]})]})}),r.jsx(Z,{})]})};export{De as default};
