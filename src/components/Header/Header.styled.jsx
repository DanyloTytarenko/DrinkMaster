import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  padding-right: 100px;
  padding-bottom: 28px;
  padding-left: 100px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgba(243, 243, 243, 0.20);
  }
`;



