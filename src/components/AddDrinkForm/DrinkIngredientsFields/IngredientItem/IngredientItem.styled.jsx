import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 16px 18px;
  width: 100px;
  background-color: inherit;
  font-size: 14px;
  color: #f3f3f3;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  outline: none;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`;

export const Button = styled.button`
  margin-left: auto;
  font-size: 32px;
  font-weight: 400;
  border: none;
  background-color: inherit;
  color: #f3f3f3;
  transform: rotate(45deg);
`;

export const ErrorText = styled.p`
  margin-left: 18px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 54px;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0;
  color: #da1414;
`;
