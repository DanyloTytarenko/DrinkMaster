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
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${colors.light};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; 
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.20);
  background: ${colors.primaryDark}; 
  transition: background 0.2s;
  overflow: hidden;

&.active {
    background: ${colors.secondaryDark};
    border: ${colors.primaryDark};
  }

  @media screen and (min-width: 768px) {
    line-height: 22.4px; /* 160% */
  }
`;