import styled from '@emotion/styled';
import { colors } from '../../../colors';
// import example from '../../../image/any-cocktail.jpg';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   //   padding-top: 0px;
//   width: 100%;
//   height: 100vh;
//   background-image: url(${example});
//   background-repeat: no-repeat;
//   //   background-position: left top;
//   //   background-size: 100% 100%;
// `;

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

// export const Container = styled.div`
//   // display: flex;
//   justify-content: center;
//   align-items: center;
//   // padding-top: 500px;
//   background-color: #000000;
// `;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;

export const Glass = styled.p`
  color: ${colors.light};
  color: rgba(243, 243, 243, 0.5);
  margin-bottom: 20px;
  // text-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`;

export const Description = styled.p`
  color: ${colors.light};
  margin-bottom: 40px;
`;

export const Button = styled.button`
  color: #000000;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
`;

export const StyledImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;
