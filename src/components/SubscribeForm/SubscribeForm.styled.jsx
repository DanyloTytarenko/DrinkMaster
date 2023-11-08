import styled from 'styled-components';
import { colors } from '../../colors';

export const Form = styled.form`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 309px;
  }
`;

export const SubscribeFormInput = styled.input`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${colors.light};

  font-size: 14px;
  font-weight: 400;
  line-height: 18px; 

  padding-top: 16px;
  padding-right: 0px;
  padding-bottom: 18px;
  margin-bottom: 17px;
  text-indent: 22px;

  transition: border-color 250ms ease;
  outline: none; 

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
  }

  &.error {
    margin-bottom: 0;
    border-color: rgba(218, 20, 20, 0.50);
    background-image: url('src/components/SubscribeForm/ic_baseline-error-outline.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }

  &.valid {
    margin-bottom: 0;
    border-color: rgba(60, 188, 129, 0.50);
    background-image: url('src/components/SubscribeForm/Done.svg');
    background-repeat: no-repeat;
    background-position: right 14px center;
  }
`;

export const SubscribeButton = styled.button`
  width: 100%;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: ${colors.light};
  padding-top: 17px;
  padding-right: 127px;
  padding-bottom: 17px;
  padding-left: 128px;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;

  // transition: transform 250ms ease;

  // &:hover,
  // &:focus {
  //   transform: scale(1.05);
  // }

  &:disabled {
    color: ${colors.disabled};
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
    padding-left: 113px;
  }
`;

export const SubscribeTitle = styled.h3`
  color: ${colors.light};
  width: 335px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 209px;
  }
`;






