import { lightTheme, darkTheme } from '../theme/theme';
import { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState('light');
  const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }, [ThemeMode, setThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };
