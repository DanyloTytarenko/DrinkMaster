import styled from '@emotion/styled';
import example from '../../images/any-cocktail.jpg';

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #0a0a11; */
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 60px;
    padding-bottom: 140px;
  }
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 160px;
    max-width: 1440px;
  }
`;

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
  color: #ffffff;
  // text-shadow:
  //   0 0 5px #00baff,
  //   0 0 10px #00baff,
  //   0 0 20px #00baff,
  //   0 0 40px #00baff,
  //   0 0 80px #00baff;
`;

export const Description = styled.div`
  color: #ffffff;
`;

export const Button = styled.button`
  color: #000000;
  border-radius: 42px;
  padding: 14px 40px;
`;
