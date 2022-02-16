//import './Room.css';
import styled from 'styled-components';
import { useState } from 'react';

export default function Room({ text, description, isClean, toggleStatus }) {
  const [isDescriptionVisable, setIsDescriptionVisable] = useState(false);

  return (
    <RoomContainer onClick={toggleDescription}>
      <header>
        <h2>{text}</h2>
        <StatusButton
          onClick={toggleStatus}
          buttonStatus={isClean}
        ></StatusButton>
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

const StatusButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: ${props => (props.buttonStatus ? 'green' : 'crimson')};
`;
