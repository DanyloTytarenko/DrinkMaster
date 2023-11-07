import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'src/colors';

export const ButtonBox = styled.div`
  display: flex;
  z-index: 2;
`;

export const AuthLink = styled(Link)`
  margin-right: 14px;
  padding: 14px 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);

  color: ${colors.secondaryDark};
  border-radius: 42px;
  background: ${colors.light};

  &:hover {
    color: ${colors.light};
    background: ${colors.secondaryDark};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    color: #161f37;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`;

export const Signin = styled(AuthLink)`
  margin-right: 0;

  color: ${colors.light};
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  &:hover {
    color: ${colors.secondaryDark};
    background: ${colors.light};
  }
`;
