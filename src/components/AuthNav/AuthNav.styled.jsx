import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthLink = styled(Link)`
  margin-right: 14px;
  padding: 14px 40px;

  font-weight: 600;
  line-height: 18px;

  color: #161f37;
  border-radius: 42px;
  background: #f3f3f3;

  &:hover{
    color: #f3f3f3;
    background: #161F37;
  }
`;

export const Singin = styled(AuthLink)`
  margin-right: 0;

  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover{
    color: #161f37;
    background: #F3F3F3;
  }
`;
