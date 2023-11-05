import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(243, 243, 243, 0.20);

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
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
