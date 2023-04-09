import './App.css';
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
        <Weather defaultCity="Milan"/>
        <footer>
          This project was coded by{" "}
          <a
            className="App-link"
            href="https://portfolio-building-project.netlify.app/work.html" target="_blank" rel="noreferrer"
          >
            Laura Morelli
          </a>{" "}
          and is open-sourced on {" "}
          <a
            className="App-link"
            href="https://github.com/laumo15/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </footer>
    </div>
  )
}

export default App;
