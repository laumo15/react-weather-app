import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            className="App-link"
            href="https://portfolio-building-project.netlify.app/work.html" target="_blank" rel="noreferrer"
          >
            Laura Morelli
          </a>{" "}
          and is open sourced on {" "}
          <a
            className="App-link"
            href="https://github.com/laumo15/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </header>
    </div>
  )
}

export default App;
