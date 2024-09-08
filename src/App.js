import logo from './logo.svg';
import SearchWeather from './SearchWeather';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <h1>Weather<img src={logo} className="App-logo" alt="logo" />Forecast</h1>
        </header>
        <div className='app-container'>
        <SearchWeather />
        <footer>
          <p>This project is coded with 🩷 by 
            <a href="https://github.com/rose-sky-sun" target='_blank' rel="noreferrer"> LunaFreya Dragonborn </a> is 
            <a href='https://github.com/rose-sky-sun/project-react-weather-app' target='_blank' rel="noreferrer"> open-source on GitHub</a> and
            <a href='https://weatherforecastbyluna.netlify.app' target='_blank' rel="noreferrer"> hosted on Netlify.</a>
          </p>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
