import { useSelector } from 'react-redux';
import {
  Container,
  StyledBGElement1,
  StyledBGElement2,
} from './MainAppContainer.styled';
import { selectTheme } from 'src/redux/theme/themeSlice';

const MainAppContainer = ({ children }) => {
  const theme = useSelector(selectTheme);
  return (
    <Container>
      {children}
      <StyledBGElement1 theme={theme} />
      <StyledBGElement2 theme={theme} />
    </Container>
  );
};

export default MainAppContainer;
