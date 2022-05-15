import logo from "./logo.svg";
import logoKrysto from "./logo_krysto.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoKrysto} className="krysto_logo" alt="" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Le site de Krysto est en cours de construction...</p>
      </header>
      <main></main>
    </div>
  );
}

export default App;
