import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  max-width: 500px;
`;

export const Item = styled.li`
  padding: 5px;

  &:nth-child(even) {
    background-color: rgba(63, 81, 181, 0.1);
  }

  &:nth-child(odd) {
    background-color: rgba(63, 81, 181, 0.2);
  }
`;

export const StyledLink = styled(Link)`
  color: #3f51b5;
  font-weight: 500;
  text-decoration-line: #3f51b5;

  &:hover {
    color: #13247e;
  }
`;
