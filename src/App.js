import './App.css';
import Room from './Room.js';
import Header from './Header.js';

export default function App() {
  const rooms = [
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen!',
      isDescriptionVisable: true,
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isDescriptionVisable: true,
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isDescriptionVisable: false,
      isClean: false,
    },
  ];
  return (
    <main className="App">
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isDescriptionVisable, isClean }) => (
        <Room
          key={text}
          text={text}
          description={description}
          isClean={isClean}
          isDescriptionVisable={isDescriptionVisable}
        />
      ))}
    </main>
  );
}
