import styled from 'styled-components';

export const UserInfoWrap = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap: 7px
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
   @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const UserLogoWrap = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
overflow: hidden;
  @media screen and (min-width: 768px) {
  width: 44px;
height:44px;
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
// margin-left: 8px; 

@media screen and (min-width: 768px) {
  font-size: 16px;
  line-height: 24px;
  // margin-left: 14px; 
  }
`;