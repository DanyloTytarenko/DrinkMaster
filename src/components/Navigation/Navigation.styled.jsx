import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const NavigationWrap = styled.nav`
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 16px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-left: 224px;
    margin-right: 191px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
${({ theme }) =>
    theme === 'dark' ?
    ` color: ${colors.light}; background: ${colors.primaryDark}; border: 1px solid rgba(243, 243, 243, 0.20);` : `color: ${colors. primaryDark}; background: ${colors.light}; border: 1px solid rgba(22, 31, 55, 0.20);`}
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; 
  padding: 8px 16px;
  border-radius: 40px;
  transition: background 0.2s;
  overflow: hidden;

  &.active {
    color: ${colors.light};
    background: ${colors.secondaryDark};
    border: ${colors.primaryDark};
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px; 
  }
`;