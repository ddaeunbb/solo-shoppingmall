import { FC } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { ThemeButtonContainer, ThemeButtonImage } from './ThemeButton.styled';
import Dark from '../../assets/theme/dark.png'
import Light from '../../assets/theme/light.png'

const LOCAL_THEME = 'LOCAL_THEME';
const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;


const ThemeButton : FC = () => {
  const [theme, setTheme] = useState<string>(THEME.LIGHT);

  useLayoutEffect(() => {
    setTheme(localStorage.getItem(LOCAL_THEME) || THEME.LIGHT);
    if (theme === THEME.DARK) {
      document.querySelector('html')?.classList.add(THEME.DARK);
    }
  }, []);

  const toggleTheme = () => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;

    const enabledDarkMode = htmlEl.classList.contains(THEME.DARK);
    if (enabledDarkMode) {
      htmlEl.classList.remove(THEME.DARK);
      localStorage.removeItem(LOCAL_THEME);
      setTheme(THEME.LIGHT)
    } else {
      htmlEl.classList.add(THEME.DARK);
      localStorage.setItem(LOCAL_THEME, THEME.DARK);
      setTheme(THEME.DARK);
    }
  };

  return (
    <ThemeButtonContainer onClick={toggleTheme}>
      <ThemeButtonImage src={theme === 'light' ? Dark : Light}/>
    </ThemeButtonContainer>
  );
}

export default ThemeButton;