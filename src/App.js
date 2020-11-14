import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import HeaderContainer from './components/HeaderContainer';

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
        <HeaderContainer/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greeting name={ "Pengsu" }/>
          <Clock/>

        </p>
      </header>
    </div>
  );
}

export default App;
