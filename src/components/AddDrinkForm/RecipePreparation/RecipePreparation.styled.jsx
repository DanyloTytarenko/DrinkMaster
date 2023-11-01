import styled from '@emotion/styled';

export const Div = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`;

export const Textarea = styled.textarea`
  padding: 16px 18px;
  width: 90%;
  text-transform: capitalize;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.5);
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 14px;
`;

export const Span = styled.span`
  margin-left: 18px;
  position: absolute;
  top: 38px;
  font-size: 14px;
  line-height: calc(18 / 14);
  letter-spacing: 0;
  color: rgba(243, 243, 243, 0.5);
`;

export const ErrorText = styled.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
`;
export const ErrorIcon = styled.span`
  margin-left: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 10px;
  height: 10px;
  border: 1px solid #da1414;
  border-radius: 50%;
`;
