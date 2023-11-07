import{j as r,r as n,s as o,c as e}from"./index-43083e3e.js";import{C as a,S as p,b as s}from"./Header-b4d02f1c.js";import{S as d}from"./react-select.esm-d9bfaa4c.js";const g=({children:t})=>r.jsxs(a,{children:[t,r.jsx(p,{}),r.jsx(s,{})]}),f="/DrinkMaster/assets/drink-image-fca35edf.jpg",l=t=>n.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),m=o.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 60px;
  }
  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`,u=o.form`
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
`,b=o.label`
  position: relative;
  display: inline-block;
`,w=o.input`
  box-sizing: border-box;
  width: 335px;
  height: 54px;
  padding: 18px 24px 18px 24px;
  background-color: transparent;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: ${e.light}; //#f3f3f3
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  outline: none;
  box-shadow: none;
  transition: border-color 250ms ease;

  &::placeholder {
    color: ${e.light}; //#f3f3f3
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
`,y=o.button`
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
`,k=o(l)`
  display: block;
  stroke: ${e.light}; //#f3f3f3
`,S=o(d)`
  .react-select__control {
    width: 335px;
    height: 54px;
    padding: 18px 24px 18px 24px;
    background: #161f37;
    border: none;
    outline: none;
    box-shadow: none;
    border-radius: 200px;
    color: ${e.light}; //#f3f3f3
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
    color: ${e.light}; //#f3f3f3
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
    color: ${e.light}; //#f3f3f3
  }

  .react-select__indicator-separator {
    /* border: none; */
    display: none;
  }

  .react-select__dropdown-indicator {
    color: ${e.light}; //#f3f3f3
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
    color: ${e.light}; //#f3f3f3
    width: 160px;
  }
  .react-select__menuList {
    max-height: 60px;
    background-color: ${e.light}; //#f3f3f3
  }

  .react-select__menu-list {
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${e.gray}; //#434d67;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${e.gray}; //#434d67;
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
      color: ${e.light}; //#f3f3f3
      cursor: pointer;
    }
  }
`,_={dropdownIndicator:(t,i)=>({...t,transform:i.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),option:(t,i)=>({...t,color:i.isSelected||i.isFocused?`${e.light}`:"rgba(243, 243, 243, 0.4)"})};export{g as M,m as S,u as a,b,w as c,f as d,y as e,k as f,S as g,_ as h};
