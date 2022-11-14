import './App.css';
import Characters from './components/Characters';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick y Morty</h1>
        <p>
          <Characters/>
        </p>
      </header>
    </div>
  );
}

export default App;
