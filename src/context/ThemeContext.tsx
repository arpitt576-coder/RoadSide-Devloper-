import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeId, ThemeConfig, THEMES } from '../types/theme';

interface ThemeContextType {
  themeId: ThemeId;
  theme: ThemeConfig;
  setThemeId: (id: ThemeId) => void;
  availableThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeId>('electric-cyan');

  useEffect(() => {
    const saved = localStorage.getItem('roadside_theme') as ThemeId;
    if (saved && THEMES[saved]) {
      setThemeId(saved);
    }
  }, []);

  const handleSetTheme = (id: ThemeId) => {
    setThemeId(id);
    localStorage.setItem('roadside_theme', id);
  };

  const theme = THEMES[themeId] || THEMES['electric-cyan'];
  const availableThemes = Object.values(THEMES);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        theme,
        setThemeId: handleSetTheme,
        availableThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
