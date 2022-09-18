import GameContainer from './components/GameContainer';
import './App.css';
import Header from './components/Header';
import Level from './components/Level';

function App() {
  return (
    <div className="App">
    <div>
    <Header/>
    <Level level="1"/>
    </div>


    <GameContainer/>
    </div>
  );
}

export default App;
