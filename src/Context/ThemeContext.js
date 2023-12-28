import { createContext } from "react";
export const ThemeContext = createContext({
  ThemeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

