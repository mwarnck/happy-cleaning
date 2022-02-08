import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      <Room
        text="Küche"
        description="Herdplatten nicht vergessen"
        isClean
        isDescriptionVisable
      />
      <Room
        text="Wohnzimmer"
        description="Staubwischen auch auf dem Fensterbrett"
        isDescriptionVisable
      />
      <Room text="Bad" description="Eigener Lappen für das Klo!" />
    </main>
  );
}
