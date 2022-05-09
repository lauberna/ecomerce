import NavBar from '../src/components/navBar/navBar.js';
import './App.css';
import Container from './components/itemListContainer/Container.js';
import Item from './components/itemListContainer/item.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container/>
    </div>
  );
}

export default App;
