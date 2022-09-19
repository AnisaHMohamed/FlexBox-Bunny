import GameContainer from './components/GameContainer';
import './App.css';
import Level from './components/Level';

function App() {
  return (
    <div className="App">
    <Level level="1"/>
    <GameContainer/>
    </div>
  );
}

export default App;
