import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};

  font-size: 32px;
  line-height: 1.19;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
  }
`;

const PageTitle = ({ title, theme }) => {
  return <Title theme={theme}>{title}</Title>;
};

export default PageTitle;
