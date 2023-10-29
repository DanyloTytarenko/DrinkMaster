import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 80px;
`;

export const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: calc(32 / 28);
  letter-spacing: 0;
  color: #f3f3f3;
`;

export const DivIncrement = styled.div`
  padding: 10px 16px;
  display: flex;
  gap: 16px;
  line-height: calc(18 / 14);
  align-items: center;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`;

export const Button = styled.button`
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`;
export const ButtonIncr = styled.button`
  font-size: 20px;
  letter-spacing: -0.05em;
  line-height: calc(18 / 14);
  border: none;
  background-color: inherit;
  color: rgba(243, 243, 243, 0.3);
`;

export const SpanIncrement = styled.span`
  color: #f3f3f3;
  font-size: 14px;
  line-height: calc(18 / 14);
`;

export const List = styled.ul`
  display: flex;
  gap: 18px;
  flex-direction: column;
  list-style: none;
`;
