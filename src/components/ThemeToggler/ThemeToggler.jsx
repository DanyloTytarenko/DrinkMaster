import { TogglerBtn, ThemeToggle } from './ThemeToggler.styled';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme, selectTheme } from '../../redux/theme/themeSlice'
const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <ThemeToggle theme={theme}>
      <TogglerBtn onClick={() => dispatch(toggleTheme())} theme={theme}></TogglerBtn>
    </ThemeToggle>
  )
}

export default ThemeToggler;