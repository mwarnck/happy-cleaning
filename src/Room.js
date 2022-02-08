import './Room.css';
import styled from 'styled-components';

export default function Room({
  text,
  isClean,
  description,
  isDescriptionVisable,
}) {
  const statusClassName = isClean
    ? 'Room__status Room__status--clean'
    : 'Room__status Room__status--dirty';
  return (
    <RoomContainer>
      <header>
        {text} <div className={statusClassName}></div>
      </header>
      <p hidden={!isDescriptionVisable}>{description}</p>
    </RoomContainer>
  );
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
