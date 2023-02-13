import React, { createContext, useContext } from 'react';

import GlobalStyles from '../styles/GlobalStyles';
import theme from '../theme';

export const ThemeContext = createContext<typeof theme | null>(null);

export const ThemeConsumer = ThemeContext.Consumer;

interface ThemeProviderProps extends React.PropsWithChildren {
  value: typeof theme;
}

export const ThemeProvider = ({ value = theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={value}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
