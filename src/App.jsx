import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import ItemCounter from './components/ItemCounter';
function App() {
  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Bienvenido a la tienda'/>
      <ItemCounter></ItemCounter>
    </div>
  )
}

export default App