import logo from './logo.svg';
import './App.css';
import Tiles from './components/Tiles';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Tic-tac-toe
        </p>
        <br></br>
        <Tiles></Tiles>
        <br></br>

    
      </header>
    </div>
  );
}

export default App;
