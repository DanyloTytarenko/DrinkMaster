import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-right: 100px;
    padding-bottom: 28px;
    padding-left: 100px;
    align-items: center;
  }
`;

export const HeaderWrap = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  /* min-width: 375px; */

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
