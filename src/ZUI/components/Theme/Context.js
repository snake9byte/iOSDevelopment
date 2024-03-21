import { createContext, useContext, useState } from "react";
import { core } from "./coreTheme";

export const Theme = createContext({theme: core});

export const ThemeProvider = ({ theme, children }) => {
  const currentTheme = useTheme(theme);
  return (
    <Theme.Provider value={ currentTheme }>
      {children}
    </Theme.Provider>
  )
};

export const useThemeContext = () => useContext(Theme);

const useTheme = userTheme => {
  const [theme, setTheme] = useState(userTheme || core);

  const setNewTheme = (theme, callback) => {
    setTheme(theme);
    if (callback) callback();
  }

  return { theme, setNewTheme };
}