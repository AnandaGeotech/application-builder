import { useState, useEffect } from 'react';
import { BiMoon } from 'react-icons/bi';
import { CiLight } from 'react-icons/ci';
import { THEME_OPTIONS } from '../constants/common.constant';
import { Button } from './Button';
import { TTheme } from '@/common/types/common.type';

export default function ThemeProvider() {
  const systemTheme: TTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_OPTIONS.DARK
    : THEME_OPTIONS.LIGHT;

  const [theme, setTheme] = useState<TTheme>((localStorage.getItem('theme') as TTheme) || systemTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === THEME_OPTIONS.DARK) {
      root.classList.add(THEME_OPTIONS.DARK);
    } else {
      root.classList.remove(THEME_OPTIONS.DARK);
    }
    localStorage.setItem('theme', theme); // Save the theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === THEME_OPTIONS.DARK ? THEME_OPTIONS.LIGHT : THEME_OPTIONS.DARK);
  };

  return (
    <Button onClick={toggleTheme} className=" px-4 py-2 border-0">
      {theme === THEME_OPTIONS.DARK ? <CiLight /> : <BiMoon color="#000" />}
    </Button>
  );
}
