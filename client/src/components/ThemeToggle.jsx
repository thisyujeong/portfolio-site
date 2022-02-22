import React from 'react';
import { ThemeToggleContainer } from './ThemeToggle.style';
import { useTheme } from '../context/themeProvider';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

function ThemeToggle({ chidren }) {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <ThemeToggleContainer onClick={toggleTheme} mode={ThemeMode}>
      <button className="theme">
        {ThemeMode === 'dark' ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
      </button>
    </ThemeToggleContainer>
  );
}

export default ThemeToggle;
