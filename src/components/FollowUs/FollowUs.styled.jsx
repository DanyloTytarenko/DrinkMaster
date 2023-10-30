import styled from 'styled-components';

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
  border: 1px solid rgba(243, 243, 243, 0.20);
`;

export const IconSvg = styled.svg`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
