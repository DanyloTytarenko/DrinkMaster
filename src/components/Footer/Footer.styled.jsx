import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  padding-right: 20px;
  padding-left: 18px;
  border-top: 1px solid rgba(243, 243, 243, 0.20);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 24px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const MainWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 230px;
  }
`;

export const LogoFollowWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px; 

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const LogoFollowNavWrap = styled.div`
display: flex;
gap: 90px;
margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 411px;
  }
`;

export const AllRightsWrap = styled.div`
`;

export const AllRightsText = styled.p`
color: rgba(243, 243, 243, 0.50);
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.24px;
margin-top: 80px;
`;
