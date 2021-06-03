import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido al portal de compras"/>
    </div>
      
  );
}

export default App;
