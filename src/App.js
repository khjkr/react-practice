import logo from './logo.svg';
import './App.css';

// 사용자 정의 컴포넌트
function Greeting(props) {
  return (
    <div>
      <h1>Hello { props.name }</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!

          <Greeting name={ "Pengsu" }/>
          <Greeting name={ "Pengsun" }/>

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
