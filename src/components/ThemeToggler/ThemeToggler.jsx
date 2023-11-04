import { TogglerBtn, ThemeToggle } from './ThemeToggler.styled';
import { useState } from 'react';
const ThemeToggler = () => {
   const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <ThemeToggle theme={theme}>
      <TogglerBtn onClick={toggleTheme} theme={theme}></TogglerBtn>
    </ThemeToggle>
  )
}

export default ThemeToggler;