import{s as o,L as $,u as s,j as t,r as c,h as f,i as C,k as g,m as z,o as I,p as L,q as E}from"./index-eb0a7a3e.js";import{c as i,H as M,F as Q}from"./Header-f9a8ce3c.js";import{S as T}from"./react-select.esm-a5423147.js";import{u as b}from"./useMediaQuery-71f77e5b.js";import{u as w}from"./index.esm-9a465510.js";import"./assertThisInitialized-0e3050a7.js";import"./getThemeProps-914cf994.js";const F="/DrinkMaster/assets/drink-image-fca35edf.jpg",P=e=>e.drinks.searchQuery,k=e=>e.drinks.categories,y=e=>e.drinks.ingredients,R=e=>e.drinks.page,S=e=>e.drinks.searchResults,W=o.ul`
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
`,B=o.li`
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`,H=o.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,N=o.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,q=o.p`
  margin: 0;
  color: ${i.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.34;
  }
`,A=o($)`
  /* text-decoration: none; */
  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  transition: color 250ms ease;

  &:hover {
    color: ${i.light}; //#f3f3f3;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,Z=()=>{const{drinks:e}=s(S);return console.log("searchResults :>> ",e),t.jsx(W,{children:e==null?void 0:e.map(a=>t.jsxs(B,{children:[t.jsx(H,{src:a.drinkThumb,alt:a.drink,onError:d=>{d.currentTarget.src=F}}),t.jsxs(N,{children:[t.jsx(q,{children:a.drink}),t.jsx(A,{to:`/drink/${a._id}`,children:"See more"})]})]},a._id))})},G=e=>c.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},c.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),J=o.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,K=o.form`
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
`,O=o.label`
  position: relative;
  display: inline-block;
`,U=o.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  /* opacity: 0.8; */
  color: ${i.light}; //#f3f3f3
  /* text-align: center; */
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    color: ${i.light}; //#f3f3f3
    opacity: 1;
  }

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.5);
  }

  @media (min-width: 768px) {
    /* width: 264px; по макету*/
    width: 230px;
    height: 56px;
    padding: 14px 25px 15px 24px;
    font-size: 17px;
    line-height: 1.56;
  }
`,V=o.button`
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
`,X=o(G)`
  display: block;
  stroke: ${i.light}; //#f3f3f3
`,m=o(T)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    /* cursor: pointer; */
    color: ${i.light}; //#f3f3f3
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
    color: ${i.light}; //#f3f3f3
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
    color: ${i.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${i.light}; //#f3f3f3
    padding: 0;
    position: absolute;
    /* transform: rotate(180deg); */

    right: 17px;
    cursor: pointer;

    @media (min-width: 768px) {
      right: 24px;
    }
  }

  .react-select-container {
  }
  .react-select__value-container {
    padding: 0;
  }

  .react-select__menu {
    background: #161f37;
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
    color: ${i.light}; //#f3f3f3
    &:focus-within {
      color: brown;
    }
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${i.light}; //#f3f3f3
  }

  .react-select__option--is-selected {
    color: ${i.light}; //#f3f3f3
  }

  .react-select__menu-list {
    color: ${i.light}; //#f3f3f3
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${i.gray}; //#434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${i.gray}; //#434d67;
      border-radius: 20px;
    }
  }

  .react-select__option--custom-selected {
    color: red;
  }

  .react-select__option {
    color: rgba(243, 243, 243, 0.4);
    background-color: transparent;
    transition:
      color 250ms ease,
      background-color 250ms ease;

    &:focus,
    &:active,
    &:hover {
      color: ${i.light}; //#f3f3f3
      background-color: transparent;
    }
  }
`,u={dropdownIndicator:(e,a)=>({...e,transform:a.isFocused?"rotate(180deg)":"rotate(0deg)"})},Y=()=>{const[e,a]=c.useState(""),d=s(k),l=s(y),n=w(),h=b("(max-width:767px)");c.useEffect(()=>{h&&n(f(e))},[n,h,e]);const p=(r,x="")=>{switch(r){case"searchQuery":a(x),n(g(1));break;case"category":n(z(x)),n(g(1));break;case"ingredient":n(C(x)),n(g(1));break}},j=r=>{p("searchQuery",r.target.value.trim())},_=r=>{p("category",r.value)},D=r=>{p("ingredient",r.value)},v=r=>{r.preventDefault(),n(f(e))};return t.jsx(J,{children:t.jsxs(K,{onSubmit:v,children:[t.jsxs(O,{children:[t.jsx(U,{type:"text",placeholder:"Enter the text",onChange:j}),t.jsx(V,{type:"submit",children:t.jsx(X,{})})]}),t.jsx(m,{name:"category",placeholder:"All categories",classNamePrefix:"react-select",styles:u,options:d.map(r=>({label:r,value:r})),onChange:_}),t.jsx(m,{name:"ingredient",styles:u,placeholder:"Ingredients",classNamePrefix:"react-select",options:l.map(r=>({label:r.title,value:r.title})),onChange:D})]})})},ee=o.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,te=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #0a0a11; */
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 160px;
    max-width: 1440px;
  }
`,de=()=>{const e=s(k),a=s(y);s(S);const d=s(R),l=s(P),n=w(),p=b("(min-width:769px)")?9:10;return c.useEffect(()=>{e.length||n(I())},[e,n]),c.useEffect(()=>{a.length||n(L())},[n,a]),c.useEffect(()=>{n(E({searchQuery:l,page:d,limit:p}))},[n,p,d,l]),t.jsxs(t.Fragment,{children:[t.jsx(M,{}),t.jsxs(te,{children:[t.jsx(ee,{children:"DrinksPage"}),t.jsx(Y,{}),t.jsx(Z,{})]}),t.jsx(Q,{})]})};export{de as default};
