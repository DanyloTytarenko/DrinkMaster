import { TogglerInput, TogglerLabel, TogglerBg, ThemeToggle } from './ThemeToggler.styled';

const ThemeToggler = () => {
  return (
    <ThemeToggle>
      <TogglerInput type="checkbox" id="toggler" />
      <TogglerLabel htmlFor="toggler"></TogglerLabel>
      <TogglerBg></TogglerBg>
    </ThemeToggle>
  )
}

export default ThemeToggler;