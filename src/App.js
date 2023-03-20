import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <a
          className="App-link"
          href="https://github.com/laumo15/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on GitHub
        </a>
      </header>
    </div>
  )
}

export default App;
