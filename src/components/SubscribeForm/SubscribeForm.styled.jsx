import styled from 'styled-components';
import { colors } from '../../colors';

export const Form = styled.form`
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 209px;
  }
`;

export const SubscribeFormInput = styled.input`
  width: 331px;
  border-radius: 200px;
  border: 1px solid ${colors.disabled};
  background: ${colors.primaryDark};
  color: ${colors.light};

  font-size: 14px;
  font-weight: 400;
  line-height: 18px; 

  padding-top: 16px;
  padding-right: 0px;
  padding-bottom: 18px;
  margin-bottom: 17px;
  text-indent: 22px;

  @media screen and (min-width: 768px) {
    width: 305px;
    font-size: 17px;
    line-height: 156%;
    padding-top: 13.5px;
    padding-bottom: 14px;
  }
`;

export const SubscribeButton = styled.button`
  width: 335px;
  border-radius: 200px;
  border: 1px solid ${colors.disabled};
  background: ${colors.primaryDark};
  color: ${colors.light};
  padding-top: 17px;
  padding-right: 127px;
  padding-bottom: 17px;
  padding-left: 128px;

  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px; 

  @media screen and (min-width: 768px) {
    width: 309px;
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

export const SubscribeFormLabel = styled.label`
`;


