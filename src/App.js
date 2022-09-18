import logo from './bunny.png';
import tree from './lemon_tree.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="pulse" alt="bunny" />
        <img  src={tree} className="pulse" alt="lemon tree"></img>
      
      </header>
    </div>
  );
}

export default App;
