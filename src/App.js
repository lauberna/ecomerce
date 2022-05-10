import NavBar from '../src/components/navBar/navBar.js';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"hola soy item list containter"}/>
    </div>
  );
}

export default App;
