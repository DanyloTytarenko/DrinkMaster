import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  column-gap: 32px;
  margin-bottom: 80px;
  @media only screen and (min-width: 768px) {
    @media only screen and (min-width: 1440px) {
      column-gap: 40px;
    }
  }
`;

export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
  @media only screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    @media only screen and (min-width: 1440px) {
      width: 400px;
      height: 400px;
    }
  }
`;
// background-image: url(${DummyDrinkThumb}); in ImageThumb

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const DivAddImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
`;

export const LabelTranslucent = styled.label`
  position: relative;
  top: 130px;
  left: 110px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(243, 243, 243, 0.75);
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  background-color: #f3f3f3;
  color: #161f37;
  border-radius: 6px;
  cursor: pointer;
`;
export const HiddenInput = styled.input`
  display: none;
`;

export const SpanAddImage = styled.span`
  font-size: 16px;
  font-weight: medium;
  line-height: 1.25;
  color: #f3f3f3;
`;

export const DivDesription = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  // gap: 30px;
  letter-spacing: -0.02em;
  width: 335px;
  @media only screen and (min-width: 768px) {
    width: 352px;
  }
`;

export const Input = styled.input`
  padding-top: 30px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  text-transform: capitalize;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ErrorText = styled.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    // margin-bottom: 31px;
    height: 18px;
    font-size: 14px;
  }
`;

export const DivSelect = styled.div`
  background-color: inherit;
  color: #f3f3f3;
`;

export const DivFlexSelect = styled.span`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const SpanSelect = styled.span`
  padding-top: 30px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DivAlcoholic = styled.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const RadioInput = styled.input`
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: #f3f3f3;
    border: 3px solid black;
    outline: 1.3px ridge #f3f3f3;
    @media only screen and (min-width: 768px) {
      width: 12px;
      height: 12px;
      border: 3px solid black;
      outline: 2px ridge #f3f3f3;
    }
  }
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid rgba(243, 243, 243, 0.5);
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  @media only screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
