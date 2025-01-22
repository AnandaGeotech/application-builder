import { useState, useEffect } from 'react';
import { BiMoon } from 'react-icons/bi';
import { CiLight } from 'react-icons/ci';
import { Button } from './Button';

export default function ThemeProvider() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button onClick={toggleTheme} className=" text-white px-4 py-2 rounded">
      {theme === 'dark' ? <BiMoon /> : <CiLight />}
    </Button>
  );
}
