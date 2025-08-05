import React from 'react';
import './App.css'
import AppProvider from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { KomodoraReward } from './pages/komodora_presskit/Reward';
import { PortfolioProvider } from './contexts/PortfolioContext';

const  App = () =>{
  return(
    <AppProvider>
      <ThemeProvider>
        <PortfolioProvider>
          <KomodoraReward/>
        </PortfolioProvider>
      </ThemeProvider>
    </AppProvider>
  )
};

export default App;
