import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRouter from './routes';
import { DeclarationProvider } from './shareds/contexts/declarationContext';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <DeclarationProvider>
      <AppRouter />    
    </DeclarationProvider>    
  </React.StrictMode>
);


