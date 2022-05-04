import NavBar from '../src/components/navBar/navBar.js';
import './App.css';
import Container from './components/itemListContainer/Container.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container saludo = {'CONTENEDOR'}/>
    </div>
  );
}

export default App;
