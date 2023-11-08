import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 18px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* min-width: 375px; */

  /* @media screen and (min-width: 375px) {
    max-width: 375px;
  } */
  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 80px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;

export const FooterContainer = styled.footer`
  /* padding-top: 40px;
  padding-bottom: 18px; */
  border-top: 1px solid rgba(243, 243, 243, 0.2);
width:100%;
  background-color: #0A0A11;
  /* background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.6) 58.58%,
    rgba(0, 0, 0, 0.345172) 78.98%,
    rgba(0, 0, 0, 0) 100%
  ); */

  /* @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 24px;
  } */
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

export const StyledBGElement3 = styled.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: 0;
  width: 784px;
  height: 849px;
  top: 457px;
  left: 205px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: 429px;
    left: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: 343px;
    left: 435px;
  }
`;

export const StyledBGElement4 = styled.div`
  position: absolute;
  background-color: rgba(188, 230, 210, 0.4);
  filter: blur(105px);
  z-index: 0;
  width: 774px;
  height: 762px;
  top: 450px;
  left: -372px;

  @media screen and (min-width: 768px) {
    top: 380px;
    left: -63px;
  }

  @media screen and (min-width: 1440px) {
    top: 341px;
    left: 193px;
  }
`;
