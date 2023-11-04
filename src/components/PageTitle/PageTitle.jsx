import styled from 'styled-components';

const Title = styled.h1`
  margin-right: auto;
  margin-bottom: ${({ $marginM }) => $marginM};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  color: ${({ theme }) => (theme === 'light' ? '#0A0A11' : '#F3F3F3')};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${({ $marginT }) => $marginT};
    font-size: 56px;
    line-height: calc(60 / 56);
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: ${({ $marginD }) => $marginD};
    font-size: 64px;
    line-height: calc(68 / 64);
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
