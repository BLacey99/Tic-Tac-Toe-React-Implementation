import logo from './logo.svg';
import './App.css';
import Tiles from './components/Tiles';
function App(props) {

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Tic-tac-toe
        </p>
        <h3>Turn of: {props.turn}</h3>
        <br></br>
        <Tiles></Tiles>
        <br></br>

    
      </header>
    </div>
  );
}

export default App;
