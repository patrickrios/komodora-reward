import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface ThemeProps{
    lightMode: boolean;
    children?: ReactNode; 
    toggleTheme: () => void;
}

interface ThemeProviderProps{
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({ children } : ThemeProviderProps) => {
  const [lightMode, setLight] = useState(false);

  const toggleTheme = () => {
    localStorage.setItem("lightMode", ""+(!lightMode));
    setLight(prevMode => !prevMode);
  };

  useEffect(()=>{
    const savedTheme = localStorage.getItem("lightMode");
    if( savedTheme)
      setLight((savedTheme === "true"));
    else
      localStorage.setItem("lightMode", ""+lightMode);
    return;
  },[]);

  return (
    <ThemeContext.Provider value={{ lightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };