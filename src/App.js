import './App.css';
import Room from './Room.js';

function App() {
  return (
    <main className="App">
      <Room text="Küche" isClean />
      <Room text="Wohnzimmer" isClean={false} />
      <Room text="Bad" />
    </main>
  );
}

export default App;
