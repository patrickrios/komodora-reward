import React from 'react';
import './App.css'
import AppProvider from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { KomodoraPresskit } from './pages/komodora_presskit/PressKit';

const  App = () =>{
  return(
    <AppProvider>
      <ThemeProvider>
        <KomodoraPresskit/>
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
