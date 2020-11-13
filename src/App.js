import logo from './logo.svg';
import './App.css';

const element = <div>This is JSX</div>

function greeting(name) {
  if(name == "Pengsu") {
    return "Hello " + name;
  } else {
    return "Hello Guest";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!

          { element }
          <h1>
            { greeting("Pengsu") }
          </h1>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
