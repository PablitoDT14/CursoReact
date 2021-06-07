import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import Children from "./components/Children"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido al portal de compras" />
      <Children>
        <h1>Hola React</h1>
      </Children>
    </div>

  );
}

export default App;
