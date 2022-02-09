import './Room.css';
import styled from 'styled-components';
import { useState } from 'react';

export default function Room({ text, description, isClean, toggleStatus }) {
  const [isDescriptionVisable, setIsDescriptionVisable] = useState(false);

  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';
  return (
    <RoomContainer onClick={toggleDescription}>
      <header>
        <h2>{text}</h2>
        <button onClick={toggleStatus} className={statusClassName}></button>
      </header>
      <p hidden={!isDescriptionVisable}>{description}</p>
    </RoomContainer>
  );

  function toggleDescription() {
    setIsDescriptionVisable(!isDescriptionVisable);
  }
}

const RoomContainer = styled.section`
  padding: 12px;
  border: 1px solid #ddd;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
