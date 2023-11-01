import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
`;
// background-image: url(${DummyDrinkThumb}); in ImageThumb

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivAddImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  letter-spacing: -0.02em;
  gap: 30px;
  width: 100%;
`;

export const Input = styled.input`
  padding-bottom: 14px;
  background-color: inherit;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  text-transform: capitalize;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  background-color: inherit;
  color: #f3f3f3;
  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
`;

export const SpanSelect = styled.span`
  font-size: 14px;
  font-weight: regular;
  line-height: auto;
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
