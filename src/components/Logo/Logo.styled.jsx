import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../colors';

export const StyledLogoLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
`;

export const LogoSvg = styled.svg`
  width: 22px;
  height: 22px;
  margin-right: 8px;
${({ theme }) =>
    theme === 'dark' ?
    ` fill: ${colors.light};` : ` fill: ${colors.secondaryDark};`}
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    margin-right: 14px;
  }
`;

export const LogoText = styled.h3`
${({ theme }) =>
    theme === 'dark' ?
    ` color: ${colors.light};` : `color: ${colors.secondaryDark};`}

  font-size: 16px;
  font-weight: 600;
  line-height: 18px; 
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px; 
  }
`;




