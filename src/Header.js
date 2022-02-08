//import './Header.css';
import styled from 'styled-components';

export default function Header({ children }) {
  return <Heading>{children}</Heading>;
}

const Heading = styled.header`
  text-align: center;
  padding: 20px;
`;
