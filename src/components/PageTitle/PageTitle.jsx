import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};

  @media screen and(min-width: 1440px) {
    font-size: 56px;
    line-height: 60px;
  }

  @media screen and(min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const PageTitle = ({ title, theme }) => {
  return <Title theme={theme}>{title}</Title>;
};

export default PageTitle;
