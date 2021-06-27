import './App.css';
import React from 'react'
import AppRouter from './routers/AppRouter'
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <div>
      <CartProvider>
        <AppRouter />
      </CartProvider>

    </div>
  );
}

export default App;
