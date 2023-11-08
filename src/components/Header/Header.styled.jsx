import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
    ${({ theme }) =>
    theme === 'dark' ?
    `border-bottom: 1px solid rgba(243, 243, 243, 0.2); ` : `border-bottom: 1px solid rgba(22, 31, 55, 0.10);`}
  
  @media screen and (min-width: 768px) {
    padding: 23px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-bottom: 28px;
    align-items: center;
  }
`;
