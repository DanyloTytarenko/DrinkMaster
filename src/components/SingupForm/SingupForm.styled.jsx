import styled from 'styled-components';

export const Form = styled.form`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: inherit;
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
