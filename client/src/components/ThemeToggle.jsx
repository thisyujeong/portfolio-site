import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeToggleContainer } from './ThemeToggle.style';
import { useTheme } from '../context/themeProvider';

function ThemeToggle({ chidren }) {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <ThemeToggleContainer onClick={toggleTheme} mode={ThemeMode}>
      <button className="theme">
        {ThemeMode === 'dark' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </ThemeToggleContainer>
  );
}

export default ThemeToggle;
