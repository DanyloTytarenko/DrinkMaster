// import styled from '@emotion/styled';
import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 500px;
// `;

export const DrinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0a0a11;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1440px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
