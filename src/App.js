import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

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

          <Clock/>

        </p>
      </header>
    </div>
  );
}

export default App;
