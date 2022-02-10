//import './App.css';
import Room from './Room.js';
import Header from './Header.js';
import Flatmate from './Flatmate.js';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import { useEffect } from 'react';

export default function App() {
  const [rooms, updateRooms] = useImmer([
    {
      text: 'Küche',
      description: 'Herdplatten nicht vergessen!',
      isClean: true,
    },
    {
      text: 'Wohnzimmer',
      description: 'Staubwischen auch auf dem Fensterbrett',
      isClean: true,
    },
    {
      text: 'Bad',
      description: 'Eigener Lappen für das Klo!',
      isClean: false,
    },
  ]);

  const [flatmates, updateFlatmates] = useImmer([]);
  const [hasError, updateHasError] = useImmer(false);

  useEffect(() => {
    loadFlatmates();
  }, []);

  async function loadFlatmates() {
    try {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?page=2'
      );
      if (response.ok) {
        const data = await response.json();
        updateFlatmates(data.results);
      } else {
        throw new Error('404 - not found');
      }
    } catch (error) {
      updateHasError(true);
    }
  }

  console.log(flatmates.slice(0, 3));

  return (
    <AppContainer>
      {hasError && <p>Error: 404 - not found</p>}
      <Header>Happy Cleaning</Header>
      {rooms.map(({ text, description, isClean }, index) => (
        <Room
          key={text}
          text={text}
          description={description}
          isClean={isClean}
          toggleStatus={event => {
            event.stopPropagation();

            updateRooms(draft => {
              draft[index].isClean = !isClean;
            });
          }}
        />
      ))}
      {flatmates.slice(0, 3).map(({ name, id }) => (
        <Flatmate key={id} name={name} />
      ))}
    </AppContainer>
  );
}

const AppContainer = styled.main`
  display: grid;
  gap: 20px;
`;
