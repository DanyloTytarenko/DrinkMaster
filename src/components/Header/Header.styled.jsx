import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width:100%;
  border-bottom: 1px solid rgba(243, 243, 243, 0.20);
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



