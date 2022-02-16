import styled from 'styled-components';

export default function Navigation({
  showRoomsClick,
  showFlatmatesClick,
  isRoomsVisable,
  isFlatmatesVisable,
}) {
  return (
    <NavigationContainer>
      <RoomButton onClick={showRoomsClick} buttonRoom={isRoomsVisable}>
        Rooms
      </RoomButton>
      <FlatmateButton
        onClick={showFlatmatesClick}
        buttonFlatmate={isFlatmatesVisable}
      >
        Flatmates
      </FlatmateButton>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const RoomButton = styled.button`
  padding: 8px 4px;
  background-color: ${props => (props.buttonRoom ? 'hotpink' : 'gray')};
`;

const FlatmateButton = styled.button`
  padding: 8px 4px;
  background-color: ${props => (props.buttonFlatmate ? 'hotpink' : 'gray')};
`;
