import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
    overflow: visible;
  }`;
