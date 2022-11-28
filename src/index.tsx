import React from 'react';
import ReactDOM from 'react-dom/client';
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


