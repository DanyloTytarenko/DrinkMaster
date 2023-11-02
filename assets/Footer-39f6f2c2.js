import{j as s,Z as M,$ as b,a0 as B,a1 as H,a2 as r,a3 as I,a4 as S,a5 as W,a6 as T,o as F,a7 as f,a8 as D,a9 as O,aa as V,ab as Z,r as i,ac as E,ad as A,ae as l,af as N,ag as $,ah as u,ai as U,aj as _,ak as w,al as P,am as R,an as z,ao as G,ap as q,aq as J,ar as K,as as Q,at as X,au as Y,av as s1,aw as e1,ax as a,ay as n1,az as c,aA as d,aB as h,aC as r1,aD as t1,aE as i1,aF as o1,aG as l1,aH as a1,aI as c1}from"./index-3bd5e235.js";import{u as d1}from"./useDispatch-c31e1ece.js";const k=()=>s.jsxs(M,{to:"/home",children:[s.jsx(b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",children:s.jsx("path",{d:"M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z",fill:"#F3F3F3"})}),s.jsx(B,{children:"Drink Master"})]}),h1=()=>s.jsxs(H,{children:[s.jsx(r,{to:"/home",children:"Home"}),s.jsx(r,{to:"/drinks",children:"Drinks"}),s.jsx(r,{to:"/add",children:"Add drink"}),s.jsx(r,{to:"/my",children:"My drinks"}),s.jsx(r,{to:"/favorites",children:"Favorites"})]}),x1=()=>s.jsxs(I,{children:[s.jsx(S,{type:"checkbox",id:"toggler"}),s.jsx(W,{htmlFor:"toggler"}),s.jsx(T,{})]}),j1=()=>{const n=F(f);return s.jsxs(D,{children:[s.jsx(O,{children:s.jsxs(V,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",fill:"none",children:[s.jsxs("g",{clipPath:"url(#clip0_220_1244)",children:[s.jsx("rect",{width:"100",height:"100",rx:"50",fill:"#F3F3F3",fillOpacity:"0.952941"}),s.jsx("circle",{cx:"50.6394",cy:"47.8557",r:"15.8557",fill:"#939FC0"}),s.jsx("path",{d:"M89 101.688C89 96.5668 87.9912 91.4954 86.0313 86.7637C84.0714 82.032 81.1986 77.7327 77.5772 74.1112C73.9557 70.4897 69.6563 67.617 64.9247 65.657C60.193 63.6971 55.1216 62.6883 50 62.6883C44.8784 62.6883 39.807 63.6971 35.0753 65.657C30.3436 67.617 26.0443 70.4897 22.4228 74.1112C18.8013 77.7327 15.9286 82.032 13.9687 86.7637C12.0088 91.4954 11 96.5668 11 101.688L50 101.688H89Z",fill:"#939FC0"})]}),s.jsx("defs",{children:s.jsx("clipPath",{id:"clip0_220_1244",children:s.jsx("rect",{width:"100",height:"100",rx:"50",fill:"white"})})})]})}),s.jsx(Z,{children:n.name})]})},g1=()=>{const[n,t]=i.useState(!1),e=()=>{t(!n)};return s.jsxs(E,{children:[s.jsxs(A,{onClick:e,children:[s.jsx(l,{}),s.jsx(l,{}),s.jsx(l,{}),s.jsx(l,{})]}),s.jsxs(N,{open:n,children:[s.jsx(r,{to:"/home",onClick:e,children:"Home"}),s.jsx(r,{to:"/drinks",onClick:e,children:"Drinks"}),s.jsx(r,{to:"/add",onClick:e,children:"Add drink"}),s.jsx(r,{to:"/my",onClick:e,children:"My drinks"}),s.jsx(r,{to:"/favorites",onClick:e,children:"Favorites"})]})]})},o="/DrinkMaster/assets/sprite-062e31f9.svg",C1=()=>{const[n,t]=i.useState(!1),[e,x]=i.useState(!1),[j,g]=i.useState(!1),v=d1(),m=F(f),L=()=>{t(!n)},y=()=>{g(!j)},C=()=>{x(!e)},p=()=>{x(!1),g(!1),t(!1)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:L,children:s.jsx(j1,{})}),s.jsx($,{open:n,children:e?s.jsxs(s.Fragment,{children:[s.jsx(u,{onClick:p,children:s.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${o}#icon-close`})})}),s.jsx(U,{children:"Are you sure you want to log out?"}),s.jsxs(_,{children:[s.jsx(w,{type:"button",onClick:()=>v(P()),children:"Log out"}),s.jsx(R,{type:"button",onClick:C,children:"Cancel"})]})]}):j?s.jsxs(s.Fragment,{children:[s.jsx(u,{onClick:p,children:s.jsx("svg",{width:"18px",height:"18px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${o}#icon-close`})})}),s.jsxs(z,{children:[s.jsxs(G,{children:[s.jsx(q,{children:s.jsx("svg",{width:"100px",height:"100px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${o}#icon-user`})})}),s.jsx(J,{children:s.jsx("svg",{width:"34px",height:"34px",children:s.jsx("use",{href:`${o}#icon-add`})})})]}),s.jsx(K,{type:"text"}),s.jsx(Q,{type:"text",value:m.name}),s.jsx(X,{type:"submit",children:"Save changes"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs(Y,{onClick:y,children:[s.jsx("span",{children:"Edit profile"}),s.jsx("svg",{width:"14px",height:"14px",stroke:"#F3F3F3",children:s.jsx("use",{href:`${o}#icon-edit`})})]}),s.jsx(w,{type:"button",onClick:C,children:"Log out"})]})})]})},f1=()=>{const[n,t]=i.useState(window.innerWidth),e=()=>{t(window.innerWidth)};return i.useEffect(()=>(window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}),[]),s.jsxs(s1,{children:[s.jsx(k,{}),n>=1440&&s.jsx(h1,{}),s.jsx(x1,{}),s.jsx(C1,{}),n<1440&&s.jsx(g1,{})]})},p1=()=>s.jsxs(e1,{children:[s.jsx(a,{to:"/drinks",children:"Drinks"}),s.jsx(a,{to:"/add",children:"Add drink"}),s.jsx(a,{to:"/my",children:"My drinks"}),s.jsx(a,{to:"/favorites",children:"Favorites drinks"})]}),u1=()=>s.jsxs(n1,{children:[s.jsx(c,{children:s.jsx(d,{href:"https://www.facebook.com/goITclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",children:s.jsx("path",{d:"M17.0804 4.06011C17.2904 4.06011 17.5004 4.06011 17.9204 4.06011V7.21011C17.7104 7.21011 17.2904 7.21011 16.8704 7.21011C16.4504 7.21011 16.0304 7.21011 15.8204 7.42011C15.6104 7.63011 15.6104 7.84011 15.6104 8.33011C15.6104 8.75011 15.6104 9.03011 15.6104 9.45011H17.9204V12.1101H15.6104V23.6601H12.0404V12.0401H10.1504V9.38011H12.0404V8.47011C12.0404 6.93011 12.2504 5.81011 12.6704 5.32011C13.3004 4.41011 14.5604 3.99011 16.4504 3.99011C16.6604 4.06011 16.8704 4.06011 17.0804 4.06011Z",fill:"#F3F3F3"})})})}),s.jsx(c,{children:s.jsx(d,{href:"https://www.instagram.com/goitclub/",target:"_blank",rel:"noopener noreferrer",children:s.jsx(h,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",children:s.jsxs("g",{opacity:"0.8",children:[s.jsx("path",{d:"M25.1277 9.41152C25.114 8.47146 24.9398 7.53885 24.6065 6.65964C24.0231 5.15827 22.8352 3.97109 21.3313 3.38991C20.4618 3.06332 19.5426 2.88822 18.6122 2.86835C17.4155 2.81495 17.0361 2.80005 13.9986 2.80005C10.961 2.80005 10.5716 2.80005 9.38372 2.86835C8.45454 2.88822 7.5353 3.06332 6.66582 3.38991C5.16196 3.97109 3.97279 5.15827 3.39065 6.65964C3.06351 7.52767 2.88688 8.44538 2.86946 9.37302C2.81598 10.5689 2.7998 10.9477 2.7998 13.9802C2.7998 17.0127 2.7998 17.4002 2.86946 18.5873C2.88812 19.5162 3.06351 20.4327 3.39065 21.3032C3.97404 22.8033 5.16195 23.9905 6.66706 24.5717C7.53281 24.9095 8.45205 25.1007 9.38497 25.1305C10.5828 25.1839 10.9622 25.2001 13.9998 25.2001C17.0374 25.2001 17.4267 25.2001 18.6146 25.1305C19.5438 25.1119 20.4631 24.9368 21.3338 24.6102C22.8377 24.0278 24.0256 22.8406 24.609 21.3405C24.9361 20.4712 25.1115 19.5547 25.1301 18.6246C25.1836 17.43 25.1998 17.0512 25.1998 14.0174C25.1973 10.9849 25.1973 10.5999 25.1277 9.41152ZM13.9911 19.7149C10.8142 19.7149 8.24059 17.1456 8.24059 13.974C8.24059 10.8024 10.8142 8.23302 13.9911 8.23302C17.1655 8.23302 19.7416 10.8024 19.7416 13.974C19.7416 17.1456 17.1655 19.7149 13.9911 19.7149ZM19.9705 9.35936C19.2279 9.35936 18.6296 8.7608 18.6296 8.02067C18.6296 7.28055 19.2279 6.68199 19.9705 6.68199C20.7106 6.68199 21.3102 7.28055 21.3102 8.02067C21.3102 8.7608 20.7106 9.35936 19.9705 9.35936Z",fill:"#F3F3F3"}),s.jsx("path",{d:"M13.9928 17.4789C15.9277 17.4789 17.4963 15.9104 17.4963 13.9754C17.4963 12.0405 15.9277 10.4719 13.9928 10.4719C12.0578 10.4719 10.4893 12.0405 10.4893 13.9754C10.4893 15.9104 12.0578 17.4789 13.9928 17.4789Z",fill:"#F3F3F3"})]})})})}),s.jsx(c,{children:s.jsx(d,{href:"https://www.youtube.com/c/GoIT",target:"_blank",rel:"noopener noreferrer",children:s.jsx(h,{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:s.jsx("g",{opacity:"0.8",children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.2103 5.24986C20.0203 5.17986 17.5704 5.10986 13.8604 5.10986H13.3703C9.80034 5.10986 7.42038 5.17986 6.23038 5.31986C4.62038 5.45986 3.50034 5.87986 2.87034 6.43986C2.31034 6.92986 1.89036 7.83986 1.75036 9.02986C1.68036 9.79986 1.61035 11.4099 1.61035 13.8599V14.2099C1.61035 16.5199 1.68034 18.1299 1.82034 18.8999C2.03034 20.0199 2.38038 20.8599 3.08038 21.3499C3.78038 21.9099 4.97036 22.2599 6.65036 22.3999C7.84036 22.4699 10.2904 22.5399 14.0004 22.5399H14.4904C18.0604 22.5399 20.4404 22.4699 21.6304 22.3299C23.2404 22.1899 24.3604 21.7699 24.9904 21.2099C25.5504 20.7199 25.9703 19.8099 26.1103 18.6199C26.1803 17.8499 26.2504 16.2399 26.2504 13.7899V13.4399C26.2504 11.1299 26.1804 9.51986 26.0404 8.74986C25.8304 7.62986 25.4804 6.78986 24.7804 6.29986C24.0804 5.73986 22.8903 5.38986 21.2103 5.24986ZM18.4804 13.8599L10.7804 18.4799V9.23986L18.4804 13.8599Z",fill:"#F3F3F3"})})})})})]}),k1=()=>s.jsxs(r1,{children:[s.jsxs(t1,{children:[s.jsxs(i1,{children:[s.jsxs(o1,{children:[s.jsx(k,{}),s.jsx(u1,{})]}),s.jsx(p1,{})]}),s.jsx(l1,{})]}),s.jsx(a1,{children:s.jsx(c1,{children:"©2023 Drink Master. All rights reserved."})})]});export{k1 as F,f1 as H};
