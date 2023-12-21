import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes/index.tsx';
import { GlobalStyle } from './styles/Global.tsx';
import { MoviesProvider } from './context/MoviesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <MoviesProvider>
      <Routes />
    </MoviesProvider>
  </React.StrictMode>,
);
