import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  padding-top: 188px;
  padding-bottom: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 200px;
    padding-bottom: 170px;
  }
  @media (min-width: 1440px) {
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
