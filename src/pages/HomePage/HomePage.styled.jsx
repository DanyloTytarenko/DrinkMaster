import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  @media only screen and (min-width: 768px) {
  padding: 120px 32px;
  };
  @media only screen and (min-width: 1440px) {
    padding: 128px 100px;
  }
`;

// export const Title = styled.h1`
//   margin: 0;
//   margin-right: 10px;
//   color: #ffffff;
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
