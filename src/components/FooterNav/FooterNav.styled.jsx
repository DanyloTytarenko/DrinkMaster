import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StyledNavigationLink = styled(NavLink)`
  color: ${colors.light};
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  transition: transform 250ms ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  } 
`;

