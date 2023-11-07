import styled from 'styled-components';

export const UserInfoWrap = styled.div`
width: 32px;
height: 32px;
display: flex;
// align-items: center;
// text-align: center;
gap: 7px;
cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    gap: 14px;
    // margin-right: 24px;
    // margin-left: 260px;
  }
  //  @media screen and (min-width: 768px) {
  //   gap: 14px;
  // }
`;

export const UserLogoWrap = styled.div`
display: flex;
  @media screen and (min-width: 768px) {
  // margin-left: 24px;
  }
  
`;

export const UserSvg = styled.svg`
  @media screen and (min-width: 768px) {
  }
`;

export const UserName = styled.p`
color: #F3F3F3;
font-size: 14px;
font-weight: 500;
line-height: 18px;
margin-top: 7px;
// margin-left: 8px; 

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
  // margin-left: 14px; 
  }
`;