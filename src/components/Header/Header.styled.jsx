import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  // width: 100%;
  border-bottom: 1px solid rgba(243, 243, 243, 0.20);

  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 100px;
    align-items: center;
  }
`;



