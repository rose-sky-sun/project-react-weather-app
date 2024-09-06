import logo from './logo.svg';
import './App.css';
import SearchWeather from './SearchWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather<img src={logo} className="App-logo" alt="logo" />Forecast</h1>
      </header>
      <SearchWeather />
    </div>
  );
}

export default App;
