//import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import styled from 'styled-components';

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
    <AppContainer>
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
    </AppContainer>
  );
}

const AppContainer = styled.main`
  display: grid;
  gap: 20px;
`;
