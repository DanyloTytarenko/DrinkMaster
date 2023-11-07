import styled from 'styled-components';

export const ErrorContainer = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  /* width: 100%; */
  padding-top: 188px;
  padding-bottom: 260px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 200px;
    padding-bottom: 170px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 140px;
  }
`;
export const ErrorWrapper = styled.div`
  width: 241px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 301px;
  }
  @media (min-width: 1440px) {
    width: 402px;
  }
`;
export const StyledFirstSymbol = styled.span`
  position: absolute;
  color: rgba(243, 243, 243, 0.1);
  font-family: Manrope;
  font-size: 120px;
  font-weight: 600;
  line-height: 1.03;
  left: 0;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 0.82;
  }
  @media (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;

export const StyledSecondSymbol = styled.span`
  position: absolute;
  color: rgba(243, 243, 243, 0.1);
  font-family: Manrope;
  font-size: 120px;
  font-weight: 600;
  line-height: 1.03;
  right: 0;
  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 0.82;
  }
  @media (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;

export const StyledBGElement2 = styled.div`
  position: absolute;
  background-color: rgba(64, 112, 205, 0.5);
  filter: blur(105px);
  z-index: -10;
  width: 520px;
  height: 550px;
  top: -52px;
  right: 254px;

  @media screen and (min-width: 768px) {
    width: 784px;
    height: 830px;
    top: -65px;
    right: 607px;
  }

  @media screen and (min-width: 1440px) {
    width: 784px;
    height: 849px;
    top: -64px;
    right: 1346px;
  }
`;
