import './App.css';
import React, {createContext} from 'react'
import AppRouter from './routers/AppRouter'
export const DataContext = createContext();


function App() {
  return (
    <div>
      <DataContext.Provider value='Datos por context'>
        <AppRouter />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
