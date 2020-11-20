import { createContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handlerClick = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handlerClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
