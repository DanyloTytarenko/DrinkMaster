import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 80px;
`;

export const ImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);
  background-size: cover;
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
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 80%;
  height: 80%;
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
  letter-spacing: -0.02em;
  width: 100%;
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
`;
export const ErrorText = styled.div`
  display: flex;
  height: 14px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
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
`;

export const DivAlcoholic = styled.div`
  display: flex;
  gap: 14px;
  color: #f3f3f3;
  font-size: 14px;
  letter-spacing: -0.02em;
`;
export const RadioInput = styled.input`
  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1.3px solid rgba(243, 243, 243, 0.5);
  margin-right: 4px;
  margin-left: 0;
  position: relative;
  top: 3px;
  // opacity: 0.5;
  :checked {
    box-sizing: content-box;
    width: 10px;
    height: 10px;
    background-color: #f3f3f3;
    border: 3px solid black;
    outline: 1.3px ridge #f3f3f3;
    // opacity: 1;
  }
`;
