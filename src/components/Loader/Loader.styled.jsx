import styled from 'styled-components';
import { colors } from '../../colors';

export const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StyledLoader = styled.span`
  //====bottle==========
  width: 40px;
  height: 98px;
  display: inline-block;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  border: 2px solid ${colors.light};
  box-sizing: border-box;
  color: ${colors.green};
  border-radius: 20px 20px 4px 4px;
  background: ${colors.light};
  animation: fill 2s linear infinite alternate;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -95%);
    border: 2px solid ${colors.light};
    border-bottom: none;
    background: ${colors.light};
    width: 15px;
    height: 35px;
    animation: fillNeck 2s linear infinite alternate;
  }

  @keyframes fill {
    0% {
      box-shadow: 0 0 inset;
    }
    50%,
    100% {
      box-shadow: 0 -98px inset;
    }
  }

  @keyframes fillNeck {
    0%,
    50% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -20px inset;
    }
  }

  //====glass==========
  // width: 32px;
  // height: 72px;
  // display: inline-block;
  // left: 5px;
  // position: relative;
  // border: 2px solid ${colors.light};;
  // box-sizing: border-box;
  // animation: animloader 2s linear infinite alternate;
  // color: ${colors.green};
  // border-radius: 0 0 4px 4px;
  // transform: perspective(140px) rotateX(-45deg);

  // @keyframes animloader {
  //   0% { box-shadow: 0 0 inset; }
  //   100% { box-shadow: 0 -70px inset; } }
`;
