import styled from 'styled-components';

export default function Flatmate({ name }) {
  return (
    <MateContainer>
      <header>
        <h2>{name}</h2>
      </header>
    </MateContainer>
  );
}

const MateContainer = styled.section`
  padding: 12px;
  border: 1px solid #ddd;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
