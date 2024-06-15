import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CartContextProvider from './context/CartContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  // </React.StrictMode>,
)
