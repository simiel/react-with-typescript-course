import React from "react";

const ThemeContext = React.createContext<String>("light");

export default ThemeContext;
export const ThemeConsumer = ThemeContext.Consumer;
export const ThemeProvider = ThemeContext.Provider;
