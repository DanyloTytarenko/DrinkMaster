import{s as i,c as t,N as e}from"./index-b7a3bda4.js";const o=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${({theme:n})=>n==="dark"?` color: ${t.light};`:`color: ${t.primaryDark};`}
  @media only screen and (min-width: 768px) {
    gap: 80px;
  }
  @media only screen and (min-width: 1440px) {
    width: 313px;
  }
`,r=i.h2`
  @media only screen and (max-width: 767.9px) {
    font-size: 18px;
  }
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 28px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`,s=i.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: ${t.light};
  @media only screen and (min-width: 768px) {
    gap: 32px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 28px;
  }
`,d=i.li`
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`,p=i.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
`,l=i.p`
  margin: 0;
  display: block;
  overflow: hidden;
  ${({theme:n})=>n==="dark"?" color: rgba(243, 243, 243, 0.5);":"color: rgba(10, 10, 17, 0.50);"}
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: calc(20 / 14);
`,c=i.h3`
  margin: 0;
  ${({theme:n})=>n==="dark"?` color: ${t.light};`:`color: ${t.primaryDark};`}
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
`,h=i.div`
  margin-bottom: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1440px) {
    width: 209px;
  }
`,x=i(e)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`;export{x as D,s as L,o as P,r as a,d as b,p as c,h as d,c as e,l as f};
