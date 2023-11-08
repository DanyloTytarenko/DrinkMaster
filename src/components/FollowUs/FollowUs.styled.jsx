import styled from 'styled-components';
import { colors } from '../../colors';
export const FollowIconsList = styled.ul`
  display: flex;
  column-gap: 14px;
  `;

export const FollowIcon = styled.li``;

export const FollowIconLink = styled.a`
  display: inline-flex;
  padding: 7px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({ theme }) =>
    theme === 'dark' ?
    `border: 1px solid rgba(243, 243, 243, 0.20);` : `border:1px solid  rgba(10, 10, 17, 0.50);`}

  transition: border-color 250ms ease;

  &:hover,
  &:focus {
    border-color: rgba(243, 243, 243, 0.50);
  } 
`;

export const IconSvg = styled.svg`
  width: 22px;
  height: 22px;
${({ theme }) =>
    theme === 'dark' ?
    ` fill: ${colors.light};` : `fill: ${colors. primaryDark};`}
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
