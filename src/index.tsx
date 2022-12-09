import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
import "./custom.scss"
import { DeclarationProvider } from './shareds/contexts/declarationContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  

    <DeclarationProvider>
      <AppRouter />    
    </DeclarationProvider>    

    
  
);


