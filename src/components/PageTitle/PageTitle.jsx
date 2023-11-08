import styled from 'styled-components';

const Title = styled.h1`
  max-width: 335px;
  margin-right: auto;
  margin-bottom: ${({ $marginM }) => $marginM};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};

  @media (min-width: 768px) {
    max-width: 641px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media (min-width: 1440px) {
    max-width: 715px;
    font-size: 64px;
    line-height: 1.06;
  }
`;

const PageTitle = ({
  title,
  theme,
  marginMobile,
  marginTablet,
  marginDesktop,
}) => {
  return (
    <Title
      theme={theme}
      $marginM={marginMobile}
      $marginT={marginTablet}
      $marginD={marginDesktop}
    >
      {title}
    </Title>
  );
};

export default PageTitle;
